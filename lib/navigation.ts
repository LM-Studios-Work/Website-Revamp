export type PageType =
  | "home"
  | "web-design"
  | "seo"
  | "compare"
  | "contact"
  | "projects"
  | "about";

export interface NavLink {
  id: PageType;
  label: string;
  href: string;
  category?: "services" | "main";
}

export interface NavSection {
  label: string;
  links: NavLink[];
}

export const mainNavigation: NavLink[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    category: "main",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    category: "main",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    category: "main",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    category: "main",
  },
];

export const servicePages: NavLink[] = [
  {
    id: "web-design",
    label: "Web Design",
    href: "/services/web-design",
    category: "services",
  },
  {
    id: "seo",
    label: "SEO",
    href: "/services/seo",
    category: "services",
  },
];

export const allNavLinks = {
  main: mainNavigation,
  services: servicePages,
};
