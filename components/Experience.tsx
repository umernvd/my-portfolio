import React from 'react';
import { PortfolioData } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  data: PortfolioData['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-neo-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="neo-section-title text-neo-ink mb-12 text-center">
          EXPERIENCE
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-4 bg-neo-ink transform md:-translate-x-1/2"></div>
          
          {data.map((exp, idx) => (
            <div key={idx} className="relative pl-12 md:pl-0 mb-12 last:mb-0">
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 border-4 border-neo-ink bg-neo-accent shadow-neo-md transform md:-translate-x-1/2 flex items-center justify-center">
                <Briefcase className="w-4 h-4 stroke-[3px] text-neo-white" />
              </div>

              <div className={`
                neo-card bg-neo-white
                md:w-[calc(50%-2rem)] md:ml-auto
                ${idx % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto'}
                rotate-1 hover:rotate-0 hover:-translate-y-1 hover:shadow-neo-lg
                transition-all duration-200
              `}>
                <div className="p-6 lg:p-8 border-b-4 border-neo-ink bg-neo-secondary">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h3 className="text-xl font-black uppercase tracking-tight text-neo-ink">
                      {exp.role}
                    </h3>
                    <span className="neo-badge neo-badge-accent whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-lg font-bold mb-4 text-neo-ink/80">
                    {exp.company}
                  </p>

                  <ul className="space-y-3">
                    {exp.description.map((desc, dIdx) => (
                      <li 
                        key={dIdx} 
                        className="font-medium leading-relaxed flex items-start text-neo-ink/80"
                      >
                        <span className="mr-3 mt-2 w-2 h-2 bg-neo-accent flex-shrink-0 border-2 border-neo-ink"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
