import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection = ({ onOpenResume }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Vishnu_Yarapu_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Resume Banner Card */}
        <div className="glass-card rounded-3xl border border-dark-border p-8 sm:p-12 relative overflow-hidden text-center">
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            <div className="w-12 h-12 rounded-2xl bg-dark-surface border border-dark-border flex items-center justify-center text-electric-400 mb-6">
              <FileText className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
              Curriculum Vitae
            </span>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4">
              Want to know more about my experience?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              Download my official resume detailing my academic records at VJIT (8.16 GPA), full-stack project architectures, and AI/ML competencies.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-dark-bg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2.5 hover:bg-slate-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-card border border-dark-border text-slate-200 font-semibold text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:border-slate-500 hover:text-white transition-all duration-200 active:scale-95"
              >
                <Eye className="w-4 h-4 text-electric-400" />
                <span>View Digital Resume</span>
              </button>

            </div>

            <p className="text-[11px] font-mono text-slate-400 mt-6">
              File target: <code className="text-slate-300">/public/resume.pdf</code> • Ready for recruiter review
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
