import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Terminal,
  Bot,
  Radio,
  Video,
  MessageSquare,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card */}
      <div 
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-dark-border p-6 sm:p-8 relative shadow-2xl bg-dark-bg"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-dark-surface border border-dark-border text-slate-300 font-semibold">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Flagship Project
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm font-mono text-electric-400 mb-6">
          "{project.tagline}"
        </p>

        {/* Overview Description */}
        <div className="p-4 sm:p-5 rounded-2xl bg-dark-surface border border-dark-border mb-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
            Architectural Overview
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Implemented Features List */}
        <div className="mb-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
            Core Implemented Features:
          </span>
          <div className="space-y-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                <span className="font-light">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
              Technical Specifications:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-dark-card border border-dark-border text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                  <div className="text-xs font-mono font-bold text-white mt-0.5">{m.val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2.5">
            Technologies & Frameworks:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-dark-border">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-dark-bg font-bold text-xs uppercase tracking-wide flex items-center gap-2 hover:bg-slate-200 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open Repository on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>

    </div>
  );
};
