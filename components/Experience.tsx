import { PortfolioData } from '../types';

interface ExperienceProps {
  data: PortfolioData['experience'];
}

function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-retro-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="retro-section-title text-retro-ink mb-12 text-center">
          EXPERIENCE
        </h2>

        <div className="max-w-3xl mx-auto relative">
          
          {data.map((exp, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0">
              
              <div className={`
                retro-card bg-retro-white
                md:w-[calc(50%-2rem)] md:ml-auto
                ${idx % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto'}
                md:rotate-1 hover:rotate-0 hover:-translate-y-1 hover:shadow-retro-lg
                transition-all duration-200
              `}>
                <div className="p-6 lg:p-8 border-b-4 border-retro-ink bg-retro-accent">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <h3 className="text-xl font-black uppercase tracking-tight text-retro-ink">
                      {exp.role}
                    </h3>
                    <span className="retro-badge retro-badge-accent whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-lg font-bold mb-4 text-retro-ink/80">
                    {exp.company}
                  </p>

                  <ul className="space-y-3">
                    {exp.description.map((desc, dIdx) => (
                      <li 
                        key={dIdx} 
                        className="font-medium leading-relaxed flex items-start text-retro-ink/80"
                      >
                        <span className={`mr-3 mt-2 w-2 h-2 flex-shrink-0 border-2 border-retro-ink ${dIdx % 2 === 0 ? 'bg-retro-secondary' : 'bg-retro-tertiary'}`}></span>
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
}

export default Experience;
