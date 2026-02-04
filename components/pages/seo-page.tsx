"use client";

import { motion } from "framer-motion";

// Centralized imports
import type { PageType } from "@/lib/navigation";
import { seoPackages, seoProcessSteps } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

// Shared components
import { PageLayout, Breadcrumb, PageBadge } from "@/components/shared/page-layout";
import { SEOPackageCard, ProcessCard } from "@/components/shared";

interface SeoPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function SeoPage({ onPageChange }: SeoPageProps) {
  return (
    <PageLayout solidBackground vignette>
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection onPageChange={onPageChange} />

        {/* SEO Types Info */}
        <SEOTypesSection />

        {/* On-Page & Off-Page Section */}
        <OptimizationSection />

        {/* Process Section */}
        <ProcessSection onPageChange={onPageChange} />

        {/* Packages Section */}
        <PackagesSection onPageChange={onPageChange} />

        {/* CTA Section */}
        <CTASection onPageChange={onPageChange} />
      </div>
    </PageLayout>
  );
}

// --- Sub-components ---

function HeroSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c084fc]/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumb 
          items={[
            { label: "Home", onClick: () => onPageChange?.("home") },
            { label: "Search Engine Optimisation" },
          ]}
          accentColor="#c084fc"
        />

        <div className="flex items-center gap-3 mb-6">
          <PageBadge color="#c084fc">Search Engine Optimisation</PageBadge>
        </div>
        
        <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-4xl">
          Your All-in-one Business Solution | Creative Digital Agency | Web Design Company
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1] tracking-tight">
            Get found by <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              customers who matter.
              <motion.svg 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 300 12" 
                fill="none"
              >
                <path d="M2 10C50 2 150 2 298 10" stroke="#c084fc" strokeWidth="4" strokeLinecap="round" />
              </motion.svg>
            </span>
          </h1>
        </motion.div>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-6">
          A beautiful website is useless if no one sees it. We use data-driven strategies to increase your visibility, drive organic traffic, and convert clicks into clients.
        </p>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mb-10">
          <h3 className="text-sm font-bold text-[#c084fc] mb-3 uppercase tracking-wider">What is SEO?</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Search Engine Optimisation is the process of affecting the visibility of a website or web page in a search engine&apos;s unpaid results—often referred to as &quot;natural,&quot; &quot;organic,&quot; or &quot;earned&quot; results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears in the search results list, the more visitors it will receive from the search engine&apos;s users.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onPageChange?.("contact")} 
            className="bg-[#c084fc] text-white font-bold py-4 px-8 rounded-full hover:bg-[#a960ec] hover:scale-105 transition-all shadow-[0_0_30px_rgba(192,132,252,0.3)]"
          >
            Contact us for a FREE Quote!
          </button>
          <button 
            onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} 
            className="bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all"
          >
            View Packages
          </button>
        </div>
      </div>

      {/* Decorative Abstract Graph */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[60%] opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 400 200" className="w-full h-full text-[#c084fc] drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
          <path d="M0,200 Q100,150 200,100 T400,0" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M0,200 Q100,180 200,160 T400,120" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
          <circle cx="200" cy="100" r="4" fill="#d4ff3f" />
          <circle cx="400" cy="0" r="4" fill="#d4ff3f" />
        </svg>
      </div>
    </div>
  );
}

function SEOTypesSection() {
  return (
    <div className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-4xl mx-auto">
          SEO may target different kinds of search, including{" "}
          <span className="text-[#c084fc]">image search</span>,{" "}
          <span className="text-[#a960ec]">local search</span>,{" "}
          <span className="text-[#9333ea]">video search</span>,{" "}
          academic search, news search and industry-specific vertical search engines.
        </p>
      </div>
    </div>
  );
}

function OptimizationSection() {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden border border-white/10 relative group">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" 
              alt="SEO Strategy"
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            On-Page & Off-Page <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Optimisation
            </span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              The goal of on-page and off-page optimisation is to generate a theme consistent with your targeted keywords. The search engine is a robot, not a human... and therefore, you must follow our proven process to educate the robot so that it brings your website up when your potential customers are searching for specific business-related keywords.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#c084fc] flex items-center justify-center text-[#c084fc]">
              <span className="font-bold text-sm">100%</span>
            </div>
            <div className="text-white font-medium">Results Driven Approach</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How we go to <span className="text-muted-foreground">work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Before beginning search engine optimisation (SEO), it is important to understand the process involved in an effective SEO campaign.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoProcessSteps.map((process, idx) => (
            <ProcessCard
              key={process.id}
              id={process.id}
              title={process.title}
              description={process.description}
              color={process.color}
              textColor={process.textColor}
              tag={process.tag}
              index={idx}
            />
          ))}
        </div>

        <div className="mt-16 p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">LINK BUILDING</h4>
            <p className="text-muted-foreground">
              In the field of SEO, link building describes actions aimed at increasing the number and quality of inbound links to a webpage.
            </p>
          </div>
          <button 
            onClick={() => onPageChange?.("contact")} 
            className="px-8 py-3 bg-[#c084fc] text-white font-bold rounded-full hover:bg-[#a960ec] transition-colors whitespace-nowrap"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

function PackagesSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div id="packages" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose your <span className="text-[#c084fc]">SEO Pack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing and clear timelines. Choose the package that fits your business goals and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seoPackages.map((pkg) => (
            <SEOPackageCard
              key={pkg.name}
              name={pkg.name}
              time={pkg.time}
              price={pkg.price}
              billing={pkg.billing}
              description={pkg.description}
              idealFor={pkg.idealFor}
              features={pkg.features}
              accent={pkg.accent}
              popular={pkg.popular}
              onSelect={() => onPageChange?.("contact")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c084fc]/10 blur-[100px] -mr-48 -mt-48" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" />
                Available for new projects
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Let&apos;s scale your <br />
                <span className="text-[#c084fc]">business.</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Contact us for a FREE quote! Our expert team is ready to help you reach the first page of search results.
              </p>
              
              <div className="space-y-4">
                {[
                  "Free Website SEO Audit",
                  "Keyword Research Strategy",
                  "Performance Monitoring",
                  "Monthly SEO Reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-muted-foreground">
                    <svg className="w-5 h-5 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:items-end">
              <button
                onClick={() => onPageChange?.("contact")}
                className="bg-[#c084fc] text-white font-bold py-5 px-10 rounded-full hover:bg-[#a960ec] hover:scale-105 transition-all text-lg shadow-[0_0_40px_rgba(192,132,252,0.3)]"
              >
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
