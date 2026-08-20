import React, { useState } from 'react';
import { AnimatedSection } from './components/AnimatedSection';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingOverlay } from './components/LoadingOverlay';
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
    <div className="min-h-screen bg-dark-bg text-slate-100 selection:bg-ocean-500/30 selection:text-cyan-200">
      
      {/* Subtle Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Brief Entry Fade Overlay */}
      <LoadingOverlay />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      <main>
        {/* Hero with progressive cinematic staggered entrance */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 1. About Me */}
        <AnimatedSection>
          <About />
        </AnimatedSection>

        {/* 2. Technical Skills */}
        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        {/* 3. Projects Showcase */}
        <AnimatedSection>
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
        </AnimatedSection>

        {/* 4. Experience & Journey Timeline */}
        <AnimatedSection>
          <Experience />
        </AnimatedSection>

        {/* 5. Industry Certifications */}
        <AnimatedSection>
          <Certifications />
        </AnimatedSection>

        {/* 6. Academic Background */}
        <AnimatedSection>
          <Education />
        </AnimatedSection>

        {/* 7. Coding Profiles (GitHub, LeetCode) */}
        <AnimatedSection>
          <CodingProfiles />
        </AnimatedSection>

        {/* 8. Dedicated Resume Section */}
        <AnimatedSection>
          <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        </AnimatedSection>

        {/* 9. Contact Section */}
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
