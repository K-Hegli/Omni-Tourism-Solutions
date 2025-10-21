import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 'scoping',
    title: 'Scoping',
    description: '20‑minute audit call to understand your current booking flow and identify optimization opportunities.',
    details: 'We analyze your existing systems, identify bottlenecks, and propose specific Omni modules for your needs.',
    hasAction: true
  },
  {
    id: 'pilot',
    title: 'Pilot',
    description: '2‑week Booking Audit — microflow build and paid-test plan.',
    details: 'Rapid implementation of core features with real booking data to validate improvements and ROI.',
    hasAction: false
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'Integration rollout; automation handover; KPI dashboard.',
    details: 'Full system integration, team training, and ongoing performance monitoring with dedicated support.',
    hasAction: false
  }
];

export default function HowItWorks({ onScopingClick }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Step Number */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] 
                            flex items-center justify-center text-white font-bold text-lg mr-4">
                {index + 1}
              </div>
              <h3 className="text-2xl font-heading text-[#ff5c33] font-semibold">
                {step.title}
              </h3>
            </div>

            {/* Step Content */}
            <div className="card-hover p-6 h-full">
              <p className="text-offWhite font-medium mb-4 leading-relaxed">
                {step.description}
              </p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {step.details}
              </p>

              {/* CTA for Scoping Step */}
              {step.hasAction && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onScopingClick}
                  className="w-full bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-semibold py-3 px-4 rounded-lg 
                           hover:shadow-lg hover:shadow-[#ff5c33]/25 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50"
                >
                  Schedule Scoping Call
                </motion.button>
              )}
            </div>

            {/* Connector Arrow (hidden on mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-5 -right-4 z-10">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#ff5c33] to-transparent"></div>
                <div className="absolute -top-1 right-0 w-0 h-0 border-l-2 border-t-2 border-b-2 
                              border-l-[#ff5c33] border-t-transparent border-b-transparent transform rotate-45"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Process Timeline (mobile view) */}
      <div className="md:hidden mt-8">
        <div className="flex flex-col space-y-4">
          {steps.map((step, index) => (
            <div key={`mobile-${step.id}`} className="flex items-center">
              <div className="flex flex-col items-center mr-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5c33]"></div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#ff5c33] to-transparent mt-2"></div>
                )}
              </div>
              <div className="text-sm text-gray-300">
                Step {index + 1}: {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}