import React from 'react';
import { motion } from 'framer-motion';

interface StatusLineProps {
  isRevealed: boolean;
}

export const StatusLine: React.FC<StatusLineProps> = ({ isRevealed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
      className="flex items-center gap-2 sm:gap-2.5 my-3 sm:my-4 select-none px-3 sm:px-4 py-1.5 sm:py-1 rounded-full bg-black/[0.03] border border-black/5 max-w-[95vw] sm:max-w-none justify-center overflow-hidden"
    >
      {/* Gentle Pulsing Dot */}
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isRevealed
            ? {
                scale: [1, 1.4, 1],
                opacity: 1,
              }
            : { scale: 0.8, opacity: 0 }
        }
        transition={{ duration: 0.8, delay: 0.7, times: [0, 0.5, 1] }}
        className="shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
      />

      {/* Monospaced Availability Text */}
      <span className="font-mono-ui font-bold text-[9px] min-[390px]:text-[10px] sm:text-[13px] tracking-tight sm:tracking-wider text-neutral-800 uppercase whitespace-nowrap">
        OPEN TO INTERNSHIPS, PROJECTS & GOOD PROBLEMS
      </span>
    </motion.div>
  );
};
