import React from 'react';
import { motion } from 'framer-motion';

export type TextState =
  | 'empty'
  | 'phrase_one_typing'
  | 'phrase_one_revealed'
  | 'phrase_one_exit'
  | 'phrase_two_typing'
  | 'phrase_two_revealed';

interface IntroTextProps {
  state: TextState;
}

const phraseOne = 'Oh, hello!';
const phraseTwo = 'You found me!';

const phraseOneCharacters = Array.from(phraseOne);
const phraseTwoCharacters = Array.from(phraseTwo);

// Stagger container variants for sequential character reveal
const charContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.044, // tight and consistent typewriter/text-reveal timing (~44ms per char)
      delayChildren: 0.04,
    },
  },
};

// Individual character variants
const singleCharVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: 'easeOut' as const,
    },
  },
};

// Common font typography class - EXACT same font size across both phrases, scaled down by 7%
const sharedTypographyClass =
  'flex items-center justify-center font-sans font-medium text-[clamp(28px,3.63vw,38.1px)] tracking-[-0.015em] leading-none whitespace-nowrap';

export const IntroText: React.FC<IntroTextProps> = ({ state }) => {
  if (state === 'empty') {
    return null;
  }

  // Phase 3 & 4: "Oh, hello!" - animated character-by-character, then exited rapidly as a whole unit
  if (
    state === 'phrase_one_typing' ||
    state === 'phrase_one_revealed' ||
    state === 'phrase_one_exit'
  ) {
    const isExiting = state === 'phrase_one_exit';
    const isTyping = state === 'phrase_one_typing';

    return (
      <motion.div
        key="phrase_one"
        initial={isTyping ? 'hidden' : 'visible'}
        animate={isExiting ? { opacity: 0, y: -1 } : 'visible'}
        variants={charContainerVariants}
        transition={
          isExiting
            ? {
                duration: 0.12,
                ease: 'easeIn',
              }
            : undefined
        }
        className={sharedTypographyClass}
      >
        {phraseOneCharacters.map((char, index) => (
          <motion.span
            key={`p1-char-${index}-${char}`}
            variants={singleCharVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Phase 5, 6, 7 & Complete: "You found me!" rendered at the EXACT SAME FONT SIZE
  if (state === 'phrase_two_typing' || state === 'phrase_two_revealed') {
    const isTyping = state === 'phrase_two_typing';

    return (
      <motion.div
        key="phrase_two"
        variants={charContainerVariants}
        initial={isTyping ? 'hidden' : 'visible'}
        animate="visible"
        className={sharedTypographyClass}
      >
        {phraseTwoCharacters.map((char, index) => (
          <motion.span
            key={`p2-char-${index}-${char}`}
            variants={singleCharVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return null;
};
