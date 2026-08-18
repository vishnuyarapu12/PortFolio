import React from 'react';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  Cloud, 
  FileCheck,
  Sparkles
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5 text-electric-400" />
            <span>05. Verified Credentials</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Industry <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Recognized developer programs, enterprise cloud certifications, and technical internships.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-dark-border relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Badge Graphic */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-surface border border-dark-border text-center">
                  <div className="w-14 h-14 rounded-2xl bg-dark-card border border-dark-border flex items-center justify-center text-electric-400 mb-3">
                    <Cloud className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white">
                    Salesforce Agentblazer
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Champion Program
                  </span>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {cert.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-dark-surface text-emerald-400 border border-dark-border font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Program Verified
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-electric-400 mb-3">
                    {cert.issuer} • {cert.type} ({cert.period})
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Learned Badges */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Core Competencies Mastered:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cert.skillsLearned.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
