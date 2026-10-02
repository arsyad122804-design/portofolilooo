import React, { useState } from 'react';
import { aiDesignShowcase, aiEngineeringShowcase, webDesignShowcase } from '../data/portfolioData';
import { Palette, Cpu, Globe, Sparkles, LayoutGrid, CheckCircle } from 'lucide-react';

export default function Showcases() {
  const [activeTab, setActiveTab] = useState('ai-design');

  return (
    <section id="ai-showcase" className="py-24 bg-[#0a0f1d] relative border-t border-slate-800/60">
      
      {/* Target anchor for Web Showcase */}
      <div id="web-showcase" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <LayoutGrid className="w-4 h-4" />
            <span>🎨 5 • ⚙️ 6 • 🌐 7. Specialization Showcases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Galeri Showcase & Portofolio Karya
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-medium">
            Kumpulan showcase karya spesifik yang dikelompokkan ke dalam 3 divisi utama: AI Design, AI Engineering, dan Web Design.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('ai-design')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'ai-design'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20 scale-105'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>🎨 5. AI Design Showcase</span>
          </button>

          <button
            onClick={() => setActiveTab('ai-engineering')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'ai-engineering'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>⚙️ 6. AI Engineering Showcase</span>
          </button>

          <button
            onClick={() => setActiveTab('web-design')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'web-design'
                ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/20 scale-105'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>🌐 7. Web Design Showcase</span>
          </button>
        </div>

        {/* Tab 1: AI Design Showcase */}
        {activeTab === 'ai-design' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {aiDesignShowcase.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-purple-900/30 hover:border-purple-500/50 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4 border border-purple-500/20">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: AI Engineering Showcase */}
        {activeTab === 'ai-engineering' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {aiEngineeringShowcase.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-blue-900/30 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4 border border-blue-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Web Design Showcase */}
        {activeTab === 'web-design' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {webDesignShowcase.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-teal-900/30 hover:border-teal-500/50 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 w-fit mb-4 border border-teal-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
