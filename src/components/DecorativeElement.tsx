import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeElementProps {
  isRevealed: boolean;
}

export const DecorativeElement: React.FC<DecorativeElementProps> = ({ isRevealed }) => {
  return (
    <>
      {/* 1. Desktop & Laptop View (lg+ screens): Single Floating Avatar Flanking Headline on the Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.65, rotate: -8, y: 25 }}
        animate={
          isRevealed
            ? { opacity: 1, scale: 1, rotate: -2, y: 0 }
            : { opacity: 0, scale: 0.65, rotate: -8, y: 25 }
        }
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        className="absolute top-[72%] left-1 lg:left-4 xl:left-10 -translate-y-1/2 select-none hidden lg:block z-20"
      >
        {/* Continuous Floating Bobbing Loop & Interactive Hover */}
        <motion.div
          animate={
            isRevealed
              ? {
                  y: [0, -10, 0],
                  rotate: [-2.5, 1.5, -2.5],
                }
              : {}
          }
          transition={{
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.06, rotate: 0, transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.96 }}
          className="group relative cursor-pointer"
        >
          {/* Circular Frame: 300% enlarged size (w-44 h-44 to w-48 h-48) with bold orange border and paper shadow */}
          <div className="w-40 h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full border-[4.5px] border-[#FF6B35] shadow-[4px_6px_0px_rgba(25,21,16,0.18)] group-hover:shadow-[6px_10px_0px_rgba(25,21,16,0.22)] transition-shadow duration-300 overflow-hidden bg-[#FDFBF7]">
            <img
              src="/upendra.jpg"
              alt="Upendra - Full-Stack Developer"
              className="w-full h-full object-cover object-[50%_18%] select-none pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 2. Mobile & Tablet View (< lg screens): Centered Floating Avatar between Name and Headline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 15 }}
        animate={
          isRevealed
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.7, y: 15 }
        }
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="block lg:hidden my-2 sm:my-3 select-none z-20"
      >
        <motion.div
          animate={
            isRevealed
              ? {
                  y: [0, -8, 0],
                  rotate: [-2, 2, -2],
                }
              : {}
          }
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          whileTap={{ scale: 0.96 }}
          className="relative cursor-pointer"
        >
          {/* Responsive sized single container for mobile/tablet */}
          <div className="w-28 h-28 min-[420px]:w-32 min-[420px]:h-32 sm:w-36 sm:h-36 rounded-full border-[4px] border-[#FF6B35] shadow-[3px_5px_0px_rgba(25,21,16,0.16)] overflow-hidden bg-[#FDFBF7]">
            <img
              src="/upendra.jpg"
              alt="Upendra - Full-Stack Developer"
              className="w-full h-full object-cover object-[50%_18%] select-none pointer-events-none"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
