import React from 'react';
import { PortfolioData } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  data: PortfolioData['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#1a2015] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-beige sm:text-4xl mb-12 text-center">Professional Experience</h2>

        <div className="max-w-3xl mx-auto">
          {data.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline Line */}
              <div className="hidden sm:block absolute left-0 top-0 h-full w-px bg-stone-200 dark:bg-stone-800 group-last:h-full group-first:top-8"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-0 w-8 h-8 -translate-x-1/2 bg-white dark:bg-[#1a2015] border-2 border-primary rounded-full hidden sm:flex items-center justify-center z-10">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              {/* Mobile Line */}
              <div className="sm:hidden absolute left-2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-800"></div>
              <div className="sm:hidden absolute left-2 top-8 w-3 h-3 -translate-x-1/2 bg-primary rounded-full border-2 border-white dark:border-[#1a2015]"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-stone-900 dark:text-beige">{exp.role}</h3>
                <span className="text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg font-medium text-stone-700 dark:text-stone-300 mb-4">{exp.company}</div>
              
              <ul className="space-y-2">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm sm:text-base flex items-start">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 bg-stone-400 dark:bg-stone-600 rounded-full flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;