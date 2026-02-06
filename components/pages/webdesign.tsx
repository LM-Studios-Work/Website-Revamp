"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Clock,
  ArrowRight,
  MapPin,
  Globe,
  Zap,
  Smartphone,
  Server,
} from "lucide-react";


// Centralized imports
import type { PageType } from "@/lib/navigation";
import { webPackages, webProcessSteps, webDesignFAQs } from "@/lib/data";


// Shared components
import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";
import { FAQItem } from "@/components/shared/faq-item";

interface StandardPackPageProps {
  onPageChange?: (page: PageType) => void;
}

// Icon mapping for FAQs
const faqIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Globe,
  Building2: ServerIcon,
  Server,
};

// Custom Building2 icon
function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

export default function StandardPackPage({ onPageChange }: StandardPackPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  
  
  

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <PageLayout containerRef={containerRef} currentPage="web-design" onPageChange={onPageChange}>
      {/* Hero Section */}
      <HeroSection onPageChange={onPageChange} />

      {/* Packages Grid */}
      <PackagesSection onPageChange={onPageChange} />
         {/* Process Section */}
      <ProcessSection scrollRef={scrollRef} scroll={scroll} />


      {/* Small vs Large Business */}
      <BusinessTypesSection />

   
      {/* FAQs Section */}
      <FAQsSection />

      {/* Contact CTA */}
      <ContactCTASection onPageChange={onPageChange} />
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
              Website Design Company
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3 h-3" /> Johannesburg & Midrand
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Responsive Design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">& Development.</span>
          </h2>
          <div className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light border-l border-white/20 pl-6">
            <p>
              LM Studios is a <strong className="text-white">Johannesburg-based web design company</strong> providing professional website design services. We work with small, growing, and large businesses across South Africa.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onPageChange?.("contact")}
              className="bg-[#d4f534] text-black font-bold py-3 px-6 rounded-full hover:bg-[#c7e81f] hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,245,52,0.3)]"
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

        <div 
          className="flex-1 w-full hidden md:block"
        >
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10" />
            <img 
              src="https://images.unsplash.com/photo-1704652070195-61e76e1466db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" 
              alt="Web Design Johannesburg" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PackagesSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div 
         
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Packages</h2>
          <p className="text-muted-foreground max-w-2xl">
            We do not use templates. We build custom solutions tailored to your business needs.
          </p>
        </div>
        
        <div 
         
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-16"
        >
          {webPackages.map((pkg) => (
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

function BusinessTypesSection() {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Web Design for <span className="text-[#5dd9c1]">Small & Large</span> Businesses
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Every business is different. We do not use templates or off-the-shelf website builders. 
                Our work ranges from focused micro-sites to fully custom-built, content-managed websites tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h3 className="text-[#d4f534] font-bold mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Small Business
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> Cost-effective custom solutions</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> Fast development timelines</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> Full ownership of code</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <h3 className="text-[#5dd9c1] font-bold mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4" /> Large Enterprise
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> Fully custom web apps</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> Scalable architectures</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> Secure integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#5dd9c1]/10 rounded-full blur-[80px]" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" alt="Team working" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ 
  scrollRef, 
  scroll 
}: { 
  scrollRef: React.RefObject<HTMLDivElement | null>; 
  scroll: (direction: "left" | "right") => void;
}) {
  // Lime gradient shades (light to dark)
  const stepColors = ["#d4f534", "#b8d92a", "#9cbe20", "#80a216"];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Our <span className="text-transparent" style={{ WebkitTextStroke: "1px #d4f534" }}>process</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              From concept to launch, we craft visually striking websites.
            </p>
          </div>
          <div className="gap-4 hidden md:flex">
            <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4f534] hover:text-black transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full bg-[#d4f534] text-black flex items-center justify-center hover:bg-[#c7e81f]">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            ref={scrollRef} 
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {webProcessSteps.map((step, index) => (
              <div 
                key={step.id}
                className="snap-center flex-none w-[85vw] md:w-[350px] rounded-[2rem] p-8 relative transition-transform duration-300 hover:-translate-y-2" 
                style={{ backgroundColor: stepColors[index] || stepColors[0] }}
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
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#b4a7d6]/10 text-[#b4a7d6] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3 h-3" /> Usability & Performance
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Attention to Detail</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Often, it&apos;s the smallest design and usability decisions that set a website apart. 
            We prioritise <span className="text-white font-medium">user-focused design, fast page load speeds, and clean code</span>. 
            Without usability, even the most visually appealing site will underperform.
          </p>
        </div>

        <div className="space-y-8">
          {webDesignFAQs.map((section, idx) => {
            const IconComponent = faqIcons[section.icon] || Globe;
            return (
              <div 
                key={idx} 
               
                className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#d4f534] flex items-center gap-3">
                  <IconComponent className="w-6 h-6" />
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <FAQItem key={qIdx} question={item.q} answer={item.a} />
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

function ContactCTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 py-20 text-center border-t border-white/10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Looking for a web design company in <span className="text-[#d4f534]">Johannesburg or Midrand</span>?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          LM Studios delivers custom, results-driven web design solutions.
        </p>
        <button 
          onClick={() => onPageChange?.("contact")} 
          className="bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-[#d4f534] transition-colors shadow-xl"
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
}


