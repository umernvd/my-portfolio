import React from 'react';
import { PortfolioData } from '../types';
import { Award, CheckCircle2 } from 'lucide-react';

interface CertificationsProps {
  data: PortfolioData['certifications'];
}

const Certifications: React.FC<CertificationsProps> = ({ data }) => {
  const rotations = ['md:rotate-2', 'md:-rotate-1', 'md:rotate-1', 'md:-rotate-2', 'md:rotate-3', 'md:-rotate-3'];

  return (
    <section className="py-20 lg:py-32 bg-neo-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="neo-section-title text-neo-ink mb-4">
            CERTIFICATIONS
          </h2>
          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto text-neo-ink/80">
            CONTINUOUS LEARNING THROUGH RECOGNIZED PLATFORMS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {data.map((cert, idx) => (
            <div 
              key={idx} 
              className={`
                neo-card bg-neo-bg
                ${rotations[idx % rotations.length]}
                hover:rotate-0 hover:-translate-y-2 hover:shadow-neo-lg
                transition-all duration-200
              `}
            >
              <div className="p-6 flex items-start gap-4">
                <div className={`
                  p-3 border-4 border-neo-ink shadow-neo-sm
                  ${idx % 3 === 0 ? 'bg-neo-accent' : idx % 3 === 1 ? 'bg-neo-secondary' : 'bg-neo-muted'}
                  flex-shrink-0
                `}>
                  <Award className="w-6 h-6 stroke-[3px] text-neo-ink" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base lg:text-lg uppercase tracking-tight text-neo-ink mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 stroke-[3px] text-neo-accent flex-shrink-0" />
                    <span className="font-bold text-sm text-neo-ink/70">
                      {cert.provider}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
