import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  const handleCallClick = () => {
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-bold py-2 px-6 rounded-lg text-sm transition-all duration-300 ${
          isOpen ? 'shadow-lg shadow-[#ff5c33]/50' : ''
        }`}
      >
        Contact Us
      </motion.button>

      {/* Dropdown Accordion */}
      <AnimatePresence>
        {isOpen && (
          <>
                {/* Mobile backdrop - click to close */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/40 z-40 md:hidden"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />            {/* Dropdown panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.3,
                  ease: [0.34, 1.56, 0.64, 1], // Spring easing for smooth bounce
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9,
                transition: { duration: 0.2, ease: "easeIn" }
              }}
              className="fixed inset-0 flex items-center justify-center p-4 md:absolute md:top-full md:mt-3 md:left-auto md:right-0 md:translate-x-0 md:inset-auto md:flex-none md:p-0 bg-transparent md:bg-gradient-to-br md:from-gray-900 md:to-gray-950 border-0 md:border md:border-[#ff5c33]/40 rounded-none md:rounded-xl shadow-none md:shadow-2xl md:shadow-[#ff5c33]/20 overflow-hidden z-50"
            >
              {/* Mobile modal content wrapper */}
              <div className="w-full max-w-[420px] bg-gradient-to-br from-gray-900 to-gray-950 border border-[#ff5c33]/40 rounded-xl shadow-2xl shadow-[#ff5c33]/20 overflow-hidden md:w-96 md:max-w-none md:border-0 md:shadow-none md:bg-transparent md:rounded-none relative">
                {/* Mobile close button */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="absolute top-4 right-4 z-10 text-gray-400 hover:text-offWhite transition-colors md:hidden"
                  aria-label="Close contact modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#ff2a5f]/10 to-[#ff5c33]/10 p-8 border-b border-[#ff5c33]/20">
              <h3 className="font-heading text-xl text-offWhite font-bold text-center leading-tight">
                Your best partner<br />
                <span className="text-[#ff5c33]">is just one call away</span>
              </h3>
            </div>

            {/* Contact Options - Two Aligned Buttons */}
            <div className="p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText('operations@omnisolutions.fi');
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-[#ff5c33]/60 text-offWhite font-bold py-4 px-5 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-[#ff5c33]/20"
                >
                  <span className="block mb-2 text-2xl">✉</span>
                  <span className="text-sm">Email Us</span>
                  <span className="block text-xs mt-1 font-normal opacity-90">
                    operations@omnisolutions.fi
                  </span>
                </motion.button>
                <motion.a
                  href="https://wa.me/358406804952"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-bold py-4 px-5 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-[#ff5c33]/50"
                >
                  <span className="block mb-2 text-2xl">💬</span>
                  <span className="text-sm">WhatsApp</span>
                  <span className="block text-xs mt-1 font-normal opacity-90">
                    +358 406804952
                  </span>
                </motion.a>
              </div>
            </div>

            {/* Exclusivity Footer */}
            <div className="bg-black/40 backdrop-blur-sm px-8 py-5 border-t border-[#ff5c33]/10">
              <p className="text-sm text-gray-400 leading-relaxed text-center">
                Can't be impactful if you don't grow.
              </p>
            </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactDropdown;
