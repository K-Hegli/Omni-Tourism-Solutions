import React from "react";
import { motion } from "framer-motion";
import SwotAnalysis from "../components/SwotAnalysis";
import BusinessCapabilities from "../components/BusinessCapabilities";
import ReportSection from "../components/ReportSection";
import ReportCover from "../components/ReportCover";
import TableOfContents from "../components/TableOfContents";
import Footer from "../components/Footer";
import { usePageSEO } from "../hooks/useFavicon";
import { useLanguage } from "../hooks/useLanguage";

const AboutYou: React.FC = () => {
  const { t } = useLanguage();
  
  // Set page-specific SEO
  usePageSEO({
    title: 'Business Assessment - Omni Solutions',
    description: 'Complete your strategic business analysis to unlock growth opportunities and operational excellence. SWOT analysis and capability assessment tools.',
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
              className="mx-auto max-w-lg text-3xl sm:text-4xl lg:text-5xl font-heading text-[#ff5c33] leading-tight"
              style={{
                textShadow: '0 0 40px rgba(255, 42, 95, 0.3), 0 0 80px rgba(255, 92, 51, 0.2)',
                fontFamily: 'Cinzel, serif'
              }}
            >
              {t('aboutYou.hero.title')}
            </motion.h1>
            <span className="block bg-[#ff5c33] h-1 w-24 mx-auto my-6 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-200 mb-2 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                 fontFamily: 'Inter, sans-serif'
               }}>
              {t('aboutYou.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-offWhite py-20 px-4">
        <div className="max-w-6xl mx-auto">

        {/* Screen version - Interactive tools */}
        <div className="space-y-16 screen-only">
          <SwotAnalysis />
          <BusinessCapabilities />
        </div>

        {/* Print version - Professional report */}
        <div className="print-only">
          <ReportCover clientName="Business Assessment" />

          <TableOfContents />

          <ReportSection
            title={t('aboutYou.executive.title')}
            subtitle={t('aboutYou.executive.subtitle')}
            startOnNewPage={true}
          >
            <p className="text-gray-300 mb-4">
              {t('aboutYou.executive.description')}
            </p>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-offWhite mb-2">{t('aboutYou.executive.priorityTitle')}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>{t('aboutYou.executive.priority1')}</li>
                <li>{t('aboutYou.executive.priority2')}</li>
                <li>{t('aboutYou.executive.priority3')}</li>
              </ul>
            </div>
          </ReportSection>

          <ReportSection
            title={t('aboutYou.swot.title')}
            subtitle={t('aboutYou.swot.subtitle')}
            startOnNewPage={true}
          >
            <SwotAnalysis />
          </ReportSection>

          <ReportSection
            title={t('aboutYou.capabilities.title')}
            subtitle={t('aboutYou.capabilities.subtitle')}
            startOnNewPage={true}
          >
            <BusinessCapabilities />
          </ReportSection>

          <ReportSection
            title={t('aboutYou.recommendations.title')}
            subtitle={t('aboutYou.recommendations.subtitle')}
            startOnNewPage={true}
          >
            <div className="space-y-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h4 className="font-semibold text-offWhite mb-3">{t('aboutYou.recommendations.immediate.title')}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>{t('aboutYou.recommendations.immediate.item1')}</li>
                  <li>{t('aboutYou.recommendations.immediate.item2')}</li>
                  <li>{t('aboutYou.recommendations.immediate.item3')}</li>
                </ul>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h4 className="font-semibold text-offWhite mb-3">{t('aboutYou.recommendations.shortTerm.title')}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>{t('aboutYou.recommendations.shortTerm.item1')}</li>
                  <li>{t('aboutYou.recommendations.shortTerm.item2')}</li>
                  <li>{t('aboutYou.recommendations.shortTerm.item3')}</li>
                </ul>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h4 className="font-semibold text-offWhite mb-3">{t('aboutYou.recommendations.longTerm.title')}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>{t('aboutYou.recommendations.longTerm.item1')}</li>
                  <li>{t('aboutYou.recommendations.longTerm.item2')}</li>
                  <li>{t('aboutYou.recommendations.longTerm.item3')}</li>
                </ul>
              </div>
            </div>
          </ReportSection>
        </div>

        {/* Print Button - Hidden in PDF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-16 print-hide"
        >
          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-gradient-to-r from-[#ff5c33] to-[#ff2a5f] text-white font-heading font-semibold rounded-xl hover:shadow-lg hover:shadow-[#ff5c33]/50 transition-all duration-300"
          >
            📄 {t('aboutYou.printButton')}
          </button>
        </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutYou;
