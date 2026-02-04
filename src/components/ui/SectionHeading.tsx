"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/src/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  accentColor?: string;
  showAnnotation?: boolean;
  annotationSvg?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

/**
 * SectionHeading Component
 * 
 * A reusable heading pattern used across all pages.
 * 
 * Features:
 * - Large title with optional accent color
 * - Subtitle with different styling
 * - Optional description paragraph
 * - Optional handwritten annotation/underline SVG
 * - Flexible alignment
 * - Built-in Framer Motion animations
 * 
 * @example
 * <SectionHeading
 *   title="Our Projects"
 *   subtitle="Portfolio"
 *   description="Explore our latest work"
 *   accentColor="#d4f534"
 *   showAnnotation
 * />
 */
export function SectionHeading({
  title,
  subtitle,
  description,
  accentColor = "#d4f534",
  showAnnotation = false,
  annotationSvg,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={`flex flex-col ${alignmentClasses[align]} ${className}`}
    >
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-[0.2em] font-medium mb-4"
          style={{ color: accentColor }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div variants={fadeInUp} className="relative inline-block">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h2>

        {showAnnotation && (
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-2 left-0 right-0"
          >
            {annotationSvg || (
              <svg
                viewBox="0 0 200 20"
                className="w-full h-3"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 10 Q 50 5, 100 10 T 200 10"
                  stroke={accentColor}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            )}
          </motion.div>
        )}
      </motion.div>

      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/70 max-w-2xl mt-4"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

/**
 * SectionSubheading Component
 * 
 * A smaller heading variant for subsections.
 */
export function SectionSubheading({
  title,
  description,
  accentColor = "#d4f534",
  className = "",
}: {
  title: string;
  description?: string;
  accentColor?: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={className}
    >
      <h3
        className="text-2xl md:text-3xl font-bold text-white mb-2"
        style={{
          background: `linear-gradient(to right, white, ${accentColor})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h3>
      
      {description && (
        <p className="text-white/60 text-sm md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
