import { useState, useEffect, useRef } from 'react';
import { List, X } from '@phosphor-icons/react';
import TypewriterWords from './TypewriterWords';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.slice(1)));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-200
      ${scrolled 
        ? 'bg-retro-bg border-b-4 border-retro-ink py-3' 
        : 'bg-transparent py-6'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              onClick={handleNavClick}
              className="
                font-black text-sm sm:text-lg md:text-xl tracking-tighter uppercase
                bg-retro-secondary border-4 border-retro-ink shadow-retro-sm px-2 py-1 sm:px-3
                hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                transition-all duration-100
              "
            >
              <TypewriterWords 
                words={[
                  "SOFTWARE ENGINEER",
                  "MOBILE APP DEVELOPER",
                  "FULL STACK DEVELOPER",
                  "WEB DEVELOPER"
                ]}
                typingSpeed={150}
                deletingSpeed={75}
                pauseAfterTyping={2000}
                emptyPause={500}
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="
                  px-4 py-2 font-bold uppercase tracking-wide text-sm
                  border-4 border-retro-ink shadow-retro-sm
                  hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                  transition-all duration-100
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="
                p-3 border-4 border-retro-ink shadow-retro-sm bg-retro-white
                hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                transition-all duration-100
              "
            >
              {isOpen ? (
                <X className="w-6 h-6 stroke-[3px]" />
              ) : (
                <List className="w-6 h-6" weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-retro-bg border-t-4 border-retro-ink shadow-retro-lg absolute top-full left-0 w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                aria-current={activeSection === link.href ? 'true' : undefined}
                className={`
                  block px-4 py-3 font-bold uppercase tracking-wide text-sm
                  border-4 border-retro-ink shadow-retro-sm bg-retro-white
                  hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                  transition-all duration-100
                  ${activeSection === link.href ? 'bg-retro-accent' : ''}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
