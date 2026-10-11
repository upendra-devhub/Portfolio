import React from 'react';
import { motion } from 'framer-motion';

export const AvailabilityNote: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
      className="flex items-center justify-center gap-2 select-none text-center px-4"
    >
      {/* Hand-Drawn Curved Arrow pointing up toward the form */}
      <svg
        viewBox="0 0 38 20"
        className="w-7 h-4 sm:w-8 sm:h-5 text-[#191510] shrink-0 overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 3 16 C 11 17, 20 13, 29 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 22 4 L 30 5 L 28 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Handwritten Availability Note for Upendra */}
      <span
        className="font-handwriting text-[#191510] text-base sm:text-lg md:text-xl font-bold tracking-tight"
        style={{ fontFamily: "'Architects Daughter', cursive" }}
      >
        Open to internships, projects &amp; good problems
      </span>
    </motion.div>
  );
};
