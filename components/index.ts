/**
 * Components Index
 * 
 * Centralized exports for all application components.
 * This provides a clean import API for consumers.
 * 
 * Usage:
 *   import { Navigation, Footer, Homepage, ProjectCard } from "@/components";
 */

// ============================================
// LAYOUT COMPONENTS
// ============================================
export { Navigation } from "./layout/navigation";

// ============================================
// SECTION COMPONENTS
// ============================================
export { Footer } from "./sections/footer";

// ============================================
// PAGE COMPONENTS
// ============================================
export { Homepage } from "./pages/homepage";
export { ProjectsPage } from "./pages/projects-page";
export { AboutPage } from "./pages/about-page";
export { SEOPage } from "./pages/seo-page";
export { WebDesignPage } from "./pages/webdesign";
export { ContactForm } from "./pages/contact-form";

// ============================================
// SHARED/REUSABLE COMPONENTS
// ============================================
export {
  // Layout
  PageBackground,
  PageLayout,
  PageHero,
  Breadcrumb,
  PageBadge,
  SectionWrapper,
  SectionHeader,
  // Cards
  ServiceCard,
  PackageCard,
  SEOPackageCard,
  ProcessCard,
} from "./shared";

// ============================================
// UI CARD COMPONENTS
// ============================================
export { ProjectCard } from "./cards/project-card";
