"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, LayoutGrid, List } from "lucide-react";
import { BackgroundWrapper } from "@/src/components/BackgroundWrapper";
import { ProjectFilter } from "@/src/components/projects/ProjectFilter";
import { projectCategories, projects } from "@/src/lib/data";

/**
 * ImageWithFallback Component
 * 
 * Handles image loading with error state
 */
function ImageWithFallback({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {hasError ? (
        <div className="w-full h-full bg-white/5 flex items-center justify-center">
          <span className="text-white/40 text-sm">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter projects by category
  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <BackgroundWrapper variant="solid">
      <div className="min-h-screen text-white font-sans selection:bg-[#d4ff3f] selection:text-black">
        {/* Header Section */}
        <section className="pt-16 pb-16 px-6 relative overflow-hidden z-10">
          {/* Background Gradient */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d4f534]/10 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
            >
              <div>
                <div className="flex items-center gap-2 text-[#d4f534] text-sm font-bold uppercase tracking-widest mb-4">
                  <span className="w-8 h-px bg-[#d4f534]"></span>
                  Portfolio
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
                  Our <span className="text-white/20 italic">Projects.</span>
                </h1>
              </div>
              <p className="text-white/50 text-xl max-w-md leading-relaxed">
                Explore our diverse body of work spanning web, mobile, and
                digital strategy.
              </p>
            </motion.div>

            {/* Filters & View Toggle */}
            <div className="sticky top-24 z-30 py-4 bg-black/80 backdrop-blur-xl border-y border-white/5 -mx-6 px-6 md:mx-0 md:rounded-full md:border md:px-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                <ProjectFilter
                  categories={projectCategories}
                  activeCategory={activeCategory}
                  onSelectCategory={setActiveCategory}
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-4 shrink-0 self-end md:self-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "text-[#d4f534] bg-white/10"
                      : "text-white/40 hover:text-white"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "text-[#d4f534] bg-white/10"
                      : "text-white/40 hover:text-white"
                  }`}
                  aria-label="List view"
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
                      viewMode === "list"
                        ? "flex flex-col md:flex-row gap-8 p-8"
                        : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={
                        viewMode === "list"
                          ? "w-full md:w-1/3 aspect-video shrink-0 overflow-hidden rounded-[32px]"
                          : "aspect-[4/5] overflow-hidden"
                      }
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={
                        viewMode === "list"
                          ? "flex flex-col justify-center flex-1"
                          : "p-8 pt-0 absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end translate-y-24 group-hover:translate-y-0 transition-transform duration-500"
                      }
                    >
                      <div className="mb-4">
                        {/* Tags */}
                        <div className="flex items-center gap-3 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-bold tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-[#d4f534] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4">
                        <button className="flex-1 md:flex-none px-8 py-4 bg-[#d4f534] text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                          Case Study
                          <ArrowUpRight className="w-5 h-5" />
                        </button>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            aria-label="View project"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Category Badge (Grid Mode Only) */}
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

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="py-32 text-center">
                <p className="text-white/40 text-xl">
                  No projects found in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </BackgroundWrapper>
  );
}
