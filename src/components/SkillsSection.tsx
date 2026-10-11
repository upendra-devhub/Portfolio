import React from 'react';
import { motion } from 'framer-motion';
import { SkillStrip } from './skills/SkillStrip';
import { skillsData } from '../data/skillsData';

interface SkillsSectionProps {
  isRevealed?: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  return (
    <section
      id="playground"
      className="relative w-full overflow-x-clip scroll-mt-16 sm:scroll-mt-20 pt-16 sm:pt-24 pb-14 sm:pb-18 lg:pb-20 select-none"
    >
      <div id="skills" className="sr-only" aria-hidden="true" />
      <div className="relative w-full max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {/* 1. Header: Casual Heading: "things i use" */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 md:mb-14 text-center inline-flex flex-col items-center"
        >
          <h3 className="font-handwriting font-bold text-[#191510] text-3xl sm:text-4xl md:text-[46px] tracking-tight">
            things i use
          </h3>

          {/* Hand-drawn curved underline accent */}
          <svg
            viewBox="0 0 110 12"
            className="w-24 sm:w-28 md:w-32 h-2.5 text-[#191510] -mt-1"
            fill="none"
          >
            <path
              d="M 5 8 C 30 2, 78 2, 105 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* 2. Flat Visual Inventory of Colorful Torn Paper Technology Strips */}
        {/* Responsive wrap: ~5-8 per row on desktop, ~3-5 on tablet, ~2-3 on mobile */}
        <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-4.5 max-w-4xl lg:max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillStrip
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
