import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isRevealed: boolean;
}

// 1. Pink Smiley Badge Icon (Far Left)
const SmileyIcon = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4 sm:w-[18px] sm:h-[18px] overflow-visible" fill="none">
    <circle cx="6.5" cy="8" r="1.3" fill="white" />
    <circle cx="13.5" cy="8" r="1.3" fill="white" />
    <path
      d="M5.8 11.8 C7.2 15 12.8 15 14.2 11.8"
      stroke="white"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

// 2. Star Sticker in HOME Tab
const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 sm:w-[18px] sm:h-[18px] overflow-visible shrink-0"
    style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))' }}
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="#191510"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. User Silhouette Icon for ABOUT
const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 overflow-visible shrink-0"
    style={{ filter: 'drop-shadow(1px 1px 0px #ffffff) drop-shadow(1px 1px 0px rgba(0,0,0,0.12))' }}
  >
    <circle cx="12" cy="7.5" r="4" fill="#191510" />
    <path
      d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
      fill="#191510"
    />
  </svg>
);

// 4. 2x2 Grid Icon for CASE STUDY
const GridIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 overflow-visible shrink-0"
    style={{ filter: 'drop-shadow(1px 1px 0px #ffffff) drop-shadow(1px 1px 0px rgba(0,0,0,0.12))' }}
  >
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.2" fill="#191510" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.2" fill="#191510" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.2" fill="#191510" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.2" fill="#191510" />
  </svg>
);

// 5. Diamond Icon for PLAYGROUND
const DiamondIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 overflow-visible shrink-0"
    style={{ filter: 'drop-shadow(1px 1px 0px #ffffff) drop-shadow(1px 1px 0px rgba(0,0,0,0.12))' }}
  >
    <rect x="6" y="6" width="12" height="12" rx="1.5" transform="rotate(45 12 12)" fill="#191510" />
  </svg>
);

// 6. Yellow Circular LinkedIn Badge (+15% scaled: 29px-31px)
const LinkedInBadge = () => (
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
    className="w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] rounded-full bg-[#F7C94F] border-[1.5px] border-white shadow-[1px_1.5px_0px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shrink-0"
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#191510" />
      <circle cx="7" cy="7.5" r="1.3" fill="#F7C94F" />
      <rect x="5.7" y="10" width="2.6" height="7.5" rx="0.5" fill="#F7C94F" />
      <path
        d="M11 10 h2.5 v1.2 c0.6-0.9 1.6-1.4 2.8-1.4 2 0 3.2 1.3 3.2 3.6 v4.1 h-2.6 v-3.8 c0-1.1-0.5-1.8-1.5-1.8 -0.9 0-1.7 0.7-1.7 1.8 v3.8 h-2.7 z"
        fill="#F7C94F"
      />
    </svg>
  </a>
);

// 7. Pink Circular GitHub Badge (+15% scaled: 29px-31px)
const GithubBadge = () => (
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
    className="w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] rounded-full bg-[#FE4C82] border-[1.5px] border-white shadow-[1px_1.5px_0px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shrink-0"
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#191510]">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  </a>
);

// 8. Green Circular Instagram Badge (+15% scaled: 29px-31px)
const InstagramBadge = () => (
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
    className="w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] rounded-full bg-[#00BA7C] border-[1.5px] border-white shadow-[1px_1.5px_0px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shrink-0"
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#191510" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="#191510" />
    </svg>
  </a>
);

// 9. White Boxy CONTACT Button with Heart Icon (Desktop: +15% wider, h-[32px] sm:h-[34px], px-4)
const ContactButtonNav = () => (
  <a
    href="#contact"
    className="h-[35px] sm:h-[38px] px-3.5 sm:px-4 bg-white border-2 border-[#191510] shadow-[1.5px_2px_0px_#C8C7C5] flex items-center gap-2 rounded-[2px] hover:translate-x-[0.5px] hover:translate-y-[0.5px] active:translate-x-[1px] active:translate-y-[1px] transition-all shrink-0 ml-1.5 cursor-pointer"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 sm:w-4 sm:h-4 overflow-visible shrink-0"
      style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.15))' }}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#191510"
      />
    </svg>
    <span className="font-bold font-sans text-xs sm:text-[13px] tracking-wider text-[#191510] whitespace-nowrap">
      CONTACT
    </span>
  </a>
);

