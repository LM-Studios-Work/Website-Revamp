"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { scaleOnHover } from "@/src/lib/animations";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

/**
 * Button Component
 * 
 * A reusable button with three variants:
 * - primary: Neon lime (#d4f534) with black text and glow effect
 * - secondary: White/glass style with transparency
 * - outline: Border-only style with hover fill
 * 
 * Features:
 * - Framer Motion animations (scale on hover, tap feedback)
 * - Optional Lucide icon support with animation
 * - Full accessibility support
 */
export function Button({
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  children,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: `
      bg-[#d4f534] text-black font-semibold
      shadow-[0_0_20px_rgba(212,245,52,0.3)]
      hover:shadow-[0_0_30px_rgba(212,245,52,0.5)]
      hover:bg-[#e0ff5c]
      disabled:opacity-50 disabled:cursor-not-allowed
      disabled:hover:shadow-[0_0_20px_rgba(212,245,52,0.3)]
    `,
    secondary: `
      bg-white/10 text-white font-medium
      backdrop-blur-sm border border-white/20
      hover:bg-white/20 hover:border-white/30
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    outline: `
      bg-transparent text-white font-medium
      border-2 border-white/30
      hover:bg-white/10 hover:border-white/50
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  };

  return (
    <motion.button
      variants={scaleOnHover}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      className={`
        px-6 py-3 rounded-lg
        transition-all duration-300
        flex items-center gap-2
        ${variantStyles[variant]}
        ${className}
      `.replace(/\s+/g, " ").trim()}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: -4 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      )}
      
      {children}
      
      {Icon && iconPosition === "right" && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      )}
    </motion.button>
  );
}
