import React, { useState } from 'react';
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

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Personal */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Projects Showcase */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Experience / Learning Timeline */}
        <Experience />

        {/* 6. Certifications */}
        <Certifications />

        {/* 7. Education */}
        <Education />

        {/* 8. Coding Profiles (GitHub, LeetCode) */}
        <CodingProfiles />

        {/* 9. Dedicated Resume Section */}
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 10. Contact Section */}
        <Contact />
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
