import React, { useState } from 'react';
import { IntroAnimation } from './IntroAnimation';
import { Navbar } from './Navbar';
import { NameDisplay } from './NameDisplay';
import { HeroHeadline } from './HeroHeadline';
import { ContactButton } from './ContactButton';
import { DecorativeElement } from './DecorativeElement';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';

interface HeroIntroTransitionProps {
  replayKey: number;
}

export const HeroIntroTransition: React.FC<HeroIntroTransitionProps> = ({
  replayKey,
}) => {
  const [isHomepageRevealed, setIsHomepageRevealed] = useState(false);

  // Reset homepage revealed state when replayKey increments
  React.useEffect(() => {
    setIsHomepageRevealed(false);
  }, [replayKey]);

  // Lock document scroll while loading screen is active
  React.useEffect(() => {
    if (!isHomepageRevealed) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isHomepageRevealed]);

  return (
    <div
      id="top"
      className={`w-full notebook-ruled-bg selection:bg-[#FED049] selection:text-[#191510] ${
        isHomepageRevealed
          ? 'relative min-h-screen flex flex-col justify-between overflow-x-clip'
          : 'fixed inset-0 h-screen overflow-hidden pointer-events-none'
      }`}
    >
      {/* Loading Screen Overlay - executes "Oh, hello!" -> "You found me!" */}
      <IntroAnimation
        key={replayKey}
        replayKey={replayKey}
        onTransitionStart={() => setIsHomepageRevealed(true)}
      />

      {/* Main Page: Hidden and inert until loading screen completes */}
      <div
        className={`w-full flex-1 flex flex-col justify-between transition-opacity duration-500 ${
          isHomepageRevealed
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* 1. Top Navbar (Fixed at top of viewport) */}
        <Navbar isRevealed={isHomepageRevealed} />
        <div className="h-[51px] sm:h-[54px] md:h-[56px] w-full shrink-0" />

        {/* 2. Main Hero Section (Wide & Prominent matching reference) */}
        <main className="relative flex-1 flex flex-col items-center justify-center py-4 sm:py-8 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 min-h-[calc(100vh-56px)]">
          {/* Grand Wide Name Display with Surrounding Reference Badges & Status */}
          <NameDisplay isRevealed={isHomepageRevealed} />

          {/* 3. Floating User Avatar (Enlarged 300% with bobbing loop animation) */}
          <DecorativeElement isRevealed={isHomepageRevealed} />

          {/* 4. Main Hero Headline */}
          <HeroHeadline isRevealed={isHomepageRevealed} />

          {/* 5. CTA Button: CONTACT ME */}
          <ContactButton isRevealed={isHomepageRevealed} />
        </main>

        {/* 3. About Section (Seamless natural document scroll directly underneath hero) */}
        <AboutSection isRevealed={isHomepageRevealed} />

        {/* 4. Projects Section: FEATURED WORKS with Sticky Stacking Cards */}
        <ProjectsSection isRevealed={isHomepageRevealed} />

        {/* Bottom baseline padding */}
        <footer className="w-full pb-8 sm:pb-12 text-center text-xs text-neutral-400 font-mono-ui select-none">
          <span>&copy; {new Date().getFullYear()} Upendra &bull; Built with care</span>
        </footer>
      </div>
    </div>
  );
};
