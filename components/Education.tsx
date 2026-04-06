import { PortfolioData } from '../types';
import { GraduationCap } from '@phosphor-icons/react';

interface EducationProps {
  data: PortfolioData['education'];
}

function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-20 lg:py-32 bg-retro-bg relative">
      <div className="absolute inset-0 bg-halftone opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="retro-section-title text-retro-ink mb-12 text-center">
          EDUCATION
        </h2>

        <div className="max-w-4xl mx-auto grid gap-8">
          {data.map((edu, idx) => (
            <div 
              key={idx} 
              className={`
                retro-card bg-retro-white
                ${idx % 2 === 0 ? 'md:-rotate-1' : 'md:rotate-1'}
                hover:rotate-0 hover:-translate-y-1 hover:shadow-retro-lg
                transition-all duration-200
              `}
            >
              <div className="flex flex-col md:flex-row gap-6 p-6 lg:p-8">
                <div className="flex-shrink-0">
                  <div className="p-4 border-4 border-retro-ink shadow-retro-sm bg-retro-secondary">
                    <GraduationCap className="w-8 h-8 text-retro-white" weight="bold" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-retro-ink">
                      {edu.degree}
                    </h3>
                    <span className="retro-badge retro-badge-secondary whitespace-nowrap">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-lg font-bold mb-4 text-retro-secondary">
                    {edu.institution}
                  </p>

                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-retro-ink/60">
                      RELEVANT COURSEWORK
                    </h4>
                    <p className="font-medium leading-relaxed text-retro-ink/80">
                      {edu.coursework}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
