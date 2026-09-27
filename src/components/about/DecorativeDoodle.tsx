import React from 'react';

// 1. Warm yellow/orange 4-point sparkle star (matching reference line 3)
export const SparkleDoodle: React.FC = () => (
  <span className="inline-flex items-center align-middle mx-1.5 -translate-y-1 select-none">
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-8 sm:h-8 text-[#FBBF24] drop-shadow-[1px_1.5px_0px_rgba(25,21,16,0.15)]"
      fill="currentColor"
    >
      <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
    </svg>
  </span>
);

// 2. Playful Developer Code Badge </> sticker (matching scrapbook sticker aesthetic)
export const CodeDoodle: React.FC = () => (
  <span className="inline-flex items-center align-middle mx-1.5 -translate-y-1 px-2 py-0.5 rounded-[4px] bg-[#FE4C82] text-white border-[1.5px] border-white shadow-[1px_1.5px_0px_rgba(25,21,16,0.15)] font-mono-ui font-extrabold text-xs sm:text-sm rotate-[-3.5deg] select-none hover:rotate-0 transition-transform">
    &lt;/&gt;
  </span>
);

// 3. Playful Terminal sticker (matching reference line 5 palette sticker)
export const TerminalDoodle: React.FC = () => (
  <span className="inline-flex items-center align-middle mx-1.5 -translate-y-0.5 p-1 rounded-full bg-[#00BA7C] text-white border-[1.5px] border-white shadow-[1px_1.5px_0px_rgba(25,21,16,0.15)] rotate-[4deg] select-none hover:rotate-0 transition-transform">
    <svg
      viewBox="0 0 20 20"
      className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-white"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 14 9 9.5 4 5" />
      <line x1="11" y1="15" x2="16" y2="15" />
    </svg>
  </span>
);
