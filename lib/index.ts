/**
 * Lib Index
 * 
 * Centralized exports for all library utilities.
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
// NAVIGATION
// ============================================
export {
  mainNavItems,
  serviceNavItems,
  isServicePage,
  type PageType,
  type NavItem,
} from "./navigation";

// ============================================
// AREA DATA
// ============================================
export {
  midrandData,
  centurionData,
  type AreaPageData,
} from "./area-data";

// ============================================
// UTILITIES
// ============================================
export { cn } from "./utils";
