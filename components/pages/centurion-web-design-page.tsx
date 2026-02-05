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
  Factory,
  Shield,
  Workflow,
  Target,
  Clock,
  Award,
  Rocket,
  BadgeCheck,
  MapPinned,
  TrendingDown,
  Heart,
  Trophy,
  Settings,
  LineChart,
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
    <PageLayout containerRef={containerRef} currentPage="web-design" onPageChange={onPageChange}>
      {/* Hero Section */}
      <HeroSection heroY={heroY} onPageChange={onPageChange} />

      {/* Trust Bar with Centurion Stats */}
      <TrustBar />

      {/* Why Centurion Section */}
      <WhyCenturionSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Industry-Specific Design */}
      <IndustrySpecificSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Local SEO Dominance */}
      <LocalSEOSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Packages */}
      <PackagesSection onPageChange={onPageChange} />

      {/* Service Areas - Interactive Map */}
      <ServiceAreasSection isMobile={isMobile} />

      {/* Tech Hub Positioning */}
      <TechHubSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Custom Development */}
      <CustomDevSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Why Choose Local */}
      <WhyLocalSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Success Metrics */}
      <SuccessMetricsSection isMobile={isMobile} />

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
      <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-5xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
              <button onClick={() => onPageChange?.("home")} className="hover:text-white transition-colors">
                Home
              </button>
              <span>/</span>
              <button onClick={() => onPageChange?.("web-design")} className="hover:text-white transition-colors">
                Web Design
              </button>
              <span>/</span>
              <span className="text-white">Centurion</span>
            </div>
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#5dd9c1] bg-[#5dd9c1]/10 rounded-full text-[#5dd9c1] text-sm font-bold tracking-widest uppercase backdrop-blur-sm mb-6">
              <MapPin className="w-4 h-4" /> Centurion, Gauteng
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
          >
            <span className="block mb-3">Professional</span>
            <span
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #d4f534 0%, #5dd9c1 50%, #b4a7d6 100%)",
              }}
            >
              Web Design
            </span>
            <span className="block mt-3 text-white/80 text-4xl sm:text-5xl md:text-6xl">for Centurion</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground font-light mb-10">
            More than just the bridge between Johannesburg and Pretoria, Centurion is a{" "}
            <span className="text-white font-medium">thriving independent economy</span>. From tech innovation hubs in Highveld to bustling industrial sectors in Hennopspark, we build{" "}
            <span className="text-[#5dd9c1] font-medium">high-performance websites</span> designed specifically for the Centurion market.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] text-black font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_60px_rgba(93,217,193,0.4)] hover:shadow-[0_0_80px_rgba(93,217,193,0.6)] hover:scale-105"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onPageChange?.("projects")}
              className="border-2 border-white/20 text-white font-medium py-4 px-10 rounded-full transition-all hover:bg-white/5 hover:border-white/40"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { value: "5-7", label: "Day Delivery", icon: <Clock className="w-5 h-5" /> },
              { value: "100%", label: "Code Ownership", icon: <ShieldCheck className="w-5 h-5" /> },
              { value: "50+", label: "Projects Delivered", icon: <Trophy className="w-5 h-5" /> },
              { value: "Local", label: "Centurion Based", icon: <Heart className="w-5 h-5" /> },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5dd9c1]/30 transition-all group"
              >
                <div className="flex items-center justify-center mb-3 text-[#5dd9c1] group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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
    <section className="relative z-10 border-y border-white/5 bg-gradient-to-r from-[#5dd9c1]/5 via-transparent to-[#d4f534]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#5dd9c1]" />
            <span>Enterprise-Grade Development</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#5dd9c1]" />
            <span>No Overhead Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#5dd9c1]" />
            <span>Full Code Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#5dd9c1]" />
            <span>Local Understanding</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// WHY CENTURION SECTION
