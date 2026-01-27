"use client";

import {
  ExternalLink,
  ArrowRight,
  Layers,
  Users,
  Star,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { PageType } from "@/lib/navigation";

interface ProjectsPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function ProjectsPage({ onPageChange }: ProjectsPageProps) {
  // --- Animations ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const, delay: 0.3 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white bg-black selection:bg-[#d4f534] selection:text-black">
      {/* Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)",
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2 sm:gap-4 items-baseline mb-4 sm:mb-6">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                >
                  Our
                </motion.h1>
                <motion.span
                  variants={itemVariants}
                  className="relative inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
                >
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px white",
                    }}
                  >
                    Projects
                  </span>
                  {/* Lime Green Squiggle SVG */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-4 left-0 w-full"
                    viewBox="0 0 200 12"
                  >
                    <motion.path
                      variants={drawLine}
                      d="M 5 8 Q 15 4, 25 8 T 45 8 T 65 8 T 85 8 T 105 8 T 125 8 T 145 8 T 165 8 T 185 8 T 195 8"
                      stroke="#d4f534"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </motion.span>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
              >
                Take a look at some of the websites we've crafted for our clients.
                From sleek e-commerce platforms to stunning corporate websites,
                each project showcases our commitment to quality and innovation.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 md:px-8 pb-12 sm:pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {/* Stat Block 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-center hover:border-[#d4f534]/50 transition-colors group touch-manipulation"
              >
                <div className="flex justify-center mb-2">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#d4f534] transition-colors" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4f534] mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">Projects Completed</div>
              </motion.div>

              {/* Stat Block 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-center hover:border-[#d4f534]/50 transition-colors group touch-manipulation"
              >
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-gray-400 group-hover:text-[#d4f534] transition-colors" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#d4f534] mb-2">
                  40+
                </div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </motion.div>

              {/* Stat Block 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-[#d4f534]/50 transition-colors group"
              >
                <div className="flex justify-center mb-2">
                  <Star className="w-6 h-6 text-gray-400 group-hover:text-[#d4f534] transition-colors" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#d4f534] mb-2">
                  95%
                </div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </motion.div>

              {/* Stat Block 4 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-[#d4f534]/50 transition-colors group"
              >
                <div className="flex justify-center mb-2">
                  <Clock className="w-6 h-6 text-gray-400 group-hover:text-[#d4f534] transition-colors" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#d4f534] mb-2">
                  3+
                </div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="px-8 py-16">
          {/* Increased max-width for 3-column layout */}
          <div className="max-w-[1600px] mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              // GRID UPDATE: Changed from md:grid-cols-2 to lg:grid-cols-3
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }} // Smooth lift effect
                  className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4f534] transition-colors group flex flex-col h-full"
                >
                  {/* Project Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <motion.button
                        onClick={() => window.open(project.url, "_blank")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#d4f534] text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(212,245,52,0.4)]"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wider bg-[#d4f534]"
                      >
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d4f534] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10 group-hover:border-white/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-[#d4f534] rounded-3xl p-16 text-center shadow-[0_0_50px_rgba(212,245,52,0.1)] relative overflow-hidden group">
              {/* Decoration Animations */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"
              />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Want to be our next success story?
                </h2>
                <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                  Let's create something amazing together. Get in touch to
                  discuss your project.
                </p>
                <motion.button
                  onClick={() => onPageChange?.("contact")}
                  whileHover={{ scale: 1.05, gap: "12px" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all text-lg mx-auto shadow-xl"
                >
                  Start your project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
