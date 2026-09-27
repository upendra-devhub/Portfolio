import React from 'react';
import { motion } from 'framer-motion';

interface AnnotationTagProps {
  type: 'role' | 'location';
  isRevealed: boolean;
}

export const AnnotationTag: React.FC<AnnotationTagProps> = ({ type, isRevealed }) => {
  if (type === 'role') {
    return (
      <div className="relative flex items-center select-none">
        {/* Yellow Paper Annotation: FULL-STACK DEVELOPER */}
        <motion.div
          initial={{ opacity: 0, x: -16, y: -6, rotate: -8 }}
          animate={
            isRevealed
              ? { opacity: 1, x: 0, y: 0, rotate: -4.5 }
              : { opacity: 0, x: -16, y: -6, rotate: -8 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
          className="bg-[#FED049] text-[#191510] px-3.5 py-1.5 rounded-sm border border-[#191510]/80 shadow-[2px_2px_0px_rgba(25,21,16,0.18)]"
        >
          <span className="font-handwriting font-bold text-base sm:text-lg tracking-wide whitespace-nowrap">
            FULL-STACK DEVELOPER
          </span>
        </motion.div>

        {/* Hand-drawn Arrow pointing toward the Name Box */}
        <svg
          width="46"
          height="28"
          viewBox="0 0 46 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible ml-1 -mt-1 hidden sm:block"
        >
          {/* Curved path */}
          <motion.path
            d="M 4 8 C 18 6 30 14 40 22"
            stroke="#191510"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isRevealed
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.45, delay: 0.48 }}
          />
          {/* Arrowhead */}
          <motion.path
            d="M 33 21 L 40 22 L 38 15"
            stroke="#191510"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.72 }}
          />
        </svg>
      </div>
    );
  }

  // Location Annotation: REMOTE • INDIA
  return (
    <div className="relative flex items-center select-none">
      {/* Hand-drawn Arrow pointing toward Name Box from right */}
      <svg
        width="46"
        height="28"
        viewBox="0 0 46 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible mr-1 -mt-1 hidden sm:block"
      >
        {/* Curved path */}
        <motion.path
          d="M 42 8 C 28 6 16 14 6 22"
          stroke="#191510"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isRevealed
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 0.45, delay: 0.48 }}
        />
        {/* Arrowhead */}
        <motion.path
          d="M 13 21 L 6 22 L 8 15"
          stroke="#191510"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.72 }}
        />
      </svg>

      {/* Mint Paper Annotation */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: -6, rotate: 8 }}
        animate={
          isRevealed
            ? { opacity: 1, x: 0, y: 0, rotate: 3.5 }
            : { opacity: 0, x: 16, y: -6, rotate: 8 }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
        className="bg-[#C8E6C9] text-[#191510] px-3.5 py-1.5 rounded-sm border border-[#191510]/80 shadow-[2px_2px_0px_rgba(25,21,16,0.18)]"
      >
        <span className="font-handwriting font-bold text-base sm:text-lg tracking-wide whitespace-nowrap">
          REMOTE • INDIA
        </span>
      </motion.div>
    </div>
  );
};
