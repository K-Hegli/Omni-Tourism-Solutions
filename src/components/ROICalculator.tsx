import { useState } from 'react';
import { motion } from 'framer-motion';

interface ROICalculatorProps {
  // Optional overall score that can influence defaults or messaging
  score?: number;
}

export default function ROICalculator({ score }: ROICalculatorProps) {
  const [investment, setInvestment] = useState(5000);
  const [revenue, setRevenue] = useState(60000);
  const [timeMonths, setTimeMonths] = useState(12);

  const roi = ((revenue - investment) / investment) * 100;
  const monthlyReturn = revenue / timeMonths;
  const breakEvenMonths = Math.ceil(investment / monthlyReturn);

  return (
    <div className="space-y-6">
      {/* Investment Input */}
      <div>
        <label className="text-gray-300 text-sm mb-2 block">
          Your Investment
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">€</span>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Math.max(0, Number(e.target.value)))}
            className="calculator-input pl-8 w-full"
            min="0"
            step="500"
          />
        </div>
      </div>

      {/* Revenue Input */}
      <div>
        <label className="text-gray-300 text-sm mb-2 block">
          Expected Revenue
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">€</span>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Math.max(0, Number(e.target.value)))}
            className="calculator-input pl-8 w-full"
            min="0"
            step="1000"
          />
        </div>
      </div>

      {/* Time Period */}
      <div>
        <label className="text-gray-300 text-sm mb-2 block">
          Time Period (months)
        </label>
        <input
          type="number"
          value={timeMonths}
          onChange={(e) => setTimeMonths(Math.max(1, Number(e.target.value)))}
          className="calculator-input w-full"
          min="1"
          max="60"
        />
      </div>

      {/* Results */}
      <motion.div
        key={roi}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-r from-[#ff2a5f]/10 to-[#ff5c33]/10 p-6 rounded-lg border border-[#ff2a5f]/20"
      >
        <div className="space-y-4">
          <div>
            <div className="text-gray-400 text-sm mb-1">Return on Investment</div>
            <div className={`text-3xl font-bold ${roi >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {roi.toFixed(1)}%
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
            <div>
              <div className="text-gray-400 text-xs mb-1">Monthly Return</div>
              <div className="text-offWhite font-semibold">
                €{monthlyReturn.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">Break-Even</div>
              <div className="text-offWhite font-semibold">
                {breakEvenMonths} {breakEvenMonths === 1 ? 'month' : 'months'}
              </div>
            </div>
          </div>

          {roi < 100 && (
            <div className="text-xs text-gray-400 pt-2 border-t border-gray-700">
              💡 Our Omni Alpha package typically delivers 300%+ ROI{typeof score === 'number' ? ` at a score of ${score}/10` : ''}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
