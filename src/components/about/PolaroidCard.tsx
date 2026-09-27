import React from 'react';
import { motion } from 'framer-motion';

interface PolaroidCardProps {
  imageSrc: string;
  imageAlt: string;
  caption: string;
  rotation?: number; // degrees
  delay?: number;
  className?: string;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageSrc,
  imageAlt,
  caption,
  rotation = 0,
  delay = 0.1,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotation * 0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={`relative select-none group ${className}`}
      style={{ transformOrigin: 'center center' }}
    >
      {/* Tape Strip Top-Left (Pale Sky Blue translucent tape) */}
      <div
        className="absolute -top-3.5 -left-4 w-12 sm:w-14 h-5 sm:h-5.5 z-20 pointer-events-none"
        style={{
          transform: 'rotate(-35deg)',
          backgroundColor: 'rgba(147, 197, 253, 0.82)',
          boxShadow: '1px 1.5px 3px rgba(25, 21, 16, 0.12)',
          clipPath:
            'polygon(0% 15%, 3% 0%, 97% 5%, 100% 20%, 98% 85%, 100% 100%, 3% 95%, 0% 80%)',
        }}
      />

      {/* Tape Strip Top-Right (Pale Yellow translucent tape) */}
      <div
        className="absolute -top-3 -right-4 w-12 sm:w-14 h-5 sm:h-5.5 z-20 pointer-events-none"
        style={{
          transform: 'rotate(28deg)',
          backgroundColor: 'rgba(254, 240, 138, 0.85)',
          boxShadow: '1px 1.5px 3px rgba(25, 21, 16, 0.12)',
          clipPath:
            'polygon(0% 5%, 3% 0%, 98% 10%, 100% 25%, 97% 90%, 100% 100%, 2% 95%, 0% 85%)',
        }}
      />

      {/* Physical Polaroid Card Frame */}
      <div className="bg-white p-2.5 sm:p-3 pb-7 sm:pb-9 border border-[#E5E5E2] rounded-[1px] shadow-[2px_8px_24px_rgba(25,21,16,0.12),_0_2px_4px_rgba(25,21,16,0.06)] group-hover:shadow-[3px_12px_32px_rgba(25,21,16,0.16)] transition-all duration-300 w-[185px] sm:w-[210px] lg:w-[220px] xl:w-[230px]">
        {/* Inner Photograph */}
        <div className="w-full aspect-[4/4.8] overflow-hidden bg-[#F2F1ED] border border-black/5 rounded-[1px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Handwritten Bottom Caption */}
        <div className="mt-2.5 sm:mt-3 text-center">
          <span className="font-handwriting font-bold text-[#2A241C] text-lg sm:text-xl tracking-tight">
            {caption}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
