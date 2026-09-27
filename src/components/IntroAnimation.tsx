import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroCard } from './IntroCard';
import { IntroText, type TextState } from './IntroText';

export type IntroPhase =
  | 'blank'
  | 'card_enter'
  | 'phrase_one_typing'
  | 'phrase_one_revealed'
  | 'phrase_one_exit'
  | 'empty_hold'
  | 'phrase_two_typing'
  | 'final_hold'
  | 'transition'
  | 'complete';

interface IntroAnimationProps {
  onTransitionStart?: () => void;
  onComplete?: () => void;
  speedMultiplier?: number;
  replayKey?: number;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({
  onTransitionStart,
  onComplete,
  speedMultiplier = 1,
  replayKey = 0,
}) => {
  const [phase, setPhase] = React.useState<IntroPhase>('blank');

  // Keep stable refs to callbacks
  const onTransitionStartRef = React.useRef(onTransitionStart);
  React.useEffect(() => {
    onTransitionStartRef.current = onTransitionStart;
  }, [onTransitionStart]);

  const onCompleteRef = React.useRef(onComplete);
  React.useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Orchestrated deterministic timeline
  React.useEffect(() => {
    let isCancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!isCancelled) fn();
      }, ms / speedMultiplier);
      timeouts.push(id);
    };

    // Phase 1: Blank notebook paper background (~240ms)
    setPhase('blank');

    // Phase 2: Yellow card entrance (~380ms animation)
    schedule(() => {
      setPhase('card_enter');
    }, 240);

    // Phase 3: "Oh, hello!" starts typing character-by-character (~450ms)
    schedule(() => {
      setPhase('phrase_one_typing');
    }, 620);

    // Phase 4: "Oh, hello!" fully revealed, holds for reading (~650ms)
    schedule(() => {
      setPhase('phrase_one_revealed');
    }, 1120);

    // Phase 5: "Oh, hello!" rapidly disappears as a complete phrase (~120ms)
    schedule(() => {
      setPhase('phrase_one_exit');
    }, 1780);

    // Phase 6: Empty card brief pause (~120ms)
    schedule(() => {
      setPhase('empty_hold');
    }, 1900);

    // Phase 7: "You found me!" character-by-character reveal (13 chars * 44ms = ~570ms)
    schedule(() => {
      setPhase('phrase_two_typing');
    }, 2020);

    // Phase 8: Final hold (~480ms hold with text & card perfectly still)
    schedule(() => {
      setPhase('final_hold');
    }, 2640);

    // Phase 9: Transition release - card lifts/fades away while homepage reveals underneath
    schedule(() => {
      setPhase('transition');
      onTransitionStartRef.current?.();
    }, 3140);

    // Phase 10: Complete
    schedule(() => {
      setPhase('complete');
      onCompleteRef.current?.();
    }, 3550);

    return () => {
      isCancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [speedMultiplier, replayKey]);

  // Map IntroPhase to IntroText state
  const getTextState = (): TextState => {
    switch (phase) {
      case 'blank':
      case 'card_enter':
      case 'empty_hold':
        return 'empty';
      case 'phrase_one_typing':
        return 'phrase_one_typing';
      case 'phrase_one_revealed':
        return 'phrase_one_revealed';
      case 'phrase_one_exit':
        return 'phrase_one_exit';
      case 'phrase_two_typing':
        return 'phrase_two_typing';
      case 'final_hold':
      case 'transition':
      case 'complete':
        return 'phrase_two_revealed';
      default:
        return 'empty';
    }
  };

  const isIntroOverlayVisible = phase !== 'complete';
  const isCardVisible =
    phase !== 'blank' && phase !== 'transition' && phase !== 'complete';

  return (
    <AnimatePresence>
      {isIntroOverlayVisible && (
        <motion.div
          key="loading-screen-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 w-screen h-screen flex items-center justify-center select-none pointer-events-auto notebook-ruled-bg z-50 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isCardVisible && (
              <motion.div
                key="intro-card-wrapper"
                exit={{
                  opacity: 0,
                  y: -12,
                  scale: 0.95,
                  transition: {
                    duration: 0.38,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
              >
                <IntroCard>
                  <IntroText state={getTextState()} />
                </IntroCard>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
