"use client";

import { useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  TrendingUp,
  Smartphone,
  Search,
  Code,
  Zap,
  ShieldCheck,
  BarChart3,
  Store,
  Briefcase,
  Banknote,
  Globe,
  Target,
  Award,
  Rocket,
} from "lucide-react";


import type { PageType } from "@/lib/navigation";
import { webPackages } from "@/lib/data";

import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface SandtonWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function SandtonWebDesignPage({ onPageChange }: SandtonWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <PageLayout containerRef={containerRef} currentPage="sandton-web-design" onPageChange={onPageChange}>
      {/* Hero Section */}
      <HeroSection onPageChange={onPageChange} />

      {/* Trust Bar */}
      <TrustBar />

      {/* Why Sandton Businesses Need a Website */}
      <WhySandtonSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Industry-Specific Web Design */}
      <IndustrySection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Local SEO Section */}
      <LocalSEOSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Packages */}
      <PackagesSection onPageChange={onPageChange} />

      {/* Service Area Map */}
      <ServiceAreaSection isMobile={isMobile} />

      {/* Premium Strategy */}
      <PremiumStrategySection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Why Partner With Us */}
      <WhyPartnerSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* FAQs */}
      <FAQsSection />

      {/* CTA */}
      <CTASection onPageChange={onPageChange} />
    </PageLayout>
  );
}

