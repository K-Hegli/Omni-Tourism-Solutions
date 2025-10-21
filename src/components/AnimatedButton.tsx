import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  onClick: () => void;
  label: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, label }) => {
  return (
    <motion.button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {label}
    </motion.button>
  );
};

export default AnimatedButton;