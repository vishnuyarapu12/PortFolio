import React from 'react';
import { 
  ExternalLink, 
  Terminal, 
  CheckCircle2,
  Cpu,
  GitBranch
} from 'lucide-react';
import { GithubIcon, LeetCodeIcon } from './Icons';
import { codingProfiles } from '../data/portfolioData';

export const CodingProfiles = () => {
  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <Terminal className="w-3.5 h-3.5 text-electric-400" />
            <span>07. Developer Footprint</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Coding <span className="text-gradient-primary">Profiles</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Active repositories and continuous algorithmic problem-solving practice.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codingProfiles.map((profile, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-dark-border flex flex-col justify-between group"
            >
              <div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center text-slate-300">
                      {profile.platform === 'GitHub' ? (
                        <GithubIcon className="w-5 h-5" />
                      ) : (
                        <LeetCodeIcon className="w-5 h-5 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {profile.platform}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        @{profile.username}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-dark-surface border border-dark-border text-slate-300 font-medium">
                    {profile.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
                  {profile.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {profile.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Link */}
              <a
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-dark-surface border border-dark-border hover:border-slate-500 text-slate-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Visit {profile.platform} Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
