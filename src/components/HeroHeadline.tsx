import React from 'react';
import { motion } from 'framer-motion';

interface HeroHeadlineProps {
  isRevealed: boolean;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({ isRevealed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.68 }}
      className="text-center my-4 sm:my-6 max-w-4xl px-4 select-none"
    >
      <h1 className="font-display font-extrabold text-[24px] min-[360px]:text-[27px] min-[420px]:text-[32px] sm:text-[46px] md:text-[56px] lg:text-[62px] text-[#191510] tracking-[-0.03em] leading-[1.18] sm:leading-[1.16]">
        <span className="inline-flex items-center justify-center whitespace-nowrap">
          <span>I build software that</span>
          {/* Green Concentric Target / Eye Badge */}
          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={isRevealed ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="inline-flex items-center justify-center align-middle ml-1.5 sm:ml-2.5 md:ml-3 -mt-0.5 sm:-mt-1 select-none shrink-0"
          >
            <svg
              className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 overflow-visible"
              viewBox="0 0 44 44"
              fill="none"
            >
              {/* Outer green ring with black border */}
              <circle cx="22" cy="22" r="19" fill="#00BA7C" stroke="#191510" strokeWidth="2.8" />
              {/* White inner band */}
              <circle cx="22" cy="22" r="11" fill="#FFFFFF" stroke="#191510" strokeWidth="1.6" />
              {/* Center green bullseye */}
              <circle cx="22" cy="22" r="6.2" fill="#00BA7C" />
              {/* Center pupil dot */}
              <circle cx="22" cy="22" r="2.5" fill="#191510" />
            </svg>
          </motion.span>
        </span>
        <br />
        <span className="inline-flex items-center justify-center whitespace-nowrap">
          <span>gets out of your way.</span>
          {/* Pink 8-Petal Flower Sticker */}
          <motion.span
            initial={{ scale: 0, rotate: 30 }}
            animate={isRevealed ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.88 }}
            className="inline-flex items-center justify-center align-middle ml-1.5 sm:ml-2.5 md:ml-3 -mt-0.5 sm:-mt-1 select-none shrink-0"
          >
            <svg
              className="w-5 h-5 min-[360px]:w-6 min-[360px]:h-6 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 overflow-visible"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g fill="#FF3A7C" stroke="#191510" strokeWidth="1.8" strokeLinejoin="round">
                <circle cx="22" cy="9.5" r="5" />
                <circle cx="30.8" cy="13.2" r="5" />
                <circle cx="34.5" cy="22" r="5" />
                <circle cx="30.8" cy="30.8" r="5" />
                <circle cx="22" cy="34.5" r="5" />
                <circle cx="13.2" cy="30.8" r="5" />
                <circle cx="9.5" cy="22" r="5" />
                <circle cx="13.2" cy="13.2" r="5" />
                <circle cx="22" cy="22" r="7.5" stroke="none" />
              </g>
              {/* Center black dot */}
              <circle cx="22" cy="22" r="2.6" fill="#191510" />
            </svg>
          </motion.span>
        </span>
      </h1>
    </motion.div>
  );
};