// =============================
function WhyCenturionSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <PageBadge color="#5dd9c1">Centurion{"'"}s Digital Partner</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
            Your Digital Development Partner in{" "}
            <span className="text-[#5dd9c1]">Centurion{"'"}s Garden City</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
            Business in Centurion requires a balance of suburban trust and corporate efficiency. You don{"'"}t need to look to Pretoria or Sandton for expert development. We operate locally, understanding the unique dynamics of Centurion{"'"}s economy—from secure estates in Irene to corporate offices in Eco Park.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-7 h-7" />,
              title: "Remote-First, Locally Rooted",
              description: "As a remote-first team servicing the area, we eliminate the bloat of traditional agencies. We don't charge you for overheads—we charge you for code that works. Enterprise-grade development for Highveld Techno Park at prices that make sense for family businesses in Lyttelton.",
              color: "#5dd9c1",
            },
            {
              icon: <TrendingUp className="w-7 h-7" />,
              title: "Understanding Centurion's Economy",
              description: "From the tech innovation hubs in Highveld to the bustling industrial sector in Hennopspark, business here is competitive. To stand out in a market saturated with options, you need a digital presence that commands authority and trust.",
              color: "#d4f534",
            },
            {
              icon: <ShieldCheck className="w-7 h-7" />,
              title: "Full Transparency & Ownership",
              description: "We cut through the jargon to explain exactly how your website will deliver ROI. Every line of code is yours—no lock-ins, no hidden fees, no monthly rental schemes. Just a solid digital asset owned 100% by your business.",
              color: "#b4a7d6",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-full blur-3xl"
                style={{ background: `radial-gradient(circle, ${item.color}, transparent)` }}
              />
              
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:rotate-3"
                style={{
                  backgroundColor: `${item.color}15`,
                  color: item.color,
                  boxShadow: `0 0 20px ${item.color}30`,
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// INDUSTRY-SPECIFIC SECTION
// =============================
function IndustrySpecificSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const industries = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial & Manufacturing",
      subtitle: "Hennopspark & Sunderland Ridge",
      description: "Operating in Centurion's industrial belt? You need credibility. We build robust, information-rich websites that showcase your capabilities, catalogues, and safety certifications to secure B2B contracts and establish trust with corporate clients.",
      features: ["Product Catalogues", "Safety Certifications", "B2B Portals", "Tender Documentation"],
      color: "#5dd9c1",
      gradient: "from-[#5dd9c1]/20 to-transparent",
    },
    {
      icon: <HomeIcon className="w-6 h-6" />,
      title: "Service Professionals",
      subtitle: "Rooihuiskraal & Wierda Park",
      description: "The competition for home services in suburbs like Rooihuiskraal is fierce. We build fast, conversion-focused sites for plumbers, electricians, and contractors that turn local Google searches into phone calls and bookings within minutes.",
      features: ["Click-to-Call Integration", "Online Booking", "Service Area Targeting", "Google Maps Integration"],
      color: "#d4f534",
      gradient: "from-[#d4f534]/20 to-transparent",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Services",
      subtitle: "Highveld & Eco Park",
      description: "For financial advisors, legal firms, and tech consultants in the business parks, we create polished, corporate-identity websites that mirror the professionalism of your physical offices and build client confidence from the first click.",
      features: ["Client Portals", "Appointment Systems", "Document Management", "Professional Branding"],
      color: "#b4a7d6",
      gradient: "from-[#b4a7d6]/20 to-transparent",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <PageBadge color="#d4f534">Tailored Solutions</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            Web Design Tailored to{" "}
            <span className="text-[#d4f534]">Local Sectors</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            One size does not fit all in Centurion. We adapt our design strategy to your specific location and industry, ensuring maximum relevance and conversion rates.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${industry.gradient})` }}
            >
              {/* Animated Background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${industry.color}15, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: `${industry.color}20`,
                    color: industry.color,
                    boxShadow: `0 0 30px ${industry.color}20`,
                  }}
                >
                  {industry.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{industry.title}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: industry.color }}>
                  {industry.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{industry.description}</p>

                <div className="space-y-2">
                  {industry.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: industry.color }} />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => onPageChange?.("contact")}
            className="group bg-[#5dd9c1] text-black font-bold py-4 px-10 rounded-full hover:bg-[#4dc5ad] transition-all flex items-center gap-3 mx-auto shadow-lg hover:shadow-[0_0_40px_rgba(93,217,193,0.4)]"
          >
            <span>Discuss Your Industry Needs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// LOCAL SEO SECTION
// =============================
function LocalSEOSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const seoFeatures = [
    {
      icon: <MapPinned className="w-6 h-6" />,
      title: "Hyper-Local Targeting",
      description: "From Zwartkop to Irene, we ensure your business appears in the 'Map Pack' for customers in your immediate vicinity.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Landmark Optimization",
      description: "Leveraging local signals around Centurion Mall, Gautrain Station, and SuperSport Park to capture high-intent searches.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Commuter Traffic Capture",
      description: "Strategic positioning for the commuter traffic along the N1 and N14 highways, targeting mobile searches on the move.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Map Pack Dominance",
      description: "Google Business Profile optimization to ensure you own the 'Near Me' searches from Eldoraigne to Clubview.",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={isMobile ? staggerContainerMobile : staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <PageBadge color="#b4a7d6">Local SEO</PageBadge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              Dominating Search from{" "}
              <span className="text-[#b4a7d6]">Zwartkop to Irene</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              The battle for visibility in Centurion is fought on the <span className="text-white">"Near Me"</span> search results. If a resident in Eldoraigne searches for your service, they shouldn{"'"}t be seeing results from Midrand. We implement hyper-local SEO strategies to ensure you own your backyard.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {seoFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#b4a7d6]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b4a7d6]/10 text-[#b4a7d6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-bold mb-2 text-white">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onPageChange?.("seo")}
                className="text-[#b4a7d6] font-bold hover:text-[#a596c5] flex items-center gap-2 justify-center sm:justify-start transition-colors"
              >
                Explore Full SEO Services <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Placeholder Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#b4a7d6]/10 to-transparent relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[#b4a7d6] mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">SEO Analytics Visualization</p>
                  <p className="text-xs text-muted-foreground/50 mt-2">[Placeholder for visual]</p>
                </div>
              </div>
            </div>
          </motion.div>
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
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <PageBadge color="#d4f534">Pricing Packages</PageBadge>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
            Transparent Pricing for{" "}
            <span className="text-[#d4f534]">Centurion Businesses</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From startups in Highveld to established firms in Hennopspark—we have a package that fits your budget and ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {webPackages.map((pkg) => (
            <PackageCard key={pkg.title} package={pkg} onPageChange={onPageChange} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onPageChange?.("contact")}
            className="group bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] text-black font-bold py-4 px-10 rounded-full hover:scale-105 transition-all flex items-center gap-3 mx-auto shadow-lg"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

// =============================
// SERVICE AREAS SECTION
// =============================
function ServiceAreasSection({ isMobile }: { isMobile: boolean }) {
  const areas = [
    {
      category: "Business & Tech Hubs",
      locations: ["Highveld Techno Park", "Eco Park Estate", "Centurion CBD", "Waterkloof Glen"],
    },
    {
      category: "Industrial Zones",
      locations: ["Hennopspark", "Sunderland Ridge", "Icon Industrial Park", "Centurion Gate"],
    },
    {
      category: "Residential & Lifestyle",
      locations: ["Irene", "Lyttelton", "Eldoraigne", "Clubview", "Zwartkop", "Rooihuiskraal", "Wierda Park"],
    },
    {
      category: "Key Landmarks",
      locations: ["SuperSport Park", "Centurion Mall", "Unitas Hospital District", "Gautrain Station"],
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <PageBadge color="#5dd9c1">Service Coverage</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            Servicing the Greater{" "}
            <span className="text-[#5dd9c1]">Centurion Area</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We understand that Centurion is a collection of distinct communities. Our digital services cover the entire region with local expertise.
          </motion.p>
        </motion.div>

        {/* Placeholder Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#5dd9c1]/5 to-[#d4f534]/5 aspect-video relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPinned className="w-20 h-20 text-[#5dd9c1] mx-auto mb-4" />
              <p className="text-white font-medium text-lg">Interactive Centurion Service Map</p>
              <p className="text-muted-foreground text-sm mt-2">[Placeholder for interactive map component]</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5dd9c1]/30 transition-all"
            >
              <h3 className="text-lg font-bold mb-4 text-[#5dd9c1]">{area.category}</h3>
              <ul className="space-y-2">
                {area.locations.map((location) => (
                  <li key={location} className="text-sm text-muted-foreground flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-[#5dd9c1] mt-1 flex-shrink-0" />
                    <span>{location}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// TECH HUB POSITIONING
// =============================
function TechHubSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28 bg-gradient-to-br from-[#d4f534]/5 via-transparent to-[#5dd9c1]/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Placeholder Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#d4f534]/10 to-transparent relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Rocket className="w-16 h-16 text-[#d4f534] mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Tech Innovation Visual</p>
                  <p className="text-xs text-muted-foreground/50 mt-2">[Placeholder for visual]</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={isMobile ? staggerContainerMobile : staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <PageBadge color="#d4f534">Innovation Hub</PageBadge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              Centurion{"'"}s Hub for{" "}
              <span className="text-[#d4f534]">Innovation</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Centurion is emerging as a major tech and innovation hub in Gauteng. From Highveld Techno Park to the growing startup ecosystem, the area attracts forward-thinking businesses that demand cutting-edge digital solutions.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Modern tech stack for scalable applications" },
                { icon: <Code className="w-5 h-5" />, text: "Custom API integrations and automation" },
                { icon: <Workflow className="w-5 h-5" />, text: "Cloud-native architectures and deployment" },
                { icon: <Shield className="w-5 h-5" />, text: "Enterprise security standards and compliance" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#d4f534]/10 text-[#d4f534] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <button
                onClick={() => onPageChange?.("app-development")}
                className="text-[#d4f534] font-bold hover:text-[#c7e81f] flex items-center gap-2 transition-colors"
              >
                Explore App Development <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// =============================
// CUSTOM DEVELOPMENT SECTION
// =============================
function CustomDevSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const solutions = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automated Booking Systems",
      description: "Custom scheduling and appointment management for service businesses across Centurion.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Staff Management Portals",
      description: "Internal tools for HR, time tracking, and team coordination for growing businesses.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Client Portals",
      description: "Password-protected areas for firms in Eco Park requiring confidential client access.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Custom systems for warehouses in Hennopspark tracking stock and orders in real-time.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "B2B Interfaces",
      description: "Custom portals for business-to-business operations and tender management.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics Dashboards",
      description: "Real-time business intelligence and reporting for data-driven decision making.",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <PageBadge color="#b4a7d6">Custom Solutions</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            Custom App Development for{" "}
            <span className="text-[#b4a7d6]">Business Efficiency</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Centurion is a hub for innovation. We support this with custom software development designed to streamline your operations and save you time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#b4a7d6]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#b4a7d6]/10 text-[#b4a7d6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{solution.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => onPageChange?.("app-development")}
            className="group border-2 border-[#b4a7d6] text-[#b4a7d6] font-bold py-4 px-10 rounded-full hover:bg-[#b4a7d6]/10 transition-all flex items-center gap-3 mx-auto"
          >
            <span>Learn More About Custom Development</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// =============================
// WHY CHOOSE LOCAL SECTION
// =============================
function WhyLocalSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Neighbor Understanding",
      description: "We understand the dynamics of Centurion—from the secure estates to the industrial parks. This local knowledge translates into better targeting and messaging.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agility of Modern Tech",
      description: "Remote-first operations mean faster turnarounds without the bureaucracy of traditional agencies. Direct communication, rapid iterations, and no middlemen.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "No Jargon, Just Results",
      description: "We cut through the technical jargon to explain exactly how your website will deliver ROI. Transparent pricing, clear timelines, measurable outcomes.",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={isMobile ? staggerContainerMobile : staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <PageBadge color="#5dd9c1">Local Advantage</PageBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose a{" "}
            <span className="text-[#5dd9c1]">Local Remote Team?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We offer the agility of a modern tech partner with the understanding of a local neighbor—enterprise-grade quality without the enterprise price tag.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#5dd9c1]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#5dd9c1]/10 text-[#5dd9c1] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// SUCCESS METRICS SECTION
// =============================
function SuccessMetricsSection({ isMobile }: { isMobile: boolean }) {
  const metrics = [
    { value: "50+", label: "Websites Delivered", suffix: "" },
    { value: "5-7", label: "Day Turnaround", suffix: "Days" },
    { value: "100", label: "Code Ownership", suffix: "%" },
    { value: "95", label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#d4f534]/10 via-[#5dd9c1]/10 to-[#b4a7d6]/10 border border-white/10 p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Proven Results for{" "}
              <span className="text-[#5dd9c1]">Centurion Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our track record speaks for itself—delivering quality websites that drive real business growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {metric.value}
                  <span className="text-2xl md:text-3xl text-[#5dd9c1]">{metric.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// FAQS SECTION
// =============================
function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you only serve Centurion, or can you work with businesses elsewhere?",
      answer: "While we specialize in serving Centurion and understand the local market intimately, we work with businesses throughout Gauteng and South Africa. Our remote-first model allows us to deliver high-quality services regardless of location.",
    },
    {
      question: "What makes you different from agencies in Pretoria or Sandton?",
      answer: "We combine local market knowledge with modern remote operations. This means you get enterprise-grade development without the inflated costs of maintaining expensive office space in prime business districts. You pay for code that works, not overhead.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "Our typical turnaround is 5-7 days for standard packages. Custom projects vary based on complexity, but we provide clear timelines upfront. We pride ourselves on fast delivery without compromising quality.",
    },
    {
      question: "Do I really own the code, or is there a catch?",
      answer: "You own 100% of the code we write—no catches, no hidden clauses. Once your project is complete and paid for, the entire codebase is yours. No lock-in contracts, no monthly website rental fees.",
    },
    {
      question: "Can you help with local SEO for my Centurion business?",
      answer: "Absolutely. We specialize in hyper-local SEO strategies that target specific Centurion suburbs and landmarks. From Google Business Profile optimization to local keyword targeting, we ensure your business dominates local search results.",
    },
    {
      question: "What if I need changes after the website is live?",
      answer: "We offer ongoing support and maintenance packages. Since you own the code, you can also hire any developer to make changes. However, most clients prefer to work with us because we already understand their business and codebase.",
    },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <PageBadge color="#d4f534">FAQs</PageBadge>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Common Questions from{" "}
            <span className="text-[#d4f534]">Centurion Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-bold text-white text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d4f534] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
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
    <section className="relative z-10 px-4 sm:px-8 py-20 md:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#5dd9c1]/10 via-[#d4f534]/10 to-[#b4a7d6]/10 border border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4f534] to-[#5dd9c1]">
              Digital Presence?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Let{"'"}s discuss how we can help your Centurion business dominate the local market with a professional website that converts visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] text-black font-bold py-5 px-12 rounded-full hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_60px_rgba(93,217,193,0.4)]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onPageChange?.("about")}
              className="border-2 border-white/20 text-white font-medium py-5 px-12 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Learn About Us
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#5dd9c1]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#5dd9c1]" />
              <span>No Lock-In Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#5dd9c1]" />
              <span>100% Code Ownership</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
