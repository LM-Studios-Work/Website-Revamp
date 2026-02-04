"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { GlassCard } from "@/src/components/ui/GlassCard";
import { services } from "@/src/lib/data";

/**
 * ServicesSection Component
 * 
 * Displays service offerings in a responsive grid:
 * - Section heading with title and description
 * - Service cards with images, icons, and features
 * - Hover effects and animations
 * - Mobile-optimized stagger animations
 */
export function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Icon mapping for services
  const iconMap: Record<string, React.ReactNode> = {
    "Web Design": <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-black" />,
    "SEO": <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-black" />,
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "0px" : "-10%", amount: 0.2 }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="mb-12 md:mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6"
          >
            Our{" "}
            <span
              className="relative inline-block"
              style={{
                WebkitTextStroke: "1px #d4f534",
                color: "transparent",
              }}
            >
              services
              {!isMobile && (
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-[2px] bg-[#d4f534]"
                />
              )}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-light"
          >
            We offer comprehensive digital solutions to elevate your online
            presence and drive measurable results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {services.slice(0, 2).map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              icon={iconMap[service.title] || <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-black" />}
              image={service.image}
              items={service.items}
              accentColor={service.accentColor}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Card Component
interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  items: string[];
  accentColor: string;
  isMobile: boolean;
}

function ServiceCard({
  title,
  subtitle,
  description,
  icon,
  image,
  items,
  accentColor,
  isMobile,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 md:hover:border-white/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden relative shrink-0">
        <div className="absolute inset-0 bg-black/20 z-10 md:group-hover:bg-transparent transition-colors duration-500"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 lg:p-10 relative flex flex-col grow">
        {/* Glow Effect */}
        <div
          className="absolute -top-20 right-10 w-40 h-40 blur-[80px] rounded-full opacity-0 md:group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />

        {/* Header */}
        <div className="flex items-start gap-4 md:gap-5 mb-6 relative z-10">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed font-light text-base md:text-lg relative z-10 grow">
          {description}
        </p>

        {/* Features & CTA */}
        <div className="mt-auto">
          <ul className="space-y-3 mb-8 text-sm text-gray-400 relative z-10">
            {items.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accentColor }}
                ></div>
                {item}
              </li>
            ))}
          </ul>

          <button
            className="font-bold flex items-center gap-2 active:gap-4 md:hover:gap-4 transition-all uppercase text-sm tracking-widest"
            style={{ color: accentColor }}
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
