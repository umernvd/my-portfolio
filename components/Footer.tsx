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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-[#2c3324] dark:bg-[#0c0f0a] text-stone-300 py-16 border-t border-[#3d4533] dark:border-[#1a2015] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl font-bold text-white dark:text-beige mb-6">Let's Connect</h2>
            <p className="text-stone-400 dark:text-stone-300 mb-8 text-lg leading-relaxed">
              I'm currently interested in new opportunities. Whether you have a question about my work or just want to say hi, feel free to drop a message!
            </p>
            
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 text-stone-400 dark:text-stone-300 group">
                 <div className="p-2 bg-[#3a4430] dark:bg-[#1a2015] rounded-lg group-hover:bg-primary/20 transition-colors">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors text-lg">{data.email}</a>
               </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={data.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a4430] dark:bg-[#1a2015] hover:bg-primary text-stone-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={data.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a4430] dark:bg-[#1a2015] hover:bg-primary text-stone-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#3a4430]/50 dark:bg-[#1a2015]/50 p-6 md:p-8 rounded-2xl border border-[#4a563d]/50 dark:border-[#2f3a27] backdrop-blur-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-beige mb-2">Message Sent!</h3>
                <p className="text-stone-400 max-w-xs mx-auto">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary hover:text-primary/80 font-medium hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#2c3324] dark:bg-[#1a2015] border border-[#4a563d] dark:border-[#2f3a27] text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#2c3324] dark:bg-[#1a2015] border border-[#4a563d] dark:border-[#2f3a27] text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-400 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#2c3324] dark:bg-[#1a2015] border border-[#4a563d] dark:border-[#2f3a27] text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-[#4a5e29] text-white font-semibold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#3d4533] dark:border-[#1a2015] flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 dark:text-stone-600">
          <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built by {data.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;