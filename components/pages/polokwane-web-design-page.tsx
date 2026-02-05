"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Target,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Briefcase,
  Search,
  Award,
  Shield,
  Truck,
  Users,
  ChevronDown,
} from "lucide-react";
import type { PageType } from "@/lib/navigation";
import { PageLayout, PageBadge } from "@/components/shared";
import { PackageCard } from "@/components/shared/package-card";
import { webPackages } from "@/lib/data";
import { useMobile } from "@/hooks/use-mobile";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PolokwaneWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function PolokwaneWebDesignPage({
  onPageChange,
}: PolokwaneWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const isMobile = useMobile();

  return (
    <PageLayout
      containerRef={containerRef}
      currentPage="polokwane-web-design"
      onPageChange={onPageChange}
    >
      {/* Hero Section - Asymmetric Split with Overlay Badge */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4f534]/5 via-transparent to-[#b4a7d6]/5" />
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PageBadge
                location="Polokwane"
                accentColor="#d4f534"
                icon={<MapPin className="w-4 h-4" />}
              />

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The Digital{" "}
                <span className="text-[#d4f534]">Powerhouse</span> of the North
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Polokwane is expanding faster than any other city in the region. As the gateway to Africa and the administrative heart of Limpopo, the "City of Stars" demands a new standard of business.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#d4f534]" />
                  <span className="text-white/80">Tender-Ready Websites</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#d4f534]" />
                  <span className="text-white/80">Logistics Platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#d4f534]" />
                  <span className="text-white/80">Premium Brands</span>
                </div>
              </div>

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

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4f534]/30 to-transparent mix-blend-overlay z-10" />
                <img
                  src="/placeholder.svg?height=720&width=640"
                  alt="Polokwane cityscape showing the growing CBD and government district"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-xl border border-[#d4f534]/30 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4f534]/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#d4f534]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-sm text-white/60">Limpopo Projects</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure Statement Strip */}
      <SectionWrapper className="py-16 bg-gradient-to-r from-[#d4f534]/10 via-transparent to-[#b4a7d6]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              World-Class Infrastructure for Limpopo Businesses
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed">
              You don't need to outsource to Sandton to get Sandton-quality code. We bring that standard to you. We understand that Polokwane is a unique hybrid economy—part corporate capital, part industrial giant. We build digital assets that respect this duality.
            </motion.p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Sector-Specific Strategies - Vertical Card Stack */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Sector-Specific Digital <span className="text-[#d4f534]">Strategies</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              Tailored solutions for Polokwane's unique business landscape
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sector 1: Government & Tenders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#d4f534]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#d4f534]/20 flex items-center justify-center mb-6 group-hover:bg-[#d4f534]/30 transition-colors">
                <Shield className="w-7 h-7 text-[#d4f534]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Government & Tender Readiness</h3>
              <p className="text-white/60 mb-4 text-sm">CBD & Civic Centre</p>
              <p className="text-white/70 leading-relaxed mb-6">
                In Polokwane, compliance is king. We build "Tender-Ready" digital profiles—websites that act as a digital capability statement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#d4f534] shrink-0 mt-0.5" />
                  <span>Certifications & BEE Status Display</span>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#d4f534] shrink-0 mt-0.5" />
                  <span>Enterprise-Grade Security Protocols</span>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#d4f534] shrink-0 mt-0.5" />
                  <span>Project Portfolio Showcases</span>
                </li>
              </ul>
            </motion.div>

            {/* Sector 2: Logistics & Industry */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#5dd9c1]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#5dd9c1]/20 flex items-center justify-center mb-6 group-hover:bg-[#5dd9c1]/30 transition-colors">
                <Truck className="w-7 h-7 text-[#5dd9c1]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Logistics & Heavy Industry</h3>
              <p className="text-white/60 mb-4 text-sm">Annadale & Ladanna</p>
              <p className="text-white/70 leading-relaxed mb-6">
                Polokwane is the pivot point for the N1 route. We build functional, tool-heavy websites for transport and supply companies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#5dd9c1] shrink-0 mt-0.5" />
                  <span>Fleet Management Integration</span>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#5dd9c1] shrink-0 mt-0.5" />
                  <span>B2B Lead Generation Systems</span>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#5dd9c1] shrink-0 mt-0.5" />
                  <span>Tracking Portals & Service Catalogs</span>
                </li>
              </ul>
            </motion.div>

            {/* Sector 3: Lifestyle & Professional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#b4a7d6]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#b4a7d6]/20 flex items-center justify-center mb-6 group-hover:bg-[#b4a7d6]/30 transition-colors">
                <Users className="w-7 h-7 text-[#b4a7d6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lifestyle & Professional</h3>
              <p className="text-white/60 mb-4 text-sm">Bendor, Welgelegen, Flora Park</p>
              <p className="text-white/70 leading-relaxed mb-6">
                The residential growth in the East is exploding. We create visual identities that rival the best firms in Pretoria.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#b4a7d6] shrink-0 mt-0.5" />
                  <span>Mobile-First Architecture (90% Users)</span>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#b4a7d6] shrink-0 mt-0.5" />
                  <span>Premium Brand Positioning</span>
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#b4a7d6] shrink-0 mt-0.5" />
                  <span>Instant 4G Network Load Times</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Regional SEO - Split Layout */}
      <SectionWrapper className="py-24 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-[#d4f534]/10 border border-[#d4f534]/30 rounded-full px-4 py-2 mb-6">
                  <Search className="w-4 h-4 text-[#d4f534]" />
                  <span className="text-sm font-medium text-[#d4f534]">Regional Domination</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Own the Entire <span className="text-[#d4f534]">Limpopo Corridor</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Polokwane is not just a city; it is a search magnet. People in Mokopane, Tzaneen, and Lebowakgomo look to Polokwane for solutions. If your SEO is weak, you remain invisible to this regional traffic.
                </p>
                <button
                  onClick={() => onPageChange?.("seo")}
                  className="text-[#d4f534] font-medium flex items-center gap-2 group"
                >
                  Learn About Our SEO Strategy
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { term: "Industrial Suppliers Limpopo", searches: "2.4K/mo" },
                  { term: "Polokwane Business Directory", searches: "1.8K/mo" },
                  { term: "Tender Services Northern Province", searches: "3.1K/mo" },
                  { term: "Medical Specialists Polokwane", searches: "1.2K/mo" },
                  { term: "Logistics Companies N1 Corridor", searches: "980/mo" },
                  { term: "Professional Services Bendor", searches: "760/mo" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#d4f534]/30 transition-colors"
                  >
                    <div className="text-white/90 font-medium mb-1 text-sm">{item.term}</div>
                    <div className="text-[#d4f534] text-xs">{item.searches}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Service Areas - Grouped Pills */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              Serving All of <span className="text-[#d4f534]">Polokwane</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60">
              From the CBD to the suburbs—we deliver excellence across the capital
            </motion.p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Central & Government */}
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-4">Central & Government District</h3>
              <div className="flex flex-wrap gap-3">
                {["CBD", "Civic Centre", "Ster Park", "Mankweng"].map((area) => (
                  <span
                    key={area}
                    className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 hover:border-[#d4f534]/50 hover:text-[#d4f534] transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Eastern Suburbs */}
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-4">Eastern Growth Corridor</h3>
              <div className="flex flex-wrap gap-3">
                {["Bendor", "Welgelegen", "Flora Park", "Faunapark", "Ivypark"].map((area) => (
                  <span
                    key={area}
                    className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 hover:border-[#5dd9c1]/50 hover:text-[#5dd9c1] transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Industrial */}
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-4">Industrial & Logistics</h3>
              <div className="flex flex-wrap gap-3">
                {["Annadale", "Ladanna", "Thornhill", "Westenburg"].map((area) => (
                  <span
                    key={area}
                    className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 hover:border-[#b4a7d6]/50 hover:text-[#b4a7d6] transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Packages Section */}
      <SectionWrapper className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Premium Web Design <span className="text-[#d4f534]">Packages</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              Enterprise-grade solutions built for Limpopo's capital
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
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
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-[#d4f534]">Questions</span>
            </motion.h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-xl px-6 bg-white/[0.02]">
                <AccordionTrigger className="text-left hover:text-[#d4f534] transition-colors">
                  Do you understand the government tender process in Polokwane?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  Absolutely. We've worked with suppliers, contractors, and service providers who regularly bid for municipal and provincial tenders. We know how important it is to present a professional, compliant digital presence that meets procurement standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-white/10 rounded-xl px-6 bg-white/[0.02]">
                <AccordionTrigger className="text-left hover:text-[#d4f534] transition-colors">
                  Can you build sites for logistics and transport companies?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  Yes. We specialize in building functional B2B platforms with service catalogs, tracking portals, and lead generation systems designed for the transport and logistics sector that drives through the N1 corridor.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-white/10 rounded-xl px-6 bg-white/[0.02]">
                <AccordionTrigger className="text-left hover:text-[#d4f534] transition-colors">
                  Will my website rank in regional searches beyond Polokwane?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  That's our specialty. We optimize your site to capture regional traffic from Mokopane, Tzaneen, Lebowakgomo, and the broader Limpopo region. We make sure you appear when people search for solutions across the province.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-white/10 rounded-xl px-6 bg-white/[0.02]">
                <AccordionTrigger className="text-left hover:text-[#d4f534] transition-colors">
                  Do I need to come to your office, or can we work remotely?
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  We offer both options. We understand that business in Polokwane is often done face-to-face, so we're happy to meet in person. But we also have secure remote workflows if that's more convenient for you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="py-24 bg-gradient-to-br from-[#d4f534]/10 via-transparent to-[#b4a7d6]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Gateway to <span className="text-[#d4f534]">Growth</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              The market is moving north. Make sure your business is leading the charge. Let's build a digital platform that secures your legacy in Limpopo's capital.
            </p>
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-[#d4f534] text-black font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 transition-all active:scale-95 shadow-[0_0_50px_rgba(212,245,52,0.4)] md:hover:scale-105"
            >
              <span>Start Your Project Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
