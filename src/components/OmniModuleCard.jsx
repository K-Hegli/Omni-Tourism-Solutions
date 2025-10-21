import React from 'react';
import { motion } from 'framer-motion';

export default function OmniModuleCard({
  title,
  oneLiner,
  description,
  bullets,
  integrations,
  impact,
  roi
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card h-full flex flex-col"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-heading text-[#ff5c33] mb-2 font-semibold">
          {title}
        </h3>
        <p className="text-lg font-medium text-offWhite mb-2">
          {oneLiner}
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* ROI Section - Front facing */}
      {roi && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            ROI Impact
          </h4>
          <div className="bg-gradient-to-r from-[#ff5c33]/10 to-[#ff2a5f]/10 rounded-lg p-4 border border-[#ff5c33]/20">
            <div className="grid grid-cols-1 gap-3">
              {roi.metrics && roi.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-[#ff5c33] font-bold text-lg">{metric.value}</div>
                  <div className="text-gray-300 text-xs">{metric.label}</div>
                </div>
              ))}
            </div>
            {roi.timeframe && (
              <div className="mt-3 pt-3 border-t border-[#ff5c33]/20 text-center">
                <span className="text-gray-400 text-xs">Typical ROI: </span>
                <span className="text-[#ff5c33] font-medium text-sm">{roi.timeframe}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Key Benefits */}
      {bullets && bullets.length > 0 && (
        <div className="mb-6 flex-grow">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Key Benefits
          </h4>
          <ul className="space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#ff5c33] mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-offWhite font-medium text-sm">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Integrations */}
      {integrations && integrations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Integrations
          </h4>
          <p className="text-gray-300 text-sm">
            {integrations.join(' • ')}
          </p>
        </div>
      )}

      {/* Legacy Impact Metric (for backward compatibility) */}
      {impact && !roi && (
        <div className="mb-6">
          <div className="bg-gradient-to-r from-[#ff5c33]/10 to-[#ff2a5f]/10 rounded-lg p-3 border border-[#ff5c33]/20">
            <p className="text-[#ff5c33] font-semibold text-center">
              {impact}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}