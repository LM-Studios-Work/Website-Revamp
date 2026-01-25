"use client";

import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4f534] transition-all group cursor-pointer touch-manipulation"
    >
      {/* Project Image */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-[#d4f534] text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-[0_0_20px_rgba(212,245,52,0.4)] text-sm sm:text-base">
            View Project
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider bg-[#d4f534]">
            {project.type}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>

        <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-[10px] sm:text-xs text-gray-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
