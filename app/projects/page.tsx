"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { projects, projectFilters, getProjectsByCategory } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects = getProjectsByCategory(activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <Header />

        <main className="pt-24 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
              <div className="relative">
                {/* Handwritten annotation */}
                <div className="absolute -top-12 -left-4 md:-left-16 hidden lg:block transform -rotate-12">
                  <span className="font-handwriting text-muted-foreground text-xl">
                    Our best stuff!
                  </span>
                  <svg
                    className="w-12 h-12 text-muted-foreground absolute top-6 right-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 text-foreground">
                  Selected Work
                </h1>
                {/* Wavy underline */}
                <svg
                  className="text-primary mt-2 w-full max-w-sm"
                  height="20"
                  viewBox="0 0 300 20"
                  width="300"
                >
                  <path
                    d="M5 10 Q 75 25 150 10 T 295 10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-6 text-lg font-medium">
                {projectFilters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={`pb-1 border-b-2 transition-colors ${
                      activeFilter === filter.value
                        ? "text-primary border-primary"
                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-card mb-5 border border-border">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={project.imageUrl || "/placeholder.svg"}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                          FEATURED
                        </span>
                      </div>
                    )}

                    {/* Tags on image */}
                    {project.badge && (
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-2 py-1 rounded border border-white/20 text-[10px] font-bold uppercase text-white backdrop-blur-sm bg-black/30">
                          {project.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.tags.slice(0, 2).join(" — ")}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center relative">
              {/* Decorative star */}
              <div className="absolute top-0 left-1/4 -translate-y-1/2 hidden md:block">
                <svg
                  className="text-muted animate-[spin_10s_linear_infinite]"
                  height="60"
                  viewBox="0 0 60 60"
                  width="60"
                >
                  <path
                    d="M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
                Have a project in mind?
              </h2>

              <div className="inline-block relative group">
                <Link
                  href="/#contact"
                  className="relative z-10 bg-transparent border-2 border-foreground text-foreground px-8 py-4 rounded-full text-xl font-bold flex items-center gap-4 hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Discuss your project
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mt-12 flex justify-center gap-8 text-muted-foreground">
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
