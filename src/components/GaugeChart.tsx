import { motion } from 'framer-motion';

interface GaugeChartProps {
  value: number;
  maxValue?: number;
  label?: string;
  size?: number;
}

export default function GaugeChart({
  value,
  maxValue = 100,
  label = 'Growth Score',
  size = 200
}: GaugeChartProps) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  const getColor = () => {
    if (percentage < 33) return '#ef4444'; // red
    if (percentage < 66) return '#f59e0b'; // orange
    return '#10b981'; // green
  };

  const getLabel = () => {
    if (percentage < 33) return 'Needs Work';
    if (percentage < 66) return 'Growing';
    return 'Thriving!';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size / 2 }}>
        {/* Background arc */}
        <svg 
          width={size} 
          height={size / 2} 
          viewBox={`0 0 ${size} ${size / 2}`}
          className="overflow-visible"
        >
          <path
            d={`M ${size * 0.1},${size / 2} A ${size * 0.4},${size * 0.4} 0 0,1 ${size * 0.9},${size / 2}`}
            fill="none"
            stroke="#374151"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: percentage / 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            d={`M ${size * 0.1},${size / 2} A ${size * 0.4},${size * 0.4} 0 0,1 ${size * 0.9},${size / 2}`}
            fill="none"
            stroke={getColor()}
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Center value */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="text-center"
          >
            <div 
              className="text-4xl font-bold mb-1"
              style={{ color: getColor() }}
            >
              {Math.round(percentage)}
            </div>
            <div className="text-xs text-gray-400">{getLabel()}</div>
          </motion.div>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mt-4 font-medium">{label}</p>
    </div>
  );
}
