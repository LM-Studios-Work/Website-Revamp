"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageType } from "@/lib/navigation";

interface SeoPageProps {
  onPageChange?: (page: PageType) => void;
}

const packages = [
  {
    name: "Local Kickstart",
    time: "25h min.",
    price: "R3,499",
    billing: "once-off",
    description: "Essential setup for local businesses to get found on Google Maps and local search.",
    idealFor: "Small local shops, plumbers, salons",
    features: [
      "Google Business Profile Optimization",
      "Technical Site Audit & Fixes",
      "Local Keyword Research",
      "Meta Title & Description Setup",
      "Google Analytics & Console Setup"
    ],
    accent: "border-[#c084fc]/20",
    popular: false,
  },
  {
    name: "Growth Engine",
    time: "60h min.",
    price: "R4,500",
    billing: "per month",
    description: "A monthly campaign designed to increase rankings and organic traffic consistently.",
    idealFor: "Growing businesses, service providers",
    features: [
      "Everything in Kickstart",
      "2x High-Quality Blog Posts/mo",
      "On-Page Content Optimization",
      "Monthly Backlink Strategy",
      "Keyword Tracking Dashboard"
    ],
    accent: "border-[#c084fc]/50 bg-gradient-to-br from-[#c084fc]/10 to-transparent",
    popular: true,
  },
  {
    name: "Market Leader",
    time: "100h min.",
    price: "R8,500",
    billing: "per month",
    description: "Aggressive SEO strategy to dominate high-competition keywords and industry leaders.",
    idealFor: "E-commerce, National brands",
    features: [
      "4x High-Quality Blog Posts/mo",
      "Advanced Content Strategy",
      "High-Authority Link Building",
      "Dedicated SEO Manager",
      "Quarterly Strategy Review"
    ],
    accent: "border-[#a960ec]/20",
    popular: false,
  },
];

const processes = [
  {
    id: 1,
    title: "Analyse your website",
    description: "We first analyse your website, followed by a step-by-step plan to have the website communicate keywords more effectively to search engines.",
    color: "bg-[#c084fc]",
    textColor: "text-black"
  },
  {
    id: 2,
    title: "RESEARCH",
    description: "Keyword density tells you how often a search term appears in a text in relation to the total number of words it contains.",
    color: "bg-[#a960ec]",
    textColor: "text-black",
    tag: "Priority"
  },
  {
    id: 3,
    title: "ONSITE OPTIMISATION",
    description: "Optimisation refers to all measures that can be taken directly within the website in order to improve its position.",
    color: "bg-[#9333ea]",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "REPORTING AND ANALYSIS",
    description: "Our SEO review consists of several factors like a content, linking structure, social media efforts, and its trust on the internet.",
    color: "bg-[#7c3aed]",
    textColor: "text-white"
  }
];

