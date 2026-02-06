"use client";

import { useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  MapPin,
  Globe,
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
  Home as HomeIcon,
} from "lucide-react";


import type { PageType } from "@/lib/navigation";
import { webPackages } from "@/lib/data";

import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface MidrandWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function MidrandWebDesignPage({ onPageChange }: MidrandWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <PageLayout containerRef={containerRef} currentPage="midrand-web-design" onPageChange={onPageChange}>
      {/* Hero Section */}
      <HeroSection onPageChange={onPageChange} />

      {/* Trust Bar */}
      <TrustBar />

      {/* Why Midrand Businesses Need a Website */}
      <WhyMidrandSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Industry-Specific Web Design */}
      <IndustrySection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Local SEO Section */}
      <LocalSEOSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Packages */}
      <PackagesSection onPageChange={onPageChange} />

      {/* Service Area Map */}
      <ServiceAreaSection isMobile={isMobile} />

      {/* Why Partner With Us */}
      <WhyPartnerSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* App & Automation Section */}
      <AutomationSection isMobile={isMobile} onPageChange={onPageChange} />

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
              <span className="text-white">Midrand</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold select-none tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", WebkitTextFillColor: "transparent" }}
            >
              Web Design in Midrand
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3 h-3" /> Midrand, Gauteng
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Professional Websites <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">for Midrand Businesses.</span>
          </h2>
          <div className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light border-l border-white/20 pl-6">
            <p>
              Positioned between Johannesburg and Pretoria, Midrand is Gauteng{"'"}s fastest-growing business hub. Whether you{"'"}re launching a startup in Vorna Valley or running an operation near the Gallagher Convention Centre, we build <strong className="text-white">custom websites that match the pace of this area</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-[#d4f534] text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] md:hover:scale-105"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onPageChange?.("projects")}
              className="border border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all hover:bg-white/5"
            >
              View Our Work
            </button>
          </div>
        </div>

        <div
          className="flex-1 w-full hidden md:block"
        >
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10" />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1080&q=80"
              alt="Midrand business district skyline representing web design services in the area"
              className="w-full h-auto object-cover"
            />
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
  const stats = [
    { value: "50+", label: "Websites Delivered" },
    { value: "100%", label: "Code Ownership" },
    { value: "5-7", label: "Day Turnaround" },
    { value: "Local", label: "Midrand Based" },
  ];

  return (
    <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#d4f534]">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// WHY MIDRAND NEEDS A WEBSITE
// =============================
function WhyMidrandSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div
         
        >
          <div className="mb-4">
            <PageBadge>Midrand{"'"}s Digital Partner</PageBadge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Your Midrand Business Needs <span className="text-[#d4f534]">a Professional Website</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">
            You don{"'"}t need to outsource your digital strategy to a generic agency in Cape Town or an expensive firm in Sandton. We are based right here, and we understand the unique mix of Midrand{"'"}s economy — from the retail bustle of the Mall of Africa district to the logistics powerhouses in Kyalami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Remote-First, Locally Rooted",
              description: "We operate as a remote-first team rooted in the Midrand area. This model allows us to offer premium, agency-grade development without the inflated costs of renting office space in Waterfall City. You get high-performance code, personal service, and local accountability.",
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Midrand Is Growing Fast",
              description: "With developments in Waterfall City, the N1 corridor, and Kyalami, Midrand attracts more businesses every month. A professional website positions you to capture this growing market before competitors do.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Full Code Ownership",
              description: "You own every line of code we write. No lock-in contracts, no hidden fees, no monthly website rental schemes. Just a solid digital asset owned 100% by you.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4f534]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4f534]/10 text-[#d4f534] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">
            Want to learn more about our full range of services?{" "}
            <button onClick={() => onPageChange?.("web-design")} className="text-[#d4f534] font-medium hover:underline">
              View our web design packages
            </button>{" "}
            or{" "}
            <button onClick={() => onPageChange?.("about")} className="text-[#d4f534] font-medium hover:underline">
              read about our team
            </button>.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================
// INDUSTRY-SPECIFIC WEB DESIGN
// =============================
function IndustrySection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const industries = [
    {
      icon: <HomeIcon className="w-6 h-6" />,
      title: "Service Businesses in Carlswald & Noordwyk",
      description: "If you are a plumber, electrician, or consultant servicing the residential estates, we build fast, mobile-responsive sites that convert neighbours into clients. Your website will feature click-to-call buttons, WhatsApp integration, and service area pages targeting Midrand suburbs.",
      color: "#d4f534",
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Retail & E-Commerce near Mall of Africa",
      description: "With the massive foot traffic around Mall of Africa, your physical store needs a digital twin. We build e-commerce platforms that let you sell locally and nationally, complete with inventory management, payment gateways, and product catalogues optimised for search.",
      color: "#5dd9c1",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "B2B & Industrial in Halfway House & Kyalami",
      description: "For businesses in the Halfway House and Kyalami Business Parks, we design credible, information-rich websites that help you secure tenders and corporate contracts. Think detailed service pages, case studies, and professional contact flows.",
      color: "#b4a7d6",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Custom Website Design for <span className="text-[#5dd9c1]">Midrand{"'"}s Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Your website is your 24/7 salesperson. We build sites that work for your specific industry, whether you{"'"}re a local service provider or a national distributor operating from the N1 corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="relative p-6 md:p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
              >
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{industry.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => onPageChange?.("contact")}
            className="bg-[#d4f534] text-black font-bold py-3 px-8 rounded-full hover:bg-[#c7e81f] transition-colors flex items-center gap-2"
          >
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onPageChange?.("projects")}
            className="text-white/60 hover:text-white font-medium transition-colors"
          >
            See examples of our work
          </button>
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
    { icon: <Search className="w-5 h-5" />, text: "Google Business Profile optimisation for Midrand map pack results" },
    { icon: <MapPin className="w-5 h-5" />, text: "Hyper-local keyword targeting for Waterfall, Kyalami, and surrounding areas" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "High-intent local traffic driven directly to your phone and inbox" },
    { icon: <Globe className="w-5 h-5" />, text: "Position capture from the N1 corridor and suburban routes like Allandale and Main Road" },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
           
          >
            <div className="mb-4">
              <PageBadge color="#c084fc">SEO for Midrand</PageBadge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Dominating Search Results <span className="text-[#c084fc]">Along the N1 Corridor</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Midrand is highly competitive. When a potential client in Blue Hills or Crowthorne searches for your services, they should not find a competitor in Centurion. We specialise in hyper-local SEO that puts your business in front of the right people, at the right time.
            </p>

            <div className="space-y-4 mb-8">
              {seoFeatures.map((feature) => (
                <div key={feature.text} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#c084fc]/10 text-[#c084fc] flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => onPageChange?.("seo")}
                className="text-[#c084fc] font-medium hover:underline flex items-center gap-2"
              >
                Explore our full SEO services <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="SEO analytics dashboard showing local search performance for Midrand businesses"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-sm font-medium text-white">
                    {"\""}Ranked #1 for web design Midrand within 3 months of launch.{"\""}
                  </p>
                  <p className="text-xs text-[#c084fc] mt-2">Local SEO Case Study</p>
                </div>
              </div>
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
    <section className="relative z-10 px-4 sm:px-8 py-12 md:py-16 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Web Design Packages for <span className="text-[#d4f534]">Midrand</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            We do not use templates. Every website is custom-built for your business. Whether you{"'"}re a solo consultant in Noordwyk or a growing company in Waterfall City, we have a package that fits.
          </p>
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

        <div className="text-center">
          <p className="text-muted-foreground">
            Need something more custom?{" "}
            <button onClick={() => onPageChange?.("contact")} className="text-[#d4f534] font-medium hover:underline">
              Contact us for a tailored quote
            </button>{" "}
            or{" "}
            <button onClick={() => onPageChange?.("web-design")} className="text-[#d4f534] font-medium hover:underline">
              view full package details
            </button>.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================
// SERVICE AREA MAP SECTION
// =============================
function ServiceAreaSection({ isMobile }: { isMobile: boolean }) {
  const areas = [
    {
      category: "Commercial Hubs",
      icon: <Building2 className="w-5 h-5" />,
      locations: ["Waterfall City", "Halfway House", "Kyalami Business Park", "Barbeque Downs"],
      color: "#d4f534",
    },
    {
      category: "Residential Growth Zones",
      icon: <Users className="w-5 h-5" />,
      locations: ["Vorna Valley", "Carlswald", "Noordwyk", "Blue Hills", "Crowthorne", "Glen Austin"],
      color: "#5dd9c1",
    },
    {
      category: "Key Landmarks",
      icon: <MapPin className="w-5 h-5" />,
      locations: ["Mall of Africa", "Gallagher Convention Centre", "Grand Central Airport", "Kyalami Grand Prix Circuit"],
      color: "#b4a7d6",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Serving the <span className="text-[#5dd9c1]">Entire Midrand Region</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            We don{"'"}t just say {"\""}Midrand{"\""}. We mean the whole ecosystem. Our web design and SEO services cover the key economic and residential nodes across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.category}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${area.color}15`, color: area.color }}
                >
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{area.category}</h3>
              </div>
              <ul className="space-y-3">
                {area.locations.map((loc) => (
                  <li key={loc} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: area.color }} />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// WHY PARTNER WITH US
// =============================
function WhyPartnerSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessible & Understandable",
      description: "We speak plain English, avoiding confusing jargon. We explain exactly how your investment will generate returns for your Midrand business.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficient & Cost-Effective",
      description: "Our remote model eliminates overhead costs. You receive the same quality of work as a Sandton agency at a fraction of the price.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Technology Stack",
      description: "We build with Next.js, React, and Tailwind CSS. Your website will be fast, secure, and built to scale as your business grows.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "No Lock-In Contracts",
      description: "You own everything. Your domain, your hosting, your code. We believe in earning your business through results, not contracts.",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Web design team collaborating on a project for a Midrand client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
           
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Partner With a <span className="text-[#d4f534]">Local Remote Team</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We offer the best of both worlds. Local enough to meet you at a coffee shop in Waterfall City, remote enough to keep our prices competitive.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-[#d4f534]/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#d4f534]/10 text-[#d4f534] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => onPageChange?.("about")}
                className="text-[#d4f534] font-medium hover:underline flex items-center gap-2"
              >
                Meet our team <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// APP & AUTOMATION SECTION
// =============================
function AutomationSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
           
          >
            <div className="mb-4">
              <PageBadge color="#6ee2d1">Beyond Websites</PageBadge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              App Development & <span className="text-[#6ee2d1]">Business Automation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As Midrand grows, so does the complexity of running a business here. We build custom software solutions to streamline your operations and help you scale efficiently.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Managing a fleet near Grand Central Airport? We build logistics dashboards.",
                "Handling bookings for a lifestyle business in Blue Hills? We create automated booking systems.",
                "Running inventory across multiple locations? We develop custom inventory management tools.",
                "Need a client portal for your Kyalami-based firm? We build secure, branded portals.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6ee2d1] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => onPageChange?.("app-development")}
                className="text-[#6ee2d1] font-medium hover:underline flex items-center gap-2"
              >
                See our app development packages <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Custom app development and business automation solutions for Midrand businesses"
                className="w-full h-full object-cover"
              />
            </div>
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
  const faqs = [
    {
      category: "Web Design in Midrand",
      icon: <Globe className="w-6 h-6" />,
      questions: [
        {
          q: "Do you provide web design services specifically for Midrand businesses?",
          a: "Yes. We provide full web design and development services tailored specifically for businesses operating in the Midrand area, including Waterfall City, Kyalami, Halfway House, Vorna Valley, Carlswald, Noordwyk, and Blue Hills. We understand the local market dynamics and build websites that resonate with your target audience.",
        },
        {
          q: "How much does a website cost for a small business in Midrand?",
          a: "Our Essential Business package starts at R2,499 for a professional 3-page website delivered in 5-7 days. For growing businesses that need more pages and features, our Professional Growth package is R4,999. Every website is custom-built, mobile-responsive, and SEO-optimised for local Midrand search terms.",
        },
        {
          q: "Can we meet in person to discuss my project?",
          a: "Absolutely. While we operate as a remote-first team for efficiency, we are locally based and available for in-person consultations across the Midrand area. We can meet at a location convenient to you in Waterfall City, Kyalami, or any other part of Midrand.",
        },
      ],
    },
    {
      category: "Local SEO & Rankings",
      icon: <Search className="w-6 h-6" />,
      questions: [
        {
          q: "Can you help my business rank on Google in the Midrand area?",
          a: "Yes. We specialise in local SEO for Midrand businesses. We optimise your Google Business Profile, target hyper-local keywords such as 'web design Midrand', 'plumber Waterfall City', and 'electrician Kyalami', and implement technical SEO to help you appear in the Google Map Pack and organic search results.",
        },
        {
          q: "How long does it take to see SEO results?",
          a: "Local SEO results typically begin to show within 2-4 months, with significant improvements in 4-6 months. The timeline depends on competition in your industry and the current state of your online presence. We provide monthly reporting so you can track progress.",
        },
        {
          q: "Do you optimise for specific Midrand suburbs and areas?",
          a: "Yes. We create location-specific content and optimise for suburbs including Waterfall, Kyalami, Halfway House, Vorna Valley, Carlswald, Noordwyk, Blue Hills, Crowthorne, Glen Austin, and Barbeque Downs. This hyper-local approach ensures you capture traffic from people searching in your immediate service area.",
        },
      ],
    },
    {
      category: "Process & Delivery",
      icon: <Zap className="w-6 h-6" />,
      questions: [
        {
          q: "How long does it take to build a website?",
          a: "Our Essential Business package is typically delivered within 5-7 business days. The Professional Growth package takes 7-12 business days. Custom and e-commerce solutions take longer depending on complexity. We provide clear timelines during the initial consultation.",
        },
        {
          q: "Do I own the website after it is built?",
          a: "Yes, 100%. You own every line of code, your domain name, and your hosting account. There are no lock-in contracts or monthly website rental fees. The website is a digital asset that belongs entirely to you.",
        },
        {
          q: "What technologies do you use to build websites?",
          a: "We build with modern frameworks including Next.js, React, and Tailwind CSS. These technologies ensure your website is fast, secure, accessible, and easy to maintain. We also implement structured data, meta tags, and other technical SEO elements as standard.",
        },
      ],
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <PageBadge>Common Questions</PageBadge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-4">
            Frequently Asked Questions About <span className="text-[#d4f534]">Web Design in Midrand</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know about getting a professional website built for your Midrand business.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((section, idx) => (
            <div
              key={idx}
             
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#d4f534] flex items-center gap-3">
                {section.icon}
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.questions.map((item, qIdx) => (
                  <FAQItem key={qIdx} question={item.q} answer={item.a} />
                ))}
              </div>
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
    <section className="relative z-10 px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div
          className="bg-[#d4f534] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 tracking-tight text-balance">
              Ready to Build Your Digital Presence in Midrand?
            </h2>
            <p className="text-black/70 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              The Midrand market is moving fast. Don{"'"}t let your business get left behind with an outdated website. Let{"'"}s build a solution that secures your place in Gauteng{"'"}s most dynamic business hub.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onPageChange?.("contact")}
                className="bg-black text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-full flex items-center gap-3 active:scale-95 md:hover:scale-105 md:hover:bg-gray-900 transition-all text-base md:text-lg shadow-2xl"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onPageChange?.("web-design")}
                className="text-black/70 font-medium hover:text-black transition-colors"
              >
                View all packages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom SEO text block */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-muted-foreground text-sm leading-relaxed">
          LM Studios is a professional{" "}
          <strong className="text-white/70">web design company in Midrand</strong>, providing custom website design, SEO optimisation, and app development services to businesses across Waterfall City, Kyalami, Halfway House, Vorna Valley, Carlswald, Noordwyk, Blue Hills, and the greater Midrand region. We serve both the Johannesburg and Pretoria markets along the N1 corridor.
        </p>
      </div>
    </section>
  );
}

// =============================
// FAQ ITEM HELPER
// =============================
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between text-left group py-2"
      >
        <span className="font-bold text-white text-sm md:text-base group-hover:text-[#d4f534] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
        {isOpen && (
          <div
            className="overflow-hidden"
          >
            <p className="pt-2 text-sm text-muted-foreground leading-relaxed font-light">
              {answer}
            </p>
          </div>
        )}
      
    </div>
  );
}
