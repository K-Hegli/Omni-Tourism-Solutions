import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CubeCard from "../components/CubeCard";
import { usePageSEO } from "../hooks/usePageSEO";
import { ServicesHeaderIcon } from "../components/ServiceIcons";
import styles from "../styles/tourism-solutions.module.css";

// Tourism modules for revolving cards
const tourismModules = [
  {
    id: 'tourops',
    title: 'TourOps — Central Tour Operations Platform',
    slug: 'tourops',
    oneLiner: 'Manage tours, bookings, guides and rostering from a single, reliable interface.',
    bullets: [
      'Reduce manual admin — centralise inventory and replace spreadsheets',
      'Faster confirmations — automated voucher and booking flows shorten time-to-confirmation',
      'Scalable rostering — schedule guides, manage shifts and reduce overtime'
    ],
    impactMetric: '10–30% reduction in ops time for mid-size operators',
    roiSnapshot: {
      assumptions: '5 staff; €30 hourly cost; 40 hours/week; 10% efficiency gain',
      timeSaved: '4.0 hours/week per staff',
      monthlyValue: '€2,400',
      monthlyCost: '€745',
      netSaving: '€1,655',
      payback: '~222% first-month ROI'
    },
    details: '2‑week Booking Audit — map one tour flow, build a booking microflow and run a voucher test. Deliverables: microflow prototype; KPI baseline; integration checklist; one‑page findings.',
    ctaText: 'Request TourOps scoping',
    integrationsLine: 'Integrates with PMS API; voucher generation; calendar and rostering',
    microCopy: {
      cardTitle: 'TourOps',
      cardSubtitle: 'Central tour operations and rostering',
      miniCTA: 'Scoping — 15 minutes',
      trustLine: 'Typical integration 2–3 weeks; connector list shared under NDA'
    }
  },
  {
    id: 'booking-optimization',
    title: 'BookingFlow Pro',
    slug: 'booking-optimization',
    oneLiner: 'AI-powered reservation optimization',
    bullets: [
      'Conversion Rate — Increase booking completion by 32% with smart form optimization',
      'Revenue Growth — Dynamic pricing algorithms boost average booking value',
      'Customer Experience — Seamless multi-device booking journey'
    ],
    impactMetric: '+32% booking conversion',
    roiSnapshot: {
      assumptions: '100 bookings/month; €50 avg booking; 32% conversion increase',
      timeSaved: 'N/A',
      monthlyValue: '€1,600',
      monthlyCost: '€450',
      netSaving: '€1,150',
      payback: '~256% first-month ROI'
    },
    details: '2-week pilot includes booking flow analysis, A/B testing setup, and initial optimization implementation.',
    ctaText: 'Start Booking Optimization',
    integrationsLine: 'Integrates with booking engines; payment processors; CRM systems',
    microCopy: {
      cardTitle: 'BookingFlow Pro',
      cardSubtitle: 'AI-powered reservations',
      miniCTA: 'Pilot — 2 weeks',
      trustLine: 'Quick deployment; measurable results within first month'
    }
  },
  {
    id: 'guest-connectivity',
    title: 'TravelConnect',
    slug: 'guest-connectivity',
    oneLiner: 'Global connectivity solutions',
    bullets: [
      'Coverage — Seamless connectivity in 180+ countries worldwide',
      'Cost Reduction — Eliminate international roaming charges for guests',
      'Guest Satisfaction — 24/7 support in multiple languages'
    ],
    impactMetric: '98% guest satisfaction',
    roiSnapshot: {
      assumptions: '50 guests/month; €25 avg connectivity cost; 100% cost elimination',
      timeSaved: 'N/A',
      monthlyValue: '€1,250',
      monthlyCost: '€300',
      netSaving: '€950',
      payback: '~317% first-month ROI'
    },
    details: '1-week pilot provides connectivity packages for test group with full analytics dashboard.',
    ctaText: 'Test Connectivity Solutions',
    integrationsLine: 'Integrates with PMS systems; guest management platforms',
    microCopy: {
      cardTitle: 'TravelConnect',
      cardSubtitle: 'Global connectivity',
      miniCTA: 'Pilot — 1 week',
      trustLine: 'Instant activation; global coverage guaranteed'
    }
  },
  {
    id: 'revenue-management',
    title: 'YieldMax',
    slug: 'revenue-management',
    oneLiner: 'Dynamic pricing & revenue optimization',
    bullets: [
      'Revenue Growth — Increase revenue per available room by 18%',
      'Automation — Real-time pricing adjustments based on demand',
      'Market Intelligence — Competitive analysis and positioning'
    ],
    impactMetric: '+18% revenue increase',
    roiSnapshot: {
      assumptions: '100 rooms; €100 avg nightly rate; 18% revenue increase',
      timeSaved: 'N/A',
      monthlyValue: '€5,400',
      monthlyCost: '€800',
      netSaving: '€4,600',
      payback: '~575% first-month ROI'
    },
    details: '3-week pilot includes pricing strategy setup, competitor analysis, and performance tracking.',
    ctaText: 'Optimize Revenue',
    integrationsLine: 'Integrates with PMS systems; booking engines; market data feeds',
    microCopy: {
      cardTitle: 'YieldMax',
      cardSubtitle: 'Revenue optimization',
      miniCTA: 'Pilot — 3 weeks',
      trustLine: 'Data-driven pricing; proven revenue increases'
    }
  }
];

export default function TourismSolutions() {
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
              Tourism Solutions
            </motion.h1>
            <span className="block bg-[#ff5c33] h-1 w-24 mx-auto my-6 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                 fontFamily: 'Inter, sans-serif'
               }}>
              Innovative solutions and technology partners for tour operators and facilities.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container section-content">

        {/* Tourism Solutions Grid */}
        <section id="tourism-solutions" className="section">
          <SectionTitle 
            title="Tourism Solutions" 
            icon={ServicesHeaderIcon}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${styles.sectionGrid}`}
          >
            {tourismModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CubeCard module={module} />
              </motion.div>
            ))}
          </motion.div>

          {/* Instructions for interaction */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm">
              Click cards to rotate through features • Use arrow keys or dots to navigate
            </p>
          </motion.div>
        </section>

        {/* Simple Contact Form */}
        <section id="scoping-form" className="section">
          <SectionTitle title="Get Started" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 focus:border-[#ff5c33] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 focus:border-[#ff5c33] transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="solutionInterest" className="block text-sm font-medium text-gray-300 mb-2">
                    Solution Interest
                  </label>
                  <select
                    id="solutionInterest"
                    name="solutionInterest"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white
                             focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 focus:border-[#ff5c33] transition-colors"
                  >
                    <option value="">Select a solution...</option>
                    <option value="tourops">TourOps - Central Tour Operations Platform</option>
                    <option value="booking-optimization">BookingFlow Pro - Booking Optimization</option>
                    <option value="guest-connectivity">TravelConnect - Guest Connectivity</option>
                    <option value="revenue-management">YieldMax - Revenue Management</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50 focus:border-[#ff5c33] transition-colors resize-vertical"
                    placeholder="Tell us about your current challenges and goals..."
                  />
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-semibold py-3 px-8 rounded-lg
                             hover:shadow-lg hover:shadow-[#ff5c33]/25 transition-all duration-300
                             focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50"
                  >
                    Request Information
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
}