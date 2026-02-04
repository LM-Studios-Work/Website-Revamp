"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Filter, LayoutGrid, List } from "lucide-react";
import { PageType } from "@/lib/navigation";
import { Footer } from "@/components/sections/footer";

interface ProjectsPageProps {
  onPageChange?: (page: PageType) => void;
}

const categories = ["All", "Web Design", "SEO", "E-commerce", "App Development"];

const allProjects = [
  {
    id: 1,
    title: "EcoSphere Digital",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1556894181-cb8e4ccca5d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjBzY3JlZW5zaG90fGVufDF8fHx8MTc2OTcyMTY1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind", "Motion"],
    description: "A complete brand overhaul for a sustainable tech company in Cape Town.",
    accent: "#D4FF3F"
  },
  {
    id: 2,
    title: "Nexus Mobile",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1636777530577-a075553f4520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3Njk3MjE2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Flutter", "Firebase"],
    description: "Modern fintech solution for cross-border payments in Africa.",
    accent: "#6ee2d1"
  },
  {
    id: 3,
    title: "Vogue E-commerce",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTYzNjE1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Shopify"],
    description: "High-end fashion retail experience with immersive 3D elements.",
    accent: "#c1a8f8"
  },
  {
    id: 4,
    title: "Peak SEO Campaign",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
    tags: ["Analytics", "Strategy"],
    description: "300% growth in organic traffic for a South African logistics firm.",
    accent: "#D4FF3F"
  },
  {
    id: 5,
    title: "Arc Studio",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1556712955-d2072199f5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3Njk3MjE2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Minimalist", "Portfolio"],
    description: "Architectural showcase focusing on light and space.",
    accent: "#6ee2d1"
  },
  {
    id: 6,
    title: "Lumina Agency",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdlYiUyMGRlc2lnbiUyMGxheW91dHxlbnwxfHx8fDE3Njk3MjE2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Creative", "Interactive"],
    description: "Web experience for a creative studio based in Sandton.",
    accent: "#c1a8f8"
  }
];

function ImageWithFallback({ 
  src, 
  alt, 
  className = ""
}: { 
  src: string;
  alt: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {hasError ? (
        <div className="w-full h-full bg-white/5 flex items-center justify-center">
          <span className="text-white/40 text-sm">Image unavailable</span>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          className={className}
          onError={() => {
            setHasError(true);
          }}
        />
      )}
    </div>
  );
}

export default function ProjectsPage({ onPageChange }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = allProjects.filter(
    p => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#d4ff3f] selection:text-black relative">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/dark-background-solid.png)",
            backgroundColor: "#050505",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Header Section */}
      <section className="pt-16 pb-16 px-6 relative overflow-hidden z-10">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4FF3F]/10 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <div className="flex items-center gap-2 text-[#D4FF3F] text-sm font-bold uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#D4FF3F]"></span>
                Portfolio
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
                Our <span className="text-white/20 italic">Projects.</span>
              </h1>
            </div>
            <p className="text-white/50 text-xl max-w-md leading-relaxed">
              Explore our diverse body of work spanning web, mobile, and digital strategy.
            </p>
          </motion.div>

          {/* Filters - Mobile Optimized */}
          <div className="sticky top-24 z-30 py-4 bg-black/80 backdrop-blur-xl border-y border-white/5 -mx-6 px-6 md:mx-0 md:rounded-full md:border md:px-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-[#D4FF3F] shrink-0 hidden md:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#D4FF3F] text-black"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 shrink-0 self-end md:self-auto">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "text-[#D4FF3F] bg-white/10" : "text-white/40 hover:text-white"}`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "text-[#D4FF3F] bg-white/10" : "text-white/40 hover:text-white"}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                  : "flex flex-col gap-8"
              }
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  className={`group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 ${
                    viewMode === "list" ? "flex flex-col md:flex-row gap-8 p-8" : ""
                  }`}
                >
                  <div className={viewMode === "list" ? "w-full md:w-1/3 aspect-video shrink-0 overflow-hidden rounded-[32px]" : "aspect-[4/5] overflow-hidden"}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className={viewMode === "list" ? "flex flex-col justify-center flex-1" : "p-8 pt-0 absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end translate-y-24 group-hover:translate-y-0 transition-transform duration-500"}>
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-[#D4FF3F] transition-colors">{project.title}</h3>
                      <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="flex-1 md:flex-none px-8 py-4 bg-[#D4FF3F] text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                        Case Study
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                      <button className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Github className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Category Badge for Grid Mode */}
                  {viewMode === "grid" && (
                    <div className="absolute top-8 left-8">
                      <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-white/40 text-xl">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
