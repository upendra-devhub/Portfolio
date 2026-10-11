import React from 'react';
import { motion } from 'framer-motion';

export const SmileySticker: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, rotate: -2, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.96 }}
      className="select-none flex items-center justify-center cursor-pointer"
    >
      <div className="relative w-36 h-36 min-[420px]:w-44 min-[420px]:h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 filter drop-shadow-[2px_4px_0px_rgba(25,21,16,0.12)]">
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes humanBlink {
              0%, 64% {
                transform: scaleY(1);
              }
              66.5% {
                transform: scaleY(0.08);
              }
              69% {
                transform: scaleY(1);
              }
              74.5% {
                transform: scaleY(1);
              }
              77% {
                transform: scaleY(0.08);
              }
              79.5%, 100% {
                transform: scaleY(1);
              }
            }
            .human-blink-eye {
              transform-box: fill-box;
              transform-origin: center;
              animation: humanBlink 4.6s infinite ease-in-out;
            }
          `}</style>

          {/* Main yellow body with solid black border */}
          <circle
            cx="81"
            cy="80"
            r="73"
            fill="#F0C34D"
            stroke="#191510"
            strokeWidth="3.8"
          />

          {/* Left vertical pill eye with human-like blinking animation */}
          <rect
            x="51.5"
            y="52.5"
            width="13"
            height="35"
            rx="6.5"
            fill="#191510"
            className="human-blink-eye"
          />

          {/* Right vertical pill eye with human-like blinking animation */}
          <rect
            x="97.5"
            y="52.5"
            width="13"
            height="35"
            rx="6.5"
            fill="#191510"
            className="human-blink-eye"
          />

          {/* Soft circular blush cheeks */}
          <circle
            cx="43.5"
            cy="96.5"
            r="10.5"
            fill="#F19464"
          />
          <circle
            cx="118.5"
            cy="96.5"
            r="10.5"
            fill="#F19464"
          />

          {/* Curved black smile passing alongside blush cheeks */}
          <path
            d="M 47 104 C 58 132, 104 132, 115 104"
            stroke="#191510"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  );
};
