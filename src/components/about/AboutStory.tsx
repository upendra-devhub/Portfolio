import React from 'react';
import { motion } from 'framer-motion';
import { SparkleDoodle, CodeDoodle, TerminalDoodle } from './DecorativeDoodle';

export const AboutStory: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="text-center select-none"
    >
      <p className="font-handwriting font-semibold text-[#191510] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] leading-[1.5] sm:leading-[1.55] tracking-tight">
        I&apos;m a Computer Science student who gets a little too excited about building things that actually work.
        <SparkleDoodle />
        I like turning ideas into clean, useful software, getting stuck on complicated problems, and then simplifying them until they make sense.
        <CodeDoodle />
        I care about the details, the edge cases everyone forgets, and shipping projects that genuinely make someone&apos;s day easier.
        <TerminalDoodle />
      </p>
    </motion.div>
  );
};
