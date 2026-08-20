import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Brain, 
  Cloud, 
  Cpu, 
  Sparkles,
  Layers,
  CheckCircle,
  Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Reveal } from './AnimatedSection';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-electric-400" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Backend & APIs':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'AI & Machine Learning':
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Cloud, DevOps & Tools':
        return <Cloud className="w-5 h-5 text-slate-300" />;
      case 'Architecture & Other':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-electric-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-dark-bg bg-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading — staggered */}
        <Reveal delay={0} className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5 text-electric-400" />
            <span>02. Technical Arsenal</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Categorized technical stack focused on scalable system architecture, backend reliability, and AI/ML pipelines.
          </p>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={120} className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-dark-bg font-bold shadow-sm'
                  : 'bg-dark-card border border-dark-border text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Categorized Skills Grid — each card staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredCategories.map((catGroup, idx) => (
            <Reveal
              key={`${catGroup.category}-${idx}`}
              delay={idx * 90}
              duration={800}
            >
              <div className="glass-card p-6 rounded-2xl border border-dark-border hover:border-slate-600 transition-all duration-300 flex flex-col h-full group glass-card-hover">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-dark-border">
                  <div className="p-2.5 rounded-xl bg-dark-card border border-dark-border">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">
                      {catGroup.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {catGroup.skills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs text-slate-400 mb-5 font-light leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-dark-surface/90 border border-dark-border hover:border-slate-600 transition-all duration-150 w-full"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-400" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-card border border-dark-border text-slate-400 font-medium">
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Assurance Note */}
        <Reveal delay={200} className="mt-12 p-4 rounded-2xl bg-dark-card border border-dark-border max-w-2xl mx-auto flex items-center justify-center gap-3 text-center">
          <CheckCircle className="w-4 h-4 text-electric-400 flex-shrink-0" />
          <span className="text-xs font-mono text-slate-300">
            Skills backed by verified source implementations in GitHub repositories and academic coursework.
          </span>
        </Reveal>

      </div>
    </section>
  );
};
