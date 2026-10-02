import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Brain, Palette, Cpu, Globe, Check } from 'lucide-react';

export default function Skills() {
  const categories = [
    { key: 'aiDesign', data: skillsData.aiDesign, icon: <Palette className="w-5 h-5 text-purple-400" />, emoji: "🎨" },
    { key: 'aiEngineering', data: skillsData.aiEngineering, icon: <Cpu className="w-5 h-5 text-blue-400" />, emoji: "⚙️" },
    { key: 'webDesign', data: skillsData.webDesign, icon: <Globe className="w-5 h-5 text-teal-400" />, emoji: "🌐" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#080c14] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Keahlian Utama & Spesialisasi
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Kombinasi keahlian teknis dalam desain berbasis AI, rekayasa kecerdasan buatan, serta perancangan website modern.
          </p>
        </div>

        {/* Grid 3 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map(({ key, data, icon, emoji }) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/60">
                    {icon}
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Kategori</span>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <span>{emoji}</span> {data.category}
                    </h3>
                  </div>
                </div>

                {/* Items list */}
                <ul className="space-y-2.5">
                  {data.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-0.5 rounded bg-emerald-500/10 text-emerald-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/50">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block text-right">
                  {data.items.length} Modalitas Keahlian
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
