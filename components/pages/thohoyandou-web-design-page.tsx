"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  TrendingUp,
  Store,
  MapPin,
  Users,
  Award,
  Zap,
  Target,
  ChevronRight,
  Check,
  Globe,
  Search,
  ShoppingBag,
  Building2,
  Mountain,
  Landmark,
} from "lucide-react";
import PageLayout from "@/components/shared/page-layout";
import SectionWrapper from "@/components/shared/section-wrapper";
import { PackageCard } from "@/components/shared/package-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { PageType } from "@/lib/navigation";

interface ThohoyandouWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function ThohoyandouWebDesignPage({ onPageChange }: ThohoyandouWebDesignPageProps) {
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  const webPackages = [
    {
      id: "starter",
      name: "Venda Business Starter",
      price: "R4,999",
      description: "Perfect for local shops and services establishing their first online presence",
      features: [
        "5-page responsive website",
        "Mobile-optimized for local customers",
        "WhatsApp integration",
        "Basic SEO for Thohoyandou area",
        "Contact form & Google Maps",
        "1 month support",
      ],
      color: "#5dd9c1",
      popular: false,
      delivery: "7-10 days",
    },
    {
      id: "professional",
      name: "Vhembe Professional",
      price: "R12,999",
      description: "Advanced solution for tourism, retail, and growing businesses in the region",
      features: [
        "10-page custom design",
        "Advanced local SEO optimization",
        "Online booking/ordering system",
        "Gallery with high-res images",
        "Social media integration",
        "3 months support & updates",
        "Performance optimization",
      ],
      color: "#d4f534",
      popular: true,
      delivery: "14-21 days",
    },
    {
      id: "enterprise",
      name: "Venda Market Leader",
      price: "R24,999",
      description: "Premium e-commerce and business solutions that dominate the local market",
      features: [
        "Unlimited pages & features",
        "Full e-commerce capabilities",
        "Payment gateway integration",
        "Regional SEO domination",
        "Custom admin dashboard",
        "Multi-language support",
        "6 months premium support",
        "Analytics & reporting",
      ],
      color: "#b4a7d6",
      popular: false,
      delivery: "21-30 days",
    },
  ];

  const industries = [
    {
      icon: ShoppingBag,
      title: "Retail & Fashion",
      location: "Thavhani Mall & CBD",
      description: "High-speed e-commerce stores with local payment methods and WhatsApp ordering for retail businesses",
      color: "#5dd9c1",
    },
    {
      icon: Mountain,
      title: "Tourism & Hospitality",
      location: "Lake Fundudzi & Nandoni",
      description: "Stunning image-rich websites with direct booking engines for lodges and guesthouses",
      color: "#d4f534",
    },
    {
      icon: Building2,
      title: "Construction & Hardware",
      location: "Makwarela & Shayandima",
      description: "Professional catalogues showcasing inventory and capabilities for government tenders",
      color: "#b4a7d6",
    },
  ];

  const serviceAreas = [
    "Thohoyandou CBD",
    "Sibasa",
    "Makwarela",
    "Malamulele",
    "Shayandima",
    "Thavhani",
    "Louis Trichardt",
    "Univen Area",
  ];

  const whyBest = [
    {
      title: "Local Insight, World-Class Tech",
      description: "We combine deep understanding of Venda business culture with Sandton-level development standards",
      icon: Globe,
    },
    {
      title: "Dominate Local Search",
      description: "Specialized SEO for Vhembe region - appear at the top when customers search in your area",
      icon: Search,
    },
    {
      title: "Built for Your Market",
      description: "Custom solutions tailored to Thohoyandou's specific economy, not generic templates",
      icon: Target,
    },
    {
      title: "Results That Matter",
      description: "We measure success by your growth - more customers, more bookings, more revenue",
      icon: TrendingUp,
    },
  ];

