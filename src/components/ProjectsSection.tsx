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
      <div className="relative w-full max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-8">
        {projectsData.map((project, index) => (
          <div
            key={project.number}
            className={`sticky ${index > 0 ? 'mt-[15vh] sm:mt-[22vh]' : ''}`}
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
        {/* Dynamic scroll runway: scales with viewport height so that Card 2
            is guaranteed to reach top: 76px and sit completely over Card 1
            on all displays (including 1080p, 1440p, laptops, and mobile) */}
        <div
          className="w-full pointer-events-none"
          style={{
            height: 'clamp(80px, calc(100vh - 640px + 120px), 650px)',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
