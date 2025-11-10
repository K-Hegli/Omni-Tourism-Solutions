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
    'home.hero.title': 'Origin Story',
    'home.hero.subtitle': 'Omni Solutions began when two passionate founders set out to make multilingual marketing and global operations accessible to more than just enterprise teams. What started as a hands-on duo evolved into a multidisciplinary studio and partner network focused on practical international growth.',
    'home.team.title': 'Meet Our Team',
    'home.team.subtitle': 'The passionate experts behind your growth journey',
    
    // Values
    'values.punctuality.title': 'Punctuality & Manners',
    'values.punctuality.description': 'We\'re on time with everything we do, we treat everyone with equal respect regardless of their status or title. We\'re all human.',
    'values.humbleness.title': 'Humbleness & Honesty', 
    'values.humbleness.description': 'In a capitalistic industry like marketing & sales, we remain humble and honest, building success on trust, not exaggeration.',
    'values.passion.title': 'Passion & Productivity',
    'values.passion.description': 'We are driven by passion for what we do and defined by our ability to get things done.',
    'values.growth.title': 'Growth & Innovation',
    'values.growth.description': 'Stagnation is the first step towards failure. You can\'t be impactful if you don\'t grow, you can\'t drive change without innovating.',
    
    // Team Members
    'team.nastja.name': 'Nastja',
    'team.nastja.punchline': 'I hit my target in sports & marketing',
    'team.nastja.bio': 'Marketing specialist with a Bachelor\'s degree, 9k social followers, and Finnish sports shooting champion. Skilled in sales, design, and content creation.',
    'team.mirjam.name': 'Mirjam', 
    'team.mirjam.punchline': 'The \'Social Junkie\' from Sweden',
    'team.mirjam.bio': 'Swedish strategist who grew WaterAid\'s social media by 300%. Expert in advertising optimization, passionate about running, Fika, and networking.',
    'team.ahsan.name': 'Ahsan',
    'team.ahsan.punchline': 'Learning the hard things is what sets you apart',
    'team.ahsan.bio': 'Digital marketer with 5+ years\' experience. Master\'s in Sustainability. Led UAE campaign with 1200% ROAS. Loves fitness, cars, and swimming.',
    'team.mariia.name': 'Mariia',
    'team.mariia.punchline': 'From scratch to success',
    'team.mariia.bio': 'UI/UX designer and ex-IT project manager. Built 30+ websites. Ballet dancer for 20+ years, now teaching kids to dance and dream big.',
    'team.kaled.name': 'Kaled',
    'team.kaled.punchline': 'Life is a canvas',
    'team.kaled.bio': 'Founder & COO. Italian in Finland. Expert in Sales, Ops, and Tech. Speaks six languages, sings in choir, practices martial arts.',
    'team.aaron.name': 'Aaron',
    'team.aaron.punchline': 'My favorite word is ROI',
    'team.aaron.bio': 'Founder & CEO. Englishman from Sipoo. Expert in Sales, Strategy, and Management. Enjoys boxing, reading, music, and guitar.',
    'team.thomas.name': 'Thomas',
    'team.thomas.punchline': 'I capture stories with my lens',
    'team.thomas.bio': 'Professional videographer and photographer with media education. Englishman from Sipoo capturing compelling visual stories. Loves nature, football, and fishing.',
    'team.mattias.name': 'Mattias',
    'team.mattias.punchline': 'Always chasing progress',
    'team.mattias.bio': 'Multimedia content specialist with 3+ years in post-production and editing. Creates compelling content with passion and precision. Loves gym training and Ostrobothnia forest walks.',
    'team.tristan.name': 'Tristan',
    'team.tristan.punchline': 'Numbers tell the story',
    'team.tristan.bio': 'Hanken student in Administration & Finance Strategy. Analytical mind focused on financial strategy and operations. Passionate about data-driven decisions.',
    'team.sami.name': 'Sami',
    'team.sami.punchline': 'if you never ask the question the answer is always no',
    'team.sami.bio': 'Marketing specialist in business and sports sectors. Outgoing connector building relationships and helping ideas soar.\n\nPassionate about Lapland\'s magic and international growth.\n\nWorld traveler collecting stories and connections.',
    
    // Team UI
    'team.clickToRead': '(Click to read bio)',
    'team.clickToFlip': '(Click anywhere to flip back)',
    
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
    
    // Services & Partners Page
    'services.hero.title': 'Business Solutions',
    'services.hero.subtitle': 'Comprehensive digital solutions and infrastructure to scale your business globally with proven strategies and cutting-edge technology.',
    'services.marketing.title': 'Marketing Solutions',
    'services.marketing.intro': 'Start with our base package for each service, then choose upgrades as needed.',
    'services.marketing.customPricing': 'Upgrade pricing is customized after a discovery call',
    'services.marketing.perfectMatch': 'to match your specific requirements perfectly.',
    'services.software.title': 'Software Solutions',
    'services.software.intro': 'Platform and software offerings for enterprise-level digital transformation and scalable solutions.',
    'services.packages.title': 'Strategy Packages',
    'services.packages.mini.title': 'Omni Mini',
    'services.packages.mini.price': '€3,500',
    'services.packages.mini.monthly': '1 month total',
    'services.packages.mini.hint': 'Perfect for startups validating their business model',
    'services.packages.mini.description': 'A one-month strategic sprint to clarify your business model, research your target market, and co-create a strategy deck. Includes 2 workshops, a positioning audit, and a tailored implementation roadmap.',
    'services.packages.alpha.title': 'Omni Alpha',
    'services.packages.alpha.price': '€10,800',
    'services.packages.alpha.monthly': '€1,800/mo (6 months)',
    'services.packages.alpha.hint': 'Ideal for growing teams needing ongoing strategic support',
    'services.packages.alpha.description': 'A 6-month coaching retainer with monthly workshops, strategic reviews, and implementation guidance. Includes brand refinement, channel strategy, and performance tracking.',
    'services.packages.omega.title': 'Omni Omega',
    'services.packages.omega.price': '€15,900',
    'services.packages.omega.monthly': '€1,325/mo (12 months)',
    'services.packages.omega.hint': 'Full-suite strategic partnership for scaling businesses',
    'services.packages.omega.description': 'A 12-month executive-level engagement with deep strategic coaching, team enablement, and growth execution. Includes quarterly strategy decks, stakeholder workshops, and full implementation support.',
    
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
    'home.hero.title': 'La Nostra Storia',
    'home.hero.subtitle': 'Omni Solutions è nata quando due fondatori appassionati hanno deciso di rendere il marketing multilingue e le operazioni globali accessibili non solo ai team aziendali. Quello che è iniziato come un duo operativo si è evoluto in uno studio multidisciplinare e una rete di partner focalizzata sulla crescita internazionale pratica.',
    'home.team.title': 'Incontra il Nostro Team',
    'home.team.subtitle': 'Gli esperti appassionati dietro il tuo percorso di crescita',
    
    // Values
    'values.punctuality.title': 'Puntualità e Buone Maniere',
    'values.punctuality.description': 'Siamo puntuali in tutto quello che facciamo, trattiamo tutti con uguale rispetto indipendentemente dal loro status o titolo. Siamo tutti umani.',
    'values.humbleness.title': 'Umiltà e Onestà',
    'values.humbleness.description': 'In un\'industria capitalistica come marketing e vendite, rimaniamo umili e onesti, costruendo il successo sulla fiducia, non sull\'esagerazione.',
    'values.passion.title': 'Passione e Produttività',
    'values.passion.description': 'Siamo guidati dalla passione per quello che facciamo e definiti dalla nostra capacità di portare a termine le cose.',
    'values.growth.title': 'Crescita e Innovazione', 
    'values.growth.description': 'La stagnazione è il primo passo verso il fallimento. Non puoi avere impatto se non cresci, non puoi guidare il cambiamento senza innovare.',
    
    // Team Members
    'team.nastja.name': 'Nastja',
    'team.nastja.punchline': 'Colpisco sempre il bersaglio nello sport e nel marketing',
    'team.nastja.bio': 'Specialista di marketing con laurea, 9k follower sui social e campionessa finlandese di tiro sportivo. Abile in vendite, design e creazione di contenuti.',
    'team.mirjam.name': 'Mirjam',
    'team.mirjam.punchline': 'La \'Social Junkie\' dalla Svezia',
    'team.mirjam.bio': 'Stratega svedese che ha aumentato i social media di WaterAid del 300%. Esperta in ottimizzazione pubblicitaria, appassionata di corsa, Fika e networking.',
    'team.ahsan.name': 'Ahsan',
    'team.ahsan.punchline': 'Imparare le cose difficili è ciò che ti distingue',
    'team.ahsan.bio': 'Digital marketer con oltre 5 anni di esperienza. Master in Sostenibilità. Ha guidato una campagna negli Emirati con ROAS del 1200%. Ama fitness, auto e nuoto.',
    'team.mariia.name': 'Mariia',
    'team.mariia.punchline': 'Da zero al successo',
    'team.mariia.bio': 'Designer UI/UX ed ex project manager IT. Ha costruito oltre 30 siti web. Ballerina da oltre 20 anni, ora insegna ai bambini a danzare e sognare in grande.',
    'team.kaled.name': 'Kaled',
    'team.kaled.punchline': 'La vita è una tela',
    'team.kaled.bio': 'Fondatore e COO. Italiano in Finlandia. Esperto in Vendite, Operazioni e Tecnologia. Parla sei lingue, canta nel coro, pratica arti marziali.',
    'team.aaron.name': 'Aaron',
    'team.aaron.punchline': 'La mia parola preferita è ROI',
    'team.aaron.bio': 'Fondatore e CEO. Inglese di Sipoo. Esperto in Vendite, Strategia e Management. Ama boxe, lettura, musica e chitarra.',
    'team.thomas.name': 'Thomas',
    'team.thomas.punchline': 'Catturo storie con il mio obiettivo',
    'team.thomas.bio': 'Videomaker e fotografo professionale con formazione mediatica. Inglese di Sipoo che cattura storie visive coinvolgenti. Ama natura, calcio e pesca.',
    'team.mattias.name': 'Mattias',
    'team.mattias.punchline': 'Sempre alla ricerca del progresso',
    'team.mattias.bio': 'Specialista di contenuti multimediali con 3+ anni in post-produzione e editing. Crea contenuti coinvolgenti con passione e precisione. Ama allenamento in palestra e passeggiate nelle foreste dell\'Ostrobotnia.',
    'team.tristan.name': 'Tristan',
    'team.tristan.punchline': 'I numeri raccontano la storia',
    'team.tristan.bio': 'Studente Hanken in Amministrazione e Strategia Finanziaria. Mente analitica focalizzata su strategia finanziaria e operazioni. Appassionato di decisioni basate sui dati.',
    'team.sami.name': 'Sami',
    'team.sami.punchline': 'se non fai mai la domanda la risposta è sempre no',
    'team.sami.bio': 'Specialista marketing nei settori business e sport. Connettore estroverso che costruisce relazioni e aiuta le idee a volare.\n\nAppassionato della magia della Lapponia e della crescita internazionale.\n\nViaggiatore del mondo che colleziona storie e connessioni.',
    
    // Team UI
    'team.clickToRead': '(Clicca per leggere la biografia)',
    'team.clickToFlip': '(Clicca ovunque per girare)',
    
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
    
    // Services & Partners Page
    'services.hero.title': 'Soluzioni Business',
    'services.hero.subtitle': 'Soluzioni digitali complete e infrastrutture per scalare la tua attività globalmente con strategie comprovate e tecnologie all\'avanguardia.',
    'services.marketing.title': 'Soluzioni Marketing',
    'services.marketing.intro': 'Inizia con il nostro pacchetto base per ogni servizio, poi scegli gli aggiornamenti necessari.',
    'services.marketing.customPricing': 'Il prezzo degli aggiornamenti è personalizzato dopo una chiamata di discovery',
    'services.marketing.perfectMatch': 'per adattarsi perfettamente alle tue esigenze specifiche.',
    'services.software.title': 'Soluzioni Software',
    'services.software.intro': 'Offerte di piattaforme e software per trasformazione digitale aziendale e soluzioni scalabili.',
    'services.packages.title': 'Pacchetti Strategici',
    'services.packages.mini.title': 'Omni Mini',
    'services.packages.mini.price': '€3,500',
    'services.packages.mini.monthly': '1 mese totale',
    'services.packages.mini.hint': 'Perfetto per startup che validano il loro modello di business',
    'services.packages.mini.description': 'Uno sprint strategico di un mese per chiarire il tuo modello di business, ricercare il tuo mercato di riferimento e co-creare un deck strategico. Include 2 workshop, un audit di posizionamento e una roadmap di implementazione su misura.',
    'services.packages.alpha.title': 'Omni Alpha',
    'services.packages.alpha.price': '€10,800',
    'services.packages.alpha.monthly': '€1,800/mese (6 mesi)',
    'services.packages.alpha.hint': 'Ideale per team in crescita che necessitano di supporto strategico continuo',
    'services.packages.alpha.description': 'Un retainer di coaching di 6 mesi con workshop mensili, revisioni strategiche e guidance implementativa. Include raffinamento del brand, strategia dei canali e monitoraggio delle performance.',
    'services.packages.omega.title': 'Omni Omega',
    'services.packages.omega.price': '€15,900',
    'services.packages.omega.monthly': '€1,325/mese (12 mesi)',
    'services.packages.omega.hint': 'Partnership strategica completa per aziende in fase di scaling',
    'services.packages.omega.description': 'Un impegno di livello executive di 12 mesi con coaching strategico approfondito, abilitazione del team ed esecuzione della crescita. Include deck strategici trimestrali, workshop per stakeholder e supporto completo all\'implementazione.',
    
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