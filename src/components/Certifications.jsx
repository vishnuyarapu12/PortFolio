import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Code,
  Terminal,
  Cpu
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { Reveal } from './AnimatedSection';

export const Certifications = () => {
  const getCertIcon = (title) => {
    if (title.includes('Python')) return <Terminal className="w-6 h-6 text-emerald-400" />;
    if (title.includes('C++') || title.includes('C')) return <Cpu className="w-6 h-6 text-sky-400" />;
    if (title.includes('Java')) return <Code className="w-6 h-6 text-amber-400" />;
    return <Award className="w-6 h-6 text-cyan-400" />;
  };

  return (
    <section id="certifications" className="py-24 bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal delay={0} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>05. Verified Credentials</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Industry <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Recognized programming certifications from Cisco and GeeksForGeeks, plus developer programs.
          </p>
        </Reveal>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => (
            <Reveal key={idx} delay={idx * 110 + 100} duration={750}>
              <div className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-dark-border flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-dark-surface border border-dark-border group-hover:border-ocean-400/30 flex items-center justify-center transition-colors">
                      {getCertIcon(cert.title)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-dark-surface text-emerald-400 border border-emerald-500/30 font-semibold shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {cert.issuer} • {cert.type}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Learned Badges */}
                <div className="pt-4 border-t border-dark-border">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-dark-surface border border-dark-border text-slate-300 text-[11px] font-mono hover:border-ocean-400/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
