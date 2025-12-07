import React from 'react';
import { PortfolioData } from '../types';
import { Award, CheckCircle2 } from 'lucide-react';

interface CertificationsProps {
  data: PortfolioData['certifications'];
}

const Certifications: React.FC<CertificationsProps> = ({ data }) => {
  return (
    <section className="py-20 bg-white dark:bg-[#1a2015] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-beige sm:text-4xl mb-4 text-center">Certifications & Professional Development</h2>
        <p className="text-center text-stone-600 dark:text-stone-300 mb-16 max-w-2xl mx-auto">
          Continuous learning and professional growth through recognized platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((cert, idx) => (
            <div key={idx} className="group p-6 bg-beige dark:bg-[#252e1f] border-2 border-primary dark:border-beige rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 dark:text-beige mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {cert.provider}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;