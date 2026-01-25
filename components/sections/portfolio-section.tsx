"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "MR FLOAT - Transport Service",
    tags: ["Transportation", "Booking"],
    description:
      "A transport company in Zimbabwe that offers a wide array of services, including taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "all",
  },
  {
    title: "Vuza Trading",
    tags: ["Automated Security", "Aluminum Solutions", "CCTV", "Alarm Systems"],
    description:
      "A professional trading platform with real-time analytics and user-friendly interface.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "all",
  },
  {
    title: "Mothupi & Lesego - Wedding",
    tags: ["Wedding", "Event"],
    description:
      "A wedding invitation with an interactive map and a gift registry.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "all",
  },
  {
    title: "Rokunda Mboyi",
    tags: ["Architect", "Portfolio"],
    description:
      "A passionate architect shaping the future of design with innovative and sustainable solutions.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "all",
  },
  {
    title: "Monare Selahle",
    tags: ["Software Engineer", "Portfolio"],
    description: "Modern portfolio for a Computer Science student.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "all",
  },
  {
    title: "Shots By Ozee",
    tags: ["Photography", "Portfolio"],
    description:
      "A photographer and visionary creative currently studying Chemical Engineering.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "all",
  },
  {
    title: "Gordian Malaka",
    tags: ["Photography", "Videography", "Portfolio"],
    description: "A film student who has a passion for photography.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "all",
  },
];

const filters = ["All"];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter.toLowerCase());

  return (
    <SectionWrapper id="work">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Work
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          A look at some of the projects we&apos;re proud of.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/10 text-foreground hover:bg-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
