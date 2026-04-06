import React from 'react';
import { PortfolioData } from '../types';
import { GithubLogo, ArrowSquareOut, FolderOpen } from '@phosphor-icons/react';

interface ProjectsProps {
  data: PortfolioData['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-retro-bg relative">
      <div className="absolute inset-0 bg-halftone opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="retro-section-title text-retro-ink mb-4">
              FEATURED PROJECTS
            </h2>
            <p className="text-lg md:text-xl font-bold max-w-xl text-retro-ink/80">
              HIGHLIGHTS OF RECENT WORK: MOBILE APPS, FULL-STACK PLATFORMS, AND ML MODELS
            </p>
          </div>
          <a
            href="https://github.com/umernvd"
            target="_blank"
            rel="noopener noreferrer"
            className="
              retro-btn retro-btn-outline mt-6 md:mt-0
              inline-flex items-center gap-2
              hover:bg-retro-bg hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
            "
          >
            VIEW ALL <GithubLogo className="w-4 h-4" weight="bold" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, idx) => (
            <div 
              key={idx} 
              className={`
                retro-card bg-retro-white
                flex flex-col h-full
                ${idx % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'}
                hover:rotate-0 hover:-translate-y-2 hover:shadow-retro-xl
                transition-all duration-200
              `}
            >
              <div className="p-6 lg:p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-4 border-4 border-retro-ink shadow-retro-sm bg-retro-secondary">
                    <FolderOpen className="w-8 h-8" weight="bold" />
                  </div>
                  <a
                    href={project.link || "https://github.com/umernvd"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 border-4 border-retro-ink shadow-retro-sm bg-retro-white
                      hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                      transition-all duration-100
                    "
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubLogo className="w-6 h-6" weight="bold" />
                  </a>
                </div>

                <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight mb-4 text-retro-ink">
                  <a 
                    href={project.link || "https://github.com/umernvd"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-retro-tertiary transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="retro-badge font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {project.description.map((desc, dIdx) => (
                    <li 
                      key={dIdx} 
                      className="font-medium leading-relaxed flex items-start text-retro-ink/80"
                    >
                      <span className="mr-3 mt-2 w-2 h-2 bg-retro-accent flex-shrink-0 border-2 border-retro-ink"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 lg:p-8 border-t-4 border-retro-ink">
                <a
                  href={project.link || "https://github.com/umernvd"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    retro-btn retro-btn-outline w-full
                    inline-flex items-center justify-center gap-2
                    hover:bg-retro-bg hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                  "
                >
                  <ArrowSquareOut className="w-4 h-4" weight="bold" />
                  VIEW PROJECT
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
