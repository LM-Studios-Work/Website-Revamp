/**
 * Centralized Data Store
 * 
 * All static data arrays used across the application.
 * Separating data from components improves maintainability and reusability.
 */

// ============================================
// PROJECTS DATA
// ============================================

export interface Project {
  id: number;
  title: string;
  category: "Web Design" | "SEO" | "E-commerce" | "App Development" | "Portfolio" | "Event Management" | "Essential Business";
  image: string;
  tags: string[];
  description: string;
  accent: string;
  url?: string;
  type?: "Portfolio" | "Event Management" | "Essential Business";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EcoSphere Digital",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1556894181-cb8e4ccca5d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjBzY3JlZW5zaG90fGVufDF8fHx8MTc2OTcyMTY1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind", "Motion"],
    description: "A complete brand overhaul for a sustainable tech company in Cape Town.",
    accent: "#D4FF3F",
    url: "https://example.com",
  },
  {
    id: 2,
    title: "Nexus Mobile",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1636777530577-a075553f4520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3Njk3MjE2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Flutter", "Firebase"],
    description: "Modern fintech solution for cross-border payments in Africa.",
    accent: "#6ee2d1",
    url: "https://example.com",
  },
  {
    id: 3,
    title: "Vogue E-commerce",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbHV4dXJ5fGVufDF8fHx8MTc2OTYzNjE1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Shopify"],
    description: "High-end fashion retail experience with immersive 3D elements.",
    accent: "#c1a8f8",
    url: "https://example.com",
  },
  {
    id: 4,
    title: "Peak SEO Campaign",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
    tags: ["Analytics", "Strategy"],
    description: "300% growth in organic traffic for a South African logistics firm.",
    accent: "#D4FF3F",
    url: "https://example.com",
  },
  {
    id: 5,
    title: "Arc Studio",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1556712955-d2072199f5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3Njk3MjE2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Minimalist", "Portfolio"],
    description: "Architectural showcase focusing on light and space.",
    accent: "#6ee2d1",
    url: "https://example.com",
  },
  {
    id: 6,
    title: "Lumina Agency",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdlYiUyMGRlc2lnbiUyMGxheW91dHxlbnwxfHx8fDE3Njk3MjE2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Creative", "Interactive"],
    description: "Web experience for a creative studio based in Sandton.",
    accent: "#c1a8f8",
    url: "https://example.com",
  },
  {
    id: 7,
    title: "MR FLOAT - Transport Service",
    category: "Essential Business",
    description: "A transport company in Zimbabwe offering taxi rides, long-distance travel, car hire, and package deliveries.",
    image: "/preview/float.webp",
    url: "https://private-car-hire.vercel.app",
    type: "Essential Business",
    tags: ["Transportation", "Booking"],
    accent: "#D4FF3F",
  },
  {
    id: 8,
    title: "Vuza Trading",
    category: "Essential Business",
    description: "Professional trading platform with real-time analytics and user-friendly interface.",
    image: "/preview/vuza-trading.png",
    url: "https://vuzatrading.com",
    type: "Essential Business",
    tags: ["Security", "Aluminum", "CCTV"],
    accent: "#6ee2d1",
  },
];

export const projectCategories = ["All", "Web Design", "SEO", "E-commerce", "App Development", "Portfolio", "Essential Business"];

// ============================================
// TEAM MEMBERS DATA
// ============================================

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  roleColor: string;
  description: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Lupry",
    role: "Lead Designer",
    roleColor: "text-[#d4f534]",
    description: "Obsessed with pixel perfection and user psychology. Lupry turns complex problems into intuitive interfaces.",
    skills: ["UI/UX", "Brand Strategy", "Motion"],
    gradientFrom: "from-[#d4f534]",
    gradientTo: "to-emerald-500",
  },
  {
    id: 2,
    name: "Monare",
    role: "Tech Lead",
    roleColor: "text-[#5dd9c1]",
    description: "Full-stack wizard who dreams in code. Monare ensures your platform is scalable, secure, and lightning fast.",
    skills: ["Next.js", "System Arch", "Cloud"],
    gradientFrom: "from-[#5dd9c1]",
    gradientTo: "to-blue-500",
  },
];

// ============================================
// SERVICES DATA
// ============================================

export interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
  accentColor: string;
  icon?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    subtitle: "Premium Digital Presence",
    description: "We craft stunning, conversion-focused websites that captivate your audience and drive real business results.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1080&q=80",
    items: [
      "Responsive Design",
      "UI/UX Strategy",
      "Brand Integration",
      "Performance Optimization",
    ],
    accentColor: "#d4f534",
  },
  {
    id: 2,
    title: "SEO",
    subtitle: "Search Visibility",
    description: "Get found by customers who matter. Data-driven strategies that increase visibility and convert clicks into clients.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=1080&q=80",
    items: [
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "Analytics & Reporting",
    ],
    accentColor: "#5dd9c1",
  },
  {
    id: 3,
    title: "E-commerce",
    subtitle: "Online Store Solutions",
    description: "Turn browsers into buyers with seamless shopping experiences built for conversion and growth.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1080&q=80",
    items: [
      "Shopify Development",
      "Payment Integration",
      "Inventory Management",
      "Conversion Optimization",
    ],
    accentColor: "#c1a8f8",
  },
];

// ============================================
// SEO PACKAGES DATA
// ============================================

export interface SEOPackage {
  name: string;
  time: string;
  price: string;
  billing: string;
  description: string;
  idealFor: string;
  features: string[];
  accent: string;
  popular: boolean;
}

export const seoPackages: SEOPackage[] = [
  {
    name: "Local Kickstart",
    time: "25h min.",
    price: "R3,499",
    billing: "once-off",
    description: "Essential setup for local businesses to get found on Google Maps and local search.",
    idealFor: "Small local shops, plumbers, salons",
    features: [
      "Google Business Profile Optimization",
      "Technical Site Audit & Fixes",
      "Local Keyword Research",
      "Meta Title & Description Setup",
      "Google Analytics & Console Setup",
    ],
    accent: "border-[#c084fc]/20",
    popular: false,
  },
  {
    name: "Growth Engine",
    time: "60h min.",
    price: "R4,500",
    billing: "per month",
    description: "A monthly campaign designed to increase rankings and organic traffic consistently.",
    idealFor: "Growing businesses, service providers",
    features: [
      "Everything in Kickstart",
      "2x High-Quality Blog Posts/mo",
      "On-Page Content Optimization",
      "Monthly Backlink Strategy",
      "Keyword Tracking Dashboard",
    ],
    accent: "border-[#c084fc]/50 bg-gradient-to-br from-[#c084fc]/10 to-transparent",
    popular: true,
  },
  {
    name: "Market Leader",
    time: "100h min.",
    price: "R8,500",
    billing: "per month",
    description: "Aggressive SEO for competitive industries. Dominate search results and outrank competitors.",
    idealFor: "Established brands, competitive markets",
    features: [
      "Everything in Growth",
      "4x Blog Posts + Video Content",
      "Advanced Technical SEO",
      "Competitor Analysis & Tracking",
      "Priority Support & Monthly Calls",
    ],
    accent: "border-[#c084fc]",
    popular: false,
  },
];

// ============================================
// SEO PROCESS STEPS
// ============================================

export interface SEOProcess {
  id: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  tag?: string;
}

export const seoProcesses: SEOProcess[] = [
  {
    id: 1,
    title: "STRATEGY",
    description: "Keyword research, competitor analysis, and goal setting to create a customized roadmap.",
    color: "bg-[#c084fc]",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "RESEARCH",
    description: "Keyword density analysis and content optimization for maximum search visibility.",
    color: "bg-[#a960ec]",
    textColor: "text-black",
    tag: "Priority",
  },
  {
    id: 3,
    title: "ONSITE OPTIMISATION",
    description: "Technical improvements directly within the website to boost search rankings.",
    color: "bg-[#9333ea]",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "REPORTING AND ANALYSIS",
    description: "Comprehensive SEO review covering content, links, social media, and online trust.",
    color: "bg-[#7c3aed]",
    textColor: "text-white",
  },
];

// ============================================
// FEATURES / BENEFITS DATA
// ============================================

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Expert Team",
    description: "Our experienced designers and developers bring your vision to life with precision.",
    icon: "Code",
  },
  {
    title: "Proven Results",
    description: "We deliver websites that not only look great but also drive conversions.",
    icon: "Zap",
  },
  {
    title: "Modern Stack",
    description: "Built with cutting-edge technologies and best practices for performance.",
    icon: "CheckCircle",
  },
];

// ============================================
// TESTIMONIALS DATA
// ============================================

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "EcoTech Solutions",
    content: "LM Studios transformed our digital presence. Our traffic increased by 300% in just 3 months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Peak Performance",
    content: "Professional, responsive, and results-driven. Exactly what we needed for our rebrand.",
    rating: 5,
  },
];
