"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Search,
  Globe,
  Target,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Clock,
  ChevronDown,
  LineChart,
  Layers,
  Zap
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PageType } from "@/lib/navigation";

interface SeoPageProps {
  onPageChange?: (page: PageType) => void;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function SeoPage({ onPageChange }: SeoPageProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  // Brand Colors for SEO (Purple + Your Brand Lime)
  const brandLime = "#d4f534";
  const seoPurple = "#c084fc";

  const packages = [
    {
      id: 1,
      name: "Local Kickstart",
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
        "Competitor Analysis",
      ],
      color: "#ffffff",
      highlight: false,
    },
    {
      id: 2,
      name: "Growth Engine",
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
        "Keyword Tracking Dashboard",
      ],
      color: seoPurple,
      highlight: true,
    },
    {
      id: 3,
      name: "Market Leader",
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
        "Quarterly Strategy Review",
      ],
      color: brandLime,
      highlight: false,
    },
  ];

  const pillars = [
    {
      title: "Technical SEO",
      desc: "We ensure Google can crawl and index your site without errors. Speed, mobile-friendliness, and clean code structure.",
      icon: Layers,
    },
    {
      title: "On-Page Strategy",
      desc: "Optimizing your actual content. Keywords, headers, internal linking, and user experience to match search intent.",
      icon: Search,
    },
    {
      title: "Off-Page Authority",
      desc: "Building trust. We help you acquire quality backlinks and digital PR so Google sees you as an authority.",
      icon: Globe,
    },
    {
      title: "Content Marketing",
      desc: "Writing content that answers your customers' questions, driving traffic and establishing expertise.",
      icon: LineChart,
    }
  ];

  const faqs = [
    { q: "How long does SEO take to work?", a: "SEO is a marathon, not a sprint. While technical fixes can show results in weeks, significant organic growth typically takes 3 to 6 months of consistent effort." },
    { q: "Do you guarantee a #1 ranking?", a: "No ethical SEO agency can guarantee a #1 ranking, as Google's algorithm changes daily. We guarantee best practices, data-driven strategies, and transparent reporting on progress." },
    { q: "Why is a monthly retainer necessary?", a: "SEO isn't a 'set and forget' task. Competitors are constantly optimizing. Monthly retainers cover new content creation, link building, and adjusting strategy based on data." },
    { q: "Can I just do the 'Local Kickstart'?", a: "Yes! If you have low competition, a one-time technical setup and local optimization is often enough to get started. For competitive industries, monthly work is required to hold rankings." },
  ];

  return (
    <div ref={containerRef} className="min-h-[100dvh] relative text-white bg-black font-sans selection:bg-[#c084fc] selection:text-white overflow-x-hidden">
      
      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "url(/images/dark-background.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Purple Accent Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c084fc]/10 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className="relative z-10 px-4 sm:px-8 py-24 md:py-32 overflow-hidden min-h-[80vh] flex items-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
            
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 text-[#c084fc] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <BarChart3 className="w-3 h-3" /> Search Engine Optimization
              </span>
            </motion.div>

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

            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-10">
              A beautiful website is useless if no one sees it. We use data-driven strategies to increase your visibility, drive organic traffic, and convert clicks into clients.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button onClick={() => onPageChange?.("contact")} className="bg-[#c084fc] text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 hover:bg-[#a960ec] hover:scale-105 transition-all shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                Start Ranking <ArrowRight className="w-5 h-5" />
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