  return (
    <PageLayout currentPage="thohoyandou-web-design" onPageChange={onPageChange}>
      {/* Hero Section - Split Design */}
      <SectionWrapper className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4f534]/10 border border-[#d4f534]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#d4f534]" />
              <span className="text-sm text-[#d4f534] font-medium">Leading the Vhembe Digital Revolution</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              The Best Websites in{" "}
              <span className="bg-gradient-to-r from-[#d4f534] via-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">
                Thohoyandou & Venda
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed text-pretty">
              From Thavhani City to Univen, the Vhembe district is rapidly digitizing. We bring Sandton-level development standards to the heart of Venda—building the highest quality websites that help local businesses dominate their market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onPageChange?.("contact")}
                className="group px-8 py-4 bg-[#d4f534] text-black font-bold rounded-2xl hover:bg-[#d4f534]/90 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,245,52,0.3)] flex items-center justify-center gap-2"
              >
                Start Your Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('packages');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-2xl hover:border-[#5dd9c1] hover:bg-[#5dd9c1]/10 transition-all"
              >
                View Packages
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#d4f534]/5 via-transparent to-[#5dd9c1]/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Store, label: "Retail", color: "#5dd9c1" },
                      { icon: Mountain, label: "Tourism", color: "#d4f534" },
                      { icon: Building2, label: "Construction", color: "#b4a7d6" },
                      { icon: Landmark, label: "Professional", color: "#5dd9c1" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group cursor-pointer"
                      >
                        <item.icon className="w-8 h-8 mb-2 mx-auto" style={{ color: item.color }} />
                        <p className="text-sm text-white/70 group-hover:text-white transition-colors">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats Bar - Horizontal Showcase */}
      <SectionWrapper className="py-12 border-y border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "100+", label: "Venda Businesses", icon: Users },
            { value: "8", label: "Service Areas", icon: MapPin },
            { value: "98%", label: "Client Satisfaction", icon: Award },
            { value: "#1", label: "In The Region", icon: TrendingUp },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#d4f534]" />
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Industry Solutions - Bento Grid Style */}
      <SectionWrapper className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            World-Class Design for{" "}
            <span className="bg-gradient-to-r from-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">
              Local Industry
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto text-pretty">
            We don't do basic templates. We build custom digital assets tailored to the specific economy of Thohoyandou.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${industry.color}20`, border: `2px solid ${industry.color}40` }}
              >
                <industry.icon className="w-8 h-8" style={{ color: industry.color }} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
              <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{industry.location}</span>
              </div>
              <p className="text-white/70 leading-relaxed">{industry.description}</p>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-6 h-6" style={{ color: industry.color }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Why We're The Best - Card Stack */}
      <SectionWrapper className="py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b4a7d6]/10 border border-[#b4a7d6]/20 mb-6">
            <Award className="w-4 h-4 text-[#b4a7d6]" />
            <span className="text-sm text-[#b4a7d6] font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why We Are the{" "}
            <span className="bg-gradient-to-r from-[#d4f534] via-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">
              Best in the Area
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We respect the culture, but we push the technology. We translate Venda's strong business relationships into digital dominance.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {whyBest.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#d4f534]/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4f534]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4f534]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#d4f534]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Service Areas - Pill Grid */}
      <SectionWrapper className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving the Entire{" "}
            <span className="text-[#5dd9c1]">Vhembe District</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From Thohoyandou to Malamulele, we're bringing world-class web development to every corner of Venda.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {serviceAreas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#5dd9c1] hover:bg-[#5dd9c1]/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5dd9c1] opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-white/80 group-hover:text-white transition-colors">{area}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Packages Section */}
      <SectionWrapper id="packages" className="py-20 bg-gradient-to-b from-white/[0.02] to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4f534]/10 border border-[#d4f534]/20 mb-6">
            <Zap className="w-4 h-4 text-[#d4f534]" />
            <span className="text-sm text-[#d4f534] font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Packages Built for{" "}
            <span className="text-[#d4f534]">Venda Businesses</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Affordable, powerful solutions designed for the Thohoyandou market. No hidden fees, just results.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
      </SectionWrapper>

