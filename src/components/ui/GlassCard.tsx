"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

/**
 * GlassCard Component
 * 
 * A versatile glass morphism card component used throughout the application.
 * Perfect for service cards, project cards, forms, and content containers.
 * 
 * Features:
 * - Glass morphism effect (bg-white/5 with backdrop-blur)
 * - Subtle border with hover state
 * - Optional hover animation
 * - Customizable via className prop
 */
export function GlassCard({
  children,
  className = "",
  hoverable = false,
  onClick,
}: GlassCardProps) {
  const Component = hoverable ? motion.div : "div";
  
  const hoverProps = hoverable ? {
    whileHover: { scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" },
    transition: { duration: 0.3 },
  } : {};

  return (
    <Component
      className={`
        bg-white/5 backdrop-blur-sm
        border border-white/10
        rounded-xl p-6
        transition-all duration-300
        hover:border-white/20
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `.replace(/\s+/g, " ").trim()}
      onClick={onClick}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}

/**
 * GlassCardHeader Component
 * 
 * Optional header section for GlassCard with consistent spacing.
 */
export function GlassCardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * GlassCardContent Component
 * 
 * Main content area for GlassCard.
 */
export function GlassCardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/**
 * GlassCardFooter Component
 * 
 * Optional footer section for GlassCard with consistent spacing.
 */
export function GlassCardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>
      {children}
    </div>
  );
}