// =============================
// HERO SECTION
// =============================
function HeroSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
              <button onClick={() => onPageChange?.("home")} className="hover:text-white transition-colors">Home</button>
              <span>/</span>
              <button onClick={() => onPageChange?.("web-design")} className="hover:text-white transition-colors">Web Design</button>
              <span>/</span>
              <span className="text-white">Sandton</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold select-none tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", WebkitTextFillColor: "transparent" }}
            >
              Web Design in Sandton
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3 h-3" /> Sandton, Johannesburg
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Premium Websites <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">for Sandton Elite.</span>
          </h2>
          <div className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light border-l border-white/20 pl-6">
            <p>
              Sandton demands excellence. From Bryanston{"'"}s corporate towers to Rivonia{"'"}s luxury brands, we create <strong className="text-white">premium digital experiences that command market leadership</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-[#d4f534] text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] md:hover:scale-105"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onPageChange?.("projects")}
              className="border border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all hover:bg-white/5"
            >
              View Portfolio
            </button>
          </div>
        </div>

        <div
          className="flex-1 w-full hidden md:block"
        >
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10" />
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <Globe className="w-24 h-24 text-[#d4f534]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// TRUST BAR
// =============================
function TrustBar() {
  return (
    <section className="px-4 sm:px-8 py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-[#d4f534]">200+</div>
          <p className="text-sm text-muted-foreground mt-2">Premium Websites</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#d4f534]">99%</div>
          <p className="text-sm text-muted-foreground mt-2">Enterprise Clients</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#d4f534]">15+</div>
          <p className="text-sm text-muted-foreground mt-2">Years in Sandton</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#d4f534]">Bespoke</div>
          <p className="text-sm text-muted-foreground mt-2">Custom Solutions</p>
        </div>
      </div>
    </section>
  );
}

// =============================
// WHY SANDTON SECTION
// =============================
function WhySandtonSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const reasons = [
    { icon: Banknote, title: "Financial Hub", desc: "Africa's largest concentration of financial institutions" },
    { icon: Building2, title: "Corporate Excellence", desc: "Multinational HQs demand world-class digital presence" },
    { icon: TrendingUp, title: "Premium Market", desc: "Clients expect sophisticated, high-performance platforms" },
    { icon: Award, title: "Brand Competition", desc: "Luxury brands battle for digital dominance" },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div whileInView="visible" className="text-center mb-16">
          <div className="inline-block mb-4">
            <PageBadge>Why Sandton</PageBadge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Sandton Businesses Demand Premium Web Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Africa{"'"}s most competitive market demands the most sophisticated digital strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-white/10 hover:border-[#d4f534]/50 transition-colors bg-white/5 backdrop-blur-sm"
            >
              <reason.icon className="w-12 h-12 text-[#d4f534] mb-4" />
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// INDUSTRY SECTION
// =============================
function IndustrySection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const industries = [
    { name: "Financial Services", icon: Banknote, desc: "Secure platforms for banking, investment & insurance" },
    { name: "Luxury Brands", icon: Award, desc: "Premium aesthetics and exclusive brand positioning" },
    { name: "Corporate B2B", icon: Building2, desc: "Enterprise solutions for multinational operations" },
    { name: "Professional Services", icon: Briefcase, desc: "Law, accounting, consulting digital excellence" },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div whileInView="visible" className="text-center mb-16">
          <div className="inline-block mb-4">
            <PageBadge>Specialized Sectors</PageBadge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise & Luxury Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-[#d4f534]/30 bg-gradient-to-br from-[#d4f534]/10 to-transparent hover:border-[#d4f534]/60 transition-all"
            >
              <industry.icon className="w-12 h-12 text-[#d4f534] mb-4" />
              <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// LOCAL SEO SECTION
// =============================
function LocalSEOSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const seoFeatures = [
    "Sandton-specific keyword domination",
    "Google Business Profile optimization",
    "Multi-office management",
    "Premium backlink strategy",
    "Reputation management",
    "Enterprise analytics",
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div whileInView="visible" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <PageBadge>Premium SEO Strategy</PageBadge>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Command Sandton Search Results
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              In Sandton, being first isn{"'"}t an option—it{"'"}s a requirement. We deploy enterprise-grade SEO strategies to ensure your brand dominates local and national search rankings.
            </p>
            <div className="space-y-4">
              {seoFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4f534] flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <Search className="w-24 h-24 text-[#d4f534]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// PACKAGES SECTION
// =============================
function PackagesSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div whileInView="visible" className="text-center mb-16">
          <div className="inline-block mb-4">
            <PageBadge>Web Design Packages</PageBadge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Solutions for Every Scale
          </h2>
        </div>

        <div
         
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8"
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

// =============================
// SERVICE AREA SECTION
// =============================
function ServiceAreaSection({ isMobile }: { isMobile: boolean }) {
  const areas = [
    "Bryanston",
    "Rivonia",
    "Morningside",
    "Woodmead",
    "Illovo",
    "Parktown North",
    "The Wilds",
    "Sunninghill",
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div whileInView="visible" className="text-center mb-16">
          <div className="inline-block mb-4">
            <PageBadge>Premium Suburbs</PageBadge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Serving Sandton Elite Areas
          </h2>
          <p className="text-lg text-muted-foreground">
            From corporate hubs to exclusive residential areas
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-white/10 hover:border-[#d4f534]/50 text-center transition-colors bg-white/5"
            >
              <MapPin className="w-6 h-6 text-[#d4f534] mx-auto mb-3" />
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// PREMIUM STRATEGY SECTION
// =============================
function PremiumStrategySection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const strategies = [
    { name: "Market Positioning", icon: Target },
    { name: "Competitive Analysis", icon: TrendingUp },
    { name: "Brand Refinement", icon: Award },
    { name: "Growth Acceleration", icon: Rocket },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div whileInView="visible" className="text-center mb-16">
          <div className="inline-block mb-4">
            <PageBadge>Digital Strategy</PageBadge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond Web Design—Digital Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {strategies.map((strategy, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-white/10 text-center hover:border-[#d4f534]/50 transition-colors"
            >
              <strategy.icon className="w-12 h-12 text-[#d4f534] mx-auto mb-4" />
              <h3 className="font-bold">{strategy.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// WHY PARTNER SECTION
// =============================
function WhyPartnerSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const reasons = [
    "Deep expertise in Sandton market dynamics",
    "Enterprise-grade security and compliance",
    "24/7 premium support",
    "Proven track record with Fortune 500 companies",
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div whileInView="visible" className="text-center mb-16">
          <div className="inline-block mb-4">
            <PageBadge>Your Strategic Partner</PageBadge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Sandton Leaders Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#d4f534] flex-shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// FAQs SECTION
// =============================
function FAQsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: "What makes Sandton digital strategy different?", a: "Sandton demands premium positioning, enterprise security, and market leadership. We deliver all three." },
    { q: "How long is the project timeline?", a: "Enterprise projects typically run 8-16 weeks. We provide detailed timelines in the proposal." },
    { q: "Do you handle multi-site management?", a: "Yes, we manage enterprise portfolios with centralized control and decentralized customization." },
    { q: "What about compliance and security?", a: "Full ISO compliance, enterprise-grade security, POPIA adherence, and regular audits included." },
    { q: "Can you integrate with existing systems?", a: "Absolutely. We specialize in enterprise integrations with CRM, ERP, and legacy systems." },
    { q: "What post-launch support is included?", a: "24/7 monitoring, weekly optimization reports, monthly strategy reviews, and dedicated account management." },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 bg-white/5">
      <div className="max-w-3xl mx-auto">
        <div whileInView="visible" className="text-center mb-16">
          <div className="inline-block mb-4">
            <PageBadge>FAQs</PageBadge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              
                {openIdx === idx && (
                  <div className="overflow-hidden">
                    <div className="p-6 bg-white/5 border-t border-white/10 text-muted-foreground">{faq.a}</div>
                  </div>
                )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// CTA SECTION
// =============================
function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4f534]/10 to-transparent opacity-50 -z-10" />
      
      <div className="max-w-3xl mx-auto text-center">
        <div whileInView="visible">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for Digital Excellence?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Schedule a confidential consultation with our Sandton digital strategists
          </p>
          <button
            onClick={() => onPageChange?.("contact")}
            className="group bg-[#d4f534] text-black font-bold py-6 px-12 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] md:hover:scale-105 mx-auto"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
