/**
 * Lib Index
 * 
 * Centralized exports for all library utilities.
 * 
 * Usage:
 *   import { projects, animations, navItems } from "@/lib";
 */

// ============================================
// DATA
// ============================================
export {
  // Projects
  projects,
  getProjectById,
  getProjectsByCategory,
  getFeaturedProjects,
  // Services
  services,
  seoServices,
  webDesignServices,
  // Packages
  seoPackages,
  webDesignPackages,
  // Process Steps
  seoProcessSteps,
  webDesignProcessSteps,
  // Stats
  companyStats,
  // Company Info
  companyInfo,
  // Types
  type Project,
  type ProjectCategory,
  type Service,
  type Package,
  type ProcessStep,
  type Stat,
  type CompanyInfo,
} from "./data";

// ============================================
// ANIMATIONS
// ============================================
export {
  // Core Animation Variants
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  // Stagger Animations
  staggerContainer,
  staggerItem,
  // Card Animations
  cardHover,
  cardTap,
  // Specialized Animations
  floatAnimation,
  pulseGlow,
  backgroundFloat,
  // Page Transitions
  pageTransition,
  // Utility Functions
  getStaggerDelay,
  createViewportAnimation,
  // Viewport Settings
  defaultViewport,
  onceViewport,
} from "./animations";

// ============================================
// NAVIGATION
// ============================================
export {
  navItems,
  servicePages,
  getPageTitle,
  isServicePage,
  type PageType,
  type NavItem,
  type ServicePage,
} from "./navigation";

// ============================================
// UTILITIES
// ============================================
export { cn } from "./utils";
