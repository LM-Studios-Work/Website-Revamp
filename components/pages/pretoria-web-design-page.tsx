"use client";

import { useRef, useState, useEffect } from "react";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  Scale,
  TrendingUp,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  ChevronDown,
  Stethoscope,
  Factory,
  Briefcase,
  Globe,
  Target,
  Award,
  Users,
  Lock,
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import type { PageType } from "@/lib/navigation";
import { webPackages } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerContainerMobile } from "@/lib/animations";
import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface PretoriaWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function PretoriaWebDesignPage({ onPageChange }: PretoriaWebDesignPageProps) {
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
    <PageLayout containerRef={containerRef} currentPage="pretoria-web-design" onPageChange={onPageChange}>
      {/* Hero - Authority-led with side image */}
      <HeroSection heroY={heroY} onPageChange={onPageChange} />

      {/* Digital Authority - full-width statement */}
      <AuthorityStatement />

      {/* Segmented Economy - 3-column deep cards */}
      <EconomySegments isMobile={isMobile} onPageChange={onPageChange} />

      {/* Why Pretoria Chooses Us - side-by-side proof */}
      <WhyUsSection isMobile={isMobile} />

      {/* Local SEO Dominance - map-grid approach */}
      <LocalSEOSection isMobile={isMobile} />

      {/* Packages */}
      <PackagesSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Service Areas - structured grid, not pills */}
      <ServiceAreasGrid isMobile={isMobile} />

      {/* FAQs */}
      <FAQsSection />

      {/* CTA */}
      <CTASection onPageChange={onPageChange} />
    </PageLayout>
  );
}

