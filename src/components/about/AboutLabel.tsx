import React from 'react';
import { motion } from 'framer-motion';

export const AboutLabel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-6xl mx-auto px-6 sm:px-12 mb-2 sm:mb-4 select-none"
    >
      <span className="font-handwriting text-[#191510] text-2xl sm:text-3xl font-bold inline-block transform -rotate-2 tracking-tight">
        about me!
      </span>
    </motion.div>
  );
};
