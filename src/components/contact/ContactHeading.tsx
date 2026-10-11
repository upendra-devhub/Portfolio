import React from 'react';
import { motion } from 'framer-motion';

export const ContactHeading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none w-full">
      {/* 1. Upper-Center Handwritten Label: "say hi" with hand-drawn double underline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center mb-2.5 sm:mb-3"
      >
        <span
          className="font-handwriting font-bold text-[#191510] text-2xl sm:text-3xl tracking-tight"
          style={{ fontFamily: "'Architects Daughter', cursive" }}
        >
          say hi
        </span>

        {/* Imperfect hand-drawn underline strokes */}
        <svg
          viewBox="0 0 64 8"
          className="w-14 sm:w-16 h-2 text-[#191510] -mt-0.5 overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 4 2.5 C 22 1.5, 42 3, 60 2.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 8 5.8 C 24 5.2, 44 6.2, 54 5.6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* 2. CONTACT Heading surrounded by thin hand-drawn outline with 4 blue corner markers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="relative inline-flex items-center justify-center px-8 sm:px-12 md:px-16 py-3.5 sm:py-5 md:py-6"
      >
        {/* Subtle hand-drawn thin black rectangular outline */}
        <svg
          viewBox="0 0 460 140"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          aria-hidden="true"
        >
          <path
            d="M 6 6 C 135 4.5, 320 5.5, 454 6 C 455.5 45, 454.5 95, 454 134 C 325 135.5, 135 134.5, 6 134 C 4.5 95, 5.5 45, 6 6 Z"
            stroke="#191510"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* 4 Blue Square Registration Corner Markers (Precise alignment on 4 vertices) */}
        <div
          className="absolute -top-1.5 -left-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#2563EB] z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#2563EB] z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-1.5 -left-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#2563EB] z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-1.5 -right-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#2563EB] z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Huge Pixelated Display Font: CONTACT */}
        <h2
          className="font-pixel text-[#191510] text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[110px] leading-none tracking-tight uppercase select-none"
          style={{ fontFamily: "'Jersey 15', monospace" }}
        >
          CONTACT
        </h2>
      </motion.div>
    </div>
  );
};
