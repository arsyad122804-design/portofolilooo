import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0f1d] relative border-t border-slate-800/60">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Pengalaman Kerja & Rekam Jejak Profesional
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-medium">
            Pengalaman nyata dalam mengelola teknologi lembaga, membangun sistem digital internal, dan memimpin proyek desain berbasis AI.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((exp, idx) => (
            <div
              key={exp.role + exp.company}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 relative shadow-lg shadow-black/20 group"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                <div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-emerald-400">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Verified Role</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Tanggung Jawab Utama & Pencapaian Kerja:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-start gap-3 hover:bg-slate-900/90 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
