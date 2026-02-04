"use client";

/**
 * ServiceCard Component
 * 
 * A reusable card for displaying services with image, icon, and feature list.
 */

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
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
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/10",
        "transition-all duration-500",
        "md:hover:border-white/30",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        
        {/* Icon Badge */}
        <div
          className="absolute top-4 left-4 p-3 rounded-xl"
          style={{ backgroundColor: accentColor }}
        >
          {icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h3>
          <p 
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: accentColor }}
          >
            {subtitle}
          </p>
        </div>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Feature List */}
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle 
                className="w-4 h-4 mt-0.5 shrink-0" 
                style={{ color: accentColor }}
              />
              <span className="text-sm text-muted-foreground md:group-hover:text-white transition-colors">
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
    </motion.div>
  );
}
