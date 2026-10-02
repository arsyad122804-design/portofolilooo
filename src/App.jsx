import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Tools from './components/Tools';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 🏠 1. Home */}
        <ScrollReveal direction="up" delay={0}>
          <Hero />
        </ScrollReveal>

        {/* 👤 2. About Me */}
        <ScrollReveal direction="up" delay={100}>
          <About />
        </ScrollReveal>

        {/* 🧠 3. Skills */}
        <ScrollReveal direction="up" delay={100}>
          <Skills />
        </ScrollReveal>

        {/* 🚀 4. Projects */}
        <ScrollReveal direction="up" delay={100}>
          <Projects />
        </ScrollReveal>

        {/* 💼 5. Work Experience */}
        <ScrollReveal direction="up" delay={100}>
          <WorkExperience />
        </ScrollReveal>

        {/* 🛠️ 6. Tools */}
        <ScrollReveal direction="up" delay={100}>
          <Tools />
        </ScrollReveal>

        {/* 📞 7. Contact */}
        <ScrollReveal direction="up" delay={100}>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  );
}
