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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const targetY = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      smoothScrollTo(targetY, 900); // slow, smooth 900ms scroll
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Vishnu Yarapu Home"
          >
            <div className="w-9 h-9 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-electric-400 group-hover:border-electric-400/50 group-hover:text-white transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold font-display text-base tracking-tight text-white group-hover:text-electric-400 transition-colors">
                <span>Vishnu</span>
                <span className="text-slate-400 font-mono text-xs font-normal">.dev</span>
              </div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Software Engineer
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1 bg-dark-surface/90 border border-dark-border px-3 py-1.5 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  data-section={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-ocean-400 text-white border border-ocean-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-ocean-500/5'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          {/* Nav Indicator */}
          <NavIndicator navRef={navRef} activeSection={activeSection} />

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Button onClick={onOpenResume} className="bg-white text-dark-bg hover:bg-slate-200">
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-dark-card border border-dark-border text-slate-200 font-medium text-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-electric-400" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-nav border-b border-dark-border px-4 pt-3 pb-6 mt-3 animate-fadeIn">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-ocean-400 text-white border border-ocean-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-electric-400" />}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-dark-border flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-dark-bg font-semibold text-xs uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300"
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
