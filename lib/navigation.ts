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
  | "contact" 
  | "calculator";

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
];

export const isServicePage = (page: PageType): boolean => {
  return page === "web-design" || page === "seo";
};