// 10. Square Hamburger Button (Mobile: scaled for taller navbar)
const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    className="w-[35px] h-[35px] bg-white border-2 border-[#191510] shadow-[1.5px_2px_0px_#C8C7C5] flex flex-col items-center justify-center gap-[3.5px] rounded-[1px] hover:translate-x-[0.5px] hover:translate-y-[0.5px] active:translate-x-[1px] active:translate-y-[1px] transition-all shrink-0 ml-1.5 cursor-pointer"
  >
    {isOpen ? (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 stroke-[#191510]"
        strokeWidth="2.6"
        strokeLinecap="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        className="w-4.5 h-4.5 stroke-[#191510]"
        strokeWidth="2.6"
        strokeLinecap="round"
      >
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </svg>
    )}
  </button>
);

export const Navbar: React.FC<NavbarProps> = ({ isRevealed }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'casestudy'>('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const caseStudyElem = document.getElementById('casestudy');
      const aboutElem = document.getElementById('about');

      if (caseStudyElem) {
        const caseRect = caseStudyElem.getBoundingClientRect();
        if (caseRect.top <= window.innerHeight * 0.45) {
          setActiveSection('casestudy');
          return;
        }
      }

      if (aboutElem) {
        const aboutRect = aboutElem.getBoundingClientRect();
        if (aboutRect.top <= window.innerHeight * 0.55) {
          setActiveSection('about');
          return;
        }
      }

      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
      className="fixed top-0 left-0 w-full bg-[#FCFCFB] border-b border-[#E5E5E2] z-40 select-none"
    >
      {/* Navbar Bar: Height increased by 10% to h-[51px] sm:h-[54px] md:h-[56px] */}
      <div className="w-full h-[51px] sm:h-[54px] md:h-[56px] flex items-center justify-between">
        {/* Left side: Pink Smiley (+ Desktop Signature Yellow Active Tab & Nav Links) */}
        <div className="flex items-center h-full">
          {/* Pink Smiley Face Badge */}
          <div className="pl-3.5 sm:pl-5 md:pl-6 pr-2.5 sm:pr-4 flex items-center">
            <a
              href="#top"
              aria-label="Home Smiley"
              title="Upendra"
              className="w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] rounded-full bg-[#FE4C82] border-[1.5px] border-white shadow-[1px_1.5px_0px_rgba(0,0,0,0.18)] flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform"
            >
              <SmileyIcon />
            </a>
          </div>

          {/* Desktop-only: Signature Yellow Active Tab & Navigation Links */}
          <nav className="hidden md:flex items-center h-full text-[#191510]">
            {/* HOME item / tab */}
            {activeSection === 'home' ? (
              <div className="h-full bg-[#F7C94F] flex items-center px-4.5 md:px-6 gap-2 cursor-pointer">
                <StarIcon />
                <span className="font-bold font-sans text-[13px] md:text-[14px] tracking-wider text-[#191510]">
                  HOME
                </span>
              </div>
            ) : (
              <a
                href="#top"
                className="h-full flex items-center px-4.5 md:px-5 gap-2 hover:bg-black/5 transition-colors font-bold font-sans text-[13px] md:text-[14px] tracking-wider"
              >
                <StarIcon />
                <span>HOME</span>
              </a>
            )}

            {/* ABOUT item / tab */}
            {activeSection === 'about' ? (
              <div className="h-full bg-[#F7C94F] flex items-center px-4.5 md:px-6 gap-2 cursor-pointer">
                <UserIcon />
                <span className="font-bold font-sans text-[13px] md:text-[14px] tracking-wider text-[#191510]">
                  ABOUT
                </span>
              </div>
            ) : (
              <a
                href="#about"
                className="h-full flex items-center px-4.5 md:px-5 gap-2 hover:bg-black/5 transition-colors font-bold font-sans text-[13px] md:text-[14px] tracking-wider"
              >
                <UserIcon />
                <span>ABOUT</span>
              </a>
            )}

            {/* CASE STUDY item / tab */}
            {activeSection === 'casestudy' ? (
              <div className="h-full bg-[#F7C94F] flex items-center px-4.5 md:px-6 gap-2 cursor-pointer">
                <GridIcon />
                <span className="font-bold font-sans text-[13px] md:text-[14px] tracking-wider text-[#191510] whitespace-nowrap">
                  CASE STUDY
                </span>
              </div>
            ) : (
              <a
                href="#casestudy"
                className="h-full flex items-center px-4.5 md:px-5 gap-2 hover:bg-black/5 transition-colors font-bold font-sans text-[13px] md:text-[14px] tracking-wider"
              >
                <GridIcon />
                <span className="whitespace-nowrap">CASE STUDY</span>
              </a>
            )}

            {/* PLAYGROUND */}
            <a
              href="#playground"
              className="hidden lg:flex h-full items-center px-4.5 md:px-5 gap-2 hover:bg-black/5 transition-colors font-bold font-sans text-[13px] md:text-[14px] tracking-wider"
            >
              <DiamondIcon />
              <span>PLAYGROUND</span>
            </a>
          </nav>
        </div>

        {/* Right side: 3 Circular Social Badges + (Desktop: CONTACT button / Mobile: Square Hamburger button) */}
        <div className="flex items-center gap-2.5 sm:gap-3 pr-3.5 sm:pr-5 md:pr-6">
          {/* Yellow LinkedIn Badge */}
          <LinkedInBadge />

          {/* Pink GitHub Badge (replacing Dribbble) */}
          <GithubBadge />

          {/* Green Instagram Badge */}
          <InstagramBadge />

          {/* Desktop CONTACT Button (+15% wider) */}
          <div className="hidden md:block">
            <ContactButtonNav />
          </div>

          {/* Mobile Square Hamburger Button (+15% wider) */}
          <div className="block md:hidden">
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden w-full bg-[#FCFCFB] border-t border-[#E5E5E2] px-4 py-3.5 flex flex-col gap-2.5 shadow-lg overflow-hidden"
          >
            <a
              href="#top"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-md font-bold font-sans text-xs sm:text-[13px] tracking-wider transition-colors ${
                activeSection === 'home'
                  ? 'bg-[#F7C94F] border border-[#191510] text-[#191510] shadow-[1px_1px_0px_#191510]'
                  : 'text-[#191510] hover:bg-black/5'
              }`}
            >
              <StarIcon />
              <span>HOME</span>
            </a>

            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-md font-bold font-sans text-xs sm:text-[13px] tracking-wider transition-colors ${
                activeSection === 'about'
                  ? 'bg-[#F7C94F] border border-[#191510] text-[#191510] shadow-[1px_1px_0px_#191510]'
                  : 'text-[#191510] hover:bg-black/5'
              }`}
            >
              <UserIcon />
              <span>ABOUT</span>
            </a>

            <a
              href="#casestudy"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-md font-bold font-sans text-xs sm:text-[13px] tracking-wider transition-colors ${
                activeSection === 'casestudy'
                  ? 'bg-[#F7C94F] border border-[#191510] text-[#191510] shadow-[1px_1px_0px_#191510]'
                  : 'text-[#191510] hover:bg-black/5'
              }`}
            >
              <GridIcon />
              <span>CASE STUDY</span>
            </a>

            <a
              href="#playground"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-md text-[#191510] hover:bg-black/5 font-bold font-sans text-xs sm:text-[13px] tracking-wider transition-colors"
            >
              <DiamondIcon />
              <span>PLAYGROUND</span>
            </a>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-white border-2 border-[#191510] text-[#191510] font-bold font-sans text-xs sm:text-[13px] tracking-wider shadow-[1.5px_2px_0px_#C8C7C5] transition-transform active:translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 overflow-visible shrink-0"
                style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.15))' }}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#191510"
                />
              </svg>
              <span>CONTACT</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
