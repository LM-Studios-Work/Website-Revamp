"use client";

/**
 * ServiceCard Component
 * 
 * A reusable card for displaying services with image, icon, and feature list.
 */

import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  items: string[];
  accentColor?: string;
  isMobile?: boolean;
  className?: string;
  compact?: boolean;
}

export function ServiceCard({
  title,
  subtitle,
  description,
  icon,
  image,
  items,
  accentColor = "#d4f534",
  isMobile = false,
  className,
  compact = false,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-[#0a0a0a] overflow-hidden border border-white/10",
        "transition-all duration-500",
        "md:hover:border-white/30",
        compact ? "rounded-2xl" : "rounded-[2rem]",
        className
      )}
    >
      {/* Image Section */}
      <div className={cn(
        "relative overflow-hidden",
        compact ? "h-36 md:h-40" : "h-48 md:h-56 lg:h-64"
      )}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        
        {/* Icon Badge */}
        <div
          className={cn(
            "absolute top-4 left-4 rounded-lg",
            compact ? "p-2" : "p-3 rounded-xl"
          )}
          style={{ backgroundColor: accentColor }}
        >
          {icon}
        </div>
      </div>

      {/* Content Section */}
      <div className={cn(compact ? "p-4 md:p-5" : "p-6 md:p-8")}>
        <div className={cn(compact ? "mb-3" : "mb-4")}>
          <h3 className={cn(
            "font-bold text-white mb-1",
            compact ? "text-lg md:text-xl" : "text-2xl md:text-3xl"
          )}>{title}</h3>
          <p 
            className={cn(
              "font-medium uppercase tracking-wider",
              compact ? "text-[10px]" : "text-sm"
            )}
            style={{ color: accentColor }}
          >
            {subtitle}
          </p>
        </div>

        <p className={cn(
          "text-muted-foreground leading-relaxed",
          compact ? "text-xs md:text-sm mb-4" : "text-sm md:text-base mb-6"
        )}>
          {description}
        </p>

        {/* Feature List */}
        <ul className={cn(compact ? "space-y-2" : "space-y-3")}>
          {(compact ? items.slice(0, 3) : items).map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle 
                className={cn("mt-0.5 shrink-0", compact ? "w-3 h-3" : "w-4 h-4")} 
                style={{ color: accentColor }}
              />
              <span className={cn(
                "text-muted-foreground md:group-hover:text-white transition-colors",
                compact ? "text-xs" : "text-sm"
              )}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 md:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