      {/* Local SEO Section - Different Layout */}
      <SectionWrapper className="py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5dd9c1]/10 border border-[#5dd9c1]/20 mb-6">
              <Search className="w-4 h-4 text-[#5dd9c1]" />
              <span className="text-sm text-[#5dd9c1] font-medium">Local SEO Excellence</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Dominate{" "}
              <span className="text-[#5dd9c1]">Local Search</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              It's not enough to just have a website—you must be found. We specialize in local SEO for the Vhembe region, ensuring your business appears at the top when customers search in Thohoyandou, Louis Trichardt, or Malamulele.
            </p>

            <div className="space-y-4">
              {[
                "Optimized for how locals search",
                "Top rankings in your service area",
                "High-intent customer targeting",
                "Measurable traffic growth",
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#5dd9c1]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#5dd9c1]" />
                  </div>
                  <span className="text-white/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#5dd9c1]/10 to-[#b4a7d6]/10 border border-white/10 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <Search className="w-20 h-20 mx-auto text-[#5dd9c1]" />
                <div className="space-y-3">
                  <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60">Ranking for:</p>
                    <p className="font-bold text-[#5dd9c1]">"web design Thohoyandou"</p>
                  </div>
                  <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60">Ranking for:</p>
                    <p className="font-bold text-[#d4f534]">"Venda website developers"</p>
                  </div>
                  <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60">Ranking for:</p>
                    <p className="font-bold text-[#b4a7d6]">"Vhembe digital marketing"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Common Questions from{" "}
            <span className="text-[#b4a7d6]">Venda Businesses</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible value={openFaq} onValueChange={setOpenFaq}>
            {[
              {
                q: "Do you understand the Venda market?",
                a: "Absolutely. We combine local market knowledge with world-class technical expertise. We understand how business works in Thohoyandou, the importance of relationships, and how to translate that trust into the digital space while bringing Sandton-level development standards to Venda.",
              },
              {
                q: "How much does a website cost in Thohoyandou?",
                a: "Our packages range from R4,999 for a starter business website to R24,999 for a full e-commerce solution. We offer transparent pricing with no hidden fees, and payment plans are available for larger projects.",
              },
              {
                q: "Can you help my business rank on Google in Vhembe?",
                a: "Yes, this is our specialty. We optimize for local search terms specific to the Vhembe district, ensuring your business appears when potential customers search in Thohoyandou, Sibasa, Makwarela, Malamulele, and surrounding areas.",
              },
              {
                q: "What industries do you work with in Venda?",
                a: "We work with retail shops around Thavhani Mall, tourism businesses near Lake Fundudzi and Nandoni Dam, construction companies in Makwarela and Shayandima, professional services, and any business looking to establish a strong digital presence in the Vhembe region.",
              },
              {
                q: "How long does it take to build a website?",
                a: "Our starter packages take 7-10 days, professional websites 14-21 days, and enterprise solutions 21-30 days. We work efficiently without compromising on quality, and keep you updated throughout the entire process.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment options for all our packages. We understand local business cash flow and work with you to structure payments that make sense for your business.",
              },
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#d4f534] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(212,245,52,0.1) 0%, rgba(93,217,193,0.1) 50%, rgba(180,167,214,0.1) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Partner with the{" "}
              <span className="bg-gradient-to-r from-[#d4f534] via-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto text-pretty">
              Don't settle for a cheap, slow website. Your business deserves the best infrastructure available. Let's build a digital presence that honours your hard work and secures your future in the Venda economy.
            </p>
            <button
              onClick={() => onPageChange?.("contact")}
              className="group px-10 py-5 bg-[#d4f534] text-black font-bold text-lg rounded-2xl hover:bg-[#d4f534]/90 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,245,52,0.4)] inline-flex items-center gap-3"
            >
              Start Your Venda Success Story
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-6 text-sm text-white/50">
              Proudly serving Thohoyandou, Sibasa, Makwarela, Malamulele, and the entire Vhembe District
            </p>
          </div>
        </motion.div>
      </SectionWrapper>
    </PageLayout>
  );
}
