"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Centralized imports
import type { PageType } from "@/lib/navigation";
import { seoPackages, seoProcessSteps } from "@/lib/data";

// Shared components
import { PageLayout } from "@/components/shared/page-layout";
import { SEOPackageCard } from "@/components/shared";

interface SeoPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function SeoPage({ onPageChange }: SeoPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <PageLayout currentPage="seo" onPageChange={onPageChange}>
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection onPageChange={onPageChange} />

        {/* SEO Types Info */}
        <SEOTypesSection />

        {/* On-Page & Off-Page Section */}
        <OptimizationSection />

        {/* Process Section */}
        <ProcessSection onPageChange={onPageChange} scrollRef={scrollRef} scroll={scroll} />

        {/* Packages Section */}
        <PackagesSection onPageChange={onPageChange} />

        {/* CTA Section */}
        <CTASection onPageChange={onPageChange} />
      </div>
    </PageLayout>
  );
}

// --- Sub-components ---

function HeroSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 pt-8 md:pt-16 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1">
          <div className="mb-4">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold select-none tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", WebkitTextFillColor: "transparent" }}
            >
              SEO Services
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c084fc]/50 bg-[#c084fc]/10 rounded-full text-[#c084fc] text-xs font-bold tracking-widest uppercase">
              Data-Driven SEO Strategy
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Get found by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">customers who matter.</span>
          </h2>
          <div className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light border-l border-white/20 pl-6">
            <p>
              We use <strong className="text-white">data-driven strategies</strong> to increase your visibility, drive organic traffic, and convert clicks into clients.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onPageChange?.("contact")}
              className="bg-[#c084fc] text-white font-bold py-3 px-6 rounded-full hover:bg-[#a960ec] hover:scale-105 transition-all shadow-[0_0_30px_rgba(192,132,252,0.3)]"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border border-white/20 text-white font-bold py-3 px-6 rounded-full hover:bg-white/10 transition-all"
            >
              View Packages
            </button>
          </div>
        </div>

        <div className="flex-1 w-full hidden md:block">
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/20 to-transparent mix-blend-overlay z-10" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80"
              alt="SEO Strategy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SEOTypesSection() {
  return (
    <div className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-4xl mx-auto">
          SEO may target different kinds of search, including{" "}
          <span className="text-[#c084fc]">image search</span>,{" "}
          <span className="text-[#a960ec]">local search</span>,{" "}
          <span className="text-[#9333ea]">video search</span>,{" "}
          academic search, news search and industry-specific vertical search engines.
        </p>
      </div>
    </div>
  );
}

function OptimizationSection() {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden border border-white/10 relative group">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" 
              alt="SEO Strategy"
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            On-Page & Off-Page <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Optimisation
            </span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              The goal of on-page and off-page optimisation is to generate a theme consistent with your targeted keywords. The search engine is a robot, not a human... and therefore, you must follow our proven process to educate the robot so that it brings your website up when your potential customers are searching for specific business-related keywords.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#c084fc] flex items-center justify-center text-[#c084fc]">
              <span className="font-bold text-sm">100%</span>
            </div>
            <div className="text-white font-medium">Results Driven Approach</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection({ 
  onPageChange, 
  scrollRef, 
  scroll 
}: { 
  onPageChange?: (page: PageType) => void;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  scroll: (direction: "left" | "right") => void;
}) {
  const stepColors = ["#c084fc", "#a960ec", "#9333ea", "#7c3aed"];
  const stepTextColors = ["text-black", "text-black", "text-white", "text-white"];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How we go to <span className="text-muted-foreground">work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Before beginning search engine optimisation (SEO), it is important to understand the process involved in an effective SEO campaign.
            </p>
          </div>
          <div className="gap-4 hidden md:flex">
            <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c084fc] hover:text-black transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full bg-[#c084fc] text-black flex items-center justify-center hover:bg-[#a960ec]">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            ref={scrollRef} 
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {seoProcessSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`snap-center flex-none w-[85vw] md:w-[350px] rounded-[2rem] p-8 relative transition-transform duration-300 hover:-translate-y-2 ${stepTextColors[index] || stepTextColors[0]}`}
                style={{ backgroundColor: stepColors[index] || stepColors[0] }}
              >
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-current/10 flex items-center justify-center font-bold">
                  {step.id}
                </div>
                {step.tag && (
                  <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold border border-black/5 uppercase">
                    {step.tag}
                  </span>
                )}
                <h3 className="text-3xl font-bold mb-4 mt-6">{step.title}</h3>
                <p className="text-base font-medium opacity-70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">LINK BUILDING</h4>
            <p className="text-muted-foreground">
              In the field of SEO, link building describes actions aimed at increasing the number and quality of inbound links to a webpage.
            </p>
          </div>
          <button 
            onClick={() => onPageChange?.("contact")} 
            className="px-8 py-3 bg-[#c084fc] text-white font-bold rounded-full hover:bg-[#a960ec] transition-colors whitespace-nowrap"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

function PackagesSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div id="packages" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose your <span className="text-[#c084fc]">SEO Pack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing and clear timelines. Choose the package that fits your business goals and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seoPackages.map((pkg) => (
            <SEOPackageCard
              key={pkg.name}
              name={pkg.name}
              time={pkg.time}
              price={pkg.price}
              billing={pkg.billing}
              description={pkg.description}
              idealFor={pkg.idealFor}
              features={pkg.features}
              accent={pkg.accent}
              popular={pkg.popular}
              onSelect={() => onPageChange?.("contact")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c084fc]/10 blur-[100px] -mr-48 -mt-48" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" />
                Available for new projects
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Let&apos;s scale your <br />
                <span className="text-[#c084fc]">business.</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Contact us for a FREE quote! Our expert team is ready to help you reach the first page of search results.
              </p>
              
              <div className="space-y-4">
                {[
                  "Free Website SEO Audit",
                  "Keyword Research Strategy",
                  "Performance Monitoring",
                  "Monthly SEO Reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-muted-foreground">
                    <svg className="w-5 h-5 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:items-end">
              <button
                onClick={() => onPageChange?.("contact")}
                className="bg-[#c084fc] text-white font-bold py-5 px-10 rounded-full hover:bg-[#a960ec] hover:scale-105 transition-all text-lg shadow-[0_0_40px_rgba(192,132,252,0.3)]"
              >
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
