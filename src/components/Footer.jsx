import React from 'react';
import { 
  Mail, 
  ArrowUp, 
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/smoothScroll';

export const Footer = () => {
  const scrollToTop = () => {
    smoothScrollTo(0);
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-ocean-400/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-dark-border/60">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-500/20 to-sky-500/20 border border-ocean-400/40 flex items-center justify-center text-cyan-300">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Vishnu Yarapu
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm">
              "Building technology. Solving problems. Learning continuously."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-ocean-400/40 hover:bg-dark-surface transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-amber-300 hover:border-ocean-400/40 hover:bg-dark-surface transition-colors"
              title="LeetCode"
              aria-label="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-cyan-300 hover:border-ocean-400/40 hover:bg-dark-surface transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-cyan-300 hover:border-ocean-400/40 hover:bg-dark-surface transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-dark-surface border border-ocean-400/30 text-cyan-300 hover:bg-ocean-500/10 hover:border-ocean-400 transition-all ml-2 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Engineering Credential */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>© 2026 Vishnu Yarapu. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>B.Tech Information Technology</span>
            <span>•</span>
            <span className="text-cyan-400/90">Vidya Jyothi Institute of Technology (8.21 CGPA)</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
