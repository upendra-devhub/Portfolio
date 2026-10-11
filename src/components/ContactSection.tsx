import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SmileySticker } from './contact/SmileySticker';
import { RoughYellowContainer } from './contact/RoughYellowContainer';
import { navigate } from '../utils/navigation';

interface ContactSectionProps {
  isRevealed?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [isMailHovered, setIsMailHovered] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full overflow-x-clip scroll-mt-16 sm:scroll-mt-20 pt-10 sm:pt-14 md:pt-18 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 select-none"
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {/* 1. Large Hand-Drawn Yellow Smiley Illustration */}
        <SmileySticker />

        {/* 2. Bold Pixel Display Heading: LET'S TALK */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="mt-5 sm:mt-7 md:mt-8 text-center"
        >
          <h2
            className="font-pixel text-[#191510] text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[112px] leading-[0.88] tracking-tight uppercase"
            style={{ fontFamily: "'Jersey 15', monospace" }}
          >
            LET&apos;S TALK
          </h2>
        </motion.div>

        {/* 3. Casual Handwritten Supporting Message */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className="mt-3.5 sm:mt-4 text-center max-w-2xl lg:max-w-3xl px-4"
        >
          <p
            className="text-xl sm:text-2xl md:text-[25px] text-[#191510] leading-relaxed tracking-normal"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Got a project, a hard problem, or just want to say hi? Send
            <br className="hidden sm:inline" /> it over. I read every message.
          </p>
        </motion.div>

        {/* 4. Large Yellow Contact Box with Rough Hand-Drawn Outlines (~60% vw, ~45-50% vh) */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 w-full max-w-[94vw] sm:max-w-[85vw] md:max-w-[72vw] lg:max-w-[60vw] xl:max-w-[880px] px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="relative w-full group/contact"
          >
            {/* Top-Left Diagonal Scotch Tape Strip (Going across corner like project section) */}
            <div
              className="absolute top-4 sm:top-3.5 md:top-4 -left-3 sm:-left-4 md:-left-4 w-20 sm:w-24 md:w-28 h-7 sm:h-8 z-20 pointer-events-none transition-transform duration-300 group-hover/contact:rotate-[-24deg] group-hover/contact:scale-105"
              style={{
                transform: 'rotate(-20deg)',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(2px)',
                boxShadow: '0 2px 5px rgba(25, 21, 16, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.7)',
                clipPath: 'polygon(0% 15%, 3% 0%, 97% 5%, 100% 20%, 98% 85%, 100% 100%, 3% 95%, 0% 80%)',
              }}
              aria-hidden="true"
            />

            {/* Top-Right Diagonal Scotch Tape Strip (Going across corner like project section) */}
            <div
              className="absolute top-3.5 sm:top-3 md:top-3.5 -right-3 sm:-right-4 md:-right-4 w-20 sm:w-24 md:w-28 h-7 sm:h-8 z-20 pointer-events-none transition-transform duration-300 group-hover/contact:rotate-[24deg] group-hover/contact:scale-105"
              style={{
                transform: 'rotate(20deg)',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(2px)',
                boxShadow: '0 2px 5px rgba(25, 21, 16, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.7)',
                clipPath: 'polygon(0% 5%, 3% 0%, 98% 10%, 100% 25%, 97% 90%, 100% 100%, 2% 95%, 0% 85%)',
              }}
              aria-hidden="true"
            />

            {/* Rough Organic Hand-Drawn Yellow Box Container */}
            <RoughYellowContainer className="min-h-[300px] sm:min-h-[350px] md:min-h-[44vh] lg:min-h-[48vh] py-10 sm:py-12 md:py-14 lg:py-16 px-6 sm:px-12 md:px-16">
              {/* Handwritten Lead: let's make something together */}
              <p
                className="font-handwriting text-lg sm:text-xl md:text-2xl lg:text-[26px] text-[#191510] mb-2 sm:mb-3 md:mb-4 tracking-tight"
                style={{ fontFamily: "'Architects Daughter', cursive" }}
              >
                let&apos;s make something together
              </p>

              {/* Giant Pixel Heading: CONTACT */}
              <h3
                className="font-pixel text-[#191510] text-6xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[124px] leading-none tracking-tight uppercase my-2 sm:my-4 md:my-5"
                style={{ fontFamily: "'Jersey 15', monospace" }}
              >
                CONTACT
              </h3>

              {/* Action Link: DROP A MAIL ↗ (Navigates to the dedicated Contact Page) */}
              <div className="mt-3 sm:mt-5 md:mt-6 inline-block">
                <motion.a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');
                  }}
                  onMouseEnter={() => setIsMailHovered(true)}
                  onMouseLeave={() => setIsMailHovered(false)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 font-mono-ui font-bold text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-[#191510] border-b-2 border-[#191510] pb-1 cursor-pointer transition-colors duration-200 hover:text-black"
                >
                  <span>DROP A MAIL</span>
                  <motion.span
                    animate={{
                      x: isMailHovered ? 2.5 : 0,
                      y: isMailHovered ? -2.5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    ↗
                  </motion.span>
                </motion.a>
              </div>
            </RoughYellowContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
