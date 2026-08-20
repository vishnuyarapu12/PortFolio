import React from 'react';
import { 
  FileText, 
  Download, 
  Eye
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Reveal } from './AnimatedSection';
import { Button } from './Button';

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
        <Reveal delay={0} className="glass-card glass-card-hover rounded-3xl border border-dark-border p-8 sm:p-12 relative overflow-hidden text-center">
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ocean-500/20 to-sky-500/20 border border-ocean-400/30 flex items-center justify-center text-cyan-300 mb-6 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-ocean-400 font-bold mb-2">
              Curriculum Vitae
            </span>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4">
              Want to know more about my experience?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              Download my official resume detailing my academic records at VJIT (8.21 CGPA), full-stack project architectures, and AI/ML competencies.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              
              <Button
                variant="primary"
                onClick={handleDownload}
                className="w-full sm:w-auto px-7 py-3.5 flex items-center gap-2.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </Button>

              <Button
                variant="secondary"
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View Digital Resume</span>
              </Button>

            </div>

            <p className="text-[11px] font-mono text-slate-400 mt-6">
              File target: <code className="text-slate-300">/public/resume.pdf</code> • Ready for recruiter review
            </p>

          </div>

        </Reveal>

      </div>
    </section>
  );
};
