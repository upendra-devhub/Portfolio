import React from 'react';
import { motion } from 'framer-motion';
import { SkillIcon } from './SkillIcon';
import type { SkillItem } from '../../data/skillsData';

// 4 distinct irregular torn-paper edge clip-paths for organic handmade feel
const tornClipVariants = [
  // Variant 0: Slight jagged edges left/right with organic corners
  'polygon(0% 8%, 2% 2%, 98% 3%, 100% 9%, 98.5% 22%, 100% 36%, 98% 50%, 99.5% 65%, 98% 80%, 100% 92%, 98% 98%, 2% 97%, 0% 91%, 1.5% 78%, 0% 64%, 2% 50%, 0.5% 36%, 2% 22%)',
  // Variant 1: Uneven hand-torn rip on corners
  'polygon(0% 4%, 3% 1%, 97% 2%, 100% 7%, 98% 18%, 99.5% 32%, 97.5% 46%, 100% 60%, 98% 74%, 99% 88%, 97% 99%, 3% 97%, 0% 93%, 1.8% 82%, 0% 68%, 2.2% 54%, 0% 40%, 1.5% 26%, 0% 12%)',
  // Variant 2: Rougher top and bottom torn edges
  'polygon(0% 6%, 2% 0%, 25% 2%, 50% 0%, 75% 2%, 98% 1%, 100% 6%, 98.5% 20%, 100% 40%, 98% 60%, 100% 80%, 98% 96%, 75% 99%, 50% 97%, 25% 100%, 2% 98%, 0% 94%, 1.5% 75%, 0% 55%, 2% 35%, 0% 18%)',
  // Variant 3: Clean tape-like torn ends
  'polygon(0% 10%, 2% 3%, 98% 2%, 100% 8%, 98% 25%, 100% 42%, 97.5% 58%, 100% 75%, 98% 92%, 97% 99%, 3% 98%, 0% 92%, 2% 76%, 0% 60%, 2.5% 44%, 0.5% 28%)',
];

interface SkillStripProps {
  skill: SkillItem;
  index: number;
}

export const SkillStrip: React.FC<SkillStripProps> = ({ skill, index }) => {
  const clipPath = tornClipVariants[skill.shapeVariant % tornClipVariants.length];
  // Fast, responsive stagger delay (max 0.2s)
  const delay = Math.min(index * 0.015, 0.2);

  return (
    <motion.div
      initial={{ opacity: 0.85, scale: 0.94, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block filter drop-shadow-[2px_3px_0px_rgba(25,21,16,0.13)] hover:scale-105 hover:-translate-y-1 hover:drop-shadow-[3px_5px_0px_rgba(25,21,16,0.18)] transition-all duration-200 cursor-default select-none group"
      style={{
        transform: `rotate(${skill.rotation}deg)`,
      }}
    >
      <div
        className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 flex items-center justify-center gap-2 sm:gap-2.5 transition-colors duration-200"
        style={{
          backgroundColor: skill.color,
          color: skill.textColor || '#191510',
          clipPath,
        }}
      >
        {/* Optional Logo / Icon */}
        {skill.icon && (
          <span className="opacity-90 shrink-0 group-hover:scale-110 transition-transform duration-200">
            <SkillIcon name={skill.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#191510]" />
          </span>
        )}

        {/* Technology Name */}
        <span className="font-mono-ui font-extrabold text-xs sm:text-sm md:text-[14px] tracking-wide whitespace-nowrap text-[#191510]">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};
