"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { PageType } from "@/lib/navigation";

interface ProjectsPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function ProjectsPage({ onPageChange }: ProjectsPageProps) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#c084fc] selection:text-white">
      
      {/* Projects Section */}
      <div id="projects" className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 blur-[120px] rounded-full -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a960ec]/5 blur-[120px] rounded-full -ml-64 -mb-64" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative">
            {/* Annotation */}
            <div className="absolute -top-12 right-0 hidden lg:block -rotate-6">
              <div className="font-handwriting text-[#c084fc] text-2xl">
                Freshly Baked <br />
                <span className="text-sm opacity-60">In Johannesburg</span>
              </div>
              <svg className="w-12 h-12 text-[#c084fc] -mt-2 ml-auto" viewBox="0 0 48 48" fill="none">
                <path d="M40 4C30 10 10 20 4 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 40L14 42M4 40L2 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#c084fc] text-sm font-bold uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#c084fc]"></span>
                Selected Work
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                Creative <br />
                <span className="text-white/30 italic">Masterpieces.</span>
              </h2>
            </div>
            <p className="text-white/50 text-lg max-w-sm leading-relaxed mb-2">
              A collection of our most impactful digital experiences, crafted with precision and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-white/5 border border-white/10 mb-6">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 gap-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[#c084fc] font-bold text-sm uppercase tracking-widest mb-2">{project.type}</p>
                      <h4 className="text-2xl font-bold">{project.title}</h4>
                    </div>
                    <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <button 
                        onClick={() => window.open(project.url, "_blank")}
                        className="px-6 py-3 rounded-full bg-[#c084fc] text-white font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        VIEW PROJECT
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Accent Corner */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 translate-x-12 -translate-y-12 rotate-45 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-500 bg-[#c084fc] opacity-30"
                  />
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    {project.tags?.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-white/40 border border-white/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#c084fc] transition-colors flex items-center gap-2">
                    {project.title}
                    <svg className="w-5 h-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </h3>
                  <p className="text-white/40 font-medium">{project.type}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange?.("contact")}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-4 group"
            >
              START YOUR PROJECT
              <div className="w-10 h-10 rounded-full bg-[#c084fc] text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

    </div>
  );
}
