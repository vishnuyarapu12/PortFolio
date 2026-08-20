import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';
import { NavIndicator } from './NavIndicator';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/smoothScroll';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 72;
      const targetY = Math.max(0, element.getBoundingClientRect().top + window.pageYOffset - navOffset);
      smoothScrollTo(targetY, 600);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg'
          : 'bg-dark-bg/40 backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 rounded-xl"
            aria-label="Vishnu Yarapu Home"
          >
            <div className="w-9 h-9 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-electric-400 group-hover:border-ocean-400/50 group-hover:text-cyan-300 transition-all duration-200 shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold font-display text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                <span>Vishnu</span>
                <span className="text-slate-400 font-mono text-xs font-normal">.dev</span>
              </div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Software Engineer
              </p>
            </div>
          </button>

          {/* Desktop Navigation with Smooth Sliding Active Indicator */}
          <nav
            ref={navRef}
            className="relative hidden lg:flex items-center gap-1 bg-dark-surface/90 border border-dark-border px-2 py-1 rounded-full backdrop-blur-md shadow-sm"
          >
            <NavIndicator navRef={navRef} activeSection={activeSection} />
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  data-section={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-500 hover:bg-dark-surface transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Button
              onClick={onOpenResume}
              variant="primary"
              className="flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-dark-card border border-dark-border text-slate-200 font-medium text-xs flex items-center gap-1.5 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-electric-400" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-nav border-b border-dark-border px-4 pt-3 pb-6 mt-3 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-ocean-500/20 to-sky-500/20 text-white border border-ocean-400/40 font-semibold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-dark-border flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-ocean-500 to-sky-500 text-white font-semibold text-xs uppercase shadow-btn-primary active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
