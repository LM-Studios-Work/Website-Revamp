"use client";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  className?: string;
  onViewProject?: () => void;
}

export function ProjectCard({
  title,
  tags,
  description,
  imageUrl,
  className,
  onViewProject,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl overflow-hidden bg-card border border-border cursor-pointer transition-all hover:border-primary/50",
        className
      )}
      onClick={onViewProject}
      onKeyDown={(e) => e.key === "Enter" && onViewProject?.()}
      role="button"
      tabIndex={0}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/10 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <button
          type="button"
          className="mt-4 text-primary text-sm font-medium hover:underline"
        >
          View Project
        </button>
      </div>
    </div>
  );
}
