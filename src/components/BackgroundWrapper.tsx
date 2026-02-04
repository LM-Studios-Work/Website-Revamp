"use client";

import React, { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
  variant?: "default" | "solid";
  className?: string;
}

/**
 * BackgroundWrapper Component
 * 
 * Provides a consistent background layer across all pages:
 * - Fixed background image (dark-background.png or dark-background-solid.png)
 * - Grain/noise texture overlay
 * - Radial gradient vignette for depth
 * 
 * This eliminates the need for repeated background styling in every page component.
 * 
 * @param variant - "default" uses dark-background.png, "solid" uses dark-background-solid.png
 */
export function BackgroundWrapper({
  children,
  variant = "solid",
  className = "",
}: BackgroundWrapperProps) {
  const backgroundImage = variant === "default" 
    ? "url('/images/dark-background.png')"
    : "url('/images/dark-background-solid.png')";

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Grain/Noise Texture Overlay */}
      <div
        className="fixed inset-0 z-[1] opacity-[0.15]"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Radial Gradient Vignette */}
      <div
        className="fixed inset-0 z-[2]"
        style={{
          background: "radial-gradient(circle at 50% 0%, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
