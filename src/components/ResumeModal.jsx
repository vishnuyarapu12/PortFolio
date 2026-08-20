import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Cpu,
  FileText
} from 'lucide-react';
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from './Icons';
import { personalInfo, educationData, projectsData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Yarapu_Vishnuvardhan_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Container */}
      <div 
        className="glass-card w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-dark-border shadow-2xl bg-dark-bg overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Modal Controls Bar */}
        <div className="px-6 py-4 bg-dark-surface border-b border-dark-border flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-display font-bold text-white text-base">
              Digital Resume • {personalInfo.fullName}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-ocean-500 to-sky-500 hover:from-ocean-400 hover:to-sky-400 text-white font-bold text-xs uppercase flex items-center gap-1.5 shadow-btn-primary transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-ocean-400/40 transition-colors hidden sm:block cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-ocean-400/40 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-slate-200 space-y-8 bg-dark-card/30">
          
          {/* Header */}
          <div className="border-b border-dark-border pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                  {personalInfo.fullName}
                </h1>
                <p className="text-cyan-400 font-mono text-sm sm:text-base font-semibold mt-1">
                  Full Stack Developer • Software Engineer
                </p>
              </div>

              <div className="space-y-1 font-mono text-xs text-slate-300 sm:text-right">
                <div>Hyderabad, India • {personalInfo.phone}</div>
                <div className="text-slate-200">{personalInfo.email}</div>
                <div className="flex sm:justify-end gap-3 pt-1 text-slate-400">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 underline">
                    GitHub
                  </a>
                  <span>•</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 underline">
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="hover:text-amber-300 underline">
                    LeetCode
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-dark-border/60">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Objective
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>EDUCATION</span>
            </h2>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-dark-surface border border-dark-border">
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      {edu.degree} ({edu.period})
                    </p>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                    {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>TECHNOLOGIES & SKILLS</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-cyan-400 block mb-1">Languages:</span>
                <span className="text-slate-300">Java, JavaScript, Python, C, SQL</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-sky-400 block mb-1">Frontend:</span>
                <span className="text-slate-300">JavaScript, React, HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-blue-400 block mb-1">Backend & APIs:</span>
                <span className="text-slate-300">Node.js, FastAPI, Python, REST APIs</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-emerald-400 block mb-1">AI & Machine Learning:</span>
                <span className="text-slate-300">Machine Learning (TensorFlow), CNN Models, Whisper API, Groq (LLaMA)</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-amber-400 block mb-1">Databases:</span>
                <span className="text-slate-300">MySQL, Relational Database Queries</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-slate-300 block mb-1">Tools & Platforms:</span>
                <span className="text-slate-300">Git, GitHub, Vercel, Render, Streamlit, YouTubeTools</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>PROJECTS</span>
            </h2>

            <div className="space-y-4">
              {projectsData.slice(0, 2).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-dark-surface border border-dark-border">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {proj.title}
                    </h3>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-slate-300 hover:text-white hover:underline flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mb-2">
                    Technologies: {proj.technologies.join(', ')}
                  </p>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-2">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-300 font-light space-y-1">
                    {proj.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>CERTIFICATES</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-bold text-white block">Python – Cisco</span>
                <span className="text-slate-400">Certified Python Programming</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-bold text-white block">C++ – Cisco</span>
                <span className="text-slate-400">Certified C++ Systems & DSA</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-bold text-white block">Java – GeeksForGeeks</span>
                <span className="text-slate-400">Core Java & OOP Architecture</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-bold text-white block">Salesforce Developer</span>
                <span className="text-slate-400">Agentblazer Champion Program</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
