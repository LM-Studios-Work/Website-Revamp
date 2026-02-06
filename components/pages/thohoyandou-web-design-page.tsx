"use client";

import { useRef, useState, useEffect } from "react";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  TrendingUp,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  Store,
  ChevronDown,
  Mountain,
  Palmtree,
  Hammer,
  ShoppingCart,
  Bed,
  Phone,
  Globe,
  Target,
  Heart,
} from "lucide-react";


import type { PageType } from "@/lib/navigation";
import { webPackages } from "@/lib/data";

import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface ThohoyandouWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function ThohoyandouWebDesignPage({ onPageChange }: ThohoyandouWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <PageLayout containerRef={containerRef} currentPage="thohoyandou-web-design" onPageChange={onPageChange}>
      {/* Hero - Narrative-led split layout */}
      <HeroSection onPageChange={onPageChange} />

      {/* The Opportunity - storytelling section */}
      <OpportunitySection />

      {/* Industry Bento Grid - unique to this page */}
      <IndustryBentoSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Why We're Different - manifesto style */}
      <ManifestoSection onPageChange={onPageChange} />

      {/* Local SEO Dominance */}
      <LocalSEOSection isMobile={isMobile} />

      {/* Packages */}
      <PackagesSection isMobile={isMobile} onPageChange={onPageChange} />

      {/* Service Areas - pill cloud */}
      <ServiceAreaCloud />

      {/* FAQs */}
      <FAQsSection />

      {/* CTA */}
      <CTASection onPageChange={onPageChange} />
    </PageLayout>
  );
}

