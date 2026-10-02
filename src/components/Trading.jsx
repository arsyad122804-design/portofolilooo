import React from 'react';
import { tradingInvestmentData } from '../data/portfolioData';
import { TrendingUp, BarChart2, ShieldAlert, PieChart, BookOpen, Activity, ArrowUpRight } from 'lucide-react';

export default function Trading() {
  const icons = [
    <BarChart2 className="w-5 h-5 text-amber-400" />,
    <Activity className="w-5 h-5 text-blue-400" />,
    <TrendingUp className="w-5 h-5 text-emerald-400" />,
    <ShieldAlert className="w-5 h-5 text-rose-400" />,
    <PieChart className="w-5 h-5 text-purple-400" />,
    <BookOpen className="w-5 h-5 text-teal-400" />
  ];

  return (
    <section id="trading" className="py-24 bg-[#080c14] relative border-t border-slate-800/60">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-4 h-4" />
            <span>📈 8. Trading & Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {tradingInvestmentData.title}
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-medium">
            {tradingInvestmentData.overview}
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-emerald-950/30 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Prinsip Manajemen Investasi
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Disiplin Analisis Teknikal, Fundamental & Kontrol Risiko
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Memahami pergerakan grafik pasar (Support & Resistance, MA, Stochastic RSI) serta rasio keuangan perusahaan untuk pengambilan keputusan investasi yang terukur dan prudent.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 text-center">
              <span className="block text-xs text-slate-400">Risk Ratio</span>
              <span className="text-base font-bold text-emerald-400">1 : 2+</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 text-center">
              <span className="block text-xs text-slate-400">Metode</span>
              <span className="text-base font-bold text-amber-400">Analitis</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradingInvestmentData.categories.map((item, idx) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                  {icons[idx]}
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
