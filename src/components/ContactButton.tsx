import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ContactButtonProps {
  isRevealed: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ isRevealed }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
      className="mt-3 sm:mt-5 select-none"
    >
      <a
        href="#contact"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#191510] text-white rounded-[3px] border border-[#191510] shadow-[2px_2px_0px_rgba(0,0,0,0.25)] hover:bg-black hover:shadow-[3px_3px_0px_rgba(0,0,0,0.3)] transition-all duration-150 cursor-pointer"
      >
        {/* Blue Square with white Up-Right Arrow */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-[2px] bg-[#2563EB] flex items-center justify-center text-white shrink-0">
          <motion.div
            animate={{ x: isHovered ? 1.5 : 0, y: isHovered ? -1.5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.8]" />
          </motion.div>
        </div>

        {/* Monospaced Button Text */}
        <span className="font-mono-ui font-bold text-xs sm:text-sm tracking-wider uppercase">
          CONTACT ME
        </span>
      </a>
    </motion.div>
  );
};
