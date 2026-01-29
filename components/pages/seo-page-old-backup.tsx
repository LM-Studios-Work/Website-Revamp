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
      "Google Analytics & Console Setup",
      "Competitor Analysis"
    ],
    accent: "border-[#d4ff3f]/20",
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
      "Technical Health Monitoring",
      "Monthly Performance Report",
      "Keyword Tracking Dashboard"
    ],
    accent: "border-[#6ee2d1]/50 bg-gradient-to-br from-[#6ee2d1]/10 to-transparent",
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
      "Conversion Rate Optimization (CRO)",
      "Dedicated SEO Manager",
      "Priority Support & Meetings",
      "Quarterly Strategy Review"
    ],
    accent: "border-[#c1a8f8]/20",
    popular: false,
  },
];

const processes = [
  {
    id: 1,
    title: "Analyse your website",
    description: "We first analyse your website, followed by a step-by-step plan to have the website communicate keywords more effectively to search engines.",
    color: "bg-[#d4ff3f]",
    textColor: "text-black"
  },
  {
    id: 2,
    title: "RESEARCH",
    description: "Keyword density tells you how often a search term appears in a text in relation to the total number of words it contains.",
    color: "bg-[#6ee2d1]",
    textColor: "text-black",
    tag: "Priority"
  },
  {
    id: 3,
    title: "ONSITE OPTIMISATION",
    description: "Optimisation refers to all measures that can be taken directly within the website in order to improve its position.",
    color: "bg-[#c1a8f8]",
    textColor: "text-black"
  },
  {
    id: 4,
    title: "REPORTING AND ANALYSIS",
    description: "Our SEO review consists of several factors like a content, linking structure, social media efforts, and its trust on the internet.",
    color: "bg-white/10",
    textColor: "text-white",
    border: "border border-white/20"
  }
];

