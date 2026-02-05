"use client";

/**
 * PageLayout Component
 * 
 * A reusable page wrapper that provides consistent structure:
 * - Background styling
 * - Content container
 * - Footer integration
 * 
 * Use this component to wrap all page content for consistent styling.
 */

import { useRef } from "react";
import { PageBackground } from "./page-background";
import { Footer } from "@/components/sections/footer";
import { cn } from "@/lib/utils";
import type { PageType } from "@/lib/navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Reference for scroll tracking (optional) */
  containerRef?: React.RefObject<HTMLDivElement>;
  /** Use solid background variant */
  solidBackground?: boolean;
  /** Show vignette effect on background */
  vignette?: boolean;
  /** Additional classes for the container */
  className?: string;
  /** Hide the footer */
  hideFooter?: boolean;
  /** Current page for footer accent color */
  currentPage?: PageType;
  /** Page change handler for footer navigation */
  onPageChange?: (page: PageType) => void;
}

export function PageLayout({
  children,
  containerRef,
  solidBackground = false,
  vignette = false,
  className,
  hideFooter = false,
  currentPage,
  onPageChange,
}: PageLayoutProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const ref = containerRef || internalRef;

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen relative overflow-x-hidden font-sans text-white bg-black",
        "selection:bg-[#d4f534] selection:text-black",
        className
      )}
    >
      <PageBackground solid={solidBackground} vignette={vignette} />
      
      <div className="relative z-10 flex flex-col">
        {children}
      </div>
      
      {!hideFooter && <Footer currentPage={currentPage} onPageChange={onPageChange} />}
    </div>
  );
}

/**
 * PageHero Component
 * 
 * A reusable hero section with consistent styling.
 */
interface PageHeroProps {
  children: React.ReactNode;
  className?: string;
  /** Minimum height variant */
  size?: "default" | "large" | "full";
}

const heroSizes = {
  default: "min-h-[60vh]",
  large: "min-h-[80vh]",
  full: "min-h-screen",
};

export function PageHero({ 
  children, 
  className,
  size = "default",
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "relative w-full flex flex-col justify-center",
        "px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden",
        "py-20 lg:py-0",
        heroSizes[size],
        className
      )}
    >
      {children}
    </header>
  );
}

/**
 * Breadcrumb Component
 * 
 * Simple breadcrumb navigation.
 */
interface BreadcrumbProps {
  items: { label: string; onClick?: () => void }[];
  accentColor?: string;
}

export function Breadcrumb({ items, accentColor = "#c084fc" }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <span>/</span>}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="hover:text-white transition-colors"
              style={{ color: index === items.length - 1 ? "white" : undefined }}
            >
              {item.label}
            </button>
          ) : (
            <span style={{ color: index === items.length - 1 ? "white" : undefined }}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

/**
 * PageBadge Component
 * 
 * A styled badge for page headers.
 */
interface PageBadgeProps {
  children: React.ReactNode;
  color?: string;
}

export function PageBadge({ children, color = "#d4f534" }: PageBadgeProps) {
  return (
    <span
      className="px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest inline-block"
      style={{
        borderColor: `${color}30`,
        backgroundColor: `${color}10`,
        color: color,
      }}
    >
      {children}
    </span>
  );
}
