import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-x-clip pt-12 sm:pt-16 pb-8 sm:pb-12 select-none">
      {/* 1. Curved Arch Separator Line spanning the full width */}
      <div className="w-full overflow-hidden mb-6 sm:mb-8">
        <svg
          viewBox="0 0 1440 80"
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

      {/* 2. Main Footer Content Container (Full-width with consistent minimal padding matching navbar) */}
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-10">
          {/* Left Column: UPENDRA + Role badge */}
          <div className="flex flex-col items-start">
            <h2
              className="font-pixel text-[#191510] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.88] uppercase tracking-tight"
              style={{ fontFamily: "'Jersey 15', monospace" }}
            >
              UPENDRA
            </h2>

            <div className="flex items-center gap-2.5 mt-2.5 sm:mt-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] inline-block shrink-0 shadow-[0_0_0_1px_rgba(25,21,16,0.1)]" />
              <span className="font-mono-ui font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#191510]">
                FULL-STACK DEVELOPER
              </span>
            </div>
          </div>

          {/* Right Column: Navigation Links + Social Badges */}
          <div className="flex flex-col items-start md:items-end gap-3.5 sm:gap-4">
            {/* Navigation links matching reference */}
            <nav className="flex items-center gap-6 sm:gap-8 font-mono-ui font-bold text-xs sm:text-[13px] tracking-wider uppercase text-[#191510]">
              <a
                href="#about"
                className="hover:opacity-65 transition-opacity"
              >
                ABOUT
              </a>
              <a
                href="#casestudy"
                className="hover:opacity-65 transition-opacity"
              >
                CASE STUDY
              </a>
              <a
                href="#playground"
                className="hover:opacity-65 transition-opacity"
              >
                PLAYGROUND
              </a>
            </nav>

            {/* Circular Social Sticker Badges matching reference */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Yellow Circular LinkedIn Badge (+20% scaled, pixel-aligned & GPU stabilized) */}
              <a
                href="https://www.linkedin.com/in/upendrasom1c/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#F7C94F] border-[1.8px] sm:border-2 border-white shadow-[1px_2px_0px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 ease-out origin-center transform-gpu will-change-transform shrink-0 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] pointer-events-none select-none shrink-0"
                  shapeRendering="geometricPrecision"
                >
                  <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#191510" />
                  <circle cx="7" cy="7.2" r="1.3" fill="#F7C94F" />
                  <rect x="5.7" y="9.8" width="2.6" height="7.7" rx="0.5" fill="#F7C94F" />
                  <path
                    d="M11 9.8 h2.5 v1.2 c0.6-0.9 1.6-1.4 2.8-1.4 2 0 3.2 1.3 3.2 3.6 v4.3 h-2.6 v-3.8 c0-1.1-0.5-1.8-1.5-1.8 -0.9 0-1.7 0.7-1.7 1.8 v3.8 h-2.7 z"
                    fill="#F7C94F"
                  />
                </svg>
              </a>

              {/* Pink Circular GitHub Badge (+20% scaled, pixel-aligned & GPU stabilized) */}
              <a
                href="https://github.com/upendra-devhub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#FE4C82] border-[1.8px] sm:border-2 border-white shadow-[1px_2px_0px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 ease-out origin-center transform-gpu will-change-transform shrink-0 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] fill-[#191510] pointer-events-none select-none shrink-0"
                  shapeRendering="geometricPrecision"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* Green Circular Instagram Badge (+20% scaled, pixel-aligned & GPU stabilized) */}
              <a
                href="https://www.instagram.com/anshusom1c/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#00BA7C] border-[1.8px] sm:border-2 border-white shadow-[1px_2px_0px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 ease-out origin-center transform-gpu will-change-transform shrink-0 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] pointer-events-none select-none shrink-0"
                  fill="none"
                  stroke="#191510"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shapeRendering="geometricPrecision"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="#191510" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Bottom Row: Copyright (MADE WITH PORTFOLIOFY completely removed) */}
        <div className="mt-10 sm:mt-14 pt-4 sm:pt-6 flex items-center justify-between text-xs text-neutral-500 font-mono-ui">
          <span>&copy; {new Date().getFullYear()} Upendra</span>
        </div>
      </div>
    </footer>
  );
};
