import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '../hooks/useLanguage';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: t('lang.english'), flag: '🇺🇸' },
    { code: 'it', label: t('lang.italian'), flag: '🇮🇹' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', (e) => e.key === 'Escape' && setIsOpen(false));
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', (e) => e.key === 'Escape' && setIsOpen(false));
    };
  }, [isOpen]);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/60 border border-gray-600/50 hover:border-[#ff5c33]/40 rounded-lg text-gray-300 hover:text-offWhite transition-all duration-300 text-sm font-medium"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { 
                duration: 0.2, 
                ease: [0.34, 1.56, 0.64, 1] 
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9, 
              y: -10,
              transition: { 
                duration: 0.15, 
                ease: "easeIn" 
              }
            }}
            className="absolute right-0 top-full mt-2 bg-gradient-to-br from-gray-900 to-gray-950 border border-[#ff5c33]/40 rounded-lg shadow-2xl shadow-[#ff5c33]/20 overflow-hidden z-50 min-w-[140px]"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ backgroundColor: 'rgba(255, 92, 51, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#ff5c33]/10 transition-colors duration-200 ${
                  language === lang.code 
                    ? 'text-[#ff5c33] bg-[#ff5c33]/5' 
                    : 'text-gray-300 hover:text-offWhite'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.label}</span>
                {language === lang.code && (
                  <svg className="w-4 h-4 ml-auto text-[#ff5c33]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;