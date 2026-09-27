import React from 'react';
import { motion } from 'framer-motion';

interface TornSkillStripProps {
  label: string;
  bg: string;
  textColor?: string;
  rotation?: number;
  delay?: number;
  className?: string;
}

export const TornSkillStrip: React.FC<TornSkillStripProps> = ({
  label,
  bg,
  textColor = '#ffffff',
  rotation = 0,
  delay = 0.1,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
      className={`inline-block filter drop-shadow-[2px_3px_0px_rgba(25,21,16,0.14)] hover:scale-105 transition-transform duration-150 cursor-default select-none ${className}`}
    >
      <div
        className="torn-shape px-5 sm:px-7 py-2 sm:py-2.5 font-display font-extrabold text-base sm:text-lg md:text-[18.5px] tracking-tight whitespace-nowrap flex items-center justify-center"
        style={{
          backgroundColor: bg,
          color: textColor,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {label}
      </div>
    </motion.div>
  );
};
