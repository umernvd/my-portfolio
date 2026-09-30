import { PortfolioData } from '../types';
import { 
  Code, HardDrives, Wrench, Translate, Globe, DeviceMobile, Database,
  SquaresFourIcon, DevicesIcon, PlugsConnectedIcon, CubeIcon, HardDrivesIcon, 
  CloudCheckIcon, TableIcon, FireIcon, PaperPlaneTiltIcon, RocketIcon, 
  SwatchesIcon 
} from '@phosphor-icons/react';
interface SkillsProps {
  data: PortfolioData['skills'];
}

function Skills({ data }: SkillsProps) {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend': return <Code className="w-6 h-6" weight="bold" />;
      case 'mobile': return <DeviceMobile className="w-6 h-6" weight="bold" />;
      case 'backend': return <HardDrives className="w-6 h-6" weight="bold" />;
      case 'databases': return <Database className="w-6 h-6" weight="bold" />;
      case 'tools': return <Wrench className="w-6 h-6" weight="bold" />;
      case 'languages': return <Translate className="w-6 h-6" weight="bold" />;
      default: return <Code className="w-6 h-6" weight="bold" />;
    }
  };

  const getCategoryColor = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend': return 'bg-retro-accent';
      case 'mobile': return 'bg-retro-accent';
      case 'backend': return 'bg-retro-secondary';
      case 'databases': return 'bg-retro-secondary';
      case 'tools': return 'bg-retro-tertiary';
      case 'languages': return 'bg-retro-tertiary';
      default: return 'bg-retro-white';
    }
  };

  const getSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();

    if (s.includes('next.js')) return <i className="devicon-nextjs-plain text-lg" />;
    if (s.includes('react')) return <i className="devicon-react-original colored text-lg" />;
    if (s.includes('html')) return <i className="devicon-html5-plain colored text-lg" />;
    if (s.includes('javascript')) return <i className="devicon-javascript-plain colored text-lg" />;
    if (s.includes('tailwind')) return <i className="devicon-tailwindcss-original colored text-lg" />;
    if (s.includes('bootstrap')) return <i className="devicon-bootstrap-plain colored text-lg" />;
    if (s.includes('flutter')) return <i className="devicon-flutter-plain colored text-lg" />;
    if (s.includes('node')) return <i className="devicon-nodejs-plain colored text-lg" />;
    if (s.includes('strapi')) return <i className="devicon-strapi-plain colored text-lg" />;
    if (s.includes('git') && !s.includes('hub')) return <i className="devicon-git-plain colored text-lg" />;
    if (s.includes('github')) return <i className="devicon-github-original text-lg" />;
    if (s.includes('vs code') || s.includes('vscode')) return <i className="devicon-vscode-plain colored text-lg" />;
    if (s.includes('firebase') && !s.includes('firestore')) return <i className="devicon-firebase-plain colored text-lg" />;
    if (s.includes('mysql')) return <i className="devicon-mysql-plain colored text-lg" />;
    if (s.includes('python')) return <i className="devicon-python-plain colored text-lg" />;
    if (s.includes('typescript')) return <i className="devicon-typescript-plain colored text-lg" />;
    if (s.includes('dart')) return <i className="devicon-dart-plain colored text-lg" />;

    if (s.includes('api') || s.includes('oauth2') || s.includes('jwt')) 
      return <Globe className="text-lg" weight="bold" />;
    
    if (s.includes('zustand')) return <SquaresFourIcon className="text-lg" weight="bold" />;
    if (s.includes('responsive') || s.includes('web design')) 
      return <DevicesIcon className="text-lg" weight="bold" />;
    if (s.includes('provider')) return <PlugsConnectedIcon className="text-lg" weight="bold" />;
    if (s.includes('hive')) return <CubeIcon className="text-lg" weight="bold" />;
    if (s.includes('offline')) return <HardDrivesIcon className="text-lg" weight="bold" />;
    if (s.includes('google drive')) return <HardDrivesIcon className="text-lg" weight="bold" />;
    if (s.includes('appwrite')) return <CloudCheckIcon className="text-lg" weight="bold" />;
    if (s.includes('sql')) return <TableIcon className="text-lg" weight="bold" />;
    if (s.includes('firestore')) return <FireIcon className="text-lg" weight="bold" />;
    if (s.includes('postman')) return <PaperPlaneTiltIcon className="text-lg" weight="bold" />;
    if (s.includes('vercel')) return <RocketIcon className="text-lg" weight="bold" />;
    if (s.includes('css')) return <SwatchesIcon className="text-lg" weight="bold" />;

    return <div className="w-2 h-2 rounded-none bg-retro-ink" />;
  };

  return (
    <section id="skills" className="pt-8 pb-4 bg-retro-secondary relative">
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-retro-ink">
          SKILLS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {data.map((category, idx) => (
            <div 
              key={idx} 
              className={`
                retro-card bg-retro-white
                ${idx % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'}
                hover:rotate-0 transition-all duration-200
              `}
            >
              <div className={`
                flex items-center gap-3 mb-4 p-3 
                border-b-4 border-retro-ink
                ${getCategoryColor(category.title)}
              `}>
                <div className="p-2 border-4 border-retro-ink shadow-retro-sm bg-retro-white">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-retro-ink">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 p-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="
                      retro-skill-badge
                      flex items-center gap-2
                      px-2 py-1.5 sm:px-3 sm:py-2
                      hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                      transition-all duration-100
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
}

export default Skills;
