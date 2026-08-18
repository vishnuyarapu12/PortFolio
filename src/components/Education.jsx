import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Compass,
  FileCode2
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
            Engineering <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate engineering degree in Information Technology with strong foundational computing rigor.
          </p>
        </div>

        {/* Education Institution Card */}
        <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-dark-border relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: University & Degree */}
            <div className="lg:col-span-8">
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-dark-surface border border-dark-border flex items-center justify-center text-electric-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {educationData.institution}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-electric-400">
                    {educationData.degree} • {educationData.field}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                Specialized undergraduate curriculum covering advanced computational theory, algorithm design, relational database systems, asynchronous client-server applications, and machine learning models.
              </p>

              {/* Coursework Badges */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                  Core Engineering Coursework:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {educationData.focusAreas.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 flex-shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: GPA Metric Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-dark-surface border border-dark-border text-center relative overflow-hidden">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Cumulative Grade Point
              </span>
              <div className="font-display font-black text-4xl sm:text-5xl text-white mb-1">
                {educationData.gpa}
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                <Award className="w-3.5 h-3.5" /> High Academic Standing
              </span>
              <p className="text-[11px] font-mono text-slate-400 mt-3 pt-3 border-t border-dark-border w-full">
                Vidya Jyothi Institute of Technology
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
