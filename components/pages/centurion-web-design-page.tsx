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
  Factory,
  Target,
  Award,
  Rocket,
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import type { PageType } from "@/lib/navigation";
import { webPackages } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerContainerMobile } from "@/lib/animations";
import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface CenturionWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function CenturionWebDesignPage({ onPageChange }: CenturionWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <PageLayout containerRef={containerRef} currentPage="centurion-web-design" onPageChange={onPageChange}>
      {/* Hero Section */}
      <HeroSection heroY={heroY} onPageChange={onPageChange} />

      {/* Trust Bar */}
      <TrustBar />

      {/* Why Centurion Businesses Need a Website */}
      <WhyCenturionSection isMobile={isMobile} onPageChange={onPageChange} />

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

      {/* Tech Hub Positioning */}
      <TechHubSection isMobile={isMobile} onPageChange={onPageChange} />

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
function HeroSection({ heroY, onPageChange }: { heroY: any; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-20 md:py-32 overflow-hidden">
      <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex-1">
          <motion.div variants={fadeInUp} className="mb-4">
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
              <button onClick={() => onPageChange?.("home")} className="hover:text-white transition-colors">Home</button>
              <span>/</span>
              <button onClick={() => onPageChange?.("web-design")} className="hover:text-white transition-colors">Web Design</button>
              <span>/</span>
              <span className="text-white">Centurion</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold select-none tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", WebkitTextFillColor: "transparent" }}
            >
              Web Design in Centurion
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3 h-3" /> Centurion, Gauteng
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Professional Websites <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">for Centurion Businesses.</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light border-l border-white/20 pl-6">
            <p>
              Centurion{"'"}s manufacturing, logistics, and professional sectors demand digital excellence. From Highveld Park to Hennopspark, we craft <strong className="text-white">custom websites that showcase industrial strength and corporate sophistication</strong>.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-8">
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 w-full hidden md:block"
        >
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10" />
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <Building2 className="w-24 h-24 text-[#d4f534]/30" />
            </div>
          </div>
        </motion.div>
      </motion.div>
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
          <div className="text-3xl font-bold text-[#d4f534]">150+</div>
          <p className="text-sm text-muted-foreground mt-2">Websites Built</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#d4f534]">98%</div>
          <p className="text-sm text-muted-foreground mt-2">Client Satisfaction</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#d4f534]">12+</div>
          <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#d4f534]">24/7</div>
          <p className="text-sm text-muted-foreground mt-2">Support Available</p>
        </div>
      </div>
    </section>
  );
}

// =============================
// WHY CENTURION SECTION
// =============================
function WhyCenturionSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const reasons = [
    { icon: Factory, title: "Manufacturing Hub", desc: "Strong presence of heavy industries and logistics" },
    { icon: Users, title: "Growing Professional Sector", desc: "Accounting, legal, and consulting firms need digital presence" },
    { icon: TrendingUp, title: "Rising Business Competition", desc: "Local businesses invest heavily in web presence" },
    { icon: Building2, title: "Corporate Headquarters", desc: "Multiple multinational offices require sophisticated websites" },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <PageBadge>Why Centurion</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Why Centurion Businesses Need Strong Web Presence
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Centurion is more than just a location—it{"'"}s South Africa{"'"}s manufacturing and logistics powerhouse
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-white/10 hover:border-[#d4f534]/50 transition-colors bg-white/5 backdrop-blur-sm"
            >
              <reason.icon className="w-12 h-12 text-[#d4f534] mb-4" />
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.desc}</p>
            </motion.div>
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
    { name: "Manufacturing", icon: Factory, desc: "Showcase production capabilities and certifications" },
    { name: "Logistics & Distribution", icon: Briefcase, desc: "Track services and fleet management systems" },
    { name: "Professional Services", icon: Award, desc: "Build credibility and client trust" },
    { name: "Retail & E-commerce", icon: Store, desc: "Convert visitors into paying customers" },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <PageBadge>Industries We Serve</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Industry-Specific Solutions
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-[#d4f534]/30 bg-gradient-to-br from-[#d4f534]/10 to-transparent hover:border-[#d4f534]/60 transition-all"
            >
              <industry.icon className="w-12 h-12 text-[#d4f534] mb-4" />
              <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground">{industry.desc}</p>
            </motion.div>
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
    "Google Local Business Optimization",
    "Multi-location Schema Markup",
    "Centurion-specific keyword targeting",
    "Local Citation Building",
    "Review Management System",
    "Mobile-First Optimization",
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <PageBadge>Local SEO Dominance</PageBadge>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Rank First in Centurion Search Results
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We optimize every website for local Centurion searches. When someone searches "web design in Centurion" or "manufacturing solutions near me", your business appears first.
            </p>
            <div className="space-y-4">
              {seoFeatures.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4f534] flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <Search className="w-24 h-24 text-[#d4f534]/30" />
            </div>
          </motion.div>
        </motion.div>
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
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <PageBadge>Web Design Packages</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Scalable Solutions for Every Budget
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {webPackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <PackageCard package={pkg} onContactClick={() => onPageChange?.("contact")} />
            </motion.div>
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
    "Highveld Park",
    "Hennopspark", 
    "Centurion Mall Area",
    "Irene",
    "Eldorado",
    "Zwartkop",
    "Lyttelton",
    "Gauteng Industrial Area",
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <PageBadge>Service Areas</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Serving All of Centurion
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
            From industrial areas to commercial hubs, we serve every part of Centurion
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-lg border border-white/10 hover:border-[#d4f534]/50 text-center transition-colors bg-white/5"
            >
              <MapPin className="w-6 h-6 text-[#d4f534] mx-auto mb-3" />
              <p className="font-medium">{area}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// TECH HUB SECTION
// =============================
function TechHubSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const techs = [
    { name: "React & Next.js", icon: Code },
    { name: "Advanced Performance", icon: Zap },
    { name: "Security First", icon: ShieldCheck },
    { name: "Analytics Integration", icon: BarChart3 },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <PageBadge>Technology Stack</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
            Built with Enterprise-Grade Technology
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-white/10 text-center hover:border-[#d4f534]/50 transition-colors"
            >
              <tech.icon className="w-12 h-12 text-[#d4f534] mx-auto mb-4" />
              <h3 className="font-bold">{tech.name}</h3>
            </motion.div>
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
    "Deep understanding of Centurion business landscape",
    "Proven track record with local manufacturers",
    "24/7 support and maintenance",
    "Transparent pricing and timelines",
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <PageBadge>Why Partner With Us</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8">
            Your Centurion Web Design Partner
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {reasons.map((reason, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#d4f534] flex-shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
    { q: "How long does it take to build a website?", a: "Most websites take 4-8 weeks from design to launch." },
    { q: "Do you offer maintenance and support?", a: "Yes, we provide ongoing maintenance, updates, and 24/7 support." },
    { q: "What about SEO?", a: "All websites come with local SEO optimization built-in." },
    { q: "Can you help with e-commerce?", a: "Absolutely. We build full e-commerce solutions for retail and B2B." },
    { q: "Do you work with existing websites?", a: "Yes, we redesign and optimize existing sites frequently." },
    { q: "What's included in the price?", a: "Domain, hosting, design, development, SEO, and 1 month of free support." },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 md:py-32 bg-white/5">
      <div className="max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} className="text-center mb-16">
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <PageBadge>FAQs</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="p-6 bg-white/5 border-t border-white/10 text-muted-foreground">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
        <motion.div initial="hidden" whileInView="visible" variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-12">
            Get a free quote from our Centurion web design experts today
          </motion.p>
          <motion.button
            variants={fadeInUp}
            onClick={() => onPageChange?.("contact")}
            className="group bg-[#d4f534] text-black font-bold py-6 px-12 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] md:hover:scale-105 mx-auto"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
