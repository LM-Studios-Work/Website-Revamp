"use client";

import { PackageCard } from "@/components/cards/package-card";
import { servicePackages } from "@/lib/services";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function StandardPackPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen relative text-white bg-black font-sans">
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
      <div className="fixed inset-0 z-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <section className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 flex items-baseline gap-4">
              <span>Our</span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px white",
                }}
              >
                Packages
              </span>
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mb-12">
              Choose the perfect package for your needs. All packages include
              professional design, responsive layouts, and ongoing support.
            </p>

            {/* Packages Carousel */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
                style={{
                  scrollBehavior: "smooth",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {servicePackages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    package={pkg}
                    onSelect={() => {
                      // Handle package selection
                      console.log("Selected:", pkg.id);
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4 mt-8 hidden md:flex">
                <button
                  onClick={() => scroll("left")}
                  className="w-12 h-12 rounded-full border border-[#d4f534] text-[#d4f534] flex items-center justify-center hover:bg-[#d4f534] hover:text-black transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-12 h-12 rounded-full bg-[#d4f534] text-black flex items-center justify-center hover:bg-[#c7e81f] transition-all shadow-[0_0_15px_#d4f534]"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-2">Custom Domains</h3>
                <p className="text-gray-300 text-sm">
                  All packages include a custom domain to establish your online
                  identity.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-2">SEO Optimized</h3>
                <p className="text-gray-300 text-sm">
                  Every site is optimized for search engines to help you get
                  found.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-300 text-sm">
                  Get dedicated support to keep your site running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
