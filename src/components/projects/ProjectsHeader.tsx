import React from 'react';
import { motion } from 'framer-motion';

export const ProjectsHeader: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center select-none pt-8 sm:pt-12 pb-8 sm:pb-10 px-4">
      {/* 1. Handwritten top label with underline: "explore my work!" */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-3 sm:mb-4 inline-flex flex-col items-center"
      >
        <span className="font-handwriting font-bold text-[#191510] text-2xl sm:text-3xl tracking-tight">
          explore my work!
        </span>
        <svg
          viewBox="0 0 120 12"
          className="w-24 sm:w-28 h-2 text-[#191510] -mt-1"
          fill="none"
        >
          <path
            d="M 6 8 C 35 2, 85 2, 114 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* 2. Giant Pixelated Heading: FEATURED WORKS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="flex flex-col items-center justify-center"
      >
        <h2
          className="font-pixel text-[#191510] text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[116px] leading-[0.88] tracking-tight uppercase"
          style={{ fontFamily: "'Jersey 15', monospace" }}
        >
          FEATURED
          <br />
          WORKS
        </h2>
      </motion.div>

      {/* 3. Tilted Yellow Description Paper Strip */}
      <motion.div
        initial={{ opacity: 0, y: 12, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
        className="mt-6 sm:mt-8 inline-block select-none"
      >
        <div
          className="bg-[#FED049] text-[#191510] px-5 sm:px-7 py-2 sm:py-2.5 rounded-[1px] shadow-[2px_3px_0px_rgba(25,21,16,0.14)] border border-[#191510]/10 font-display font-semibold text-xs sm:text-sm md:text-base tracking-tight"
          style={{ transform: 'rotate(-1.5deg)' }}
        >
          A few products I helped make simpler, calmer, and easier to trust.
        </div>
      </motion.div>
    </div>
  );
};
