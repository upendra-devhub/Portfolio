import React from 'react';
import { motion } from 'framer-motion';

interface NameDisplayProps {
  isRevealed: boolean;
}

const nameLetters = [
  { char: 'U', initialX: -26, initialY: 30, delay: 0.28 },
  { char: 'P', initialX: -18, initialY: -28, delay: 0.34 },
  { char: 'E', initialX: -10, initialY: 24, delay: 0.40 },
  { char: 'N', initialX: 4, initialY: -26, delay: 0.46 },
  { char: 'D', initialX: 12, initialY: 28, delay: 0.52 },
  { char: 'R', initialX: 20, initialY: -24, delay: 0.58 },
  { char: 'A', initialX: 28, initialY: 28, delay: 0.64 },
];

export const NameDisplay: React.FC<NameDisplayProps> = ({ isRevealed }) => {
  return (
    <div className="relative w-full max-w-4xl lg:max-w-5xl flex flex-col items-center justify-center my-3 sm:my-6 select-none">
      {/* 1. Top Section: Pills & "my name is" (Locked to Orange Box Width) */}
      <div className="relative w-full max-w-[720px] flex items-center justify-center mb-1.5 sm:mb-2.5">
        {/* Top-Left Mint Pill: MADE THINGS (Visible on sm+) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={
            isRevealed
              ? { opacity: 1, scale: 1, rotate: -4.5 }
              : { opacity: 0, scale: 0.8, rotate: -8 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="hidden sm:block absolute left-0 sm:left-2 md:left-3 -top-3 sm:-top-5 bg-[#B8EBD0] text-[#191510] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-black/15 shadow-[1.5px_2px_0px_rgba(0,0,0,0.12)] z-10"
        >
          <span className="font-mono-ui font-bold text-[10px] sm:text-xs tracking-wider uppercase whitespace-nowrap">
            MADE THINGS
          </span>
        </motion.div>

        {/* Center: my name is + double hand-drawn wavy underline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col items-center"
        >
          <span className="font-handwriting font-bold text-2xl sm:text-3xl text-[#191510] tracking-wide">
            my name is
          </span>
          <svg
            width="90"
            height="10"
            viewBox="0 0 90 10"
            fill="none"
            className="overflow-visible -mt-0.5 opacity-85"
          >
            <motion.path
              d="M 3 3 C 26 5.5 60 1 87 4"
              stroke="#191510"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isRevealed ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
            />
            <motion.path
              d="M 8 7.5 C 32 9 56 6 82 8.5"
              stroke="#191510"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isRevealed ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
            />
          </svg>
        </motion.div>

        {/* Top-Right Cream Pill: SWEAT THE DETAILS (Visible on sm+) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
          animate={
            isRevealed
              ? { opacity: 1, scale: 1, rotate: 5 }
              : { opacity: 0, scale: 0.8, rotate: 8 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          className="hidden sm:block absolute right-0 sm:right-2 md:right-3 -top-3 sm:-top-5 bg-[#FEF3C7] text-[#191510] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-black/15 shadow-[1.5px_2px_0px_rgba(0,0,0,0.12)] z-10"
        >
          <span className="font-mono-ui font-bold text-[10px] sm:text-xs tracking-wider uppercase whitespace-nowrap">
            SWEAT THE DETAILS
          </span>
        </motion.div>
      </div>

      {/* 2. Main Grand Hero Orange Box (Tightened to Hug UPENDRA Snugly across all viewports) */}
      <div className="relative w-fit max-w-[720px] h-[86px] min-[400px]:h-[98px] min-[480px]:h-[120px] sm:h-[145px] md:h-[175px] lg:h-[215px] flex items-center justify-center px-3.5 sm:px-5 md:px-6 mx-auto">
        {/* Hand-Drawn Wobbly Orange Outline (Tightened Aspect Ratio) */}
        <svg
          viewBox="0 0 720 215"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        >
          <motion.path
            d="M 14 6 C 180 3 530 5 706 7 C 715 7 717 16 716 36 C 718 90 716 150 717 188 C 717 204 708 210 690 209 C 480 212 200 208 22 211 C 9 211 4 201 6 181 C 4 125 7 62 5 27 C 5 11 9 6 14 6 Z"
            stroke="#FF6B35"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isRevealed
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          />
        </svg>

        {/* UPENDRA Huge Condensed Retro Pixel Letters (Character Spacing Reduced by 20%) */}
        <div className="relative flex items-center justify-center font-pixel font-bold text-[82px] min-[400px]:text-[94px] min-[480px]:text-[115px] sm:text-[145px] md:text-[185px] lg:text-[218px] xl:text-[236px] leading-[0.8] text-[#191510] tracking-[-0.035em] [letter-spacing:-3px] min-[400px]:[letter-spacing:-3.5px] sm:[letter-spacing:-5px] md:[letter-spacing:-6.5px] lg:[letter-spacing:-8px] whitespace-nowrap">
          {nameLetters.map(({ char, initialX, initialY, delay }, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{
                opacity: 0,
                x: initialX,
                y: initialY,
                scale: 0.85,
              }}
              animate={
                isRevealed
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      x: initialX,
                      y: initialY,
                      scale: 0.85,
                    }
              }
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay,
              }}
              className="inline-block transform hover:scale-110 hover:-translate-y-1 transition-transform cursor-default"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* 3. Desktop Bottom Row (md+ screens): Corner-Anchored Sticky Notes + Centered Status */}
      <div className="relative w-full max-w-[720px] hidden md:flex items-center justify-between mt-3 sm:mt-5 px-1 sm:px-2">
        {/* Bottom-Left Yellow Note: Full-Stack Developer + Arrow pointing UP-RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 15, rotate: -6 }}
          animate={
            isRevealed
              ? { opacity: 1, y: 0, rotate: -3 }
              : { opacity: 0, y: 15, rotate: -6 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative flex items-center select-none shrink-0"
        >
          <div className="bg-[#FED049] text-[#191510] px-3.5 py-1.5 rounded-xs border border-black/10 shadow-[2px_3px_0px_rgba(25,21,16,0.15)]">
            <span className="font-handwriting font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
              Full-Stack Developer
            </span>
          </div>

          {/* Arrow pointing UP-RIGHT at bottom-left corner of the orange box */}
          <svg
            width="38"
            height="36"
            viewBox="0 0 38 36"
            fill="none"
            className="overflow-visible ml-1.5 -mt-6"
          >
            <motion.path
              d="M 4 30 C 14 26 24 18 32 6"
              stroke="#191510"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isRevealed ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.4, delay: 0.52 }}
            />
            <motion.path
              d="M 20 6 L 32 6 L 32 18"
              stroke="#191510"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.7 }}
            />
          </svg>
        </motion.div>

        {/* Center: Blue dot + Monospace Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
          className="flex items-center gap-2 sm:gap-2.5 mx-auto select-none px-1"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shrink-0" />
          <span className="font-mono-ui font-bold text-[9.5px] lg:text-[11px] xl:text-[11.5px] tracking-[0.11em] lg:tracking-[0.14em] text-[#191510] uppercase whitespace-nowrap">
            OPEN TO INTERNSHIPS, PROJECTS & GOOD PROBLEMS
          </span>
        </motion.div>

        {/* Bottom-Right Mint Note: Remote • India + Arrow pointing UP-LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 15, rotate: 6 }}
          animate={
            isRevealed
              ? { opacity: 1, y: 0, rotate: 2 }
              : { opacity: 0, y: 15, rotate: 6 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.44 }}
          className="relative flex items-center select-none shrink-0"
        >
          {/* Arrow pointing UP-LEFT at bottom-right corner of the orange box */}
          <svg
            width="38"
            height="36"
            viewBox="0 0 38 36"
            fill="none"
            className="overflow-visible mr-1.5 -mt-6"
          >
            <motion.path
              d="M 34 30 C 24 26 14 18 6 6"
              stroke="#191510"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isRevealed ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.4, delay: 0.52 }}
            />
            <motion.path
              d="M 18 6 L 6 6 L 6 18"
              stroke="#191510"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.7 }}
            />
          </svg>

          <div className="bg-[#C8E6C9] text-[#191510] px-3.5 py-1.5 rounded-xs border border-black/10 shadow-[2px_3px_0px_rgba(25,21,16,0.15)]">
            <span className="font-handwriting font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
              Remote • India
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4. Mobile & Tablet Responsive Bottom Cluster (< md screens) */}
      <div className="w-full flex md:hidden flex-col items-center gap-2.5 mt-3 select-none">
        {/* Two Notes Side-by-Side */}
        <div className="flex items-center justify-center gap-4">
          <div className="bg-[#FED049] text-[#191510] px-3 py-1 rounded-xs border border-black/10 shadow-[1.5px_2px_0px_rgba(25,21,16,0.15)] -rotate-2">
            <span className="font-handwriting font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
              Full-Stack Developer
            </span>
          </div>
          <div className="bg-[#C8E6C9] text-[#191510] px-3 py-1 rounded-xs border border-black/10 shadow-[1.5px_2px_0px_rgba(25,21,16,0.15)] rotate-2">
            <span className="font-handwriting font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
              Remote • India
            </span>
          </div>
        </div>

        {/* Centered Status Line */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-2 justify-center px-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.6)] shrink-0" />
          <span className="font-mono-ui font-bold text-[9px] sm:text-[11px] tracking-tight sm:tracking-normal text-[#191510] uppercase whitespace-nowrap">
            OPEN TO INTERNSHIPS, PROJECTS & GOOD PROBLEMS
          </span>
        </motion.div>
      </div>
    </div>
  );
};
