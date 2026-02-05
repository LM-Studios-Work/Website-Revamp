"use client";

import { useState } from "react";
import {
  MapPin,
  ArrowRight,
  Users,
  TrendingUp,
  Building2,
  Award,
  Store,
  Zap,
  ShoppingBag,
  Globe,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type { PageType } from "@/lib/navigation";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import PageLayout from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared/package-card";

interface ThohoyandouWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

const industries = [
  {
    icon: Store,
    title: "Retail & Commerce",
    location: "CBD & Surrounding Areas",
    color: "#d4f534",
    description: "E-commerce solutions for local retailers and traders.",
  },
  {
    icon: Building2,
    title: "Service Providers",
    location: "Professional District",
    color: "#5dd9c1",
    description: "Professional websites for consultants, lawyers, and accountants.",
  },
  {
    icon: Globe,
    title: "Tourism & Hospitality",
    location: "Vhembe Region",
    color: "#b4a7d6",
    description: "Showcase Venda's natural beauty and cultural heritage.",
  },
];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for African internet speeds" },
  { icon: Award, title: "Award Winning Design", desc: "Modern, professional aesthetics" },
  { icon: Users, title: "Local Focus", desc: "Built for Venda market dynamics" },
  { icon: TrendingUp, title: "Growth Focused", desc: "Drive real business results" },
];

const faqs = [
  {
    q: "Why does Thohoyandou need modern web design?",
    a: "Thohoyandou is South Africa's fastest-growing economic hub. A professional website positions your business competitively and opens national markets.",
  },
  {
    q: "What's the cost for a professional Venda website?",
    a: "Our packages start at affordable rates tailored for local businesses. We offer flexible payment plans to suit your budget.",
  },
  {
    q: "How long does web design take?",
    a: "Most projects complete in 4-8 weeks depending on complexity. We keep you updated throughout the process.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes! We provide maintenance, updates, and ongoing support to keep your site running smoothly.",
  },
];

export default function ThohoyandouWebDesignPage({ onPageChange }: ThohoyandouWebDesignPageProps) {
  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  return (
    <PageLayout currentPage="thohoyandou-web-design" onPageChange={onPageChange}>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 py-20 md:py-32 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
              <button onClick={() => onPageChange?.("home")} className="hover:text-white transition-colors">
                Home
              </button>
              <span>/</span>
              <span className="text-white">Thohoyandou Web Design</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-sm font-bold">
              <MapPin className="w-4 h-4" /> Vhembe District, Limpopo
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-balance"
          >
            Premium Web Design for{" "}
            <span className="bg-gradient-to-r from-[#d4f534] via-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">
              Thohoyandou & Venda
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/70 mb-8 max-w-2xl text-pretty leading-relaxed"
          >
            Take your Venda business global. We create world-class websites that attract customers and drive growth in the region's booming economy.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onPageChange?.("contact")}
              className="group bg-[#d4f534] text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onPageChange?.("projects")}
              className="border border-white/30 text-white font-medium py-4 px-8 rounded-xl hover:bg-white/5 transition-colors"
            >
              See Our Work
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-8 py-16 border-y border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "100+", label: "Venda Businesses" },
            { value: "8", label: "Service Areas" },
            { value: "98%", label: "Satisfaction" },
            { value: "#1", label: "In The Region" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries Section */}
      <section className="px-4 sm:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Industry-Specific{" "}
            <span className="bg-gradient-to-r from-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">
              Web Solutions
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
        >
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${ind.color}20` }}
              >
                <ind.icon className="w-7 h-7" style={{ color: ind.color }} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{ind.title}</h3>
              <p className="text-sm text-white/60 mb-4">{ind.location}</p>
              <p className="text-white/70 leading-relaxed">{ind.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-8 py-20 bg-white/[0.01] border-y border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <feat.icon className="w-8 h-8 text-[#d4f534] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-white/70">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Packages Section */}
      <section className="px-4 sm:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Web Design{" "}
            <span className="bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Flexible plans designed for Venda businesses at every growth stage.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
        >
          {[
            {
              name: "Essential",
              price: "$499",
              description: "Perfect for startups",
              features: ["5 Pages", "Mobile Responsive", "Basic SEO", "Contact Form"],
              color: "#5dd9c1",
            },
            {
              name: "Professional",
              price: "$1,299",
              description: "Most popular",
              features: ["Unlimited Pages", "Advanced SEO", "Blog Platform", "Analytics", "Email Campaigns"],
              color: "#d4f534",
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For scaling businesses",
              features: ["Full Custom Build", "E-commerce", "Advanced Integrations", "Dedicated Support"],
              color: "#b4a7d6",
            },
          ].map((pkg, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <PackageCard
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                color={pkg.color}
                popular={pkg.popular}
                onSelect={() => onPageChange?.("contact")}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 sm:px-8 py-20 bg-white/[0.01] border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? undefined : idx)}
                  className="w-full p-6 text-left font-bold flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  {faq.q}
                  <ChevronRight
                    className="w-5 h-5 transition-transform"
                    style={{ transform: openFaq === idx ? "rotate(90deg)" : "none" }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-white/70 border-t border-white/10">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-white/20 bg-gradient-to-r from-[#d4f534]/10 via-[#5dd9c1]/10 to-[#b4a7d6]/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Grow Your{" "}
            <span className="bg-gradient-to-r from-[#d4f534] to-[#5dd9c1] bg-clip-text text-transparent">
              Venda Business?
            </span>
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-pretty">
            Let's build a digital presence that positions you ahead of competition and unlocks growth in the Vhembe economy.
          </p>
          <button
            onClick={() => onPageChange?.("contact")}
            className="group bg-[#d4f534] text-black font-bold py-4 px-10 rounded-xl inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <span>Start Your Project</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </PageLayout>
  );
}
