"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";
import { Button } from "@/src/components/ui/Button";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

/**
 * HeroSection Component
 * 
 * The main hero section with:
 * - Large "LM Studios" typography with stroke effect
 * - Animated lime accent line
 * - Headline and description
 * - Primary CTA button
 * - Scroll indicator (desktop only)
 * - Parallax effects (desktop only)
 */
export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lighter parallax for desktop only
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, isMobile ? 0 : 30]);
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, isMobile ? 1 : 0.8]
  );

  const staggerContainerMobile = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  };

  return (
    <header className="relative w-full min-h-[90dvh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden py-20 lg:py-0">
      <motion.div
        style={isMobile ? {} : { y: heroY, opacity: heroOpacity }}
        className="w-full max-w-[1000px] mx-auto lg:mx-0"
      >
        {/* Brand Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="relative mb-8 md:mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-baseline leading-none select-none">
            <motion.span
              variants={fadeInUp}
              className="font-bold text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] tracking-tighter mr-0 md:mr-6 leading-[0.9]"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px rgba(255,255,255,0.8)",
              }}
            >
              LM
            </motion.span>
            <div className="flex flex-col relative z-20">
              <motion.span
                variants={fadeInUp}
                className="font-bold text-white text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] tracking-tight leading-[0.9]"
              >
                Studios
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: isMobile ? 0.8 : 1.2,
                  delay: isMobile ? 0.6 : 1,
                  ease: "circOut",
                }}
                className="bg-[#d4f534] h-[6px] sm:h-[8px] lg:h-[12px] rounded-full mt-2 sm:mt-4 shadow-[0_0_30px_rgba(212,245,52,0.6)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Headline & Sub */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="space-y-6 md:space-y-8 mb-10 md:mb-12 pl-4 border-l-2 border-white/10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Innovative Web Design <br />
            <span className="text-gray-500">for a Digital World.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-light leading-relaxed text-gray-400"
          >
            Crafting user-centric digital experiences with a focus on modern
            aesthetics, clean code, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isMobile ? 0.8 : 1.2, duration: 0.6 }}
        >
          <button
            onClick={onCtaClick}
            className="group relative bg-[#d4f534] text-black font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-full flex items-center gap-3 overflow-hidden transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] touch-manipulation w-fit md:hover:scale-105"
          >
            <span className="relative z-10 text-base sm:text-lg">
              Start Your Project
            </span>
            <ArrowRight className="w-5 h-5 relative z-10 group-active:translate-x-1 md:group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/30 translate-y-full group-active:translate-y-0 md:group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-10 right-20 items-center gap-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 rotate-90 origin-right translate-x-8">
          Scroll
        </span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 96, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#d4f534]"
          />
        </div>
      </motion.div>
    </header>
  );
}
