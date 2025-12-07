import React from 'react';
import { PortfolioData } from '../types';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  data: PortfolioData['education'];
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-20 bg-stone-50 dark:bg-[#1a2015] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-beige sm:text-4xl mb-12 text-center">Education</h2>

        <div className="max-w-4xl mx-auto grid gap-8">
          {data.map((edu, idx) => (
            <div key={idx} className="card-glow bg-beige dark:bg-[#252e1f] rounded-2xl p-8 shadow-sm border-2 border-primary dark:border-beige flex flex-col md:flex-row gap-6 items-start transition-colors duration-300">
              <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-beige">{edu.degree}</h3>
                  <span className="text-sm font-semibold text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-[#2f3a27] px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {edu.grade}
                  </span>
                </div>
                
                <p className="text-lg text-primary font-medium mb-4">{edu.institution}</p>
                
                <div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wide mb-2">Relevant Coursework</h4>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm">
                    {edu.coursework}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;