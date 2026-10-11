import React from 'react';
import { motion } from 'framer-motion';

interface RoughYellowContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const RoughYellowContainer: React.FC<RoughYellowContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={`relative w-full ${className}`}
    >
      {/* Hand-Drawn SVG Frame with Organic Non-Straight Outline and Solid Black Shadow */}
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible select-none"
        aria-hidden="true"
      >
        {/* Solid Black Bottom Offset Shadow (Follows the hand-drawn organic contour) */}
        <path
          d="M 18 36 C 140 24, 340 32, 520 22 C 650 16, 740 24, 782 30 C 790 120, 778 240, 785 360 C 788 395, 782 416, 764 424 C 630 420, 460 432, 300 424 C 160 416, 50 426, 20 416 C 12 330, 22 210, 14 110 C 11 65, 14 42, 18 36 Z"
          fill="#191510"
          transform="translate(1, 9)"
        />

        {/* Main Yellow Rough Hand-Drawn Paper Body */}
        <path
          d="M 18 36 C 140 24, 340 32, 520 22 C 650 16, 740 24, 782 30 C 790 120, 778 240, 785 360 C 788 395, 782 416, 764 424 C 630 420, 460 432, 300 424 C 160 416, 50 426, 20 416 C 12 330, 22 210, 14 110 C 11 65, 14 42, 18 36 Z"
          fill="#F0C34D"
          stroke="#191510"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Internal Content (Rendered above the hand-drawn background) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </motion.div>
  );
};
