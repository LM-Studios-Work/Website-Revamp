"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

interface CtaSectionProps {
  onCtaClick?: () => void;
}

/**
 * CtaSection Component
 * 
 * A compelling call-to-action section with:
 * - Large lime background with noise texture
 * - Animated glow effect
 * - Headline and description
 * - Primary CTA button
 * - Mobile-optimized responsive design
 */
export function CtaSection({ onCtaClick }: CtaSectionProps) {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="bg-[#d4f534] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden group"
        >
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply"></div>

          {/* Animated Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 tracking-tight">
              Ready to transform <br className="hidden md:block" /> your online
              presence?
            </h2>
            <p className="text-black/70 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Let's discuss your project and create a digital experience that
              drives real results for your business.
            </p>
            <button
              onClick={onCtaClick}
              className="bg-black text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-full flex items-center gap-3 active:scale-95 md:hover:scale-105 md:hover:bg-gray-900 transition-all text-base md:text-lg mx-auto shadow-2xl touch-manipulation"
            >
              Start your project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
