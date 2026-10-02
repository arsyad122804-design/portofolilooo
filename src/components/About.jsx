import React from 'react';
import { aboutMe } from '../data/portfolioData';
import { User, Cpu, Palette, Globe, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function About() {
  const focusIcons = [
    <Cpu className="w-6 h-6 text-blue-400" />,
    <Palette className="w-6 h-6 text-purple-400" />,
    <Globe className="w-6 h-6 text-teal-400" />,
    <TrendingUp className="w-6 h-6 text-amber-400" />
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0f1d] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {aboutMe.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {aboutMe.intro}
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Statement Box */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
            <div>
              <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase block mb-3">
                Profil & Ringkasan Profesional
              </span>
              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3 mb-6">
                <p>
                  Saya <strong className="text-white font-semibold">Muhammad Fikri Arsyad</strong>, berasal dari <strong className="text-white font-semibold">Mojokerto</strong> dan memiliki ketertarikan kuat pada bidang <strong className="text-white font-semibold">Artificial Intelligence (AI)</strong>, <strong className="text-white font-semibold">UI/UX Design</strong>, dan pengembangan <strong className="text-white font-semibold">website</strong>. Saya terbiasa memanfaatkan berbagai teknologi dan tools AI untuk membantu proses desain, pengembangan aplikasi, pembuatan website, copywriting, serta pembuatan konten visual dan video.
                </p>
                <p>
                  Saya memiliki pengalaman menggunakan berbagai tools seperti <strong className="text-indigo-300 font-semibold">ChatGPT</strong>, <strong className="text-indigo-300 font-semibold">Claude</strong>, <strong className="text-indigo-300 font-semibold">Gemini</strong>, <strong className="text-indigo-300 font-semibold">Google Antigravity</strong>, <strong className="text-indigo-300 font-semibold">Kiro</strong>, dan <strong className="text-indigo-300 font-semibold">GitHub</strong>, serta <strong className="text-indigo-300 font-semibold">Vercel</strong> dalam proses pengembangan dan kreativitas digital.
                </p>
                <p>
                  Selain bidang teknologi, saya juga memiliki ketertarikan pada <strong className="text-white font-semibold">investasi</strong> dan <strong className="text-white font-semibold">trading</strong>, serta terus mengembangkan kemampuan dalam memahami pasar dan pengelolaan keuangan.
                </p>
                <p>
                  Saya memiliki semangat untuk terus belajar, berinovasi, dan menciptakan solusi digital yang bermanfaat, modern, dan mudah digunakan.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/40">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-normal">
                  Berkomitmen menghadirkan hasil kerja bernilai estetika tinggi, etis, sopan, dan sesuai standar manajerial lembaga maupun industri.
                </p>
              </div>
            </div>
          </div>

          {/* Focus Areas Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutMe.focusAreas.map((area, idx) => (
              <div
                key={area.title}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800/80 w-fit mb-4 border border-slate-700/60">
                    {focusIcons[idx]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
