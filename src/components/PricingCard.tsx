import React from 'react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  isPopular = false,
  buttonText,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`card ${isPopular ? 'border-2 border-[#ff2a5f]' : ''}`}
    >
      {isPopular && (
        <div className="bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-3">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="text-5xl font-bold mb-6">{price}</div>
      <ul className="space-y-2 text-gray-400 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-[#ff2a5f] mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] text-white font-bold py-2 px-4 rounded-lg transition transform hover:-translate-y-1 shadow-lg">
        {buttonText}
      </button>
    </motion.div>
  );
};

export default PricingCard;
