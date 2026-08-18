import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Compass,
  Building,
  School
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark-bg bg-grid relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-electric-400" />
            <span>06. Academic Background</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Academic <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Verified academic degrees, engineering specialization, and foundational schooling credentials.
          </p>
        </div>

        {/* Education Stack */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border ${
                edu.isPrimary ? 'border-dark-border' : 'border-dark-border/60 bg-dark-surface/60'
              } relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Institution & Degree */}
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-dark-surface border border-dark-border flex items-center justify-center text-electric-400">
                      {edu.isPrimary ? <GraduationCap className="w-6 h-6" /> : <School className="w-5 h-5 text-slate-300" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-electric-400">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-semibold">{edu.status}</span>
                  </div>

                  {/* Coursework if present */}
                  {edu.focusAreas && (
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        Core Disciplines & Topics:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.focusAreas.map((course, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 flex-shrink-0" />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Score Card */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 rounded-2xl bg-dark-surface border border-dark-border text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                    Academic Result
                  </span>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
                    {edu.score}
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                    <Award className="w-3.5 h-3.5" /> Verified Record
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
