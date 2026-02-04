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
  projectCategories,
  // Team
  teamMembers,
  // Services
  services,
  // Web Design Packages
  webPackages,
  // SEO Packages
  seoPackages,
  // Process Steps
  seoProcessSteps,
  webProcessSteps,
  // Features
  features,
  // FAQs
  webDesignFAQs,
  // Types
  type Project,
  type ProjectCategory,
  type TeamMember,
  type Service,
  type WebPackage,
  type SEOPackage,
  type ProcessStep,
  type Feature,
  type FAQ,
} from "./data";

// ============================================
// ANIMATIONS
// ============================================
export {
  // Fade Animations
  fadeIn,
  fadeInUp,
  fadeInUpSlow,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  // Scale Animations
  scaleIn,
  scaleInLarge,
  // Stagger Containers
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerContainerMobile,
  // Spring Animations
  springCard,
  // Special Effects
  drawLine,
  drawLineSlow,
  slideUp,
  slideDown,
  expandWidth,
  expandWidthMobile,
  // Hover Animations
  hoverScale,
  hoverScaleLarge,
  hoverLift,
  hoverGlow,
  // Utility Functions
  createItemVariant,
  // Viewport Options
  viewportOnce,
  viewportDefault,
  viewportMobile,
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
// PROJECTS (Real portfolio projects)
// ============================================
export {
  projects as portfolioProjects,
  type Project as PortfolioProject,
} from "./projects";

// ============================================
// UTILITIES
// ============================================
export { cn } from "./utils";
