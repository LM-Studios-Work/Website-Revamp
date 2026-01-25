export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // icon name from lucide-react
  color?: string;
}

export const whyChooseFeatures: Feature[] = [
  {
    id: "expert-team",
    title: "Expert Team",
    description:
      "Our experienced designers and developers bring your vision to life with precision.",
    icon: "Users",
  },
  {
    id: "proven-results",
    title: "Proven Results",
    description:
      "We deliver websites that not only look great but also drive conversions.",
    icon: "TrendingUp",
  },
  {
    id: "modern-stack",
    title: "Modern Web Stack",
    description:
      "Built with cutting-edge technologies like Next.js, React, and modern frameworks.",
    icon: "Zap",
  },
];

export const serviceFeatures: Feature[] = [
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Beautiful on all devices - desktop, tablet, and mobile",
    icon: "Smartphone",
  },
  {
    id: "seo-optimized",
    title: "SEO Optimized",
    description: "Built with search engines in mind for better visibility",
    icon: "Search",
  },
  {
    id: "fast-performance",
    title: "Fast Performance",
    description: "Lightning-fast load times for better user experience",
    icon: "Zap",
  },
  {
    id: "secure",
    title: "Secure",
    description: "Industry-standard security to protect your data",
    icon: "Shield",
  },
];
