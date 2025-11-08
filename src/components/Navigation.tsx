import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactDropdown from './ContactDropdown';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../hooks/useLanguage';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.about') },
    { path: '/services', label: t('nav.business') },
    { path: '/tourism-solutions', label: t('nav.tourism') },
    { path: '/about-you', label: t('nav.aboutYou') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-panelBg border-b border-gray-800 sticky top-0 z-50 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 overflow-visible">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading gradient-text text-2xl font-bold">{t('general.omniSolutions')}</span>
          </Link>

          {/* Right: Navigation Links + Language + Contact Us */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-base font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-offWhite drop-shadow-lg'
                    : 'text-gray-300 hover:text-offWhite hover:drop-shadow-md'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] shadow-lg shadow-[#ff5c33]/50"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            {/* Language Selector */}
            <LanguageSelector />
            {/* Positioning context for dropdown */}
            <div className="relative">
              <ContactDropdown />
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading gradient-text text-2xl font-bold">{t('general.omniSolutions')}</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-offWhite focus:outline-none relative z-[60]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-4 text-base font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-offWhite border-l-4 border-[#ff2a5f] pl-4 drop-shadow-md'
                    : 'text-gray-300 pl-5 hover:text-offWhite hover:drop-shadow-sm'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-5 space-y-4">
              <LanguageSelector />
              <ContactDropdown />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
