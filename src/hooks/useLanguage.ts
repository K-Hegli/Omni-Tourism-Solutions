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
    
    // Home Page (WhoWeAre)
    'home.hero.title': 'Omni Solutions',
    'home.hero.subtitle': 'Strategic technology partnerships for sustainable growth',
    
    // Tourism Solutions Page
    'tourism.hero.title': 'Tourism Solutions',
    'tourism.hero.subtitle': 'Innovative solutions and technology partners for tour operators and facilities.',
    'tourism.cta.main': 'Get Started with Tourism Solutions',
    'tourism.footer.note': 'Click cards to rotate through features • Use arrow keys or dots to navigate',
    
    // Cube Cards
    'cube.explore.title': 'Explore This Module',
    'cube.explore.outcomes': 'Key benefits and results',
    'cube.explore.roi': 'Financial impact snapshot', 
    'cube.explore.pilot': 'Implementation roadmap',
    'cube.explore.cta': 'Click to rotate and explore →',
    'cube.overview.title': 'Solution Overview',
    'cube.overview.focus': 'Focus',
    'cube.overview.timeline': 'Timeline',
    'cube.overview.support': 'Support',
    'cube.overview.focusValue': 'Tourism operations',
    'cube.overview.timelineValue': '2-6 week implementation',
    'cube.overview.supportValue': 'Full setup and training included',
    'cube.outcomes.title': 'Outcomes',
    'cube.outcomes.subtitle': 'Key benefits and results',
    'cube.outcomes.sectionTitle': 'Key Benefits',
    'cube.roi.title': 'ROI Snapshot',
    'cube.roi.subtitle': 'Time & value per staff',
    'cube.roi.assumptions': 'Assumptions',
    'cube.roi.monthlyImpact': 'Monthly Impact',
    'cube.roi.timeSaved': 'Time saved / staff',
    'cube.roi.monthlyValue': 'Monthly value',
    'cube.roi.monthlyCost': 'Monthly cost',
    'cube.roi.netSaving': 'Net saving',
    'cube.pilot.title': 'Pilot Program',
    'cube.pilot.subtitle': 'Start your implementation journey',
    'cube.pilot.quickStart': 'Quick Start',
    'cube.pilot.setup': 'Setup',
    'cube.pilot.training': 'Training',
    'cube.pilot.support': 'Support',
    'cube.pilot.setupValue': '2-week configuration',
    'cube.pilot.trainingValue': 'Staff onboarding included',
    'cube.pilot.supportValue': '30-day assistance',
    'cube.pilot.ready': 'Ready to start in 2 weeks',
    
    // Common
    'common.clickExplore': 'Click or use arrow keys to explore',
    
    // Module Specific Content
    'module.dccNetworks.title': 'DCC Networks',
    'module.dccNetworks.oneLiner': 'One platform to manage all your tours, bookings and teams effortlessly.',
    'module.dccNetworks.category': 'Software for Tour Operators',
    'module.spottyWifi.title': 'Spotty Wi‑Fi',
    'module.spottyWifi.oneLiner': 'Transforms guest Wi‑Fi into marketing, reviews and customer data.',
    'module.spottyWifi.category': 'Guest Wi‑Fi & Marketing Suite',
    'module.welcomeDog.title': 'Welcome Dog System',
    'module.welcomeDog.oneLiner': 'Streamlines pet bookings, amenities and guest communication for pet travelers.',
    'module.welcomeDog.category': 'Pet-Friendly Guest Services',
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
    
    // Home Page (WhoWeAre)
    'home.hero.title': 'Omni Solutions',
    'home.hero.subtitle': 'Partnership tecnologiche strategiche per una crescita sostenibile',
    
    // Tourism Solutions Page
    'tourism.hero.title': 'Soluzioni Turistiche',
    'tourism.hero.subtitle': 'Soluzioni innovative e partner tecnologici per tour operator e strutture.',
    'tourism.cta.main': 'Inizia con le Soluzioni Turistiche',
    'tourism.footer.note': 'Clicca le carte per ruotarle • Usa frecce o punti per navigare',
    
    // Cube Cards
    'cube.explore.title': 'Esplora Questo Modulo',
    'cube.explore.outcomes': 'Benefici e risultati chiave',
    'cube.explore.roi': 'Panoramica impatto finanziario',
    'cube.explore.pilot': 'Roadmap implementazione',
    'cube.explore.cta': 'Clicca per ruotare ed esplorare →',
    'cube.overview.title': 'Panoramica Soluzione',
    'cube.overview.focus': 'Focus',
    'cube.overview.timeline': 'Tempistiche',
    'cube.overview.support': 'Supporto',
    'cube.overview.focusValue': 'Operazioni turistiche',
    'cube.overview.timelineValue': 'Implementazione in 2-6 settimane',
    'cube.overview.supportValue': 'Setup completo e formazione inclusi',
    'cube.outcomes.title': 'Risultati',
    'cube.outcomes.subtitle': 'Benefici e risultati chiave',
    'cube.outcomes.sectionTitle': 'Benefici Principali',
    'cube.roi.title': 'Panoramica ROI',
    'cube.roi.subtitle': 'Tempo e valore per dipendente',
    'cube.roi.assumptions': 'Presupposti',
    'cube.roi.monthlyImpact': 'Impatto Mensile',
    'cube.roi.timeSaved': 'Tempo risparmiato / dipendente',
    'cube.roi.monthlyValue': 'Valore mensile',
    'cube.roi.monthlyCost': 'Costo mensile',
    'cube.roi.netSaving': 'Risparmio netto',
    'cube.pilot.title': 'Programma Pilota',
    'cube.pilot.subtitle': 'Inizia il tuo percorso di implementazione',
    'cube.pilot.quickStart': 'Avvio Rapido',
    'cube.pilot.setup': 'Setup',
    'cube.pilot.training': 'Formazione',
    'cube.pilot.support': 'Supporto',
    'cube.pilot.setupValue': 'Configurazione in 2 settimane',
    'cube.pilot.trainingValue': 'Onboarding del personale incluso',
    'cube.pilot.supportValue': 'Assistenza per 30 giorni',
    'cube.pilot.ready': 'Pronto per iniziare in 2 settimane',
    
    // Common
    'common.clickExplore': 'Clicca o usa le frecce per esplorare',
    
    // Module Specific Content
    'module.dccNetworks.title': 'DCC Networks',
    'module.dccNetworks.oneLiner': 'Una piattaforma per gestire tutti i tuoi tour, prenotazioni e team senza sforzo.',
    'module.dccNetworks.category': 'Software per Tour Operator',
    'module.spottyWifi.title': 'Spotty Wi‑Fi',
    'module.spottyWifi.oneLiner': 'Trasforma il Wi‑Fi degli ospiti in marketing, recensioni e dati clienti.',
    'module.spottyWifi.category': 'Suite Wi‑Fi Ospiti & Marketing',
    'module.welcomeDog.title': 'Welcome Dog System',
    'module.welcomeDog.oneLiner': 'Semplifica prenotazioni pet, servizi e comunicazione ospiti per viaggiatori con animali.',
    'module.welcomeDog.category': 'Servizi Ospiti Pet-Friendly',
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