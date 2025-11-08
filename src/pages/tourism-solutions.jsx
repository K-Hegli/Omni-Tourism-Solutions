import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CubeCard from "../components/CubeCard";
import Footer from "../components/Footer";
import { usePageSEO } from "../hooks/usePageSEO";
import { useLanguage } from "../hooks/useLanguage";
import { ServicesHeaderIcon } from "../components/ServiceIcons";
import styles from "../styles/tourism-solutions.module.css";

// Tourism modules for revolving cards
const tourismModules = [
  {
    id: 'tourops',
    title: 'DCC Networks',
    slug: 'tourops',
    oneLiner: 'One platform to manage all your tours, bookings and teams effortlessly.',
    category: 'Software for Tour Operators',
    bullets: [
      '10–30% efficiency gains — Centralize operations and eliminate manual processes',
      'Major cost savings — Reduce overhead through automated workflows and resource optimization',
      'Reduced human errors — Minimize mistakes with integrated booking and rostering systems'
    ],
    impactMetric: '10–30% efficiency gains with major cost savings',
    roiSnapshot: {
      assumptions: '5 staff; €30 hourly cost; 40 hours/week; 10% efficiency gain',
      timeSaved: '4.0 hours/week per staff',
      monthlyValue: '€2,400',
      monthlyCost: '€745',
      netSaving: '€1,655',
      payback: '~222% first-month ROI'
    },
    details: '2–6 week implementation with full setup and training. Custom enterprise solutions available for scaling operations.',
    ctaText: 'Book a Demo',
    integrationsLine: 'Integrates with PMS, booking engines, payment systems, and rostering tools',
    microCopy: {
      cardTitle: 'DCC Networks',
      cardSubtitle: 'Software for Tour Operators',
      miniCTA: 'Try ROI Calculator',
      trustLine: 'Book a demo and see your impact quickly with our ROI calculator'
    }
  },
  {
    id: 'spotty-wifi',
    title: 'Spotty Wi‑Fi',
    slug: 'spotty-wifi',
    oneLiner: 'Transforms guest Wi‑Fi into marketing, reviews and customer data.',
    category: 'Guest Wi‑Fi & Marketing Suite',
    bullets: [
      'More guest reviews — Automated review requests capture feedback at the perfect moment',
      'Rich guest profiles — Build detailed customer databases from Wi‑Fi authentication',
      'Automated satisfaction surveys — Gather insights and improve service quality continuously'
    ],
    impactMetric: 'Increased bookings and marketing ROI via guest data segmentation',
    roiSnapshot: {
      assumptions: '200 guests/month; 25% review rate; €15 cost per review alternative',
      timeSaved: 'N/A',
      monthlyValue: '€750',
      monthlyCost: '€280',
      netSaving: '€470',
      payback: '~168% first-month ROI'
    },
    details: '2–4 week implementation with full setup, onboarding and ongoing support for guest engagement optimization.',
    ctaText: 'Request Free Demo',
    integrationsLine: 'Integrates with review platforms, CRM systems, email marketing tools, and PMS',
    microCopy: {
      cardTitle: 'Spotty Wi‑Fi',
      cardSubtitle: 'Guest Wi‑Fi & Marketing Suite',
      miniCTA: 'Free Demo Available',
      trustLine: 'Tailored pilot available to demonstrate ROI before commitment'
    }
  },
  {
    id: 'space-of-mind',
    title: 'Space of Mind',
    slug: 'space-of-mind',
    oneLiner: 'Award-winning Nordic micro cabins and saunas built with sustainable materials.',
    category: 'Artisan Micro Cabins',
    bullets: [
      'Authentic Nordic design — Handcrafted with attention to detail and cultural heritage',
      'Eco-friendly materials — Sustainable sourcing for minimal environmental impact',
      'Fast global shipping — Efficient delivery and installation worldwide'
    ],
    impactMetric: 'Long-term asset value for hospitality properties',
    roiSnapshot: {
      assumptions: 'Premium cabin installation; €200/night rate; 60% occupancy',
      timeSaved: 'N/A',
      monthlyValue: '€3,600',
      monthlyCost: '€800',
      netSaving: '€2,800',
      payback: 'Asset appreciation + revenue generation'
    },
    details: '6–10 week delivery and installation with design consultation and production support throughout the process.',
    ctaText: 'Book Design Meeting',
    integrationsLine: 'Full portfolio and specifications available upon request',
    microCopy: {
      cardTitle: 'Space of Mind',
      cardSubtitle: 'Artisan Micro Cabins',
      miniCTA: 'Request Brochure',
      trustLine: 'Book a design meeting and explore sustainable hospitality solutions'
    }
  },
  {
    id: 'welcome-dog-system',
    title: 'Welcome Dog System',
    slug: 'welcome-dog-system',
    oneLiner: 'Streamlines pet bookings, amenities and guest communication for pet travelers.',
    category: 'Pet-Friendly Guest Services',
    bullets: [
      'Simplified pet bookings — Seamless reservation flow for guests traveling with pets',
      'Automated pet profiles — Track preferences, dietary needs, and special requirements',
      'Enhanced guest satisfaction — Personalized pet amenities increase loyalty and reviews'
    ],
    impactMetric: 'Increased ancillary revenue from pet services and higher repeat stays',
    roiSnapshot: {
      assumptions: '30 pet bookings/month; €25 avg pet fee; 40% ancillary upsells',
      timeSaved: 'N/A',
      monthlyValue: '€1,050',
      monthlyCost: '€200',
      netSaving: '€850',
      payback: '~425% first-month ROI'
    },
    details: '1–3 week integration with full onboarding and pet-service templates to get started quickly.',
    ctaText: 'Start Pet Services',
    integrationsLine: 'Integrates with PMS systems, booking engines, and guest communication platforms',
    microCopy: {
      cardTitle: 'Welcome Dog System',
      cardSubtitle: 'Pet-Friendly Guest Services',
      miniCTA: 'Quick Pilot Available',
      trustLine: 'Fast pilot for select properties to demonstrate pet-friendly ROI'
    }
  }
];

export default function TourismSolutions() {
  const { t } = useLanguage();
  // Set page-specific SEO
  usePageSEO({
    title: 'Tourism Solutions — Partner Technology for Tour Operators and Facilities',
    description: 'Innovative tourism technology solutions from trusted partners. Discover cutting-edge tools for tour operators and facilities.',
    keywords: 'tourism technology, tour operator software, partner solutions, travel technology',
    ogType: 'website'
  });

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container hero-inner">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-heading text-[#ff5c33] leading-tight mb-6"
              style={{
                textShadow: '0 0 40px rgba(255, 42, 95, 0.3), 0 0 80px rgba(255, 92, 51, 0.2)',
                fontFamily: 'Cinzel, serif'
              }}
            >
              {t('tourism.hero.title')}
            </motion.h1>
            <span className="block bg-[#ff5c33] h-1 w-24 mx-auto my-6 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                 fontFamily: 'Inter, sans-serif'
               }}>
              {t('tourism.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container section-content">

        {/* Tourism Solutions Grid */}
        <section id="tourism-solutions" className="section">
          <SectionTitle 
            title={t('tourism.hero.title')} 
            icon={ServicesHeaderIcon}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.sectionGrid}
          >
            {tourismModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.cardWrapper}
              >
                <CubeCard module={module} />
              </motion.div>
            ))}
          </motion.div>

        </section>
      </div>
      <Footer />
    </>
  );
}