import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROIEmbed({ onOpenROI }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenROI = () => {
    setIsLightboxOpen(true);
    if (onOpenROI) {
      onOpenROI();
    }
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        {/* ROI CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-heading text-[#ff5c33] mb-4">
              Calculate Your Tourism ROI
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              See potential booking improvements and cost savings with Omni modules tailored to your operation.
            </p>
          </div>

          {/* ROI Preview Mockup */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Omni ROI Calculator</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-1">Monthly Bookings</div>
                <div className="text-xl text-[#ff5c33] font-semibold">+18%</div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-1">Manual Work Reduction</div>
                <div className="text-xl text-[#ff5c33] font-semibold">-65%</div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-1">ROI Timeline</div>
                <div className="text-xl text-[#ff5c33] font-semibold">3.2 months</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenROI}
            className="bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-semibold py-4 px-8 rounded-lg text-lg
                     hover:shadow-lg hover:shadow-[#ff5c33]/25 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#ff5c33]/50"
          >
            Run the Omni ROI Model
          </motion.button>

          <p className="text-sm text-gray-400 mt-4">
            Takes 3 minutes • Get instant results
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading text-[#ff5c33]">Omni ROI Calculator</h3>
              <button
                onClick={handleCloseLightbox}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ROI Iframe Placeholder */}
            <div 
              id="omni-roi"
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8 text-center border border-gray-600"
              style={{ minHeight: '400px' }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-[#ff5c33] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-4">ROI Calculator Integration Point</p>
                <p className="text-sm text-gray-400 mb-6">
                  This space will contain the interactive ROI calculator iframe
                </p>
                
                {/* Placeholder for actual ROI form */}
                <div className="text-left space-y-4 w-full max-w-md">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Current monthly bookings</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 150"
                      className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Average booking value</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 450"
                      className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                    />
                  </div>
                  <button 
                    onClick={handleCloseLightbox}
                    className="w-full bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-semibold py-3 rounded-lg"
                  >
                    Calculate ROI
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}