import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code2, 
  Brain, 
  Server, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Compass,
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Reveal } from './AnimatedSection';

export const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-emerald-400" />,
      title: "AI & Machine Learning",
      description: "Hands-on development of CNN models for crop disease detection and NLP summarization pipelines with Whisper API and Groq (LLaMA)."
    },
    {
      icon: <Server className="w-5 h-5 text-sky-400" />,
      title: "Full-Stack Web Development",
      description: "Engineering scalable client-server applications with React, Node.js, Python (FastAPI/Flask), and relational database modeling with MySQL."
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Algorithms & Languages",
      description: "Strong proficiency in Java, C, Python, JavaScript, and database query optimization with SQL, verified through Cisco and GFG certifications."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      title: "B.Tech IT Graduate",
      description: "Information Technology graduate from Vidya Jyothi Institute of Technology with an 8.21 CGPA and rigorous computer science fundamentals."
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <Reveal delay={0} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>01. Profile & Mindset</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Enthusiastic Full Stack Developer with strong understanding of frontend, backend, databases, and AI systems.
          </p>
        </Reveal>

        {/* Two-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <Reveal delay={100} className="lg:col-span-7 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-3xl border border-dark-border">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-ocean-500/20 to-sky-500/20 border border-ocean-400/30 flex items-center justify-center text-cyan-300 font-bold font-display text-base">
                  VY
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {personalInfo.fullName}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    B.Tech Information Technology • VJIT (8.21 CGPA)
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {personalInfo.aboutDetailed.map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Philosophy Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-dark-surface border border-dark-border flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  "{personalInfo.bio}"
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 pt-6 border-t border-dark-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="font-display font-extrabold text-2xl text-white flex items-baseline justify-center sm:justify-start gap-0.5">
                    <span>{stat.value}</span>
                    <span className="text-xs font-mono text-cyan-400">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 90 + 120}
                duration={750}
              >
                <div className="glass-card glass-card-hover p-5 rounded-2xl border border-dark-border flex items-start gap-4 h-full">
                  <div className="p-2.5 rounded-xl bg-dark-card border border-dark-border flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
