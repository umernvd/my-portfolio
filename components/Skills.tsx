import React from 'react';
import { PortfolioData } from '../types';
import { Code2, Server, Wrench, Languages, Globe, Smartphone, Database } from 'lucide-react';

interface SkillsProps {
  data: PortfolioData['skills'];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend': return <Code2 className="w-6 h-6 stroke-[3px]" />;
      case 'mobile': return <Smartphone className="w-6 h-6 stroke-[3px]" />;
      case 'backend': return <Server className="w-6 h-6 stroke-[3px]" />;
      case 'databases': return <Database className="w-6 h-6 stroke-[3px]" />;
      case 'tools': return <Wrench className="w-6 h-6 stroke-[3px]" />;
      case 'languages': return <Languages className="w-6 h-6 stroke-[3px]" />;
      default: return <Code2 className="w-6 h-6 stroke-[3px]" />;
    }
  };

  const getCategoryColor = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend': return 'bg-neo-accent';
      case 'mobile': return 'bg-neo-accent';
      case 'backend': return 'bg-neo-secondary';
      case 'databases': return 'bg-neo-secondary';
      case 'tools': return 'bg-neo-muted';
      case 'languages': return 'bg-neo-white';
      default: return 'bg-neo-white';
    }
  };

  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();

    if (s.includes('next.js')) return <i className="devicon-nextjs-original text-lg" />;
    if (s.includes('react')) return <i className="devicon-react-original colored text-lg" />;
    if (s.includes('html')) return <i className="devicon-html5-plain colored text-lg" />;
    if (s.includes('javascript')) return <i className="devicon-javascript-plain colored text-lg" />;
    if (s.includes('tailwind')) return <i className="devicon-tailwindcss-original colored text-lg" />;
    if (s.includes('bootstrap')) return <i className="devicon-bootstrap-plain colored text-lg" />;
    if (s.includes('flutter')) return <i className="devicon-flutter-plain colored text-lg" />;
    if (s.includes('node')) return <i className="devicon-nodejs-plain colored text-lg" />;
    if (s.includes('strapi')) return <i className="devicon-strapi-plain colored text-lg" />;
    if (s.includes('api') || s.includes('oauth2') || s.includes('jwt')) return <Globe className="w-4 h-4 stroke-[3px] text-blue-600" />;
    if (s.includes('git') && !s.includes('hub')) return <i className="devicon-git-plain colored text-lg" />;
    if (s.includes('github')) return <i className="devicon-github-original text-lg" />;
    if (s.includes('vs code')) return <i className="devicon-vscode-plain colored text-lg" />;
    if (s.includes('firebase')) return <i className="devicon-firebase-plain colored text-lg" />;
    if (s.includes('mysql') || s.includes('sql')) return <i className="devicon-mysql-plain colored text-lg" />;
    if (s.includes('python')) return <i className="devicon-python-plain colored text-lg" />;
    if (s.includes('typescript')) return <i className="devicon-typescript-plain colored text-lg" />;
    if (s.includes('dart')) return <i className="devicon-dart-original colored text-lg" />;

    return <div className="w-2 h-2 rounded-none bg-neo-ink" />;
  };

  return (
    <section id="skills" className="py-16 lg:py-24 bg-neo-secondary relative">
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="neo-section-title text-neo-ink mb-4">
            SKILLS
          </h2>
          <p className="text-base md:text-xl font-bold max-w-2xl mx-auto text-neo-ink/80">
            A TOOLKIT OF MODERN TECHNOLOGIES FOR BUILDING SCALABLE SOLUTIONS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {data.map((category, idx) => (
            <div 
              key={idx} 
              className={`
                neo-card bg-neo-white
                ${idx % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'}
                hover:rotate-0 transition-all duration-200
              `}
            >
              <div className={`
                flex items-center gap-3 mb-4 p-3 
                border-b-4 border-neo-ink
                ${getCategoryColor(category.title)}
              `}>
                <div className="p-2 border-4 border-neo-ink shadow-neo-sm bg-neo-white">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-neo-ink">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 p-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="
                      neo-skill-badge
                      flex items-center gap-2
                      hover:bg-neo-muted
                      transition-colors duration-100
                      text-xs sm:text-sm
                    "
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
