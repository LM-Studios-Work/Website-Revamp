"use client";

/**
 * SectionWrapper Component
 * 
 * A reusable section container with consistent padding, max-width,
 * and optional background styling.
 */

import { motion, type Variants } from "framer-motion";
import { staggerContainer, staggerContainerMobile, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** Add background styling (white/5 with border) */
  withBackground?: boolean;
  /** Use mobile-optimized animations */
  isMobile?: boolean;
  /** Animate section on scroll into view */
  animate?: boolean;
  /** Custom ID for scroll targeting */
  id?: string;
  /** Section padding size */
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-16 md:py-24 lg:py-32",
};

export function SectionWrapper({
  children,
  className,
  withBackground = false,
  isMobile = false,
  animate = true,
  id,
  padding = "lg",
}: SectionWrapperProps) {
  const baseClasses = cn(
    "px-4 sm:px-6 md:px-8 relative",
    paddingClasses[padding],
    withBackground && "bg-white/5 backdrop-blur-3xl border-y border-white/5",
    className
  );

  if (!animate) {
    return (
      <section id={id} className={baseClasses}>
        <div className="max-w-7xl mx-auto">{children}</div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "0px" : "-10%", amount: 0.2 }}
      variants={isMobile ? staggerContainerMobile : staggerContainer}
      className={baseClasses}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}

/**
 * SectionHeader Component
 * 
 * Consistent section header with title, subtitle, and optional description.
 */
interface SectionHeaderProps {
  title: string;
  /** Highlighted part of title (rendered with outline stroke) */
  titleHighlight?: string;
  description?: string;
  className?: string;
  /** Accent color for highlight */
  accentColor?: string;
  /** Show underline animation on highlight */
  showUnderline?: boolean;
  isMobile?: boolean;
}

export function SectionHeader({
  title,
  titleHighlight,
  description,
  className,
  accentColor = "#d4f534",
  showUnderline = true,
  isMobile = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-20", className)}>
      <motion.h2 
        variants={fadeInUp} 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6"
      >
        {title}{" "}
        {titleHighlight && (
          <span
            className="relative inline-block"
            style={{
              WebkitTextStroke: `1px ${accentColor}`,
              color: "transparent",
            }}
          >
            {titleHighlight}
            {showUnderline && !isMobile && (
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-[2px]"
                style={{ backgroundColor: accentColor }}
              />
            )}
          </span>
        )}
      </motion.h2>
      {description && (
        <motion.p 
          variants={fadeInUp} 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
