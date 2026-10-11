import React from 'react';
import { ProjectsHeader } from './projects/ProjectsHeader';
import { ProjectCard } from './projects/ProjectCard';
import { projectsData } from '../data/projectsData';

interface ProjectsSectionProps {
  isRevealed?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <section
      id="casestudy"
      className="relative w-full overflow-x-clip pt-6 sm:pt-10 pb-4 sm:pb-6"
    >
      {/* 1. Header: "explore my work!" + "FEATURED WORKS" + Yellow Paper Banner */}
      <ProjectsHeader />

      {/* 2. Sticky Stacking Project Cards */}
      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 mt-4 sm:mt-8">
        {projectsData.map((project, index) => (
          <div
            key={project.number}
            className={`sticky ${index > 0 ? 'mt-[20vh] sm:mt-[32vh] lg:mt-[35vh]' : ''}`}
            style={{
              top: '76px',
              zIndex: 10 + index,
            }}
          >
            <ProjectCard
              project={project}
              index={index}
              allProjects={projectsData}
            />
          </div>
        ))}
        {/* Calibrated scroll runway: ends right as Card 2 completes its stack over Card 1,
            ensuring zero dead scroll when scrolling back towards the top */}
        <div
          className="w-full pointer-events-none"
          style={{
            height: 'max(30px, calc(100vh - 770px))',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
