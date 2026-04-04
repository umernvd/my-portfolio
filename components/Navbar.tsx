import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
import { List, X } from '@phosphor-icons/react';
import TypewriterWords from './TypewriterWords';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    if (!targetId) {
      window.scrollTo({ top: 0 });
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'instant' });
    }
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
        ? 'bg-neo-bg border-b-4 border-neo-ink py-3' 
        : 'bg-transparent py-6'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="
                font-black text-lg sm:text-xl md:text-2xl tracking-tighter uppercase
                bg-neo-secondary border-4 border-neo-ink shadow-neo-sm px-3 py-1
                hover:bg-neo-accent hover:text-neo-white
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
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  px-4 py-2 font-bold uppercase tracking-wide text-sm
                  border-4 border-transparent
                  hover:bg-neo-accent hover:text-neo-white hover:border-neo-ink hover:shadow-neo-sm
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
              className="
                p-3 border-4 border-neo-ink shadow-neo-sm bg-neo-white
                hover:bg-neo-muted
                transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
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
        <div className="md:hidden bg-neo-bg border-t-4 border-neo-ink shadow-neo-lg absolute top-full left-0 w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  block px-4 py-3 font-bold uppercase tracking-wide text-base
                  border-4 border-neo-ink shadow-neo-sm bg-neo-white
                  hover:bg-neo-accent hover:text-neo-white
                  transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
