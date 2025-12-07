import React from 'react';
import { PortfolioData } from '../types';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

interface ProjectsProps {
  data: PortfolioData['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-stone-50 dark:bg-[#1a2015] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl font-bold text-stone-900 dark:text-beige sm:text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-xl">
              Highlights of my recent work, ranging from mobile apps to full-stack web platforms and ML models.
            </p>
          </div>
          <a 
            href="https://github.com/umernvd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center font-medium text-primary hover:text-[#4a5e29] transition-colors"
          >
            View all on GitHub <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, idx) => (
            <div key={idx} className="card-glow bg-beige dark:bg-[#252e1f] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-primary dark:border-beige flex flex-col h-full group">
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <a 
                    href={project.link || "https://github.com/umernvd"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-900 dark:hover:text-beige transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-stone-900 dark:text-beige mb-2 group-hover:text-primary transition-colors">
                  <a href={project.link || "https://github.com/umernvd"} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold px-2.5 py-0.5 rounded bg-stone-100 dark:bg-[#2f3a27] text-stone-600 dark:text-stone-300 uppercase tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed flex items-start">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a 
            href="https://github.com/umernvd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-primary hover:text-[#4a5e29] transition-colors"
          >
            View all on GitHub <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;