// =============================
// HERO - Side-by-side: text left, image right
// Different from Thohoyandou (centered), Midrand (stacked), Sandton/Centurion (standard)
// =============================
function HeroSection({ heroY, onPageChange }: { heroY: any; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-24 md:py-36 overflow-hidden">
      <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <button onClick={() => onPageChange?.("home")} className="hover:text-white transition-colors">Home</button>
              <span>/</span>
              <button onClick={() => onPageChange?.("web-design")} className="hover:text-white transition-colors">Web Design</button>
              <span>/</span>
              <span className="text-white">Pretoria</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase mb-6">
              <Scale className="w-3 h-3" /> Administrative Capital
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-balance">
              The Capital Standard:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4f534] via-[#5dd9c1] to-[#b4a7d6]">
                Premier Web Design in Pretoria
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light text-pretty mb-8">
              From the diplomatic enclaves of Hatfield to the booming commercial nodes of Menlyn Maine and Pretoria East, business here demands a higher standard of professionalism. We build the most robust, high-performance websites in the Jacaranda City.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onPageChange?.("contact")}
                className="group bg-[#d4f534] text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] md:hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onPageChange?.("projects")}
                className="border border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all hover:bg-white/5"
              >
                View Our Work
              </button>
            </div>
          </motion.div>

          {/* Right: hero image placeholder - replace with actual Pretoria image */}
          <motion.div variants={fadeInUp}>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10" />
              <img
                src="/placeholder.svg?height=600&width=700"
                alt="Pretoria Union Buildings and jacaranda-lined streets representing the capital city business landscape"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// =============================
// AUTHORITY STATEMENT - Full-width bold manifesto strip
// Unique to Pretoria: no other page has this pattern
// =============================
function AuthorityStatement() {
  return (
    <section className="px-4 sm:px-8 py-16 border-y border-white/10 bg-gradient-to-r from-[#d4f534]/5 via-transparent to-[#5dd9c1]/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-balance">
          In Pretoria, <span className="text-[#d4f534]">reputation is everything</span>. Whether you are a law firm in Brooklyn or a medical specialist in Faerie Glen, your digital presence needs to convey <span className="text-[#5dd9c1]">absolute trust</span>. We craft digital identities that <span className="text-[#b4a7d6]">command respect</span>.
        </h2>
      </motion.div>
    </section>
  );
}

// =============================
// ECONOMY SEGMENTS - 3 deep vertical cards
// Different from Thohoyandou bento, Midrand standard grid, Sandton/Centurion cards
// Each card is a tall, detailed segment with its own accent
// =============================
function EconomySegments({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const segments = [
    {
      icon: Briefcase,
      title: "Professional Services",
      subtitle: "The East",
      location: "Menlyn, Lynnwood, Faerie Glen",
      color: "#d4f534",
      description: "For the attorneys, architects, and consultants in Menlyn and Lynnwood, we build authoritative, corporate-identity websites. High-speed, secure platforms designed to convert high-net-worth clients who value professionalism above all else.",
      features: ["Corporate identity websites", "Client portal integration", "High-speed secure platforms", "Conversion-optimized design"],
    },
    {
      icon: Stethoscope,
      title: "Medical & Diplomatic",
      subtitle: "Arcadia & Hatfield",
      location: "Arcadia, Hatfield, Brooklyn",
      color: "#5dd9c1",
      description: "Pretoria is the heart of South Africa's diplomatic and medical sectors. We build clean, accessible, and highly secure sites for practices and organizations that require a polished, world-class image.",
      features: ["POPIA-compliant platforms", "Online booking systems", "Multilingual support", "Accessibility-first design"],
    },
    {
      icon: Factory,
      title: "Trade & Industry",
      subtitle: "North & West",
      location: "Silverton, Rosslyn, Pretoria North",
      color: "#b4a7d6",
      description: "For the industrial backbone in Silverton and Rosslyn, we design practical, heavy-duty B2B websites focused on cataloguing capabilities and lead generation for manufacturing and logistics.",
      features: ["Product catalogue systems", "B2B lead generation", "Tender-ready portfolios", "Industrial-grade hosting"],
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-14"
        >
          <div className="text-xs font-bold tracking-widest uppercase text-[#d4f534] mb-3">Tailored Solutions</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Built for Pretoria{"'"}s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4f534] to-[#5dd9c1]">Unique Economy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            We understand the distinct pulse of this city. Our development strategy is segmented to serve the diverse industries that drive the capital.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {segments.map((seg, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all overflow-hidden"
            >
              {/* Subtle background gradient unique to each card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to bottom right, ${seg.color}08, transparent)` }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${seg.color}20` }}>
                    <seg.icon className="w-6 h-6" style={{ color: seg.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase" style={{ color: seg.color }}>{seg.subtitle}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{seg.title}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: `${seg.color}99` }}>
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {seg.location}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{seg.description}</p>

                <ul className="space-y-2.5">
                  {seg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: seg.color }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// WHY US - Horizontal proof section: big number + description
// Unique layout: numbered reasons, not checkboxes or cards
// =============================
function WhyUsSection({ isMobile }: { isMobile: boolean }) {
  const reasons = [
    { number: "01", title: "Direct Access to Senior Developers", desc: "No middlemen, no account managers. You work directly with the developers who build your site.", color: "#d4f534" },
    { number: "02", title: "Capital City Seriousness", desc: "We combine the agility of a modern tech team with the professionalism Pretoria demands.", color: "#5dd9c1" },
    { number: "03", title: "Clean Code, Fast Load Times", desc: "Mobile-first designs that work perfectly for the thousands of commuters on the N1 and N4.", color: "#b4a7d6" },
    { number: "04", title: "Business Asset, Not Art Project", desc: "Your website exists to generate revenue. Every decision we make is ROI-driven.", color: "#d4f534" },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Why We Are Pretoria{"'"}s{" "}
            <span className="text-[#d4f534]">Top Choice</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We don{"'"}t hide behind jargon. Here{"'"}s exactly why businesses across Tshwane choose us.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="space-y-4"
        >
          {reasons.map((r, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex gap-6 md:gap-8 items-start p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="text-4xl md:text-5xl font-black opacity-30 group-hover:opacity-60 transition-opacity" style={{ color: r.color }}>
                {r.number}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// LOCAL SEO - Grid of target areas with search context
// Different from Thohoyandou search cloud, other pages' vertical layouts
// =============================
function LocalSEOSection({ isMobile }: { isMobile: boolean }) {
  const zones = [
    { area: "Menlyn & Pretoria East", context: "High-income professionals searching for premium services", icon: Briefcase },
    { area: "Hatfield & Arcadia", context: "Student hubs and diplomatic sector with diverse search patterns", icon: Globe },
    { area: "Brooklyn & Waterkloof", context: "Established residential areas with family-focused searches", icon: Users },
    { area: "Pretoria North & Montana", context: "Growing suburban market with local service demand", icon: TrendingUp },
    { area: "Silverton & Rosslyn", context: "Industrial corridor with B2B and tender-related searches", icon: Factory },
    { area: "Moreleta Park & Garsfontein", context: "Family estates with high purchasing power and local loyalty", icon: ShieldCheck },
  ];

  return (
    <section className="px-4 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-[#d4f534]" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Dominate the <span className="text-[#d4f534]">Local Search Landscape</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl text-pretty">
              Pretoria is vast. A customer in Montana is not looking for a plumber in Waterkloof. We specialize in hyper-local SEO that targets the specific micro-climates of the city, ensuring you own your backyard before expanding your reach.
            </p>
          </motion.div>

          <motion.div
            variants={isMobile ? staggerContainerMobile : staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {zones.map((zone, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d4f534]/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <zone.icon className="w-5 h-5 text-[#d4f534] group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-sm">{zone.area}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{zone.context}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// PACKAGES
// =============================
function PackagesSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Packages for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4f534] to-[#5dd9c1]">
              Capital City
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade development at every price point. From startups in Hatfield to corporates in Menlyn Maine.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
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
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// SERVICE AREAS - Structured grid with region grouping
// Different from Thohoyandou pills, other pages' flat lists
// =============================
function ServiceAreasGrid({ isMobile }: { isMobile: boolean }) {
  const regions = [
    {
      region: "Pretoria East",
      areas: ["Menlyn", "Faerie Glen", "Moreleta Park", "Garsfontein", "Lynnwood", "Equestria"],
      color: "#d4f534",
    },
    {
      region: "Central & Arcadia",
      areas: ["Hatfield", "Brooklyn", "Arcadia", "Sunnyside", "Waterkloof", "Muckleneuk"],
      color: "#5dd9c1",
    },
    {
      region: "North & West",
      areas: ["Montana", "Wonderboom", "Pretoria North", "Rosslyn", "Silverton", "Pretoria West"],
      color: "#b4a7d6",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Proudly Serving the Entire{" "}
              <span className="text-[#d4f534]">Tshwane Metro</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From Menlyn Maine to Montana, Brooklyn to Rosslyn. Every corner of the capital covered.
            </p>
          </motion.div>

          <motion.div
            variants={isMobile ? staggerContainerMobile : staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {regions.map((reg, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="font-bold text-lg mb-4" style={{ color: reg.color }}>{reg.region}</h3>
                <div className="flex flex-wrap gap-2">
                  {reg.areas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border bg-white/5 border-white/10 text-white/70"
                    >
                      <MapPin className="w-2.5 h-2.5 inline mr-1" />
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// FAQS
// =============================
function FAQsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why should I choose a local Pretoria web design agency?",
      a: "A local agency understands the Pretoria market intimately - from the professional expectations in Menlyn East to the industrial needs of Rosslyn. We know how Pretoria businesses operate and what their customers expect online.",
    },
    {
      q: "How do you handle web design for professional services firms?",
      a: "We build authoritative, corporate-identity websites with secure client portals, fast load times, and conversion-optimized layouts. Our designs convey the trust and professionalism that high-net-worth clients in Pretoria expect.",
    },
    {
      q: "Can you help my business rank in specific Pretoria suburbs?",
      a: "Absolutely. We specialize in hyper-local SEO. A customer in Montana searching for services should find businesses in Montana, not Waterkloof. We optimize for the specific micro-climates and search patterns of each Pretoria suburb.",
    },
    {
      q: "What makes Pretoria different from Johannesburg for web design?",
      a: "Pretoria's economy is driven by government, medical, and professional services rather than pure commerce. This means websites need to convey authority, trust, and compliance rather than just flashy marketing. We tailor our approach accordingly.",
    },
    {
      q: "How long does a typical website project take?",
      a: "Depending on complexity, our Essential Business package delivers in 5-7 days, while full custom enterprise builds take 3-4 weeks. We move fast without cutting corners.",
    },
    {
      q: "Do you offer ongoing support and maintenance?",
      a: "Every project includes post-launch support. We also offer ongoing maintenance plans covering security updates, content changes, performance monitoring, and technical SEO improvements.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">
            Questions About Web Design in{" "}
            <span className="text-[#d4f534]">Pretoria</span>
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm md:text-base flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{ transform: openFaq === idx ? "rotate(180deg)" : "none" }}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// CTA - Gradient from left, different direction from other pages
// =============================
function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto"
      >
        <div className="relative p-10 md:p-16 rounded-3xl overflow-hidden border border-[#d4f534]/20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4f534]/10 via-transparent to-[#5dd9c1]/5" />
          <div className="relative text-center">
            <Award className="w-10 h-10 text-[#d4f534] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-balance">
              Secure Your Place in the Market
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-pretty">
              The shift to Menlyn Maine and the growth of the East has changed the game. If your website looks like it was built ten years ago, you are invisible. Partner with the team setting the new standard for web design in Pretoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange?.("contact")}
                className="group bg-[#d4f534] text-black font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] md:hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onPageChange?.("web-design")}
                className="border border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all hover:bg-white/5"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
