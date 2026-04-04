import React, { useState } from 'react';
import { PortfolioData } from '../types';
import { Github, Linkedin, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';

interface FooterProps {
  data: PortfolioData['personalInfo'];
}

const Footer: React.FC<FooterProps> = ({ data }) => {
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
    <footer id="contact" className="bg-neo-ink text-neo-white py-16 lg:py-24 border-t-4 border-neo-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="neo-section-title text-neo-white mb-6">
              LET'S CONNECT
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-neo-white/80">
              INTERESTED IN NEW OPPORTUNITIES. HAVE A QUESTION? DROP A MESSAGE!
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href={`mailto:${data.email}`} 
                className="
                  flex items-center gap-3 
                  p-4 border-4 border-neo-white shadow-neo-dark-sm bg-neo-dark-card
                  hover:bg-neo-accent hover:border-neo-accent
                  transition-all duration-100 font-bold
                "
              >
                <Mail className="w-6 h-6 stroke-[3px]" />
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
                  border-4 border-neo-white shadow-neo-dark-sm bg-neo-dark-card
                  hover:bg-neo-accent hover:border-neo-accent hover:shadow-neo-dark-lg
                  transition-all duration-100
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                "
                aria-label="GitHub"
              >
                <Github className="w-7 h-7 stroke-[3px]" />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 flex items-center justify-center
                  border-4 border-neo-white shadow-neo-dark-sm bg-neo-dark-card
                  hover:bg-neo-accent hover:border-neo-accent hover:shadow-neo-dark-lg
                  transition-all duration-100
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                "
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7 stroke-[3px]" />
              </a>
            </div>
          </div>

          <div className="
            border-4 border-neo-white shadow-neo-dark-md
            bg-neo-dark-card p-6 md:p-8
          ">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="
                  w-20 h-20 flex items-center justify-center
                  border-4 border-neo-white shadow-neo-dark-sm
                  bg-neo-secondary mb-6
                ">
                  <CheckCircle className="w-10 h-10 stroke-[3px] text-neo-ink" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-neo-white mb-2">
                  MESSAGE SENT!
                </h3>
                <p className="font-medium max-w-xs mx-auto text-neo-white/80 mb-8">
                  THANKS FOR REACHING OUT. I'LL GET BACK TO YOU SOON.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="
                    neo-btn neo-btn-secondary
                    hover:bg-neo-accent hover:text-neo-white
                  "
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-bold text-sm uppercase tracking-wide mb-2 text-neo-white/80">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="neo-input bg-neo-dark-card border-neo-white text-neo-white"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold text-sm uppercase tracking-wide mb-2 text-neo-white/80">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="neo-input bg-neo-dark-card border-neo-white text-neo-white"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-bold text-sm uppercase tracking-wide mb-2 text-neo-white/80">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="neo-input bg-neo-dark-card border-neo-white text-neo-white resize-none"
                    placeholder="HOW CAN I HELP YOU?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    neo-btn neo-btn-primary w-full
                    bg-neo-accent text-neo-white border-neo-white shadow-neo-dark-sm
                    hover:bg-neo-secondary hover:text-neo-ink
                    disabled:opacity-70 disabled:cursor-not-allowed
                    active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                  "
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 stroke-[3px] animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 stroke-[3px]" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="
          mt-16 pt-8 border-t-4 border-neo-white
          flex flex-col md:flex-row justify-between items-center
          text-sm font-bold uppercase tracking-wide
        ">
          <p>© {new Date().getFullYear()} {data.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 md:mt-0">DESIGNED & BUILT BY {data.name.split(' ').pop()?.toUpperCase()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
