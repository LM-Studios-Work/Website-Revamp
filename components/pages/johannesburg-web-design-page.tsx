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
  DollarSign,
  Clock,
  Rocket,
  Target,
  Award,
} from "lucide-react";


import type { PageType } from "@/lib/navigation";
import { webPackages } from "@/lib/data";

import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface JohannesburgWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function JohannesburgWebDesignPage({ onPageChange }: JohannesburgWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <PageLayout containerRef={containerRef} currentPage="johannesburg-web-design" onPageChange={onPageChange}>

      {/* HERO - Bold statement with image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4f534' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Left - Text */}
            <div className="flex flex-col gap-6">
              <div>
                <PageBadge icon={MapPin} text="Johannesburg, Gauteng" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
                The Best Web Design in{" "}
                <span className="text-[#d4f534]">Johannesburg</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
                Affordable, fast, and professional. You do not have to choose between a cheap, broken website and an overpriced agency. We are the middle ground that Joburg businesses have been waiting for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Right - Image placeholder */}
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=700"
                  alt="Johannesburg skyline showcasing the City of Gold business district"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4f534]/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#d4f534]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">4M+</p>
                    <p className="text-white/50 text-xs">Joburg Searches/Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE ARE THE BEST - 3 bold cards */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
           
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Why We Are the Best Web Designers in <span className="text-[#d4f534]">Joburg</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              In a city with a thousand agencies, we stand out for one reason: We deliver real value.
            </p>
          </div>

          <div
           
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: "We Are Faster",
                description: "We do not drag projects out for months. We build, test, and launch fast so you can start making money sooner.",
                accent: "#d4f534",
              },
              {
                icon: Search,
                title: "We Are Smarter",
                description: "We do not just make things look pretty. We build websites that rank on Google. Every site is optimized for SEO from day one.",
                accent: "#5dd9c1",
              },
              {
                icon: Code,
                title: "We Are Better",
                description: "We use modern code, not slow, outdated templates. Your site will load instantly and work perfectly on every mobile phone in Gauteng.",
                accent: "#b4a7d6",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 hover:border-white/10 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.accent}15` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.description}</p>
                <div
                  className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.accent }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFORDABLE - Side by side layout */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div
           
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Affordable Web Design{" "}
                <span className="text-[#5dd9c1]">Without the Compromise</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                How do we keep our prices affordable while delivering the best quality in Johannesburg? Simple. We cut the fat. We are a remote-first team based in Gauteng. We do not pay for fancy glass offices in Sandton or Rosebank, and we do not charge you for them either.
              </p>
              <div className="space-y-4">
                {[
                  "You pay for expert developer time, not our rent",
                  "Agency-level work at freelance-friendly rates",
                  "No hidden fees, no scope creep surprises",
                  "Transparent pricing from day one",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#5dd9c1] mt-0.5 shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50%", label: "Less Than Agency Rates", icon: DollarSign, color: "#d4f534" },
                { value: "2-4", label: "Week Delivery", icon: Clock, color: "#5dd9c1" },
                { value: "100%", label: "Mobile Optimized", icon: Smartphone, color: "#b4a7d6" },
                { value: "#1", label: "SEO From Day One", icon: Search, color: "#d4f534" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-white/10 transition-all"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: stat.color }} />
                  <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RANKING YOU #1 - Horizontal scroll feel */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
           
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Ranking You #1 in the <span className="text-[#d4f534]">City of Gold</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Having the best website in Johannesburg means nothing if nobody sees it. We specialize in getting you found.
            </p>
          </div>

          <div
           
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="relative bg-gradient-to-br from-[#d4f534]/10 to-transparent border border-[#d4f534]/20 rounded-3xl p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-[#d4f534]/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#d4f534]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dominate Google</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                We target high-volume keywords like &ldquo;Best Service in Johannesburg&rdquo; to put your business in front of customers right when they are ready to buy. Every page is built to capture search traffic.
              </p>
              <div className="flex flex-wrap gap-2">
                {["web design johannesburg", "best website company joburg", "affordable websites gauteng", "SEO johannesburg"].map((term, idx) => (
                  <span key={idx} className="text-xs bg-[#d4f534]/10 text-[#d4f534] px-3 py-1.5 rounded-full border border-[#d4f534]/20">
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-[#5dd9c1]/10 to-transparent border border-[#5dd9c1]/20 rounded-3xl p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-[#5dd9c1]/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#5dd9c1]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Visibility</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Whether you are in the CBD, Randburg, or the South, we optimize your site to capture the massive search traffic of the Joburg metro area. Your customers are already searching. We make sure they find you.
              </p>
              <div className="flex flex-wrap gap-2">
                {["joburg CBD businesses", "randburg web design", "roodepoort digital agency", "soweto online stores"].map((term, idx) => (
                  <span key={idx} className="text-xs bg-[#5dd9c1]/10 text-[#5dd9c1] px-3 py-1.5 rounded-full border border-[#5dd9c1]/20">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES FOR EVERY BUDGET */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div
           
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Web Design Services for <span className="text-[#d4f534]">Every Budget</span>
            </h2>
          </div>

          <div
           
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Rocket,
                title: "Small Business Packages",
                description: "Perfect for startups and tradesmen who need a professional presence fast. Get online, get found, get customers.",
                color: "#d4f534",
              },
              {
                icon: Building2,
                title: "E-Commerce Solutions",
                description: "Affordable online stores that let you sell products across the city and country. Fully integrated payment and inventory systems.",
                color: "#5dd9c1",
              },
              {
                icon: Code,
                title: "Custom Development",
                description: "Tailored solutions for businesses that need specific features without the massive enterprise cost. Built for your exact needs.",
                color: "#b4a7d6",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 hover:border-white/10 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Package Cards */}
          <div
           
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
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE - Grid of areas */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
           
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Proudly Serving the Entire{" "}
              <span className="text-[#d4f534]">Johannesburg Metro</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              From the CBD and Braamfontein to Randburg, Sandton, and the South. The best web design in Joburg is just a click away.
            </p>
          </div>

          <div
           
          >
            {[
              {
                region: "Central & CBD",
                color: "#d4f534",
                areas: ["Johannesburg CBD", "Braamfontein", "Hillbrow", "Marshalltown", "Newtown", "Maboneng"],
              },
              {
                region: "Northern Suburbs",
                color: "#5dd9c1",
                areas: ["Sandton", "Randburg", "Rosebank", "Fourways", "Hyde Park", "Parktown", "Linden"],
              },
              {
                region: "Southern & Western",
                color: "#b4a7d6",
                areas: ["Roodepoort", "Soweto", "Florida", "Mondeor", "Alberton", "Lenasia", "Eldorado Park"],
              },
              {
                region: "Eastern Suburbs",
                color: "#d4f534",
                areas: ["Bedfordview", "Edenvale", "Germiston", "Boksburg", "Kempton Park", "Benoni"],
              },
            ].map((group, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: group.color }}>
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.areas.map((area, areaIdx) => (
                    <span
                      key={areaIdx}
                      className="bg-white/[0.04] border border-white/[0.08] text-white/60 px-4 py-2 rounded-full text-sm hover:border-white/15 hover:text-white/80 transition-all cursor-default"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET THE BEST FOR LESS - CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <div
           
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Get the <span className="text-[#d4f534]">Best</span> for Less
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop wasting money on agencies that overcharge and underdeliver. Partner with the team that is changing the game in Johannesburg. Get a website that looks expensive, performs perfectly, and fits your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange?.("contact")}
                className="group bg-[#d4f534] text-black font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] md:hover:scale-105"
              >
                <span>Start Your Project Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onPageChange?.("web-design")}
                className="border border-white/20 text-white font-medium py-4 px-10 rounded-full transition-all hover:bg-white/5"
              >
                Explore Our Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div
           
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-balance">
              Frequently Asked Questions About{" "}
              <span className="text-[#d4f534]">Web Design in Johannesburg</span>
            </h2>
            {[
              {
                q: "How much does web design cost in Johannesburg?",
                a: "Our packages start from affordable small business rates and scale based on your needs. Unlike big Joburg agencies, we do not charge for overheads like fancy offices. You get premium quality at a fraction of the price.",
              },
              {
                q: "How long does it take to build a website in Joburg?",
                a: "Most of our Johannesburg projects are delivered within 2-4 weeks. We pride ourselves on fast turnarounds without cutting corners on quality.",
              },
              {
                q: "Do you offer SEO services for Johannesburg businesses?",
                a: "Every website we build comes with SEO baked in from day one. We target high-value Joburg search terms and optimize your site structure so Google can find and rank you for local searches.",
              },
              {
                q: "Can you help my small business compete online in Joburg?",
                a: "Absolutely. We specialize in helping small to medium businesses across the Johannesburg metro punch above their weight online with professional, high-performing websites that convert visitors into customers.",
              },
              {
                q: "Do you build e-commerce websites for Johannesburg businesses?",
                a: "Yes, we build fully integrated online stores with payment processing, inventory management, and shipping integration. Our e-commerce solutions are designed to help Joburg businesses sell locally and nationally.",
              },
              {
                q: "Which areas in Johannesburg do you serve?",
                a: "We serve the entire Johannesburg metro including the CBD, Braamfontein, Sandton, Randburg, Rosebank, Fourways, Roodepoort, Soweto, Bedfordview, and all surrounding areas. Being remote-first means we can work with anyone in Joburg and beyond.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-white/[0.06] last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left gap-4"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                  {openFaq === idx && (
                    <div
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/50 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
