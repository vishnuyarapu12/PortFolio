import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Bot, 
  Radio, 
  Video, 
  MessageSquare,
  Activity,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { Reveal } from './AnimatedSection';

export const Projects = ({ onSelectProject }) => {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'agriverse':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'volley':
        return <Radio className="w-5 h-5 text-sky-400" />;
      case 'video-summarizer':
        return <Video className="w-5 h-5 text-blue-400" />;
      case 'intellichat':
        return <MessageSquare className="w-5 h-5 text-indigo-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal delay={0} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-electric-400" />
            <span>03. Featured Engineering</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Selected <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world applications built with modern frontend frameworks, asynchronous Python backends, and AI/ML models.
          </p>
        </Reveal>

        {/* ======================================================== */}
        {/* 1. LARGE FEATURED PROJECT SPOTLIGHT (AgriVerse) */}
        {/* ======================================================== */}
        <Reveal delay={100} className="mb-14">
          <div className="glass-card rounded-3xl border border-dark-border p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Project Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  
                  {/* Badge Bar */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured Flagship AI System
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-full bg-dark-card border border-dark-border">
                      {featuredProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                    {featuredProject.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-electric-400/90 font-medium mb-4 font-mono">
                    "{featuredProject.tagline}"
                  </p>

                  {/* Detailed Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {featuredProject.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {featuredProject.keyFeatures.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-dark-surface border border-dark-border text-slate-300 text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-dark-border">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white text-dark-bg font-bold text-xs uppercase tracking-wide flex items-center gap-2 hover:bg-slate-200 transition-all duration-200"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(featuredProject)}
                    className="px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 text-xs font-mono font-medium flex items-center gap-2 hover:border-slate-500 hover:text-white transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-electric-400" />
                    <span>Explore Architecture Specs</span>
                  </button>
                </div>
              </div>

              {/* Right Column: System Preview Card */}
              <div className="lg:col-span-5">
                <div className="p-5 sm:p-6 rounded-2xl bg-dark-surface border border-dark-border relative overflow-hidden">
                  
                  {/* Visual Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-dark-border font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold">
                      <Bot className="w-4 h-4 text-emerald-400" />
                      <span>AgriVerse ML Pipeline</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                      INFERENCE READY
                    </span>
                  </div>

                  {/* Architecture Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {featuredProject.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-dark-card border border-dark-border">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-mono font-bold text-white mt-0.5">
                          {m.val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Diagnostics Preview */}
                  <div className="p-3.5 rounded-xl bg-dark-bg border border-dark-border font-mono text-[11px] text-slate-300 leading-relaxed space-y-1">
                    <div className="text-electric-400 font-medium">$ uvicorn app.main:app --port 8000</div>
                    <div className="text-slate-400">&gt; Loading MobileNetV2 CNN weights... OK</div>
                    <div className="text-slate-400">&gt; Initializing Google Gemini Client... OK</div>
                    <div className="text-emerald-400">&gt; Voice Engine: Multilingual STT/TTS Active</div>
                    <div className="text-slate-500 pt-1">// Ready for farmer leaf diagnosis requests</div>
                  </div>

                  {/* Quick Action Button */}
                  <button
                    onClick={() => onSelectProject(featuredProject)}
                    className="w-full mt-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Technical Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-electric-400" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* 2. THREE-COLUMN PROJECT GRID (VolleyTrack, AI Video, IntelliChat) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, pIdx) => (
            <Reveal key={project.id} delay={pIdx * 110} duration={850}>
              <div className="glass-card glass-card-hover rounded-2xl border border-dark-border p-6 flex flex-col justify-between group relative overflow-hidden h-full">
              {/* Card Top */}
              <div>
                
                {/* Header Icon + Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-dark-card border border-dark-border">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded-full bg-dark-surface border border-dark-border">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {project.shortTitle}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-400 font-mono mb-4 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* Key Features Bullet points */}
                <div className="space-y-2 mb-6">
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-1.5 flex-shrink-0" />
                      <span className="font-light line-clamp-2">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Tech Stack + Actions */}
              <div className="pt-4 border-t border-dark-border mt-auto">
                
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-dark-surface border border-dark-border text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-card text-slate-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-dark-card border border-dark-border hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-2 rounded-xl bg-dark-surface border border-dark-border text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                    title="View Technical Details"
                  >
                    <ArrowUpRight className="w-4 h-4 text-electric-400" />
                  </button>
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
