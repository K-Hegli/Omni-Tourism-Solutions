import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-black/50 border-t border-gray-800 mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-300 text-lg md:text-xl font-light mb-4">
            Your best business partner, only one call away
          </p>
          <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
            <span className="font-heading gradient-text font-bold">Omni Solutions</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
