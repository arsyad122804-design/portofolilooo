import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Rocket, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Subcomponent for handling image carousel inside project card
function ProjectImageCarousel({ images, title, category, link }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-800 group/carousel">
      {/* Active Image */}
      <img
        src={images[currentIndex]}
        alt={`${title} - Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover object-top transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />

      {/* Category Tag */}
      <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-600/90 text-white backdrop-blur-md shadow z-10">
        {category}
      </span>

      {/* Link Badge if available */}
      {link && (
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500 text-slate-950 flex items-center gap-1 shadow-md z-10">
          <span>Buka Website</span>
          <ExternalLink className="w-3 h-3" />
        </span>
      )}

      {/* Left/Right Navigation Arrows (if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all opacity-90 group-hover/carousel:opacity-100 z-20 shadow-md"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all opacity-90 group-hover/carousel:opacity-100 z-20 shadow-md"
            aria-label="Next Image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'bg-emerald-400 w-4'
                    : 'bg-slate-500/60 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web & Institution System', 'Internal Digital System', 'AI Engineering', 'AI Design', 'Agency & Freelance Web'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#080c14] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Portofolio Proyek & Solusi Digital
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Daftar lengkap proyek aplikasi, sistem informasi internal, website lembaga, serta solusi berbasis AI yang telah dikembangkan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const CardWrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link ? {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer",
              title: `Kunjungi ${project.title}`
            } : {};

            const imageList = project.images || (project.image ? [project.image] : []);

            return (
              <CardWrapper
                key={project.id}
                {...wrapperProps}
                className={`rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/20 ${
                  project.link ? 'cursor-pointer' : ''
                }`}
              >
                <div>
                  {/* Project Image Carousel Banner */}
                  {imageList.length > 0 && (
                    <ProjectImageCarousel
                      images={imageList}
                      title={project.title}
                      category={project.category}
                      link={project.link}
                    />
                  )}

                  <div className="p-6">
                    {imageList.length === 0 && (
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {project.category}
                        </span>
                        {project.link && (
                          <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      {imageList.length > 0 && project.link && (
                        <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="text-[12px] text-slate-300 font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link & Tags */}
                <div className="px-6 py-4 border-t border-slate-800/60 bg-slate-950/40 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800/80 text-slate-400 border border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:underline">
                      Kunjungi Website &rarr;
                    </span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
