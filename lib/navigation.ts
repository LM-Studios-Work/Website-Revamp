/**
 * Navigation Types and Configuration
 * 
 * Centralized navigation configuration for consistent routing across the app.
 */

export type PageType = 
  | "home" 
  | "about" 
  | "projects" 
  | "web-design" 
  | "seo" 
  | "app-development"
  | "contact"
  | "midrand-web-design"
  | "centurion-web-design"
  | "sandton-web-design"
  | "thohoyandou-web-design"
  | "pretoria-web-design";

export interface NavItem {
  id: PageType;
  label: string;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "projects", label: "Projects" },
];

export const serviceNavItems: NavItem[] = [
  { id: "web-design", label: "Web Design", description: "Custom & Responsive" },
  { id: "seo", label: "SEO Services", description: "Rank Higher" },
  { id: "app-development", label: "App Development", description: "Mobile & Web Apps" },
];

export const isServicePage = (page: PageType): boolean => {
  return page === "web-design" || page === "seo" || page === "app-development";
};

export const isAreaPage = (page: PageType): boolean => {
  return page === "midrand-web-design" || page === "centurion-web-design" || page === "sandton-web-design" || page === "thohoyandou-web-design" || page === "pretoria-web-design";
};
