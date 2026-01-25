export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  category: "all" | "web-design" | "development" | "ux-ui";
  featured?: boolean;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "mr-float",
    title: "MR FLOAT - Transport Service",
    tags: ["Transportation", "Booking"],
    description:
      "A transport company in Zimbabwe that offers a wide array of services, including taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "web-design",
    featured: true,
  },
  {
    id: "vuza-trading",
    title: "Vuza Trading",
    tags: ["Automated Security", "Aluminum Solutions", "CCTV"],
    description:
      "A professional trading platform with real-time analytics and user-friendly interface.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "web-design",
  },
  {
    id: "mothupi-lesego-wedding",
    title: "Mothupi & Lesego - Wedding",
    tags: ["Wedding", "Event"],
    description:
      "A wedding invitation with an interactive map and a gift registry.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "ux-ui",
  },
  {
    id: "rokunda-mboyi",
    title: "Rokunda Mboyi",
    tags: ["Architect", "Portfolio"],
    description:
      "A passionate architect shaping the future of design with innovative and sustainable solutions.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "web-design",
  },
  {
    id: "monare-selahle",
    title: "Monare Selahle",
    tags: ["Software Engineer", "Portfolio"],
    description: "Modern portfolio for a Computer Science student.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "development",
  },
  {
    id: "shots-by-ozee",
    title: "Shots By Ozee",
    tags: ["Photography", "Portfolio"],
    description:
      "A photographer and visionary creative currently studying Chemical Engineering.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "ux-ui",
  },
  {
    id: "gordian-malaka",
    title: "Gordian Malaka",
    tags: ["Photography", "Videography", "Portfolio"],
    description: "A film student who has a passion for photography.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "ux-ui",
  },
];

export const projectFilters = [
  { label: "All Projects", value: "all" },
  { label: "Web Design", value: "web-design" },
  { label: "Development", value: "development" },
  { label: "UX/UI", value: "ux-ui" },
] as const;

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
