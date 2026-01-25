"use client";

import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onViewPackages?: () => void;
  onLearnMore?: () => void;
}

export function HeroSection({ onViewPackages, onLearnMore }: HeroSectionProps) {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-8 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          Professional{" "}
          <span className="relative inline-block">
            Web Design
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 5 6 Q 15 2, 25 6 T 45 6 T 65 6 T 85 6 T 105 6 T 125 6 T 145 6 T 165 6 T 185 6 T 195 6"
                stroke="#facc15"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>{" "}
          <br className="hidden md:block" />
          for Growing Businesses
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-10 leading-relaxed">
          Clean, modern, and affordable websites that help growing businesses
          build credibility and reach customers online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onViewPackages}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            View Packages
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={onLearnMore}
            className="bg-transparent text-foreground px-8 py-4 rounded-full font-medium border border-border hover:bg-white/5 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
