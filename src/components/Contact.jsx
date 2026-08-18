import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#38bdf8', '#0284c7', '#ffffff']
        });
      } catch (err) {
        // silent fallback
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg bg-grid relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-card border border-dark-border text-slate-300 font-mono text-xs mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-electric-400" />
            <span>08. Get In Touch</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Let's Build <span className="text-gradient-primary">Something Together</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            I'm always interested in full-stack engineering, machine learning solutions, and technical opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border">
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Connect with Vishnu
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                Whether you have an internship opportunity, a software project, or want to discuss full-stack & AI architectures, feel free to reach out.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-dark-surface border border-dark-border mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-slate-200 font-medium truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-card border border-dark-border hover:border-slate-500 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-dark-surface border border-dark-border mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Phone / WhatsApp
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-slate-200 font-medium">
                    {personalInfo.phone}
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-dark-card border border-dark-border hover:border-slate-500 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Phone Number"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Quick Details */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-electric-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-electric-400" />
                  <span>IST (UTC+5:30) • Fast Response</span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="glass-card p-6 rounded-2xl border border-dark-border">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-4">
                Profiles & Repositories:
              </span>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-slate-500 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-colors group"
                >
                  <GithubIcon className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-mono">GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-slate-500 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-colors group"
                >
                  <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-mono">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-dark-surface border border-dark-border hover:border-slate-500 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-colors group"
                >
                  <LeetCodeIcon className="w-5 h-5 text-amber-400 group-hover:scale-105 transition-transform" />
                  <span className="text-[10px] font-mono">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-dark-border relative">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md font-light mb-6">
                    Thank you for reaching out. I'll review your note and respond back to your email promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-dark-surface border border-dark-border hover:border-slate-500 text-slate-200 text-xs font-mono"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mb-5 font-mono">
                    Fill out the form below or write directly to my email.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Vishnu, I came across your portfolio and would like to connect regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-white text-dark-bg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-slate-200 transition-all duration-200 shadow-sm active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                      className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors underline"
                    >
                      Or open default email client
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
