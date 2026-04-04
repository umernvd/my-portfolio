import React from 'react';
// import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData['personalInfo'];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen">
      <div className="absolute top-20 right-0 -mr-0 lg:-mr-20 w-96 h-96 bg-neo-muted/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 -ml-0 lg:-ml-20 w-72 h-72 bg-neo-secondary/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          <div className="flex-1 max-w-3xl order-2 lg:order-1">
            <h1 className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-black uppercase tracking-tighter 
              mb-6
            ">
              HI, I'M{' '}
              <span className="bg-neo-accent px-4 border-4 border-neo-ink shadow-neo-md inline-block rotate-1">
                {data.name}
              </span>
            </h1>
            
            <h2 className="
              text-xl md:text-2xl lg:text-3xl 
              font-bold mb-8
              text-neo-ink/80
            ">
              {data.title.toUpperCase()} BUILDING DIGITAL EXPERIENCES
            </h2>

            <div className="lg:hidden flex justify-center mb-8">
              <div className="
                w-64 h-64 rounded-none 
                border-4 border-neo-ink shadow-neo-lg
                bg-neo-white overflow-hidden
                rotate-1
                hover:-translate-y-1 hover:shadow-neo-xl
                transition-all duration-200
              ">
                <img
                  src="/profile.png"
                  alt="Umer Naveed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="
              text-lg md:text-xl 
              leading-relaxed mb-10 
              max-w-2xl
              font-medium
            ">
              Passionate Software Engineer with expertise in Full Stack Development, 
              Mobile App Development, and Machine Learning. Building seamless, responsive 
              applications using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="
                  neo-btn neo-btn-primary
                  inline-flex items-center justify-center gap-2
                  hover:bg-neo-accent-hover
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                "
              >
                <EnvelopeSimple className="w-5 h-5" weight="bold" />
                CONTACT ME
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  neo-btn neo-btn-outline
                  inline-flex items-center justify-center gap-2
                  hover:bg-neo-muted
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                "
              >
                <LinkedinLogo className="w-5 h-5 text-blue-600" weight="bold" />
                LINKEDIN
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  neo-btn neo-btn-outline
                  inline-flex items-center justify-center gap-2
                  hover:bg-neo-muted
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                "
              >
                <GithubLogo className="w-5 h-5" weight="bold" />
                GITHUB
              </a>
            </div>

            <div className="
              flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 
              text-xs sm:text-sm font-bold
              border-t-4 border-neo-ink pt-8
            ">
              <a 
                href={`mailto:${data.email}`}
                className="flex items-center gap-2 hover:text-neo-accent transition-colors"
              >
                <EnvelopeSimple className="w-4 h-4" weight="bold" />
                {data.email}
              </a>
              <a 
                href={`tel:${data.phone}`}
                className="flex items-center gap-2 hover:text-neo-accent transition-colors"
              >
                <Phone className="w-4 h-4 stroke-[3px]" />
                {data.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 stroke-[3px]" />
                {data.location}
              </span>
            </div>
          </div>

          <div className="hidden lg:block flex-shrink-0 order-2">
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <div className="
                absolute -top-4 -right-4 w-full h-full
                border-4 border-neo-ink
                bg-neo-muted/50
                rotate-3
              "></div>
              <div className="
                w-full h-full rounded-none
                border-4 border-neo-ink shadow-neo-xl
                bg-neo-white overflow-hidden
                -rotate-1
                hover:rotate-0 hover:-translate-y-2 hover:shadow-neo-xl
                transition-all duration-200
              ">
                <img
                  src="/profile.png"
                  alt="Umer Naveed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