// =============================
// HERO - Narrative-led, text-heavy with bold statement
// Different from other pages: no image, centered manifesto style
// =============================
function HeroSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-24 md:py-40 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div>
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
              <button onClick={() => onPageChange?.("home")} className="hover:text-white transition-colors">Home</button>
              <span>/</span>
              <button onClick={() => onPageChange?.("web-design")} className="hover:text-white transition-colors">Web Design</button>
              <span>/</span>
              <span className="text-white">Thohoyandou</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#5dd9c1]/50 bg-[#5dd9c1]/10 rounded-full text-[#5dd9c1] text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3 h-3" /> Vhembe District, Limpopo
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-balance">
            The Best Websites in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5dd9c1] via-[#d4f534] to-[#b4a7d6]">
              Thohoyandou & Venda
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground font-light text-pretty mb-10">
            From the bustle of Thavhani City to the academic corridors of Univen, the Vhembe district is rapidly digitizing. Your business needs a presence that leads this change, not one that follows it. We bring <strong className="text-white">Sandton-level development standards</strong> to the heart of Venda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-[#5dd9c1] text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(93,217,193,0.3)] md:hover:scale-105"
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

          {/* Hero image placeholder - replace src with actual Thohoyandou image */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5dd9c1]/20 to-transparent mix-blend-overlay z-10" />
              <img
                src="/placeholder.svg?height=560&width=1080"
                alt="Thohoyandou cityscape showcasing the growing business district in the Vhembe region"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// THE OPPORTUNITY - Storytelling section unique to Thohoyandou
// Two-column narrative with stats on the side
// =============================
function OpportunitySection() {
  return (
    <section className="px-4 sm:px-8 py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="grid md:grid-cols-5 gap-12 items-start"
        >
          {/* Left: narrative column */}
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-balance">
              Modernizing Business in the{" "}
              <span className="text-[#5dd9c1]">Vhembe District</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                The way people buy in Thohoyandou has changed. Customers are searching on their phones for services in Sibasa, browsing products in Makwarela, and looking for accommodation near Nandoni Dam. If you rely solely on foot traffic, you are invisible to the new economy.
              </p>
              <p>
                We bridge that gap. We bring a level of digital quality that has previously been <strong className="text-white">unavailable in the region</strong>, offering world-class design and development to local businesses ready to scale.
              </p>
              <p>
                We don{"'"}t do basic templates. Every site we build is a <strong className="text-white">custom digital asset</strong> tailored to the specific economy of Thohoyandou and the wider Vhembe region.
              </p>
            </div>
          </div>

          {/* Right: key stats stacked vertically */}
          <div className="md:col-span-2 space-y-6">
            {[
              { value: "1.4M+", label: "Vhembe population online", color: "#5dd9c1" },
              { value: "73%", label: "Mobile-first searches", color: "#d4f534" },
              { value: "5x", label: "Growth in local e-commerce", color: "#b4a7d6" },
              { value: "#1", label: "Rated in the region", color: "#5dd9c1" },
            ].map((stat, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// INDUSTRY BENTO GRID - Unique asymmetric layout
// Unlike other pages which use uniform 3-col grids
// =============================
function IndustryBentoSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            World-Class Design for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5dd9c1] to-[#d4f534]">Local Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Custom digital solutions built for the unique economy of Thohoyandou and Venda.
          </p>
        </div>

        <div
         
          className="grid md:grid-cols-2 gap-5"
        >
          {/* Large featured card */}
          <div
            className="md:row-span-2 group p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#5dd9c1]/10 to-transparent border border-[#5dd9c1]/20 hover:border-[#5dd9c1]/40 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#5dd9c1]/20 flex items-center justify-center mb-6">
              <ShoppingCart className="w-7 h-7 text-[#5dd9c1]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Retail & Fashion</h3>
            <p className="text-sm text-[#5dd9c1]/70 font-medium mb-4">Thavhani Mall & CBD</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For businesses around Thavhani Mall and the CBD, we build high-speed e-commerce stores that rival major national chains, integrating local payment methods and WhatsApp ordering systems.
            </p>
            <ul className="space-y-3">
              {["High-speed e-commerce stores", "Local payment integration", "WhatsApp ordering systems", "Inventory management"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle className="w-4 h-4 text-[#5dd9c1] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tourism card */}
          <div
            className="group p-8 rounded-2xl bg-gradient-to-br from-[#b4a7d6]/10 to-transparent border border-[#b4a7d6]/20 hover:border-[#b4a7d6]/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#b4a7d6]/20 flex items-center justify-center mb-5">
              <Bed className="w-6 h-6 text-[#b4a7d6]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Tourism & Hospitality</h3>
            <p className="text-sm text-[#b4a7d6]/70 font-medium mb-3">Lake Fundudzi & Nandoni</p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Stunning, image-rich websites for lodges and guesthouses featuring direct booking engines that cut out expensive third-party commissions.
            </p>
          </div>

          {/* Construction card */}
          <div
            className="group p-8 rounded-2xl bg-gradient-to-br from-[#d4f534]/10 to-transparent border border-[#d4f534]/20 hover:border-[#d4f534]/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#d4f534]/20 flex items-center justify-center mb-5">
              <Hammer className="w-6 h-6 text-[#d4f534]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Construction & Hardware</h3>
            <p className="text-sm text-[#d4f534]/70 font-medium mb-3">Makwarela & Shayandima</p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Robust, professional catalogues that showcase inventory and capabilities to secure government tenders and big contracts.
            </p>
          </div>
        </div>

        {/* Bottom row: two smaller equal cards */}
        <div
         
          className="grid md:grid-cols-3 gap-5 mt-5"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <Phone className="w-8 h-8 text-[#5dd9c1] mb-4" />
            <h4 className="font-bold mb-2">WhatsApp Integration</h4>
            <p className="text-sm text-muted-foreground">Direct ordering and customer support built for how Venda does business.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <Smartphone className="w-8 h-8 text-[#d4f534] mb-4" />
            <h4 className="font-bold mb-2">Mobile-First Design</h4>
            <p className="text-sm text-muted-foreground">Optimized for African internet speeds and the devices your customers actually use.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <Globe className="w-8 h-8 text-[#b4a7d6] mb-4" />
            <h4 className="font-bold mb-2">Multi-Language Support</h4>
            <p className="text-sm text-muted-foreground">Tshivenda, English, and more. Reach every customer in their language.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// MANIFESTO SECTION - Why we're different
// Unique layout: large quote + checklist, not seen on other pages
// =============================
function ManifestoSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: bold statement */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#5dd9c1] mb-4">Our Philosophy</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
              We respect the culture,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5dd9c1] to-[#d4f534]">
                but we push the technology.
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
              We understand that business in Venda is built on strong relationships and legacy. We translate that trust into the digital world. Our team combines local insight with elite technical skill, ensuring that your website isn{"'"}t just {"\""}online{"\""}{""}it is the best in your sector.
            </p>
          </div>

          {/* Right: capabilities checklist */}
          <div className="space-y-4">
            {[
              { title: "Custom Built, Never Templated", desc: "Every pixel designed for your specific business and market." },
              { title: "Sandton-Level Quality", desc: "Enterprise development standards, delivered locally." },
              { title: "Speed Optimized for Africa", desc: "Built for real-world internet conditions, not lab speeds." },
              { title: "Ongoing Partnership", desc: "We don't disappear after launch. Your growth is our business." },
              { title: "ROI Focused", desc: "Websites that generate leads, not just look pretty." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#5dd9c1]/30 transition-all">
                <CheckCircle className="w-5 h-5 text-[#5dd9c1] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// LOCAL SEO - Horizontal layout with map-style area listing
// Different from other pages' vertical SEO sections
// =============================
function LocalSEOSection({ isMobile }: { isMobile: boolean }) {
  const searchTerms = [
    "web design Thohoyandou",
    "website developer Venda",
    "e-commerce Vhembe",
    "SEO Thohoyandou",
    "online store Limpopo",
    "best website designer Venda",
    "app developer Thohoyandou",
    "digital marketing Vhembe",
  ];

  return (
    <section className="px-4 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div
         
        >
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-[#d4f534]" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Dominate <span className="text-[#d4f534]">Local Search</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl text-pretty">
              It is not enough to just have a website; you must be found. We specialize in local SEO for the Vhembe region. When a customer searches for a service in Louis Trichardt, Malamulele, or Thohoyandou, we ensure your business appears at the top.
            </p>
          </div>

          {/* Search terms cloud */}
          <div className="flex flex-wrap gap-3 mb-12">
            {searchTerms.map((term, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:border-[#d4f534]/40 hover:text-[#d4f534] transition-all cursor-default"
              >
                <Search className="w-3 h-3 inline mr-2 opacity-50" />
                {term}
              </div>
            ))}
          </div>

          {/* SEO features in horizontal cards */}
          <div
            className="grid md:grid-cols-4 gap-4"
          >
            {[
              { icon: Target, title: "Hyper-Local Targeting", desc: "We optimize for the specific way locals search in Vhembe", color: "#5dd9c1" },
              { icon: TrendingUp, title: "Google Maps Ranking", desc: "Dominate the local map pack results", color: "#d4f534" },
              { icon: Users, title: "High-Intent Traffic", desc: "Reach customers ready to buy, right when they search", color: "#b4a7d6" },
              { icon: Zap, title: "Fast Results", desc: "See ranking improvements within weeks, not months", color: "#5dd9c1" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3" style={{ color: item.color }} />
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// PACKAGES SECTION
// =============================
function PackagesSection({ isMobile, onPageChange }: { isMobile: boolean; onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div
         
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Packages Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5dd9c1] to-[#d4f534]">
              Venda Businesses
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible plans designed for every stage of growth. From startups in Sibasa to established brands in Thohoyandou CBD.
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
      </div>
    </section>
  );
}

// =============================
// SERVICE AREA CLOUD - Pill-based layout
// Unique to this page, other pages use grid cards
// =============================
function ServiceAreaCloud() {
  const areas = [
    { name: "Thohoyandou", primary: true },
    { name: "Sibasa", primary: true },
    { name: "Makwarela", primary: true },
    { name: "Shayandima", primary: false },
    { name: "Malamulele", primary: true },
    { name: "Louis Trichardt", primary: false },
    { name: "Musina", primary: false },
    { name: "Nandoni", primary: false },
    { name: "Tshilamba", primary: false },
    { name: "Levubu", primary: false },
    { name: "Elim", primary: false },
    { name: "Vuwani", primary: false },
    { name: "Nzhelele", primary: false },
    { name: "Dzanani", primary: false },
    { name: "Mutale", primary: false },
  ];

  return (
    <section className="px-4 sm:px-8 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <div
         
        >
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Proudly Serving the{" "}
              <span className="text-[#5dd9c1]">Entire Vhembe District</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From Thohoyandou CBD to the far reaches of the Limpopo province.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, idx) => (
              <span
                key={idx}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all cursor-default ${
                  area.primary
                    ? "bg-[#5dd9c1]/15 border-[#5dd9c1]/40 text-[#5dd9c1] hover:bg-[#5dd9c1]/25"
                    : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80"
                }`}
              >
                <MapPin className="w-3 h-3 inline mr-1.5" />
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// FAQS - Accordion style
// =============================
function FAQsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why does my Thohoyandou business need a professional website?",
      a: "Thohoyandou is rapidly digitizing. Customers are searching on their phones for local services, and if you're not online with a professional presence, you're invisible to the growing digital economy. A website positions your business competitively and opens up national and even international markets.",
    },
    {
      q: "How is your service different from cheap website builders?",
      a: "We don't use generic templates. Every website is custom-built from scratch, optimized for speed on African internet connections, and designed specifically for the Venda market. We bring enterprise-level development standards that were previously only available in major metros.",
    },
    {
      q: "Do you integrate WhatsApp and local payment methods?",
      a: "Absolutely. WhatsApp is central to how business is done in Venda, so we build WhatsApp ordering and support directly into every site. We also integrate local payment gateways and mobile money solutions that your customers actually use.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Depending on the package, most projects are delivered within 1-4 weeks. Our Essential Business package can be live in as little as 5-7 days, while custom enterprise builds take 3-4 weeks.",
    },
    {
      q: "Can you help my business rank on Google in Thohoyandou?",
      a: "Yes, local SEO for the Vhembe region is one of our core specialties. We optimize your site for the specific search terms locals use, set up your Google Business profile, and implement technical SEO that helps you dominate the local map pack results.",
    },
    {
      q: "Do you offer support after the website is launched?",
      a: "We're not a build-and-disappear agency. Every package includes post-launch support, and we offer ongoing maintenance plans to keep your site updated, secure, and performing at its best.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-20 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <div
         
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-balance">
            Questions About Web Design in{" "}
            <span className="text-[#5dd9c1]">Thohoyandou</span>
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
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
                
                  {openFaq === idx && (
                    <div
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// CTA SECTION - Unique gradient direction
// =============================
function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-8 py-20">
      <div
       
        className="max-w-4xl mx-auto"
      >
        <div className="relative p-10 md:p-16 rounded-3xl overflow-hidden border border-[#5dd9c1]/20">
          <div className="absolute inset-0 bg-gradient-to-tl from-[#5dd9c1]/10 via-transparent to-[#d4f534]/5" />
          <div className="relative text-center">
            <Heart className="w-10 h-10 text-[#5dd9c1] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-balance">
              Partner with the Leaders
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Don{"'"}t settle for a cheap, slow website. Your business deserves the best infrastructure available. Let{"'"}s build a digital presence that honours your hard work and secures your future in the Venda economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange?.("contact")}
                className="group bg-[#5dd9c1] text-black font-bold py-4 px-10 rounded-full inline-flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(93,217,193,0.3)] md:hover:scale-105"
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
      </div>
    </section>
  );
}
