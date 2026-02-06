"use client";

import { useState } from "react";

import { ArrowUpRight, Github, Filter, LayoutGrid, List } from "lucide-react";

// Centralized imports
import type { PageType } from "@/lib/navigation";
import { projects, projectCategories } from "@/lib/data";


// Shared components
import { PageLayout } from "@/components/shared/page-layout";

interface ProjectsPageProps {
  onPageChange?: (page: PageType) => void;
}

// Filter categories with "All" option
const allCategories = ["All", ...projectCategories];

export default function ProjectsPage({ onPageChange }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <PageLayout solidBackground vignette currentPage="projects" onPageChange={onPageChange}>
      {/* Header Section */}
      <section className="pt-16 pb-16 px-6 relative overflow-hidden z-10">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4FF3F]/10 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <div className="flex items-center gap-2 text-[#D4FF3F] text-sm font-bold uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#D4FF3F]" />
                Portfolio
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
                Our <span className="text-white/20 italic">Projects.</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-xl max-w-md leading-relaxed">
              Explore our diverse body of work spanning web, mobile, and digital strategy.
            </p>
          </div>

          {/* Filters */}
          <FilterBar
            categories={allCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          {/* Projects Grid/List */}
          
            <div
              key={activeCategory + viewMode}
              className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                  : "flex flex-col gap-8"
              }
            >
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  viewMode={viewMode} 
                />
              ))}
            </div>
          
          
          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-muted-foreground text-xl">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

// --- Sub-components ---

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

function FilterBar({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  viewMode, 
  setViewMode 
}: FilterBarProps) {
  return (
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
                : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 shrink-0 self-end md:self-auto">
        <button 
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === "grid" 
              ? "text-[#D4FF3F] bg-white/10" 
              : "text-muted-foreground hover:text-white"
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setViewMode("list")}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === "list" 
              ? "text-[#D4FF3F] bg-white/10" 
              : "text-muted-foreground hover:text-white"
          }`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  viewMode: "grid" | "list";
}

function ProjectCard({ project, viewMode }: ProjectCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      layout
      className={`group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 ${
        viewMode === "list" ? "flex flex-col md:flex-row gap-8 p-8" : ""
      }`}
    >
      {/* Image */}
      <div 
        className={
          viewMode === "list" 
            ? "w-full md:w-1/3 aspect-video shrink-0 overflow-hidden rounded-[32px]" 
            : "aspect-video overflow-hidden"
        }
      >
        {hasError ? (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Image unavailable</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setHasError(true)}
          />
        )}
      </div>

      {/* Content - Below Image */}
      <div 
        className={
          viewMode === "list" 
            ? "flex flex-col justify-center flex-1" 
            : "p-8"
        }
      >
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground bg-white/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-2 group-hover:text-[#D4FF3F] transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>
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
    </div>
  );
}
