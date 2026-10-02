import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#060910] border-t border-slate-800/80 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-sm">
            {personalInfo.name}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-400">
            {personalInfo.title}
          </span>
        </div>

        <p className="text-xs text-slate-500 font-medium">
          © {currentYear} Muhammad Fikri Arsyad. All rights reserved. Built with AI & React.
        </p>

      </div>
    </footer>
  );
}
