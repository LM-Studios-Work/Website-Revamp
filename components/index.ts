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
export { default as HomePage } from "./pages/homepage";
export { default as ProjectsPage } from "./pages/projects-page";
export { default as AboutPage } from "./pages/about-page";
export { default as SEOPage } from "./pages/seo-page";
export { default as WebDesignPage } from "./pages/webdesign";
export { default as ContactForm } from "./pages/contact-form";

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


