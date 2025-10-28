import React from "react";
import { motion } from "framer-motion";
import SwotAnalysis from "../components/SwotAnalysis";
import BusinessCapabilities from "../components/BusinessCapabilities";
import ReportSection from "../components/ReportSection";
import ReportCover from "../components/ReportCover";
import TableOfContents from "../components/TableOfContents";
import Footer from "../components/Footer";
import { usePageSEO } from "../hooks/useFavicon";

const AboutYou: React.FC = () => {
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
              Business Assessment
            </motion.h1>
            <span className="block bg-[#ff5c33] h-1 w-24 mx-auto my-6 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-200 mb-2 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                 fontFamily: 'Inter, sans-serif'
               }}>
              Complete your strategic analysis to unlock growth opportunities and operational excellence.
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
            title="Executive Summary"
            subtitle="Key insights and strategic priorities"
            startOnNewPage={true}
          >
            <p className="text-gray-300 mb-4">
              This comprehensive business assessment provides strategic insights into your organization's
              current position, capabilities, and growth opportunities. The analysis covers SWOT factors,
              operational capabilities, and actionable recommendations for sustainable growth.
            </p>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-offWhite mb-2">Priority Actions:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Address high-priority SWOT items identified in the analysis</li>
                <li>Focus on capability gaps in critical operational areas</li>
                <li>Develop implementation roadmap for recommended improvements</li>
              </ul>
            </div>
          </ReportSection>

          <ReportSection
            title="SWOT Analysis"
            subtitle="Strategic assessment of Strengths, Weaknesses, Opportunities, and Threats"
            startOnNewPage={true}
          >
            <SwotAnalysis />
          </ReportSection>

          <ReportSection
            title="Business Capabilities"
            subtitle="Operational assessment and capability evaluation"
            startOnNewPage={true}
          >
            <BusinessCapabilities />
          </ReportSection>

          <ReportSection
            title="Strategic Recommendations"
            subtitle="Actionable insights for business growth"
            startOnNewPage={true}
          >
            <div className="space-y-6">
              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h4 className="font-semibold text-offWhite mb-3">Immediate Actions (Next 30 Days)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Review and prioritize high-impact SWOT items</li>
                  <li>Conduct stakeholder interviews for deeper insights</li>
                  <li>Begin capability gap analysis for critical functions</li>
                </ul>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h4 className="font-semibold text-offWhite mb-3">Short-term Goals (3-6 Months)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Implement recommended operational improvements</li>
                  <li>Develop training programs for capability enhancement</li>
                  <li>Establish monitoring systems for key performance indicators</li>
                </ul>
              </div>

              <div className="bg-gray-800/30 p-6 rounded-lg">
                <h4 className="font-semibold text-offWhite mb-3">Long-term Vision (6-12 Months)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Achieve operational excellence across all assessed areas</li>
                  <li>Establish competitive advantages in key market segments</li>
                  <li>Build scalable systems for sustained growth</li>
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
            📄 Print Business Report
          </button>
        </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutYou;
