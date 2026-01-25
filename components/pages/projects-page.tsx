"use client";

import {
  ExternalLink,
  ArrowRight,
  Layers,
  Users,
  Star,
  Clock,
} from "lucide-react";
// Assuming you have this component, otherwise standard img tag works
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "TechFlow Solutions",
      category: "Corporate Website",
      description:
        "A modern corporate website with advanced integrations and custom features for a leading tech company.",
      image:
        "https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlfGVufDF8fHx8MTc2OTMxMjQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Custom Pack", "SEO Optimized", "12 Pages"],
      color: "#00F0FF", // Adapted to Cyan
    },
    {
      id: 2,
      title: "StyleHub Boutique",
      category: "E-commerce",
      description:
        "A sleek online store with seamless shopping experience and integrated payment systems.",
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2OTI0NzM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Custom Pack", "E-commerce", "20 Pages"],
      color: "#5dd9c1", // Kept original to show variety
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      category: "Business Website",
      description:
        "A professional website for a digital marketing agency showcasing their services and portfolio.",
      image:
        "https://images.unsplash.com/photo-1637502877428-27e6553a8817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBsYXB0b3B8ZW58MXx8fHwxNzY5MjYyMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Standard Pack", "SEO", "8 Pages"],
      color: "#b4a7d6",
    },
    {
      id: 4,
      title: "Bella Italia Restaurant",
      category: "Restaurant Website",
      description:
        "An elegant restaurant website with online reservations and menu showcase.",
      image:
        "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjkzMTUwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Custom Pack", "Online Booking", "10 Pages"],
      color: "#ff6b6b",
    },
    {
      id: 5,
      title: "InnovateLab Studios",
      category: "Creative Portfolio",
      description:
        "A stunning portfolio website for a creative studio with dynamic animations and galleries.",
      image:
        "https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2OTI1MDk5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Custom Pack", "Animations", "15 Pages"],
      color: "#00F0FF",
    },
    {
      id: 6,
      title: "GreenEarth Consulting",
      category: "Consulting Firm",
      description:
        "A clean and professional website for an environmental consulting firm.",
      image:
        "https://images.unsplash.com/photo-1637502877428-27e6553a8817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBsYXB0b3B8ZW58MXx8fHwxNzY5MjYyMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Standard Pack", "SEO", "6 Pages"],
      color: "#5dd9c1",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white bg-black">
      {/* Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)", // Same asset as Home
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark Overlay for readability */}
      <div className="fixed inset-0 z-0 bg-black/50 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-8 pt-10 pb-16">
          <div className="max-w-7xl mx-auto">
            {/* Brand Logo / Title Integration */}
            <div className="flex flex-col md:flex-row gap-4 items-baseline mb-6">
              <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight">
                Our
              </h1>
              <span className="relative inline-block text-7xl md:text-8xl font-bold">
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px white",
                  }}
                >
                  Projects
                </span>
                {/* Cyan Squiggle SVG */}
                <svg
                  className="absolute -bottom-4 left-0 w-full"
                  viewBox="0 0 200 12"
                >
                  <path
                    d="M 5 8 Q 15 4, 25 8 T 45 8 T 65 8 T 85 8 T 105 8 T 125 8 T 145 8 T 165 8 T 185 8 T 195 8"
                    stroke="#00F0FF"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </div>

            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
              Take a look at some of the websites we've crafted for our clients.
              From sleek e-commerce platforms to stunning corporate websites,
              each project showcases our commitment to quality and innovation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-[#00F0FF]/50 transition-colors group">
                <div className="flex justify-center mb-2">
                  <Layers className="w-6 h-6 text-gray-400 group-hover:text-[#00F0FF]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#00F0FF] mb-2">
                  50+
                </div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-[#00F0FF]/50 transition-colors group">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-gray-400 group-hover:text-[#00F0FF]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#00F0FF] mb-2">
                  40+
                </div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-[#00F0FF]/50 transition-colors group">
                <div className="flex justify-center mb-2">
                  <Star className="w-6 h-6 text-gray-400 group-hover:text-[#00F0FF]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#00F0FF] mb-2">
                  95%
                </div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-[#00F0FF]/50 transition-colors group">
                <div className="flex justify-center mb-2">
                  <Clock className="w-6 h-6 text-gray-400 group-hover:text-[#00F0FF]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#00F0FF] mb-2">
                  3+
                </div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#00F0FF] transition-all group"
                >
                  {/* Project Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    {/* Using standard img for portability, replace with ImageWithFallback if available */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <button className="bg-[#00F0FF] text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wider"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#00F0FF] rounded-3xl p-16 text-center shadow-[0_0_50px_rgba(0,240,255,0.1)] relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Want to be our next success story?
                </h2>
                <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                  Let's create something amazing together. Get in touch to
                  discuss your project.
                </p>
                <button className="bg-black text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors text-lg mx-auto shadow-xl">
                  Start your project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
