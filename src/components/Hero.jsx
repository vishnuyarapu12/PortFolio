import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Bot, 
  CheckCircle2, 
  ChevronDown,
  Database,
  Server,
  Globe,
  Radio,
  ShieldCheck,
  Zap,
  GraduationCap
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { ParticleCanvas } from './ParticleCanvas';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const animatedRole = useTypewriter(personalInfo.roles, 90, 45, 1800);
  const [activeSpecialization, setActiveSpecialization] = useState('fullstack');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const specializationDetails = {
    fullstack: {
      title: "Full-Stack Web Architecture",
      subtitle: "React • FastAPI • Node.js • MySQL",
      description: "Building responsive progressive web applications (PWAs) with high-speed async backends, geolocation algorithms, and real-time state synchronization.",
      badge: "Web Systems",
      color: "text-sky-400",
      stats: [
        { label: "Frontend", val: "React + Vite" },
        { label: "Backend", val: "FastAPI / Flask" },
        { label: "Storage", val: "MySQL / SQL" }
      ]
    },
    ai: {
      title: "Applied AI & Computer Vision",
      subtitle: "TensorFlow • MobileNetV2 • Google Gemini",
      description: "Developing CNN inference pipelines for leaf disease detection, multimodal Gemini advisory integration, and automated speech-to-text workflows.",
      badge: "Deep Learning",
      color: "text-emerald-400",
      stats: [
        { label: "Vision CNN", val: "MobileNetV2" },
        { label: "Generative AI", val: "Google Gemini" },
        { label: "Voice AI", val: "STT / TTS" }
      ]
    },
    backend: {
      title: "Enterprise & Backend Systems",
      subtitle: "Java • Apex • REST APIs • Cloud",
      description: "Robust object-oriented system design, Salesforce Agentblazer developer program experience, and clean modular microservices.",
      badge: "Core Engineering",
      color: "text-amber-400",
      stats: [
        { label: "Languages", val: "Java / Python / C++" },
        { label: "Internship", val: "Salesforce LWC" },
        { label: "Degree GPA", val: "8.16 / 10.0" }
      ]
    }
  };

  const currentSpec = specializationDetails[activeSpecialization];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-dark-bg bg-grid"
    >
      {/* Ambient Starfield Canvas */}
      <ParticleCanvas />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Clean Developer Identity & UI Presentation */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Status Pill UI */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Information Technology Engineer • Available for Roles
              </span>
            </div>

            {/* Name Heading with Clean UI Typography */}
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-1">
                Software Developer Portfolio
              </span>
              <h1 className="font-display font-black tracking-tight text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08]">
                Vishnu Yarapu
              </h1>
            </div>

            {/* Dynamic UI Role Switcher Card */}
            <div className="w-full max-w-lg p-4 rounded-2xl bg-dark-surface/90 border border-dark-border mb-6 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-electric-400" />
                  Primary Focus
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active
                </span>
              </div>

              {/* Animated Role Presentation */}
              <div className="flex items-center gap-2 text-lg sm:text-xl font-display font-bold text-white">
                <span className="text-electric-400">{animatedRole}</span>
                <span className="inline-block w-2 h-5 bg-electric-400 animate-pulse" />
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

            {/* Short Bio Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-light">
              {personalInfo.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              
              {/* View Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-dark-bg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-slate-200 transition-all duration-200 shadow-btn-primary active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Download / View Resume */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-card border border-dark-border text-slate-200 font-semibold text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:border-slate-500 hover:text-white transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4 text-electric-400" />
                <span>Resume</span>
              </button>

              {/* Contact Me */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 font-medium text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:border-slate-600 hover:text-white transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </button>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Education & Credentials Row */}
            <div className="pt-6 border-t border-dark-border w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-electric-400" /> VJIT (8.16 GPA)
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Salesforce Agentblazer
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-sky-400" /> Hyderabad, India
              </span>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Modern Interactive Developer Profile UI    */}
          {/* ======================================================== */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl border border-dark-border p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              {/* Header: Developer Profile Card */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-dark-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-500/20 to-sky-500/20 border border-dark-border flex items-center justify-center font-display font-black text-lg text-white">
                    VY
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white flex items-center gap-1.5">
                      <span>Vishnu Yarapu</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" title="Available"></span>
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      Full-Stack & AI/ML Software Developer
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-dark-surface border border-dark-border text-electric-400 font-semibold">
                  Engineering v2.6
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
                        ? 'bg-white text-dark-bg font-bold shadow-sm'
                        : 'bg-dark-surface border border-dark-border text-slate-400 hover:text-white'
                    }`}
                  >
                    Full-Stack
                  </button>

                  <button
                    onClick={() => setActiveSpecialization('ai')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeSpecialization === 'ai'
                        ? 'bg-white text-dark-bg font-bold shadow-sm'
                        : 'bg-dark-surface border border-dark-border text-slate-400 hover:text-white'
                    }`}
                  >
                    AI / Vision
                  </button>

                  <button
                    onClick={() => setActiveSpecialization('backend')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                      activeSpecialization === 'backend'
                        ? 'bg-white text-dark-bg font-bold shadow-sm'
                        : 'bg-dark-surface border border-dark-border text-slate-400 hover:text-white'
                    }`}
                  >
                    Systems
                  </button>
                </div>
              </div>

              {/* Interactive Specialization Details Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-dark-surface border border-dark-border mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-electric-400" />
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
                  {/* Step 1 */}
                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border">
                    <Globe className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-white">Client UI</div>
                    <div className="text-[9px] text-slate-400">React PWA</div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border">
                    <Server className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-white">API Layer</div>
                    <div className="text-[9px] text-slate-400">FastAPI</div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border">
                    <Bot className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-[10px] font-bold text-white">AI Engine</div>
                    <div className="text-[9px] text-slate-400">Gemini/CNN</div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-2.5 rounded-xl bg-dark-surface border border-dark-border">
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
        <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-slate-200">
              Explore Portfolio
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-electric-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
