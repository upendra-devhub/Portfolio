import React from 'react';

export const AboutDivider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none my-4 sm:my-6">
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 text-[#D7D0C3]"
      >
        <path
          d="M -20 40 C 380 6, 1060 6, 1460 40"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
