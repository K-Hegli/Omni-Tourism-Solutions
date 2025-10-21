import React from 'react';
import { motion } from 'framer-motion';

const trustMetrics = [
  {
    metric: "+18% bookings",
    description: "regional tour operator",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    metric: "1,200 seats automated",
    description: "excursion provider",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    metric: "2–3 week typical integration timeline",
    description: "from scoping to go-live",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function TrustStrip() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Trust Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {trustMetrics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="card p-6 h-full flex flex-col items-center justify-center">
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] rounded-full 
                            flex items-center justify-center text-white mb-4">
                {item.icon}
              </div>
              
              {/* Metric */}
              <h3 className="text-xl font-heading text-[#ff5c33] mb-2 font-semibold">
                {item.metric}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Microcopy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-[#ff5c33]/10 to-[#ff2a5f]/10 rounded-lg p-4 border border-[#ff5c33]/20">
          <p className="text-gray-400 text-sm">
            <span className="text-[#ff5c33] font-medium">Confidentiality:</span> Exact connectors disclosed under NDA during scoping.
          </p>
        </div>
      </motion.div>

      {/* Additional Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-[#ff5c33] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            GDPR Compliant
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-[#ff5c33] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Enterprise Security
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-[#ff5c33] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            24/7 Support
          </div>
        </div>
      </motion.div>
    </div>
  );
}