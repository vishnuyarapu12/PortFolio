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
import { personalInfo, educationData } from '../data/portfolioData';

export const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-emerald-400" />,
      title: "AI & Deep Learning",
      description: "Practical engineering developing CNN computer vision models (MobileNetV2) and integrating generative AI APIs (Google Gemini)."
    },
    {
      icon: <Server className="w-5 h-5 text-electric-400" />,
      title: "Full-Stack Web Architectures",
      description: "Engineering scalable client-server applications using React, Python (FastAPI/Flask), Node.js, and relational databases with MySQL."
    },
    {
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      title: "Real-World Engineering",
      description: "Focused on end-to-end practical products: geolocation presence trackers (VolleyTrack), agronomy platforms (AgriVerse), and audio transformers."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      title: "Strong Academic Foundation",
      description: "IT Engineering student at Vidya Jyothi Institute of Technology with an 8.16 GPA and rigorous fundamentals in DSA and systems."
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <Compass className="w-3.5 h-3.5 text-electric-400" />
            <span>01. Profile & Mindset</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Passionate software developer driven by architectural curiosity, practical engineering, and AI-powered innovation.
          </p>
        </div>

        {/* Two-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-2xl border border-dark-border">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-electric-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Vishnu Yarapu
                  </h3>
                  <p className="text-xs font-mono text-electric-400">
                    B.Tech Information Technology • VJIT (8.16 GPA)
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
              <div className="mt-6 p-4 rounded-xl bg-dark-surface border border-dark-border flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  "I focus on turning algorithmic problem-solving and modern frameworks into reliable, performant, and user-centric software products."
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 pt-6 border-t border-dark-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="font-display font-extrabold text-2xl text-white flex items-baseline justify-center sm:justify-start gap-0.5">
                    <span>{stat.value}</span>
                    <span className="text-xs font-mono text-electric-400">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-dark-border flex items-start gap-4"
              >
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
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
