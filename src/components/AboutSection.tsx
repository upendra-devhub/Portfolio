import React from 'react';
import { AboutDivider } from './about/AboutDivider';
import { AboutLabel } from './about/AboutLabel';
import { AboutTitle } from './about/AboutTitle';
import { AboutStory } from './about/AboutStory';
import { PolaroidCard } from './about/PolaroidCard';
import { TornSkillStrip } from './about/TornSkillStrip';
import { SkillIconTile } from './about/SkillIconTile';

interface AboutSectionProps {
  isRevealed?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden pt-8 sm:pt-14 pb-20 sm:pb-28"
    >
      {/* 1. Curved Hand-Drawn Divider (Enters at transition boundary) */}
      <AboutDivider />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* 2. Handwritten Upper-Left Label: "about me!" */}
        <AboutLabel />

        {/* 3. Centered Outlined Stationery Label: "what's up" */}
        <AboutTitle />

        {/* 4. Central Story Paragraph flanked by Polaroids on Desktop */}
        <div className="relative w-full flex flex-col items-center justify-center my-4 sm:my-8 min-h-[360px]">
          {/* Desktop Left Polaroid (Absolute flanking on lg+) */}
          <div className="hidden lg:block lg:absolute lg:left-4 xl:left-8 lg:top-1/2 lg:-translate-y-1/2 z-10">
            <PolaroidCard
              imageSrc="/upendra.jpg"
              imageAlt="Upendra"
              caption="2026"
              rotation={-5.5}
              delay={0.15}
            />
          </div>

          {/* Central Handwritten Personal Story */}
          <div className="w-full max-w-[540px] md:max-w-[580px] lg:max-w-[630px] px-3 sm:px-4 z-0">
            <AboutStory />
          </div>

          {/* Desktop Right Polaroid (Absolute flanking on lg+) */}
          <div className="hidden lg:block lg:absolute lg:right-4 xl:right-8 lg:top-1/2 lg:-translate-y-1/2 z-10">
            <PolaroidCard
              imageSrc="/workspace.jpg"
              imageAlt="Developer Workspace"
              caption="my workspace"
              rotation={4.5}
              delay={0.2}
            />
          </div>
        </div>

        {/* Mobile & Tablet Polaroids (Ordered cleanly below story per specification) */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-6 sm:gap-10 my-8 sm:my-10">
          <PolaroidCard
            imageSrc="/upendra.jpg"
            imageAlt="Upendra"
            caption="2026"
            rotation={-4}
            delay={0.15}
          />
          <PolaroidCard
            imageSrc="/workspace.jpg"
            imageAlt="Developer Workspace"
            caption="my workspace"
            rotation={3.5}
            delay={0.2}
          />
        </div>

        {/* 5. Bottom Colorful Torn-Paper Skill Strips & Perforated Stamp Tiles */}
        <div className="mt-10 sm:mt-16 w-full flex flex-col items-center gap-3.5 sm:gap-4.5">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {/* Full-Stack Development (Yellow) */}
            <TornSkillStrip
              label="Full-Stack Development"
              bg="#FED049"
              textColor="#191510"
              rotation={-1.5}
              delay={0.1}
            />

            {/* Stamp 1: Pink </> code tile */}
            <SkillIconTile bg="#FCE7F3" rotation={2.5} delay={0.15}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DB2777"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </SkillIconTile>

            {/* React (Green) */}
            <TornSkillStrip
              label="React"
              bg="#00BA7C"
              textColor="#FFFFFF"
              rotation={1.2}
              delay={0.2}
            />

            {/* Stamp 2: Mint { } curly braces tile */}
            <SkillIconTile bg="#D1FAE5" rotation={-2} delay={0.25}>
              <span className="font-mono-ui font-extrabold text-[#059669] text-sm sm:text-base leading-none">
                &#123;&#125;
              </span>
            </SkillIconTile>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {/* Node.js (Pink) */}
            <TornSkillStrip
              label="Node.js"
              bg="#FE4C82"
              textColor="#FFFFFF"
              rotation={-2}
              delay={0.25}
            />

            {/* Stamp 3: Amber Database tile */}
            <SkillIconTile bg="#FEF3C7" rotation={3} delay={0.3}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D97706"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </SkillIconTile>

            {/* MongoDB (Blue) */}
            <TornSkillStrip
              label="MongoDB"
              bg="#2563EB"
              textColor="#FFFFFF"
              rotation={1.5}
              delay={0.35}
            />

            {/* Stamp 4: Sky Blue Lightbulb tile */}
            <SkillIconTile bg="#DBEAFE" rotation={-2.5} delay={0.4}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D4ED8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="9" y1="18" x2="15" y2="18" />
                <line x1="10" y1="22" x2="14" y2="22" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
              </svg>
            </SkillIconTile>

            {/* Problem Solving (Purple) */}
            <TornSkillStrip
              label="Problem Solving"
              bg="#8B5CF6"
              textColor="#FFFFFF"
              rotation={-1}
              delay={0.45}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
