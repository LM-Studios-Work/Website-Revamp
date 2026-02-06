"use client";

import { useRef } from "react";
import {
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
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { PageType } from "@/lib/navigation";
import type { AreaPageData } from "@/lib/area-data";
import { webPackages } from "@/lib/data";

import { PageLayout, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared/package-card";
import { FAQItem } from "@/components/shared/faq-item";

// ============================================
// ICON RESOLVER
// ============================================

const iconMap: Record<string, LucideIcon> = {
  MapPin, Globe, ArrowRight, CheckCircle, Building2, Users,
  TrendingUp, Smartphone, Search, Code, Zap, ShieldCheck,
  BarChart3, Store, Briefcase, Home: HomeIcon, Factory, Wrench,
};

function getIcon(name: string, className: string = "w-6 h-6") {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}

// ============================================
// MAIN COMPONENT
// ============================================

interface AreaWebDesignPageProps {
  data: AreaPageData;
  onPageChange?: (page: PageType) => void;
}

export default function AreaWebDesignPage({ data, onPageChange }: AreaWebDesignPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout containerRef={containerRef} currentPage={data.pageId} onPageChange={onPageChange}>
      <HeroSection data={data} onPageChange={onPageChange} />
      <TrustBar stats={data.trustBar} />
      <WhySection data={data} onPageChange={onPageChange} />
      <IndustrySection data={data} onPageChange={onPageChange} />
      <LocalSEOSection data={data} onPageChange={onPageChange} />
      <PackagesSection data={data} onPageChange={onPageChange} />
      <ServiceAreaSection data={data} />
      <WhyPartnerSection data={data} onPageChange={onPageChange} />
      <AutomationSection data={data} onPageChange={onPageChange} />
      <FAQsSection data={data} />
      <CTASection data={data} onPageChange={onPageChange} />
    </PageLayout>
  );
}

// ============================================
// HERO SECTION
// ============================================

function HeroSection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { hero, cityName, region } = data;

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
              <span className="text-white">{cityName}</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold select-none tracking-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", WebkitTextFillColor: "transparent" }}
            >
              {hero.outlineTitle}
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase">
              <MapPin className="w-3 h-3" /> {cityName}, {region}
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            {hero.mainTitle} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{hero.mainTitleHighlight}</span>
          </h2>
          <div className="text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground font-light border-l border-white/20 pl-6">
            <p>
              {hero.description.split(/(\*\*.*?\*\*)/).map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={i} className="text-white">{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
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

        <div className="flex-1 w-full hidden md:block">
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10" />
            {hero.heroImage ? (
              <img
                src={hero.heroImage}
                alt={hero.heroImageAlt || `${cityName} business district`}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                {getIcon(hero.heroImageFallbackIcon || "Building2", "w-24 h-24 text-[#d4f534]/30")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TRUST BAR
// ============================================

function TrustBar({ stats }: { stats: { value: string; label: string }[] }) {
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

// ============================================
// WHY SECTION
// ============================================

function WhySection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { whySection } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="mb-4">
            <PageBadge>{whySection.badge}</PageBadge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {whySection.title} <span className="text-[#d4f534]">{whySection.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">
            {whySection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whySection.items.map((item) => (
            <div
              key={item.title}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4f534]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4f534]/10 text-[#d4f534] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
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

// ============================================
// INDUSTRY SECTION
// ============================================

function IndustrySection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { industries } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {industries.title} <span className="text-[#5dd9c1]">{industries.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            {industries.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industries.items.map((industry) => (
            <div
              key={industry.title}
              className="relative p-6 md:p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
              >
                {getIcon(industry.iconName)}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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

// ============================================
// LOCAL SEO SECTION
// ============================================

function LocalSEOSection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { localSeo } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="mb-4">
              <PageBadge color="#c084fc">{localSeo.badge}</PageBadge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {localSeo.title} <span className="text-[#c084fc]">{localSeo.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {localSeo.description}
            </p>

            <div className="space-y-4 mb-8">
              {localSeo.features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#c084fc]/10 text-[#c084fc] flex items-center justify-center flex-shrink-0">
                    {getIcon(feature.iconName, "w-5 h-5")}
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

          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              {localSeo.image ? (
                <img
                  src={localSeo.image}
                  alt={localSeo.imageAlt || "SEO analytics dashboard"}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  {getIcon(localSeo.imageFallbackIcon || "Search", "w-24 h-24 text-[#c084fc]/30")}
                </div>
              )}
              {localSeo.testimonial && (
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                    <p className="text-sm font-medium text-white">
                      {"\""}{localSeo.testimonial}{"\""}
                    </p>
                    {localSeo.testimonialLabel && (
                      <p className="text-xs text-[#c084fc] mt-2">{localSeo.testimonialLabel}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PACKAGES SECTION
// ============================================

function PackagesSection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { packages } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-12 md:py-16 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {packages.title} <span className="text-[#d4f534]">{packages.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {packages.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
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

// ============================================
// SERVICE AREA SECTION
// ============================================

function ServiceAreaSection({ data }: { data: AreaPageData }) {
  const { serviceAreas } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {serviceAreas.title} <span className="text-[#5dd9c1]">{serviceAreas.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            {serviceAreas.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceAreas.zones.map((area) => (
            <div
              key={area.category}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${area.color}15`, color: area.color }}
                >
                  {getIcon(area.iconName, "w-5 h-5")}
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

// ============================================
// WHY PARTNER SECTION
// ============================================

function WhyPartnerSection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { whyPartner } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-black/40 z-10" />
              {whyPartner.image ? (
                <img
                  src={whyPartner.image}
                  alt={whyPartner.imageAlt || "Team collaboration"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  {getIcon(whyPartner.imageFallbackIcon || "Code", "w-24 h-24 text-[#d4f534]/30")}
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {whyPartner.title} <span className="text-[#d4f534]">{whyPartner.titleHighlight}</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {whyPartner.description}
            </p>

            <div className="space-y-4">
              {whyPartner.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-[#d4f534]/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#d4f534]/10 text-[#d4f534] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(benefit.iconName)}
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

// ============================================
// AUTOMATION SECTION
// ============================================

function AutomationSection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { automation } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="mb-4">
              <PageBadge color="#6ee2d1">{automation.badge}</PageBadge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {automation.title} <span className="text-[#6ee2d1]">{automation.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {automation.description}
            </p>

            <div className="space-y-4 mb-8">
              {automation.items.map((item) => (
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

          <div className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              {automation.image ? (
                <img
                  src={automation.image}
                  alt={automation.imageAlt || "App development"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  {getIcon(automation.imageFallbackIcon || "Smartphone", "w-24 h-24 text-[#6ee2d1]/30")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQS SECTION
// ============================================

function FAQsSection({ data }: { data: AreaPageData }) {
  const { faqs } = data;

  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <PageBadge>Common Questions</PageBadge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-4">
            {faqs.title} <span className="text-[#d4f534]">{faqs.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {faqs.description}
          </p>
        </div>

        <div className="space-y-8">
          {faqs.sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#d4f534] flex items-center gap-3">
                {getIcon(section.iconName)}
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

// ============================================
// CTA SECTION
// ============================================

function CTASection({ data, onPageChange }: { data: AreaPageData; onPageChange?: (page: PageType) => void }) {
  const { cta, cityName } = data;

  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#d4f534] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 tracking-tight text-balance">
              {cta.title}
            </h2>
            <p className="text-black/70 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              {cta.description}
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
          <strong className="text-white/70">web design company in {cityName}</strong>, {cta.seoText.split(", ").slice(1).join(", ")}
        </p>
      </div>
    </section>
  );
}
