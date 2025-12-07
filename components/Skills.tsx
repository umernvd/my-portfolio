import React from 'react';
import { PortfolioData } from '../types';
import { Code2, Server, Wrench, Languages, Globe } from 'lucide-react';

interface SkillsProps {
  data: PortfolioData['skills'];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend': return <Code2 className="w-6 h-6" />;
      case 'backend': return <Server className="w-6 h-6" />;
      case 'tools': return <Wrench className="w-6 h-6" />;
      case 'languages': return <Languages className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    
    // Frontend
    if (s.includes('next.js')) return <i className="devicon-nextjs-original text-lg" />;
    if (s.includes('react')) return <i className="devicon-react-original colored text-lg" />;
    if (s.includes('html')) return <i className="devicon-html5-plain colored text-lg" />;
    if (s.includes('javascript')) return <i className="devicon-javascript-plain colored text-lg" />;
    if (s.includes('tailwind')) return <i className="devicon-tailwindcss-original colored text-lg" />;
    if (s.includes('bootstrap')) return <i className="devicon-bootstrap-plain colored text-lg" />;
    if (s.includes('flutter')) return <i className="devicon-flutter-plain colored text-lg" />;
    
    // Backend
    if (s.includes('node')) return <i className="devicon-nodejs-plain colored text-lg" />;
    if (s.includes('strapi')) return <i className="devicon-strapi-plain colored text-lg" />;
    if (s.includes('api')) return <Globe className="w-4 h-4 text-blue-500" />;
    
    // Tools
    if (s.includes('git') && !s.includes('hub')) return <i className="devicon-git-plain colored text-lg" />;
    if (s.includes('github')) return <i className="devicon-github-original text-lg dark:text-white" />;
    if (s.includes('vs code')) return <i className="devicon-vscode-plain colored text-lg" />;
    if (s.includes('kaggle')) return <i className="devicon-kaggle-original colored text-lg" />;
    
    // Languages
    if (s.includes('python')) return <i className="devicon-python-plain colored text-lg" />;
    if (s.includes('c++')) return <i className="devicon-cplusplus-plain colored text-lg" />;
    if (s.includes('dart')) return <i className="devicon-dart-plain colored text-lg" />;

    // Fallback
    return <div className="w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-600" />;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#1a2015] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-beige sm:text-4xl mb-4">Technical Skills</h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((category, idx) => (
            <div key={idx} className="bg-beige dark:bg-[#252e1f] rounded-xl p-6 border-2 border-primary dark:border-beige hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white dark:bg-[#2f3a27] rounded-lg shadow-sm text-primary">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-beige">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-[#2f3a27] text-stone-700 dark:text-stone-300 border border-primary dark:border-beige shadow-sm hover:shadow-md transition-all"
                  >
                    {getSkillIcon(skill)}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;