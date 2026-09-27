import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface IntroCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode;
  className?: string;
}

export const cardEntranceVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const IntroCard: React.FC<IntroCardProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      layout
      variants={cardEntranceVariants}
      initial="hidden"
      animate="visible"
      transition={{
        layout: {
          duration: 0.35,
          ease: [0.25, 1, 0.5, 1],
        },
      }}
      className={`
        relative flex items-center justify-center
        h-[clamp(70px,8.18vw,83.7px)] min-w-[clamp(223px,24.55vw,251.1px)] max-w-[92vw]
        px-[clamp(20.5px,2.8vw,31.6px)]
        rounded-tl-none rounded-tr-[20.5px] rounded-br-[20.5px] rounded-bl-[20.5px]
        border-[2px] border-[#191510]
        bg-[#F7C94F] text-[#191510] cursor-default
        ${className}
      `}
      style={{
        willChange: 'transform, opacity, width',
      }}
      {...props}
    >
      <div className="flex items-center justify-center whitespace-nowrap">
        {children}
      </div>
    </motion.div>
  );
};
