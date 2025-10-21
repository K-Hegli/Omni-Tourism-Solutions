import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SliderQuestionProps {
  label?: string; // new prop name for clarity
  question?: string; // legacy prop for backward compatibility
  description?: string; // optional helper text under label
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number; // used when uncontrolled
  value?: number; // controlled value (backward compatible with existing usages)
  labels?: string[]; // optional textual scale labels, typically length = (max-min+1)
  onChange?: (value: number) => void;
  showValue?: boolean;
}

export default function SliderQuestion({ 
  label, 
  question,
  description,
  min = 0, 
  max = 10, 
  step = 1,
  defaultValue = 5,
  value,
  labels,
  onChange,
  showValue = true
}: SliderQuestionProps) {
  // Support both controlled (value provided) and uncontrolled (defaultValue) modes
  const [internalValue, setInternalValue] = useState<number>(value ?? defaultValue);

  // Keep internal state in sync if parent controls the value
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    // Always reflect change locally for instant UI feedback
    setInternalValue(newValue);
    if (onChange) onChange(newValue);
  };

  const current = value ?? internalValue;

  const getColor = () => {
    const percentage = ((current - min) / (max - min)) * 100;
    if (percentage < 33) return 'text-red-400';
    if (percentage < 66) return 'text-yellow-400';
    return 'text-green-400';
  };

  const title = label || question || '';

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <label className="text-gray-300 text-sm">{title}</label>
        {showValue && (
          <motion.span 
            key={current}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            className={`font-bold text-lg ${getColor()}`}
          >
            {current}/{max}
          </motion.span>
        )}
      </div>

      {description && (
        <p className="text-gray-400 text-xs mb-2">{description}</p>
      )}

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={handleChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, #ff2a5f 0%, #ff5c33 ${((current - min) / (max - min)) * 100}%, #374151 ${((current - min) / (max - min)) * 100}%, #374151 100%)`
        }}
      />
      {labels && labels.length > 0 ? (
        <div className="flex justify-between text-[10px] text-gray-500 mt-1 select-none">
          {labels.map((lbl, idx) => (
            <span key={idx} className="truncate max-w-[10%] text-center">{lbl}</span>
          ))}
        </div>
      ) : (
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Low</span>
          <span>High</span>
        </div>
      )}
    </div>
  );
}
