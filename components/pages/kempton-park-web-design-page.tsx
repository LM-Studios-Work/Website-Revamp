"use client";

import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
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
  Plane,
  Package,
  ShoppingCart,
  Wrench,
} from "lucide-react";


import type { PageType } from "@/lib/navigation";
import { webPackages } from "@/lib/data";

import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface KemptonParkWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function KemptonParkWebDesignPage({ onPageChange }: KemptonParkWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [openFaq, setOpenFaq] = useState<number | undefined>(undefined);

  const faqs = [
    { q: "How much does a website cost in Kempton Park?", a: "Our packages start from R4,999 for a professional small business website. We offer solutions for every budget, from startups in Glen Marais to large industrial firms in Isando. Every package includes mobile-responsive design, SEO basics, and hosting setup." },
    { q: "Do you build websites for logistics and industrial companies?", a: "Absolutely. Kempton Park is a logistics powerhouse and we've built sites for freight companies, warehousing firms, and manufacturers in Spartan, Jet Park, and Isando. We understand the B2B sales cycle and build sites that generate qualified leads." },
    { q: "Can you help my Kempton Park business rank on Google?", a: "Yes. We specialise in local SEO for the East Rand. We optimise your site for searches like 'best plumber in Kempton Park' or 'logistics company near OR Tambo.' We also set up and optimise your Google Business Profile for Maps visibility." },
    { q: "How long does it take to build a website?", a: "Most small business websites are live within 7-14 business days. Larger e-commerce or corporate sites take 3-4 weeks. We keep you updated throughout the process and never sacrifice quality for speed." },
    { q: "Do you offer e-commerce for Kempton Park businesses?", a: "Yes. We build secure online stores that let you sell products across Gauteng and beyond. Whether you're a retailer near Festival Mall or a wholesaler in Isando, we'll get your products online with proper payment gateway integration." },
  ];

  const eastRandAreas = [
    { zone: "Central", areas: ["Kempton Park CBD", "Glen Marais", "Aston Manor", "Birch Acres"] },
    { zone: "Industrial", areas: ["Spartan", "Isando", "Jet Park", "Meadowdale"] },
    { zone: "Residential", areas: ["Bonaero Park", "Bredell", "Pomona", "Norkem Park"] },
    { zone: "Greater East Rand", areas: ["Edenvale", "Bedfordview", "Boksburg", "Benoni"] },
  ];

  return (
    <PageLayout containerRef={containerRef} currentPage="kempton-park-web-design" onPageChange={onPageChange}>

      {/* HERO - Diagonal split with image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[#d4f534]/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
            >
              <div>
                <PageBadge icon={<Plane className="w-3.5 h-3.5" />} text="East Rand's Digital Partner" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 leading-[1.1] text-balance">
                The <span className="text-[#d4f534]">Best</span> Web Design in{" "}
                <span className="text-[#d4f534]">Kempton Park</span>
              </h1>
              <p className="text-lg text-white/60 mt-6 max-w-lg leading-relaxed">
                You don't need to look outside of the East Rand for world-class digital services. LM Studios is Kempton Park's leading web design team -- fast, professional, and built to help local businesses grow.
              </p>
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
                  See Our Work
                </button>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/placeholder.svg?height=520&width=640"
                  alt="Kempton Park business district near OR Tambo International Airport"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black/90 border border-[#d4f534]/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4f534]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#d4f534]" />
                  </div>
                  <div>
                    <p className="text-[#d4f534] font-bold text-lg">100+</p>
                    <p className="text-white/50 text-xs">East Rand Sites Built</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP - Horizontal stats */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { value: "7-Day", label: "Turnaround" },
              { value: "100%", label: "Mobile First" },
              { value: "Local", label: "SEO Included" },
              { value: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="py-8 px-4 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#d4f534]">{stat.value}</p>
                <p className="text-white/40 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KEMPTON - Offset cards layout */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
           
          >
            <div className="max-w-2xl mb-16">
              <span className="text-[#d4f534] text-sm font-semibold tracking-wider uppercase">Why LM Studios</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-balance">
                The Top Choice in Kempton Park
              </h2>
              <p className="text-white/50 mt-4 leading-relaxed">
                From the busy retail hubs of Festival Mall to the quiet residential streets of Aston Manor, we know what local customers are looking for.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Local Experts",
                  desc: "We don't just build websites; we build business tools for Kempton companies. We know the difference between a site for a guest house in Bonaero Park and a logistics firm in Spartan.",
                  accent: "#d4f534",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Affordable Excellence",
                  desc: "Every business in Kempton deserves a great website. LM Studios offers the best rates in the city without cutting corners. Premium sites that fit your budget.",
                  accent: "#5dd9c1",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Built to Rank",
                  desc: "Our websites are built to rank. We want you to be the first business people see when they search for services in Kempton Park.",
                  accent: "#b4a7d6",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                  style={{ marginTop: isMobile ? 0 : idx % 2 !== 0 ? 32 : 0 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-white/50 leading-relaxed">{card.desc}</p>
                  <div
                    className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: card.accent }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SOLUTIONS - Alternating rows */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div
           
          >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#5dd9c1] text-sm font-semibold tracking-wider uppercase">Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-balance">
                Affordable Solutions for Every Kempton Business
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Store className="w-7 h-7" />,
                  title: "Small Business Websites",
                  desc: "Perfect for plumbers, electricians, and service providers in Glen Marais and Norkem Park. Get online quickly with a site that looks great on mobile and converts visitors into calls.",
                  tag: "From R4,999",
                  color: "#d4f534",
                },
                {
                  icon: <Building2 className="w-7 h-7" />,
                  title: "Corporate & Industrial",
                  desc: "For the heavy hitters in Isando and Jet Park. We build robust, professional websites that showcase your capabilities and help you secure big contracts.",
                  tag: "Custom Quote",
                  color: "#5dd9c1",
                },
                {
                  icon: <ShoppingCart className="w-7 h-7" />,
                  title: "E-Commerce Stores",
                  desc: "Want to sell products to the whole of Gauteng? We build secure, easy-to-use online shops that let you sell 24/7 with proper payment gateway integration.",
                  tag: "Full Setup",
                  color: "#b4a7d6",
                },
              ].map((solution, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col md:flex-row items-start gap-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 transition-all hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${solution.color}15`, color: solution.color }}
                  >
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-xl font-bold">{solution.title}</h3>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full w-fit"
                        style={{ backgroundColor: `${solution.color}15`, color: solution.color }}
                      >
                        {solution.tag}
                      </span>
                    </div>
                    <p className="text-white/50 leading-relaxed">{solution.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors shrink-0 hidden md:block mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO SECTION - Side by side */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
             
            >
              <div>
                <span className="text-[#b4a7d6] text-sm font-semibold tracking-wider uppercase">Local SEO</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-balance">
                  Dominate the East Rand Search Results
                </h2>
                <p className="text-white/50 mt-4 leading-relaxed">
                  Being the best means being visible. We specialise in Kempton Park SEO so when someone searches for your service, your business pops up first.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { title: "Local Ranking", desc: "When someone searches 'Best [Your Service] in Kempton Park,' we make sure your business appears first." },
                  { title: "Google Maps", desc: "We optimise your map listing to capture the huge volume of local traffic searching for businesses near the airport and CBD." },
                  { title: "Content Strategy", desc: "Targeted content that positions you as the authority in your industry across the East Rand." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-[#b4a7d6] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-white/40 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-3"
            >
              {[
                "web design kempton park",
                "best website company east rand",
                "kempton park seo services",
                "affordable websites spartan",
                "e-commerce kempton park",
                "google ranking OR tambo area",
                "business website glen marais",
                "web developer isando",
              ].map((term, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white/50 hover:border-[#b4a7d6]/30 hover:text-[#b4a7d6] transition-all cursor-default"
                >
                  <Search className="w-3.5 h-3.5 mb-2 text-[#b4a7d6]/50" />
                  <span>{`"${term}"`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div
           
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#d4f534] text-sm font-semibold tracking-wider uppercase">Packages</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Get the Best for Less
              </h2>
              <p className="text-white/50 mt-4 leading-relaxed">
                {"Don't settle for average. Partner with the web design team that is setting the standard in Kempton Park."}
              </p>
            </div>
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

      {/* SERVICE AREAS - Horizontal scroll cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
           
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#d4f534] text-sm font-semibold tracking-wider uppercase">Coverage</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Proudly Serving the East Rand
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {eastRandAreas.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-sm font-semibold text-[#d4f534] uppercase tracking-wider mb-4">{group.zone}</h3>
                  <div className="space-y-2">
                    {group.areas.map((area, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-white/60 text-sm">
                        <MapPin className="w-3 h-3 text-white/30" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="bg-gradient-to-br from-[#d4f534]/10 to-transparent border border-[#d4f534]/20 rounded-3xl p-12 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Dominate the East Rand?
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
              {"Don't settle for average. Partner with the web design team that is setting the standard in Kempton Park. Fast, affordable, and undeniably the best in the area."}
            </p>
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-[#d4f534] text-black font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 transition-all active:scale-95 md:hover:scale-105"
            >
              <span>Start Your Project Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-3xl mx-auto">
          <div
           
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-white/50 mt-3">Common questions from Kempton Park businesses</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? undefined : idx)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                    {openFaq === idx && (
                      <div
                      >
                        <p className="px-5 pb-5 text-white/50 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
