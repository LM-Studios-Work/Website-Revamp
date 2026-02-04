"use client";

import { useRef } from "react";
import { ArrowUpRight, Code, PenTool, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Centralized imports
import type { PageType } from "@/lib/navigation";
import { teamMembers } from "@/lib/data";
import { fadeInUp, staggerContainerSlow, drawLineSlow } from "@/lib/animations";

// Shared components
import { PageLayout } from "@/components/shared/page-layout";

interface AboutPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function AboutPage({ onPageChange }: AboutPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);

  return (
    <PageLayout containerRef={containerRef} solidBackground vignette>
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            style={{ y: headerY }}
            initial="hidden"
            animate="visible"
            variants={staggerContainerSlow}
            className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32 relative"
          >
            <motion.div 
              variants={fadeInUp} 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-white/10 bg-white/5 rounded-full text-muted-foreground text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 text-[#d4f534]" />
              Meet the Makers
            </motion.div>

            <motion.h1 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tighter leading-none"
            >
              The Team
            </motion.h1>
            
            {/* Wavy underline animation */}
            <motion.svg
              variants={fadeInUp}
              className="text-[#d4f534] mx-auto w-24 sm:w-32 md:w-48 h-4 sm:h-6"
              viewBox="0 0 100 20"
            >
              <motion.path
                variants={drawLineSlow}
                d="M0 10 Q 25 20 50 10 T 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>

            <motion.p 
              variants={fadeInUp} 
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground mt-6 sm:mt-8 md:mt-10 font-light px-4"
            >
              We are a{" "}
              <strong className="text-white font-semibold">compact</strong> and highly
              skilled team. Unlike large agencies, you work directly with your{" "}
              <span className="text-[#d4f534] font-semibold underline decoration-white/20 underline-offset-4 decoration-2">
                designer and developer
              </span>
              . Our process is agile, personal, and fully invested in your success.
            </motion.p>
          </motion.div>

          {/* Team Cards Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 max-w-5xl mx-auto items-start px-4">
            
            {/* Annotations - Desktop only */}
            <Annotations />

            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                index={index} 
              />
            ))}
          </div>

          {/* CTA Section */}
          <CTASection onPageChange={onPageChange} />
        </div>
      </div>
    </PageLayout>
  );
}

// --- Sub-components ---

function Annotations() {
  return (
    <>
      {/* Annotation 1: No Middlemen */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute -top-16 -left-4 md:-left-32 transform -rotate-12 hidden md:block z-20"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-serif italic text-muted-foreground text-xl mb-2"
        >
          No middlemen
        </motion.p>
        <svg className="w-10 h-16 text-gray-500" viewBox="0 0 24 36">
          <motion.path
            variants={drawLineSlow}
            d="M12 0 C8 12 16 24 12 36"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <motion.path
            variants={drawLineSlow}
            d="M8 32 L12 36 L16 32"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Annotation 2: Direct Access */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-1/2 -right-4 md:-right-24 transform rotate-6 hidden lg:block z-20"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-serif italic text-[#d4f534] text-2xl mb-2 ml-4"
        >
          Direct access!
        </motion.p>
        <svg fill="none" height="50" viewBox="0 0 60 50" width="60" className="text-[#d4f534]">
          <motion.path
            variants={drawLineSlow}
            d="M50 5 C30 15 45 40 10 45"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <motion.path
            variants={drawLineSlow}
            d="M10 45 L20 35 M10 45 L22 52"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </>
  );
}

interface TeamMemberCardProps {
  member: typeof teamMembers[0];
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`group relative ${index === 1 ? "md:mt-32" : ""}`}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700`}
      />

      <div className="relative bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 h-full flex flex-col group-hover:border-white/20 transition-colors duration-500">
        {/* Placeholder Image Area */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center border border-white/20">
              <span className="text-muted-foreground text-sm font-light">Photo</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-8 relative z-20 bg-[#0a0a0a]">
          <h3 className="text-3xl font-bold text-white mb-2">
            {member.name}
          </h3>
          <p className={`${member.roleColor} font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-6`}>
            {index === 0 ? <PenTool className="w-4 h-4" /> : <Code className="w-4 h-4" />}
            {member.role}
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-6 font-light">
            {member.description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainerSlow}
      className="mt-32 md:mt-48 relative"
    >
      {/* Dashed line connector */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: 96 }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 -top-24 w-[1px] border-l-2 border-dashed border-gray-800 hidden md:block" 
      />

      <motion.div 
        variants={fadeInUp}
        className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between border border-white/10 shadow-2xl relative overflow-hidden group"
      >
        {/* Animated Background Glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#d4f534]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 group-hover:bg-[#d4f534]/20 transition-colors duration-700" />

        <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to start?
          </h2>
          <p className="text-muted-foreground text-lg">
            No account managers. No fluff. Just you and the experts building something amazing.
          </p>
        </div>

        <div className="relative z-10">
          <motion.button
            onClick={() => onPageChange?.("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black hover:bg-[#d4f534] transition-colors px-8 py-5 rounded-full font-bold flex items-center gap-4 text-lg shadow-xl"
          >
            Discuss your project
            <div className="bg-black text-white rounded-full p-2 flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </motion.button>

          {/* Handwritten annotation */}
          <motion.div 
            initial={{ opacity: 0, rotate: -12 }}
            whileInView={{ opacity: 1, rotate: -12 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-12 -right-8 hidden lg:block"
          >
            <span className="font-serif italic text-muted-foreground text-lg">
              Let&apos;s go!
            </span>
            <svg
              className="w-8 h-8 text-gray-500 absolute -top-4 -left-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                variants={drawLineSlow}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
