import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData['personalInfo'];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative blobs - updated colors */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#e9edc9]/40 dark:bg-[#e9edc9]/5 blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 max-w-3xl order-2 lg:order-1">
          
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
            Hi, I'm <span className="gradient-text">{data.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-stone-600 dark:text-beige font-medium mb-8 animate-fade-in-up animate-delay-200">
            {data.title} specializing in building exceptional digital experiences.
          </h2>
          
          {/* Mobile Profile Image - shown after subtitle */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="card-glow relative w-72 h-72 rounded-full bg-beige dark:bg-primary border-4 border-primary dark:border-beige overflow-hidden shadow-xl">
              <img 
                src="/profile.png" 
                alt="Muhammad Umer Naveed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-10 max-w-2xl">
            I am a passionate Software Engineer with a strong foundation in Full Stack Development, Mobile App Development, and Machine Learning. 
            Dedicated to creating seamless, responsive, and efficient applications using modern technologies like React, Next.js, and Flutter.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#contact"
              className="btn-glow inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-[#4a5e29] transition-all shadow-lg shadow-primary/30"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a 
              href={data.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center px-6 py-3 border border-stone-200 dark:border-stone-700 text-base font-medium rounded-md text-stone-700 dark:text-stone-200 bg-white dark:bg-[#252e1f] hover:bg-stone-50 dark:hover:bg-[#2f3a27] transition-all hover:border-stone-300 dark:hover:border-stone-600"
            >
              <Linkedin className="w-5 h-5 mr-2 text-[#0077b5]" />
              LinkedIn
            </a>
            <a 
              href={data.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center px-6 py-3 border border-stone-200 dark:border-stone-700 text-base font-medium rounded-md text-stone-700 dark:text-stone-200 bg-white dark:bg-[#252e1f] hover:bg-stone-50 dark:hover:bg-[#2f3a27] transition-all hover:border-stone-300 dark:hover:border-stone-600"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-stone-500 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800 pt-8">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              {data.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              {data.phone}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {data.location}
            </div>
          </div>
          </div>
          
          {/* Desktop Profile Image - shown on right side, larger */}
          <div className="hidden lg:block flex-shrink-0 order-2">
            <div className="card-glow relative w-96 h-96 rounded-full bg-beige dark:bg-primary border-4 border-primary dark:border-beige overflow-hidden shadow-xl">
              <img 
                src="/profile.png" 
                alt="Muhammad Umer Naveed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;