export default function SeoPage({ onPageChange }: SeoPageProps) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#d4ff3f] selection:text-black">
      
      {/* =========================================
          HERO SECTION
          ========================================= */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background radial gradient for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(212,255,63,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white/50 mb-8 text-sm uppercase tracking-widest">
            <button onClick={() => onPageChange?.("home")} className="hover:text-[#d4ff3f] transition-colors">Home</button>
            <span>/</span>
            <span className="text-[#d4ff3f]">Search Engine Optimisation</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <div className="text-[#d4ff3f] mb-4 text-sm font-bold uppercase tracking-widest bg-[#d4ff3f]/10 px-4 py-1.5 rounded-full inline-block">
              Your All-in-one Business Solution
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Search Engine <br />
              <span className="relative">
                Optimisation
                <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9.5C50 9.5 100 2 150 2C200 2 250 9.5 298 9.5" stroke="#d4ff3f" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </motion.div>

          <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl mt-12 leading-relaxed">
            Is the process of affecting the visibility of a website or a web page in a search engine&apos;s unpaid results—often referred to as &quot;natural,&quot; &quot;organic,&quot; or &quot;earned&quot; results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears in the search results list, the more visitors it will receive from the search engine&apos;s users.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <button onClick={() => onPageChange?.("contact")} className="px-8 py-4 bg-[#d4ff3f] text-black font-bold rounded-full hover:scale-105 transition-transform">
              Contact us for a FREE quote!
            </button>
            <div className="text-white/50 text-sm">
              Take Your Business to the next level
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SEO TYPES INFO
          ========================================= */}
      <div className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/70 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            SEO may target different kinds of search, including <span className="text-[#d4ff3f]">image search</span>, <span className="text-[#6ee2d1]">local search</span>, <span className="text-[#c1a8f8]">video search</span>, academic search, news search and industry-specific vertical search engines.
          </p>
        </div>
      </div>
      </div>

      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className="relative z-10 px-4 sm:px-8 py-24 md:py-32 overflow-hidden min-h-[80vh] flex items-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
            
            {/* Breadcrumb */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4 text-sm text-gray-400">
              <button onClick={() => onPageChange?.("home")} className="hover:text-[#d4f534] transition-colors">
                Home
              </button>
              <span>/</span>
              <span className="text-white">Search Engine Optimisation</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 text-[#c084fc] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <BarChart3 className="w-3 h-3" /> Search Engine Optimization
              </span>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-sm md:text-base text-gray-400 mb-6 max-w-4xl">
              Your All-in-one Business Solution | Creative Digital Agency | Web Design Company
            </motion.p>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1] tracking-tight">
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
                  <path d="M2 10C50 2 150 2 298 10" stroke={seoPurple} strokeWidth="4" strokeLinecap="round" />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-6">
              A beautiful website is useless if no one sees it. We use data-driven strategies to increase your visibility, drive organic traffic, and convert clicks into clients.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mb-10">
              <h3 className="text-sm font-bold text-[#c084fc] mb-3 uppercase tracking-wider">What is SEO?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Search Engine Optimisation is the process of affecting the visibility of a website or web page in a search engine&apos;s unpaid results—often referred to as &quot;natural,&quot; &quot;organic,&quot; or &quot;earned&quot; results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears in the search results list, the more visitors it will receive from the search engine&apos;s users. SEO may target different kinds of search, including image search, local search, video search, academic search, news search and industry-specific vertical search engines.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button onClick={() => onPageChange?.("contact")} className="bg-[#c084fc] text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 hover:bg-[#a960ec] hover:scale-105 transition-all shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                Contact us for a FREE Quote! <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth'})} className="bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all">
                View Packages
              </button>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Decorative Abstract Graph */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[60%] opacity-20 pointer-events-none hidden lg:block">
           <svg viewBox="0 0 400 200" className="w-full h-full text-[#c084fc] drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
             <path d="M0,200 Q100,150 200,100 T400,0" fill="none" stroke="currentColor" strokeWidth="2" />
             <path d="M0,200 Q100,180 200,160 T400,120" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
             <circle cx="200" cy="100" r="4" fill={brandLime} />
             <circle cx="400" cy="0" r="4" fill={brandLime} />
           </svg>
        </div>
      </section>

      {/* =========================================
          THE PROBLEM / REALITY CHECK
          ========================================= */}
      <section className="relative z-10 px-4 sm:px-8 py-20 bg-white/5 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="relative rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" alt="Data Analytics" className="w-full h-auto object-cover opacity-80" />
              <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-xs">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-sm font-bold text-white">The Reality</span>
                 </div>
                 <p className="text-xs text-gray-300">
                   75% of users never scroll past the first page of search results. If you aren&apos;t there, you are losing business.
                 </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
                Stop guessing. <br/>
                Start <span className="text-[#c084fc]">dominating.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-8">
                Most agencies promise the world but deliver vague reports. We focus on <strong>metrics that pay the bills</strong>: Organic Traffic, Keyword Rankings, and Conversion Rate.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {pillars.map((pillar, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp}
                      className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-[#c084fc]/40 transition-colors group"
                    >
                       <pillar.icon className="w-6 h-6 text-[#c084fc] mb-3 group-hover:scale-110 transition-transform" />
                       <h3 className="font-bold text-white mb-2">{pillar.title}</h3>
                       <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                    </motion.div>
                 ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          ON-PAGE & OFF-PAGE OPTIMIZATION
          ========================================= */}
      <section className="relative z-10 px-4 sm:px-8 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              On-Page & Off-Page <span className="text-[#c084fc]">Optimisation</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              The goal of on-page and off-page optimisation is to generate a theme consistent with your targeted keywords. The search engine is a robot, not a human… and therefore, you must follow our proven process to educate the robot so that it brings your website up when your potential customers are searching for specific business-related keywords.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-[#c084fc]/10 to-[#d4f534]/10 border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">Take Your Business to the <span className="text-[#d4f534]">Next Level</span></h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          HOW WE GO TO WORK
          ========================================= */}
      <section className="relative z-10 px-4 sm:px-8 py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              How We Go to <span className="text-[#c084fc]">Work</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Analyse Website */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c084fc]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c084fc]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6 text-[#c084fc]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Analyse Your Website</h3>
              <p className="text-gray-400 leading-relaxed">
                We first analyse your website, followed by a step-by-step plan to have the website communicate keywords more effectively to search engines. Our ultimate goal is to get our clients more visitors and higher conversion of sales and leads. Before beginning a search engine optimisation (SEO), it is important to understand the process involved in an effective SEO campaign.
              </p>
            </motion.div>

            {/* Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c084fc]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c084fc]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-[#c084fc]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Research</h3>
              <p className="text-gray-400 leading-relaxed">
                Keyword density tells you how often a search term appears in a text in relation to the total number of words it contains. We conduct comprehensive keyword research to identify the most valuable search terms for your business and industry.
              </p>
            </motion.div>

            {/* Onsite Optimisation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c084fc]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4f534]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-[#d4f534]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Onsite Optimisation</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimisation refers to all measures that can be taken directly within the website in order to improve its position. This includes content optimization, meta tags, header tags, internal linking structure, and technical improvements.
              </p>
            </motion.div>

            {/* Link Building */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c084fc]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4f534]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-[#d4f534]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Link Building</h3>
              <p className="text-gray-400 leading-relaxed">
                In the field of SEO, link building describes actions aimed at increasing the number and quality of inbound links to a web-page. We focus on acquiring high-quality, relevant backlinks that boost your domain authority and search rankings.
              </p>
            </motion.div>
          </div>

          {/* Reporting and Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-[#c084fc]/10 to-[#d4f534]/10 border border-white/10"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-[#d4f534]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Reporting and Analysis</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our SEO review consists of several factors like content, linking structure, social media efforts, and its trust on the internet. We provide comprehensive monthly reports that track your progress and demonstrate clear ROI on your SEO investment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PRICING PACKAGES
          ========================================= */}
      <section id="audit" className="relative z-10 px-4 sm:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose a plan that fits your growth stage. No hidden fees, just clear results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col p-6 lg:p-8 rounded-3xl border transition-all duration-300 ${
                  pkg.highlight 
                    ? "bg-white/10 border-[#c084fc] shadow-[0_0_40px_rgba(192,132,252,0.15)] transform md:-translate-y-4" 
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c084fc] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold" style={{ color: pkg.highlight ? pkg.color : 'white' }}>{pkg.price}</span>
                    <span className="text-xs text-gray-500 font-medium uppercase">/ {pkg.billing}</span>
                  </div>
                  <p className="text-sm text-gray-400 min-h-[40px]">{pkg.description}</p>
                </div>

                <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-black/30 border border-white/5">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-medium text-gray-300">Best for: {pkg.idealFor}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-[#c084fc]" : "text-gray-500"}`} />
                      <span className={pkg.highlight ? "text-white" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onPageChange?.("contact")}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight 
                      ? "bg-[#c084fc] text-white hover:bg-[#a960ec] shadow-lg" 
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  Select Plan
                </button>

              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4f534]/10 border border-[#d4f534]/20 text-[#d4f534] text-sm">
                <AlertCircle className="w-4 h-4" />
                <span className="font-medium">Need a custom enterprise audit? Contact us for a bespoke quote.</span>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SEO TIMELINE / PROCESS
          ========================================= */}
      <section className="relative z-10 px-4 sm:px-8 py-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
          >
            The Growth <span className="text-[#d4f534]">Timeline</span>
          </motion.h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            
            {[
              { month: "Month 1", title: "Audit & Foundation", desc: "Deep dive into site health, keyword research, and fixing technical errors that block Google." },
              { month: "Month 2", title: "On-Page Optimization", desc: "Rewriting meta data, optimizing headers, improving internal linking structure." },
              { month: "Month 3+", title: "Content & Authority", desc: "Publishing high-value articles and building backlinks to drive serious traffic." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <div className="w-3 h-3 bg-[#d4f534] rounded-full" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#d4f534]/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    <span className="text-xs font-bold text-[#d4f534] uppercase tracking-wider">{item.month}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ SECTION
          ========================================= */}
      <section className="relative z-10 px-4 sm:px-8 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
             <p className="text-gray-400">Everything you need to know about our SEO process.</p>
           </div>

           <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <FaqItem key={idx} question={faq.q} answer={faq.a} />
             ))}
           </div>
        </div>
      </section>

      {/* =========================================
          CTA SECTION
          ========================================= */}
      <section className="relative z-10 px-4 py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#c084fc] to-[#7c3aed] rounded-[3rem] p-10 md:p-20 relative overflow-hidden"
        >
           {/* Noise Overlay */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply"></div>
           
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your traffic?</h2>
             <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
               Stop letting competitors take your customers. Let&apos;s build a strategy that puts you on top.
             </p>
             <button 
               onClick={() => onPageChange?.("contact")}
               className="bg-white text-[#7c3aed] font-bold py-4 px-10 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
             >
               Get Your Free SEO Audit
             </button>
           </div>
        </motion.div>
      </section>

    </div>
  );
}

// --- Helper: FAQ Component ---
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all hover:border-white/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-white pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#c084fc] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-300 text-sm leading-relaxed border-t border-white/5 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
