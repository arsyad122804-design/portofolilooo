import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Palette, Globe, TrendingUp, FileText, ExternalLink, X, Download } from 'lucide-react';

export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        


        {/* Main Heading & Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          <span className="block text-slate-300 text-lg sm:text-2xl font-semibold mb-3 tracking-wider uppercase">
            🚀 Portofolio Profesional
          </span>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Roles Pill Badge */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium">
            <Palette className="w-4 h-4 text-purple-400" />
            AI Designer
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium">
            <Cpu className="w-4 h-4 text-blue-400" />
            AI Engineer
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs sm:text-sm font-medium">
            <Globe className="w-4 h-4 text-teal-400" />
            Web Designer
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-medium">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            Investor
          </span>
        </div>



        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsCvOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Buka CV Saya</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </button>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Lihat Pengalaman Kerja</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-700/80 hover:border-slate-600 transition-all"
          >
            <span>Jelajahi Proyek</span>
          </a>
        </div>



      </div>

      {/* CV Preview Modal with Close (X) Button */}
      {isCvOpen && (
        <div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsCvOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span>Curriculum Vitae - {personalInfo.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/cv_fikri_arsyad.jpg"
                  download="CV_Muhammad_Fikri_Arsyad.jpg"
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Unduh CV</span>
                </a>

                <button
                  onClick={() => setIsCvOpen(false)}
                  className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-all cursor-pointer"
                  aria-label="Tutup CV Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - CV Document Preview */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-slate-950/40 flex justify-center items-start">
              <img
                src="/cv_fikri_arsyad.jpg"
                alt="Curriculum Vitae Muhammad Fikri Arsyad"
                className="w-full h-auto max-w-3xl rounded-xl shadow-lg border border-slate-800 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