export default function SeoPage({ onPageChange }: SeoPageProps) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#d4ff3f] selection:text-black">
      
      {/* =========================================
          HERO SECTION
          ========================================= */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background radial gradient for depth - purple accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c084fc]/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
            <button onClick={() => onPageChange?.("home")} className="hover:text-[#c084fc] transition-colors">Home</button>
            <span>/</span>
            <span className="text-white">Search Engine Optimisation</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 text-[#c084fc] text-xs font-bold uppercase tracking-widest">
              Search Engine Optimization
            </span>
          </div>
          
          <p className="text-sm md:text-base text-gray-400 mb-6 max-w-4xl">
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

          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-6">
            A beautiful website is useless if no one sees it. We use data-driven strategies to increase your visibility, drive organic traffic, and convert clicks into clients.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mb-10">
            <h3 className="text-sm font-bold text-[#c084fc] mb-3 uppercase tracking-wider">What is SEO?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Search Engine Optimisation is the process of affecting the visibility of a website or web page in a search engine&apos;s unpaid results—often referred to as &quot;natural,&quot; &quot;organic,&quot; or &quot;earned&quot; results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears in the search results list, the more visitors it will receive from the search engine&apos;s users. SEO may target different kinds of search, including image search, local search, video search, academic search, news search and industry-specific vertical search engines.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => onPageChange?.("contact")} className="bg-[#c084fc] text-white font-bold py-4 px-8 rounded-full hover:bg-[#a960ec] hover:scale-105 transition-all shadow-[0_0_30px_rgba(192,132,252,0.3)]">
              Contact us for a FREE Quote!
            </button>
            <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth'})} className="bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all">
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

      {/* =========================================
          SEO TYPES INFO
          ========================================= */}
      <div className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/70 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            SEO may target different kinds of search, including <span className="text-[#c084fc]">image search</span>, <span className="text-[#a960ec]">local search</span>, <span className="text-[#9333ea]">video search</span>, academic search, news search and industry-specific vertical search engines.
          </p>
        </div>
      </div>

      {/* =========================================
          ON-PAGE & OFF-PAGE SECTION
          ========================================= */}
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
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                The goal of on page and off page optimisation is to generate a theme consistent with your targeted keywords. The search engine is a robot, not a human… and therefore, you must follow our proven process to educate the robot so that it brings your website up when your potential customers are searching for specific business related keywords.
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

      {/* =========================================
          PROCESS SECTION
          ========================================= */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How we go to <span className="text-white/40">work</span>
              </h2>
              <p className="text-white/60 text-lg">
                Before beginning a search engine optimisation (SEO), it is important to understand the process involved in an effective SEO campaign.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, idx) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${process.color} ${process.textColor} ${process.border || ""} p-8 rounded-[32px] min-h-[400px] flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center font-bold">
                      {process.id}
                    </div>
                    {process.tag && (
                      <div className="px-4 py-1.5 rounded-full border border-black text-xs font-bold uppercase tracking-wider">
                        {process.tag}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{process.title}</h3>
                  <p className="opacity-80 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">LINK BUILDING</h4>
              <p className="text-white/60">
                In the field of SEO, link building describes actions aimed at increasing the number and quality of inbound links to a web-page.
              </p>
            </div>
            <button onClick={() => onPageChange?.("contact")} className="px-8 py-3 bg-[#c084fc] text-white font-bold rounded-full hover:bg-[#a960ec] transition-colors whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          PACKAGES SECTION
          ========================================= */}
      <div id="packages" className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose your <span className="text-[#c084fc]">SEO Pack</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Transparent pricing and clear timelines. Choose the package that fits your business goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`relative p-8 rounded-[40px] border ${pkg.accent} backdrop-blur-sm flex flex-col h-full group hover:scale-[1.02] transition-transform`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c084fc] text-white text-xs font-bold rounded-full uppercase tracking-tighter">
                    Most Popular
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                    <span className="text-white/40 text-sm border border-white/10 rounded-full px-3 py-1">{pkg.time}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold text-white mb-2">{pkg.price}</div>
                  <div className="text-white/40 text-sm mb-3">/ {pkg.billing}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{pkg.description}</p>
                </div>

                <div className="mb-6 p-3 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-xs font-medium text-gray-300">Best for: {pkg.idealFor}</span>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-white/70 text-sm">
                      <svg className="w-4 h-4 text-[#c084fc] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => onPageChange?.("contact")}
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    pkg.popular ? 'bg-[#c084fc] text-white hover:bg-[#a960ec]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          CTA SECTION
          ========================================= */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c084fc]/10 blur-[100px] -mr-48 -mt-48" />
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" />
                  Available for new projects
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Let&apos;s scale your <br />
                  <span className="text-[#c084fc]">business.</span>
                </h2>
                
                <p className="text-white/60 text-lg mb-12 max-w-md">
                  Contact us for a FREE quote! Our expert team is ready to help you reach the first page of search results.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Free Website SEO Audit",
                    "Keyword Research Strategy",
                    "Performance Monitoring",
                    "Monthly SEO Reporting"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/80">
                      <svg className="w-5 h-5 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-white/40 uppercase text-xs tracking-widest block mb-2">Total Estimated Impact</span>
                      <div className="text-5xl font-bold text-white tracking-tighter">10X Traffic</div>
                    </div>
                    <div className="p-4 bg-[#c084fc] rounded-2xl text-white">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-4 border-b border-white/5">
                      <span className="text-white/60">Search Visibility</span>
                      <span className="text-white font-bold">+240%</span>
                    </div>
                    <div className="flex justify-between py-4 border-b border-white/5">
                      <span className="text-white/60">Organic Keywords</span>
                      <span className="text-white font-bold">Top 10</span>
                    </div>
                  </div>

                  <button onClick={() => onPageChange?.("contact")} className="w-full py-5 bg-[#c084fc] text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                    Discuss your project
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#c084fc]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
                  
                  <p className="text-center text-white/40 text-xs mt-6 italic">
                    * 15% discount for new customers for SEO packages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
