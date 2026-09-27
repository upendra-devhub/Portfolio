import React from 'react';
import { motion } from 'framer-motion';

interface SkillIconTileProps {
  bg: string;
  rotation?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export const SkillIconTile: React.FC<SkillIconTileProps> = ({
  bg,
  rotation = 0,
  delay = 0.1,
  children,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
      className={`inline-block filter drop-shadow-[1.5px_2.5px_0px_rgba(25,21,16,0.14)] hover:scale-110 transition-transform duration-150 cursor-default select-none ${className}`}
    >
      <div
        className="stamp-shape w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0"
        style={{
          backgroundColor: bg,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
