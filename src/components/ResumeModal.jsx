import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Cpu,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from './Icons';
import { personalInfo, educationData, skillsData, projectsData, experienceJourney, certificationsData } from '../data/portfolioData';

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
    link.download = 'Vishnu_Yarapu_Resume.pdf';
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
            <FileText className="w-5 h-5 text-electric-400" />
            <span className="font-display font-bold text-white text-base">
              Digital Resume • Vishnu Yarapu
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              className="px-4 py-1.5 rounded-xl bg-white text-dark-bg font-bold text-xs uppercase flex items-center gap-1.5 hover:bg-slate-200 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white transition-colors hidden sm:block"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-white transition-colors"
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
                  Vishnu Yarapu
                </h1>
                <p className="text-electric-400 font-mono text-sm sm:text-base font-semibold mt-1">
                  Software Developer | Full-Stack & AI/ML Enthusiast
                </p>
              </div>

              <div className="space-y-1 font-mono text-xs text-slate-300 sm:text-right">
                <div>Hyderabad, India</div>
                <div className="text-slate-200">{personalInfo.email}</div>
                <div className="flex sm:justify-end gap-3 pt-1 text-slate-400">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white underline">
                    GitHub
                  </a>
                  <span>•</span>
                  <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="hover:text-white underline">
                    LeetCode
                  </a>
                  <span>•</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-electric-400" />
              <span>EDUCATION</span>
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="font-bold text-white text-base">
                  {educationData.institution}
                </h3>
                <p className="text-xs font-mono text-electric-400">
                  {educationData.degree} in {educationData.field}
                </p>
              </div>
              <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg self-start sm:self-auto">
                GPA: {educationData.gpa}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-electric-400" />
              <span>TECHNICAL SKILLS</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-electric-400 block mb-1">Languages:</span>
                <span className="text-slate-300">Java, Python, JavaScript (ES6+), C, C++, SQL</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-sky-400 block mb-1">Frontend:</span>
                <span className="text-slate-300">React, Vite, Tailwind CSS, HTML5, CSS3, Responsive Design</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-blue-400 block mb-1">Backend & APIs:</span>
                <span className="text-slate-300">FastAPI, Node.js, Express.js, Flask, RESTful APIs</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-emerald-400 block mb-1">AI / Machine Learning:</span>
                <span className="text-slate-300">TensorFlow, Keras, CNN, MobileNetV2, Generative AI, Google Gemini API, Speech-to-Text, Text-to-Speech</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-amber-400 block mb-1">Databases:</span>
                <span className="text-slate-300">MySQL, Relational Schema Design, SQL Optimization</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface border border-dark-border">
                <span className="font-mono font-bold text-slate-300 block mb-1">Cloud, DevOps & Tools:</span>
                <span className="text-slate-300">Git, GitHub, Docker, AWS S3, Render, Vercel, PWA, JWT Auth</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-electric-400" />
              <span>KEY PROJECTS</span>
            </h2>

            <div className="space-y-4">
              {projectsData.map((proj) => (
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
                    Stack: {proj.technologies.join(', ')}
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

          {/* Certifications & Programs */}
          <div>
            <h2 className="font-display font-bold text-lg text-white border-b border-dark-border pb-2 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-electric-400" />
              <span>CERTIFICATIONS & PROGRAMS</span>
            </h2>

            <div className="p-4 rounded-xl bg-dark-surface border border-dark-border">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Salesforce Developer Agentblazer Champion Program
                </h3>
                <span className="text-xs font-mono text-slate-400">2025</span>
              </div>
              <p className="text-xs font-mono text-slate-400 mb-2">
                SmartBridge • Salesforce • AICTE (8-Week Virtual Internship)
              </p>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Hands-on enterprise engineering covering Apex backend business logic, Lightning Web Components (LWC), SOQL data querying, and Salesforce cloud administration.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
