import React from 'react';
import { contactData } from '../data/portfolioData';
import { Phone, Mail, Github, Linkedin, Instagram, MessageSquare, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const getIcon = (name) => {
    switch (name) {
      case 'WhatsApp': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'Email': return <Mail className="w-5 h-5 text-indigo-400" />;
      case 'GitHub': return <Github className="w-5 h-5 text-slate-300" />;
      case 'LinkedIn': return <Linkedin className="w-5 h-5 text-blue-400" />;
      case 'Instagram': return <Instagram className="w-5 h-5 text-pink-400" />;
      default: return <Send className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080c14] relative border-t border-slate-800/60 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {contactData.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            {contactData.description}
          </p>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-xl mx-auto justify-center">
            {contactData.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/60 mb-3 group-hover:scale-110 transition-transform">
                  {getIcon(link.name)}
                </div>
                <span className="text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {link.name}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {link.text}
                </span>
              </a>
            ))}
          </div>

          {/* Cool & Modern Footer Card */}
          <div className="relative group max-w-xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative px-6 py-4.5 sm:py-5 rounded-2xl bg-[#0d1322]/90 border border-slate-800/80 backdrop-blur-xl flex items-center justify-center gap-3 text-center shadow-2xl">
              <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-indigo-400 shrink-0 animate-pulse" />
              <p className="text-sm sm:text-base font-bold tracking-wide bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                Terima Kasih Telah Meninjau Portofolio Ini
              </p>
              <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-400 shrink-0 animate-pulse" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
