import React from 'react';
import { motion } from 'framer-motion';

export const AboutTitle: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className="flex justify-center select-none mb-6 sm:mb-8"
    >
      <div className="border-[1.8px] border-[#191510] bg-[#FDFDFB] px-5 sm:px-7 py-1 sm:py-1.5 rounded-[2px] shadow-[1px_1px_0px_rgba(25,21,16,0.08)]">
        <h2 className="font-display font-extrabold text-[#191510] text-2xl sm:text-3xl md:text-[32px] tracking-tight lowercase">
          what&apos;s up
        </h2>
      </div>
    </motion.div>
  );
};
