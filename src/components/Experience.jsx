import React from 'react';
import { 
  Milestone, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Cloud, 
  Code2, 
  Brain,
  Award
} from 'lucide-react';
import { experienceJourney } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark-bg bg-grid relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <Milestone className="w-3.5 h-3.5 text-electric-400" />
            <span>04. Growth Trajectory</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Learning Journey & <span className="text-gradient-primary">Milestones</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            A chronological timeline of hands-on software development, virtual internships, and AI engineering.
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l border-dark-border ml-4 sm:ml-32 space-y-12 pb-6">
          {experienceJourney.map((milestone, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Year Marker on Left for Desktop */}
              <div className="hidden sm:block absolute -left-32 top-1 text-right w-24">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300">
                  {milestone.year}
                </span>
              </div>

              {/* Node Dot on Timeline Line */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-dark-bg border border-dark-border group-hover:border-slate-500 flex items-center justify-center transition-all duration-200">
                <div className="w-2.5 h-2.5 rounded-full bg-electric-400" />
              </div>

              {/* Milestone Content Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-dark-border">
                
                {/* Year Tag for Mobile */}
                <div className="sm:hidden mb-2 inline-block">
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-dark-card border border-dark-border text-slate-300">
                    {milestone.year}
                  </span>
                </div>

                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {milestone.title}
                  </h3>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-dark-surface border border-dark-border text-slate-300">
                    {milestone.badge}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-mono text-electric-400 mb-4">
                  {milestone.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
                  {milestone.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-dark-border">
                  {milestone.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 flex-shrink-0 mt-0.5" />
                      <span className="font-light">{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
