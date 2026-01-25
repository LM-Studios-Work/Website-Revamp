export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleColor: string;
  description: string;
  imageUrl: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "designer",
    name: "The Designer",
    role: "Lead Designer",
    roleColor: "text-primary",
    description:
      "Obsessed with UI perfection and user flows. Ensuring your interface isn't just functional, but a joy to use. Translating your brand into a digital language.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    skills: ["UI/UX", "Branding"],
    gradientFrom: "from-primary",
    gradientTo: "to-green-400",
  },
  {
    id: "developer",
    name: "The Developer",
    role: "Senior Developer",
    roleColor: "text-accent",
    description:
      "The wizard behind the curtain. Specializing in custom development and modern frameworks. Making sure the backend is as robust as the design is beautiful.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    skills: ["React", "Next.js", "TypeScript"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
  },
];
