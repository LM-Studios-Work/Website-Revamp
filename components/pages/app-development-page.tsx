"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Globe,
  Server,
  Clock,
  Zap,
  Code,
  Layers,
} from "lucide-react";


import type { PageType } from "@/lib/navigation";
import { appPackages, appProcessSteps, appDevFAQs } from "@/lib/data";


import { PageLayout } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";
import { FAQItem } from "@/components/shared/faq-item";

interface AppDevelopmentPageProps {
  onPageChange?: (page: PageType) => void;
}

const faqIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Clock,
  Server,
};

export default function AppDevelopmentPage({ onPageChange }: AppDevelopmentPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <PageLayout currentPage="app-development" onPageChange={onPageChange}>
      <div className="relative z-10">
        <HeroSection onPageChange={onPageChange} />
        <TechStackSection />
        <PackagesSection onPageChange={onPageChange} />
        <ProcessSection scrollRef={scrollRef} scroll={scroll} />
        <FAQsSection />
        <CTASection onPageChange={onPageChange} />
      </div>
    </PageLayout>
  );
}

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
              App Development
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#6ee2d1]/50 bg-[#6ee2d1]/10 rounded-full text-[#6ee2d1] text-xs font-bold tracking-widest uppercase">
              Mobile & Web Applications
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Build apps that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">users love.</span>
          </h2>
          <div className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light border-l border-white/20 pl-6">
            <p>
              From concept to launch, we build <strong className="text-white">high-performance mobile and web applications</strong> that engage users and drive business growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onPageChange?.("contact")}
              className="bg-[#6ee2d1] text-black font-bold py-4 px-8 rounded-full hover:bg-[#5dd9c1] hover:scale-105 transition-all shadow-[0_0_30px_rgba(110,226,209,0.3)]"
            >
              Start Your Project
            </button>
            <button
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all"
            >
              View Packages
            </button>
          </div>
        </div>

        <div className="flex-1 w-full hidden md:block">
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6ee2d1]/20 to-transparent mix-blend-overlay z-10" />
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1080&q=80"
              alt="App Development"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const technologies = [
    { name: "React Native", icon: Smartphone, description: "Cross-platform mobile" },
    { name: "Swift / Kotlin", icon: Code, description: "Native development" },
    { name: "Next.js", icon: Globe, description: "Web applications" },
    { name: "Node.js", icon: Server, description: "Backend services" },
  ];

  return (
    <div className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6ee2d1]/30 transition-colors"
            >
              <tech.icon className="w-8 h-8 text-[#6ee2d1] mb-3" />
              <span className="text-white font-bold text-sm">{tech.name}</span>
              <span className="text-muted-foreground text-xs mt-1">{tech.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PackagesSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section id="packages" className="relative z-10 px-4 sm:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#6ee2d1]">App Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            From simple mobile apps to complex enterprise solutions, we have a package that fits your needs and budget.
          </p>
        </div>

        <div
         
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {appPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              color={pkg.color}
              popular={pkg.popular}
              delivery={pkg.delivery}
              onSelect={() => onPageChange?.("contact")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  scrollRef,
  scroll,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  scroll: (direction: "left" | "right") => void;
}) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Our <span className="text-transparent" style={{ WebkitTextStroke: "1px #6ee2d1" }}>process</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              A proven development workflow that delivers quality apps on time and within budget.
            </p>
          </div>
          <div className="gap-4 hidden md:flex">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#6ee2d1] hover:text-black transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#6ee2d1] text-black flex items-center justify-center hover:bg-[#5dd9c1]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {appProcessSteps.map((step, index) => (
              <div
                key={step.id}
                className="snap-center flex-none w-[85vw] md:w-[350px] rounded-[2rem] p-8 relative transition-all hover:-translate-y-2"
                style={{ backgroundColor: step.color.replace("bg-[", "").replace("]", "") }}
              >
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center font-bold text-black">
                  {step.id}
                </div>
                {step.tag && (
                  <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold border border-black/5 text-black uppercase">
                    {step.tag}
                  </span>
                )}
                <h3 className="text-3xl font-bold mb-4 mt-6 text-black">{step.title}</h3>
                <p className="text-base font-medium text-black/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQsSection() {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#6ee2d1]/10 text-[#6ee2d1] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3 h-3" /> Questions & Answers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know about our app development services.
          </p>
        </div>

        <div className="space-y-8">
          {appDevFAQs.map((section, idx) => {
            const IconComponent = faqIcons[section.icon] || Globe;
            return (
              <div
                key={idx}
               
                className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#6ee2d1] flex items-center gap-3">
                  <IconComponent className="w-6 h-6" />
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <FAQItem key={qIdx} question={item.q} answer={item.a} hoverClass="group-hover:text-[#6ee2d1]" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6ee2d1]/10 blur-[100px] -mr-48 -mt-48" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#6ee2d1] animate-pulse" />
                Available for new projects
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                {"Let's build your"} <br />
                <span className="text-[#6ee2d1]">next app.</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Ready to bring your app idea to life? Contact us for a free consultation and project estimate.
              </p>

              <div className="space-y-4">
                {[
                  "Free Project Consultation",
                  "Detailed Technical Proposal",
                  "Transparent Pricing",
                  "Dedicated Project Manager",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-muted-foreground">
                    <svg className="w-5 h-5 text-[#6ee2d1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="bg-[#6ee2d1] text-black font-bold py-5 px-10 rounded-full hover:bg-[#5dd9c1] hover:scale-105 transition-all text-lg shadow-[0_0_40px_rgba(110,226,209,0.3)]"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
