import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Briefcase } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Pengalaman Kerja', href: '#experience', highlight: true },
  { name: 'Tools', href: '#tools' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080c14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 p-0.5 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-lg">
                  FA
                </span>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                M. Fikri Arsyad
              </span>
              <span className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                Portofolio
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-indigo-600/30 to-emerald-600/30 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/40 hover:text-white flex items-center gap-1.5 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.highlight && <Briefcase className="w-3.5 h-3.5 text-indigo-400" />}
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Mobile Toggle & Contact Desktop */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-emerald-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                item.highlight
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-2'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              {item.highlight && <Briefcase className="w-4 h-4 text-indigo-400" />}
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
