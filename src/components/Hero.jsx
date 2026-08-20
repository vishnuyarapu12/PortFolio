import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  ChevronDown,
  Database,
  Server,
  Globe,
  Bot,
  ShieldCheck,
  Zap,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from './Icons';
import { ParticleCanvas } from './ParticleCanvas';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/smoothScroll';
import { Button } from './Button';

export const Hero = ({ onOpenResume }) => {
  const animatedRole = useTypewriter(personalInfo.roles, 90, 45, 1800);
  const [activeSpecialization, setActiveSpecialization] = useState('fullstack');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 72;
      const pos = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - navOffset);
      smoothScrollTo(pos, 600);
    }
  };

  const specializationDetails = {
    fullstack: {
      title: "Full-Stack Web Development",
      subtitle: "React • Node.js • JavaScript • MySQL",
      description: "Building responsive client applications with React and high-speed backend services with Node.js and FastAPI, integrated with structured relational databases.",
      badge: "Web Systems",
      color: "text-sky-400",
      stats: [
        { label: "Frontend", val: "React + JS" },
        { label: "Backend", val: "Node.js / FastAPI" },
        { label: "Storage", val: "MySQL RDBMS" }
      ]
    },
    ai: {
      title: "Applied Machine Learning & NLP",
      subtitle: "TensorFlow • CNN • Whisper API • Groq (LLaMA)",
      description: "Developing CNN inference pipelines for crop disease detection and automated speech-to-text video summarization with Whisper API and Groq LLMs.",
      badge: "AI / ML & NLP",
      color: "text-cyan-400",
      stats: [
        { label: "Computer Vision", val: "CNN (TensorFlow)" },
        { label: "Speech-to-Text", val: "Whisper API" },
        { label: "LLM Insights", val: "Groq (LLaMA)" }
      ]
    },
    backend: {
      title: "Languages & System Foundations",
      subtitle: "Java • C • Python • Git/GitHub • Vercel/Render",
      description: "Strong foundation in Java (GFG certified), C & Python (Cisco certified), Salesforce developer internship, and modern deployment platforms.",
      badge: "Core Engineering",
      color: "text-amber-400",
      stats: [
        { label: "Languages", val: "Java / C / Python" },
        { label: "Tools", val: "Git / Vercel / Render" },
        { label: "Degree CGPA", val: "8.21 / 10.0" }
      ]
    }
  };

  const currentSpec = specializationDetails[activeSpecialization];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-dark-bg bg-grid"
    >
      {/* Ambient Canvas */}
      <ParticleCanvas />

      {/* Ambient background glow — subtle ocean pulse */}
      <div className="hero-ambient-glow absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-ocean-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Cinematic Staggered Entrance                 */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* 1. Status Pill */}
            <div className="hero-anim hero-anim-d0 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                B.Tech IT Graduate • Open for Opportunities
              </span>
            </div>

            {/* 2. Name Heading */}
            <div className="hero-anim hero-anim-d1 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-ocean-400 font-semibold block mb-1">
                Full-Stack & AI Software Developer
              </span>
              <h1 className="font-display font-black tracking-tight text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
            </div>

            {/* 3. Role Switcher Card */}
            <div className="hero-anim hero-anim-d2 w-full max-w-lg p-4 rounded-2xl bg-dark-surface/90 border border-dark-border mb-6 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  Primary Focus
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active
                </span>
              </div>

              {/* Animated Role Presentation */}
              <div className="flex items-center gap-2 text-lg sm:text-xl font-display font-bold text-white">
                <span className="text-gradient-primary">{animatedRole}</span>
                <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse" />
              </div>

              {/* Quick Role Badges */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-dark-border">
                {personalInfo.roles.map((r, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-card border border-dark-border text-slate-300"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Short Bio */}
            <p className="hero-anim hero-anim-d3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-light">
              {personalInfo.bio}
            </p>

            {/* 5. CTA Buttons */}
            <div className="hero-anim hero-anim-d4 flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              
              {/* View Projects */}
              <Button
                variant="primary"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Download / View Resume */}
              <Button
                variant="secondary"
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </Button>

              {/* Contact Me */}
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-5 py-3.5 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </Button>
            </div>

            {/* 6. Social Links & Profiles Row */}
            <div className="hero-anim hero-anim-d5 flex items-center gap-3 mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-ocean-400/40 hover:bg-dark-surface transition-all duration-200"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-cyan-300 hover:border-ocean-400/40 hover:bg-dark-surface transition-all duration-200"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-amber-300 hover:border-ocean-400/40 hover:bg-dark-surface transition-all duration-200"
                title="LeetCode Profile"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* 7. Credentials & Education Row */}
            <div className="hero-anim hero-anim-d5 pt-6 border-t border-dark-border w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> VJIT (8.21 CGPA)
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Cisco & GFG Certified
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-sky-400" /> Hyderabad, India
              </span>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Interactive Developer Profile Card          */}
          {/* ======================================================== */}
          <div className="hero-anim hero-anim-d3 lg:col-span-6">
            <div className="glass-card rounded-3xl border border-dark-border p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              {/* Header: Developer Profile Card */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-dark-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ocean-500/20 to-sky-500/20 border border-ocean-400/30 flex items-center justify-center font-display font-black text-lg text-white">
                    VY
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white flex items-center gap-1.5">
                      <span>{personalInfo.fullName}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" title="Available"></span>
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      Full-Stack & AI Software Developer
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-dark-surface border border-ocean-400/30 text-cyan-300 font-semibold shadow-sm">
                  8.21 CGPA
                </span>
              </div>

              {/* Specialization Switcher Tabs UI */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2.5">
                  Explore Technical Competencies:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveSpecialization('fullstack')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeSpecialization === 'fullstack'
                        ? 'bg-gradient-to-r from-ocean-500 to-sky-500 text-white font-bold shadow-btn-primary border border-ocean-400/40'
                        : 'bg-dark-surface border border-dark-border text-slate-400 hover:text-white hover:border-slate-600'
                    }`}
                  >
                    Full-Stack
                  </button>

                  <button
                    onClick={() => setActiveSpecialization('ai')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeSpecialization === 'ai'
                        ? 'bg-gradient-to-r from-ocean-500 to-sky-500 text-white font-bold shadow-btn-primary border border-ocean-400/40'
                        : 'bg-dark-surface border border-dark-border text-slate-400 hover:text-white hover:border-slate-600'
                    }`}
                  >
                    AI / Vision
                  </button>

                  <button
                    onClick={() => setActiveSpecialization('backend')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeSpecialization === 'backend'
                        ? 'bg-gradient-to-r from-ocean-500 to-sky-500 text-white font-bold shadow-btn-primary border border-ocean-400/40'
                        : 'bg-dark-surface border border-dark-border text-slate-400 hover:text-white hover:border-slate-600'
                    }`}
                  >
                    Languages
                  </button>
                </div>
              </div>

              {/* Interactive Specialization Details Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-dark-surface border border-dark-border mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>{currentSpec.title}</span>
                  </h4>
                  <span className={`text-[10px] font-mono font-bold uppercase ${currentSpec.color}`}>
                    {currentSpec.badge}
                  </span>
                </div>

                <p className="text-xs font-mono text-slate-400 mb-3">
                  {currentSpec.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                  {currentSpec.description}
                </p>

                {/* 3 Metrics Mini Cards */}
                <div className="grid grid-cols-3 gap-2">
                  {currentSpec.stats.map((s, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-dark-card border border-dark-border text-center">
                      <div className="text-[9px] font-mono uppercase text-slate-400">{s.label}</div>
                      <div className="text-xs font-mono font-bold text-white mt-0.5">{s.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive System Pipeline Architecture Diagram */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2.5">
                  End-to-End System Pipeline:
                </span>
                
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-ocean-400/40 transition-colors">
                    <Globe className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-white">Client UI</div>
                    <div className="text-[9px] text-slate-400">React</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-ocean-400/40 transition-colors">
                    <Server className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-white">API Layer</div>
                    <div className="text-[9px] text-slate-400">FastAPI/Node</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-ocean-400/40 transition-colors">
                    <Bot className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-white">AI Engine</div>
                    <div className="text-[9px] text-slate-400">CNN/Groq</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-ocean-400/40 transition-colors">
                    <Database className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-white">Storage</div>
                    <div className="text-[9px] text-slate-400">MySQL</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hero-anim hero-anim-d6 mt-12 lg:mt-16 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 rounded-xl p-2"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-slate-200">
              Explore Portfolio
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
