import React, { useState } from 'react';
import { AnimatedSection } from './components/AnimatedSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { CodingProfiles } from './components/CodingProfiles';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

export const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      <main>
        {/* Hero has its own cinematic staggered entrance — no AnimatedSection wrapper */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Every section below reveals cinematically when scrolled into view */}
        <AnimatedSection>
          <About />
        </AnimatedSection>

        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        <AnimatedSection>
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
        </AnimatedSection>

        <AnimatedSection>
          <Experience />
        </AnimatedSection>

        <AnimatedSection>
          <Certifications />
        </AnimatedSection>

        <AnimatedSection>
          <Education />
        </AnimatedSection>

        <AnimatedSection>
          <CodingProfiles />
        </AnimatedSection>

        <AnimatedSection>
          <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive Digital Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
};

export default App;
