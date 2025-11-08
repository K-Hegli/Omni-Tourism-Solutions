import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.business': 'Business Solutions', 
    'nav.tourism': 'Tourism Solutions',
    'nav.aboutYou': 'About You',
    'nav.contact': 'Contact Us',
    
    // General
    'general.omniSolutions': 'Omni Solutions',
    
    // Contact
    'contact.title': 'Your best partner',
    'contact.subtitle': 'is just one call away',
    'contact.email': 'Email Us',
    'contact.whatsapp': 'WhatsApp',
    'contact.footer': 'Can\'t be impactful if you don\'t grow.',
    
    // Language selector
    'lang.english': 'English',
    'lang.italian': 'Italiano',
  },
  it: {
    // Navigation
    'nav.about': 'Chi Siamo',
    'nav.business': 'Soluzioni Business',
    'nav.tourism': 'Soluzioni Turistiche',
    'nav.aboutYou': 'Su di Te',
    'nav.contact': 'Contattaci',
    
    // General
    'general.omniSolutions': 'Omni Solutions',
    
    // Contact
    'contact.title': 'Il tuo miglior partner',
    'contact.subtitle': 'è a una sola chiamata di distanza',
    'contact.email': 'Scrivici',
    'contact.whatsapp': 'WhatsApp',
    'contact.footer': 'Non si può essere d\'impatto se non si cresce.',
    
    // Language selector
    'lang.english': 'English',
    'lang.italian': 'Italiano',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or default to English
    const saved = localStorage.getItem('omni-language') as Language;
    return saved && ['en', 'it'].includes(saved) ? saved : 'en';
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('omni-language', language);
  }, [language]);

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return React.createElement(LanguageContext.Provider, { value }, children);
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};