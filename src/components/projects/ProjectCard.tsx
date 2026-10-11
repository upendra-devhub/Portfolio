import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  allProjects: ProjectItem[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  allProjects,
}) => {
  const isPink = project.theme === 'pink';

  return (
    <div className="w-full flex flex-col select-none filter drop-shadow-[0_12px_32px_rgba(25,21,16,0.2)]">
      {/* 1. File Folder Tabs Row */}
      <div className="flex items-end pl-2 sm:pl-4 overflow-x-auto no-scrollbar">
        {allProjects.slice(0, index + 1).map((p, tabIdx) => {
          const isCurrentTab = tabIdx === index;
          if (!isCurrentTab) {
            // Invisible placeholder reserving slot space for earlier project tabs
            return (
              <div
                key={p.number}
                aria-hidden="true"
                className="h-10 sm:h-12 px-5 sm:px-7 flex items-center gap-2 text-xs sm:text-[13px] font-mono-ui font-extrabold tracking-wider uppercase shrink-0 opacity-0 pointer-events-none select-none"
                style={{
                  paddingRight: '32px',
                  marginLeft: tabIdx > 0 ? '-10px' : '0',
                }}
              >
                <span className="text-[10px] sm:text-xs">✦</span>
                <span>PROJECT {p.number}</span>
              </div>
            );
          }
          return (
            <div
              key={p.number}
              className="h-10 sm:h-12 px-5 sm:px-7 flex items-center gap-2 text-xs sm:text-[13px] font-mono-ui font-extrabold tracking-wider uppercase shrink-0 z-20 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: p.tabBg,
                color: p.tabTextColor,
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
                paddingRight: '32px',
                marginLeft: tabIdx > 0 ? '-10px' : '0',
                borderTopLeftRadius: '6px',
              }}
            >
              <span className="text-[10px] sm:text-xs">✦</span>
              <span>PROJECT {p.number}</span>
            </div>
          );
        })}
      </div>

      {/* 2. Main Folder Card Body — +15% height increase via min-h and balanced padding */}
      <div
        className="w-full rounded-b-2xl sm:rounded-b-3xl rounded-tr-2xl sm:rounded-tr-3xl min-h-[670px] sm:min-h-[580px] lg:min-h-[592px] p-6 sm:p-10 lg:p-12 border-2 border-black/15 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: project.cardBg,
          color: project.textColor,
        }}
      >
        {/* Left Side: Metadata, Title, Description, Tags, Link */}
        <div className="w-full lg:w-[46%] flex flex-col justify-between self-stretch z-10">
          <div>
            {/* Top Dot & Date / Category with subtle live pulsing indicator */}
            <div className="flex items-center gap-2.5 font-mono-ui font-extrabold text-xs sm:text-[13px] tracking-widest uppercase opacity-85 mb-3 sm:mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-current" />
              </span>
              <span>{project.date}</span>
            </div>

            {/* Large Bold Modern Sans-Serif Title with subtle hover lift */}
            <motion.h3
              initial={{ opacity: 0.9, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-3 sm:mb-5 transition-transform duration-300 hover:translate-x-1 cursor-default"
            >
              {project.title}
            </motion.h3>

            {/* Concise Description */}
            <p className="font-display font-medium text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 max-w-lg mb-6 sm:mb-8 transition-opacity duration-300 hover:opacity-100">
              {project.description}
            </p>

            {/* Action Link: VIEW PROJECT with animated arrow */}
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link font-mono-ui font-extrabold text-xs sm:text-[13px] tracking-widest uppercase underline underline-offset-4 inline-flex items-center gap-2 hover:opacity-75 transition-all duration-200"
              >
                <span>VIEW PROJECT</span>
                <span className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Tags with subtle tactile hover interactions */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-8 sm:mt-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 sm:px-4 py-1.5 rounded-[2px] font-mono-ui font-extrabold text-[11px] sm:text-xs tracking-wider uppercase select-none shadow-[1.5px_2px_0px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-[2px_4px_0px_rgba(0,0,0,0.25)] active:translate-y-0 active:shadow-[1px_1px_0px_rgba(0,0,0,0.18)] transition-all duration-200 cursor-default ${
                  isPink
                    ? 'bg-[#191510] text-white hover:bg-neutral-900'
                    : 'bg-white text-[#191510] hover:bg-neutral-100'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Large Taped Project Screenshot */}
        <div className="w-full lg:w-[54%] relative flex items-center justify-center group/card">
          {/* Top-Left Corner Pale Blue Translucent Tape with subtle flutter effect on hover */}
          <div
            className="absolute -top-3 sm:-top-4 -left-2 sm:-left-3 w-16 sm:w-20 h-6 sm:h-7 z-20 pointer-events-none transition-transform duration-300 group-hover/card:rotate-[-18deg] group-hover/card:scale-105"
            style={{
              transform: 'rotate(-14deg)',
              backgroundColor: 'rgba(147, 197, 253, 0.85)',
              boxShadow: '1px 1.5px 3px rgba(25, 21, 16, 0.15)',
              clipPath:
                'polygon(0% 15%, 3% 0%, 97% 5%, 100% 20%, 98% 85%, 100% 100%, 3% 95%, 0% 80%)',
            }}
          />

          {/* Top-Right Corner Pale Yellow Translucent Tape with subtle flutter effect on hover */}
          <div
            className="absolute -top-3 sm:-top-4 -right-2 sm:-right-3 w-16 sm:w-20 h-6 sm:h-7 z-20 pointer-events-none transition-transform duration-300 group-hover/card:rotate-[20deg] group-hover/card:scale-105"
            style={{
              transform: 'rotate(16deg)',
              backgroundColor: 'rgba(254, 240, 138, 0.88)',
              boxShadow: '1px 1.5px 3px rgba(25, 21, 16, 0.15)',
              clipPath:
                'polygon(0% 5%, 3% 0%, 98% 10%, 100% 25%, 97% 90%, 100% 100%, 2% 95%, 0% 85%)',
            }}
          />

          {/* White Photo / Screenshot Paper Frame with tactile hover lift */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live project in a new tab`}
            className="block w-full bg-white p-2.5 sm:p-3.5 rounded-[2px] shadow-[4px_12px_36px_rgba(0,0,0,0.25)] border border-black/10 cursor-pointer overflow-hidden transition-all duration-500 ease-out group-hover/card:shadow-[6px_18px_44px_rgba(0,0,0,0.32)] group-hover/card:scale-[1.015]"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-900 rounded-[1px]">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-[1.035]"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
