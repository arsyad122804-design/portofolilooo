import React from 'react';
import { toolsData } from '../data/portfolioData';
import { Wrench, Sparkles, Terminal, CheckCircle } from 'lucide-react';

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-[#0a0f1d] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Perangkat & Alat Kerja Utama
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Tools dan platform terdepan yang digunakan untuk mempercepat alur kerja riset, desain, pengkodean, serta publikasi web.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toolsData.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {tool.category}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-emerald-400 text-[11px] font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Active Daily Tool</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
