import React from 'react';

export const AboutDivider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none my-4 sm:my-6">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 md:h-16 lg:h-20 text-[#C4BFB3] overflow-visible"
      >
        <path
          d="M -20 72 C 400 0, 1040 0, 1460 72"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
    </div>
  );
};
