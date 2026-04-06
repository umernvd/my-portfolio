import { useState } from 'react';
import { PortfolioData } from '../types';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, PaperPlaneTilt, CheckCircle, Spinner } from '@phosphor-icons/react';

interface FooterProps {
  data: PortfolioData['personalInfo'];
}

function Footer({ data }: FooterProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-retro-ink text-retro-white py-16 lg:py-24 border-t-4 border-retro-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="retro-section-title text-retro-white mb-6">
              LET'S CONNECT
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-retro-white/80">
              INTERESTED IN NEW OPPORTUNITIES. HAVE A QUESTION? DROP A MESSAGE!
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href={`mailto:${data.email}`} 
                className="
                  flex items-center gap-3 
                  p-4 border-4 border-retro-white shadow-retro-dark-sm bg-retro-dark-card
                  hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                  transition-all duration-100 font-bold
                "
              >
                <EnvelopeSimple className="w-6 h-6" weight="bold" />
                {data.email}
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 flex items-center justify-center
                  border-4 border-retro-white shadow-retro-dark-sm bg-retro-dark-card
                  hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                  transition-all duration-100
                "
                aria-label="GitHub"
              >
                <GithubLogo className="w-7 h-7" weight="bold" />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 flex items-center justify-center
                  border-4 border-retro-white shadow-retro-dark-sm bg-retro-dark-card
                  hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                  transition-all duration-100
                "
                aria-label="LinkedIn"
              >
                <LinkedinLogo className="w-7 h-7" weight="bold" />
              </a>
            </div>
          </div>

          <div className="
            border-4 border-retro-white shadow-retro-dark-md
            bg-retro-dark-card p-6 md:p-8
          ">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="
                  w-20 h-20 flex items-center justify-center
                  border-4 border-retro-white shadow-retro-dark-sm
                  bg-retro-secondary mb-6
                ">
                  <CheckCircle className="w-10 h-10 text-retro-ink" weight="bold" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-retro-white mb-2">
                  MESSAGE SENT!
                </h3>
                <p className="font-medium max-w-xs mx-auto text-retro-white/80 mb-8">
                  THANKS FOR REACHING OUT. I'LL GET BACK TO YOU SOON.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="
                    retro-btn retro-btn-secondary
                    hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                  "
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-bold text-sm uppercase tracking-wide mb-2 text-retro-white/80">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="retro-input bg-retro-dark-card border-retro-white text-retro-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold text-sm uppercase tracking-wide mb-2 text-retro-white/80">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="retro-input bg-retro-dark-card border-retro-white text-retro-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-bold text-sm uppercase tracking-wide mb-2 text-retro-white/80">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="retro-input bg-retro-dark-card border-retro-white text-retro-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    retro-btn retro-btn-tertiary w-full
                    hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                    disabled:opacity-70 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="w-5 h-5 animate-spin" weight="bold" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt className="w-5 h-5" weight="bold" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="
          mt-16 pt-8 border-t-4 border-retro-white
          flex flex-col md:flex-row justify-between items-center
          text-sm font-bold uppercase tracking-wide
        ">
          <p>© {new Date().getFullYear()} {data.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 md:mt-0">DESIGNED & BUILT BY {data.name.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
