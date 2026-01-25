"use client";

import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageType } from "@/lib/navigation";

interface StandardPackPageProps {
  onPageChange?: (page: PageType) => void;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.3 }
  },
};

export default function StandardPackPage({ onPageChange }: StandardPackPageProps) {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Parallax Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Scroll Handler for Process Section
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const packages = [
    {
      id: 1,
      name: "Essential Business",
      price: "R2,499",
      description: "A clean, modern 3-page website designed to make your business look credible and accessible.",
      delivery: "5–7 working days",
      features: [
        "3 professionally designed pages",
        "Mobile-responsive layout",
        "Contact form & email setup",
        "Click-to-call & WhatsApp buttons",
        "Social media integration",
        "Basic SEO optimization",
        "Custom Domain",
      ],
      color: "#d4f534", // Lime
      popular: false,
    },
    {
      id: 2,
      name: "Professional Growth",
      price: "R4,999",
      description: "Perfect for businesses ready to grow, build trust, and showcase their work professionally.",
      delivery: "7–12 working days",
      features: [
        "Up to 6 pages (Home, About, Services...)",
        "Professionally written content",
        "High-quality gallery/portfolio",
        "Client testimonials section",
        "Google Maps integration",
        "Advanced contact forms",
        "Local SEO optimization",
        "Professional email setup",
      ],
      color: "#5dd9c1", // Teal
      popular: true,
    },
    {
      id: 3,
      name: "Personal Portfolio",
      price: "R1,999",
      description: "A stunning, modern portfolio to showcase your work, skills, and personality.",
      delivery: "4–6 working days",
      features: [
        "Single-page scrolling design",
        "Animated introductions & effects",
        "Project gallery with descriptions",
        "Resume/CV download link",
        "Contact form & social links",
        "Custom Domain",
      ],
      color: "#b4a7d6", // Purple
      popular: false,
    },
    {
      id: 4,
      name: "Event Management",
      price: "R3,499",
      description: "A dedicated website for your special event, like a wedding, conference, or party.",
      delivery: "6–8 working days",
      features: [
        "Event details & schedule",
        "Photo and video gallery",
        "RSVP form with guest management",
        "Gift registry links",
        "Password-protected access",
        "Custom Domain",
      ],
      color: "#ff6b6b", // Red
      popular: false,
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: "Sitemap",
      description: "We create a structured blueprint that maps your website's pages and their relationships.",
      color: "#d4f534",
      tag: null
    },
    {
      id: 2,
      title: "Wireframes",
      description: "Wireframes outline layout and functionality, providing a design-ready page structure.",
      color: "#5dd9c1",
      tag: "Custom Pack only"
    },
    {
      id: 3,
      title: "Design",
      description: "We craft a visually appealing brand-aligned design for your website.",
      color: "#b4a7d6",
      tag: null
    },
    {
      id: 4,
      title: "Build",
      description: "We bring the design to life with clean, SEO-friendly code using modern frameworks.",
      color: "#ff6b6b",
      tag: null
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative text-white bg-black font-sans selection:bg-[#d4f534] selection:text-black overflow-x-hidden">
      
      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/dark-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- Hero Section --- */}
      <section className="relative z-10 px-8 py-24 md:py-32 overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
        >
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1"
          >
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 font-bold select-none tracking-tight"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.8)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Web Design
              </h2>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                Fixed Price Packages
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Professional websites
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">for every need.</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-gray-300 font-light border-l border-white/20 pl-4 sm:pl-6">
              <p>
                Choose the perfect package for your business. From{" "}
                <strong className="text-white font-medium">
                  simple portfolios to comprehensive business websites
                </strong>
                , we offer fixed-price packages designed to get you online
                quickly and professionally.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: imageY }}
            className="flex-1 w-full"
          >
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1704652070195-61e76e1466db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                alt="Office workspace"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Packages Grid Section --- */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative group"
              >
                {/* Popular Glow Background */}
                {pkg.popular && (
                   <div 
                    className="absolute inset-0 rounded-3xl blur-[60px] opacity-20 -z-10 transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: pkg.color }}
                   />
                )}

                <motion.div
                  variants={cardHover}
                  className="h-full bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden transition-colors duration-300 touch-manipulation"
                  style={{
                    borderColor: pkg.popular ? pkg.color : "rgba(255,255,255,0.1)",
                  }}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 p-3 sm:p-4">
                      <span
                        className="px-3 sm:px-4 py-1 text-black rounded-full text-xs font-bold inline-block shadow-lg uppercase tracking-wider"
                        style={{ backgroundColor: pkg.color }}
                      >
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6 sm:mb-8 border-b border-white/10 pb-6 sm:pb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
                        style={{ color: pkg.color }}
                      >
                        {pkg.price}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">/ once-off</span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-10 space-y-4">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 group/item">
                        <div
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-opacity-10 group-hover/item:bg-opacity-20 transition-all"
                          style={{ backgroundColor: pkg.color }}
                        >
                          <Check
                            className="w-3 h-3"
                            style={{ color: pkg.color }}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-6 text-xs font-medium text-gray-500 uppercase tracking-widest">
                      <Clock className="w-4 h-4" />
                      <span>Delivery: {pkg.delivery}</span>
                    </div>

                    <button
                      onClick={() => onPageChange?.("contact")}
                      className="w-full py-4 rounded-xl font-bold text-black transition-all shadow-lg flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                      style={{
                        backgroundColor: pkg.color,
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                         Choose Plan <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Our Process Section --- */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black/20 to-black/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white">
                Our{" "}
                <span
                    className="relative"
                    style={{
                    WebkitTextStroke: "1px #d4f534",
                    color: "transparent",
                    }}
                >
                    process
                    <svg className="absolute w-full h-2 sm:h-3 -bottom-1 sm:-bottom-2 left-0 text-[#d4f534]" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl font-light">
                From concept to launch, we craft user-friendly, visually striking
                websites tailored to your brand.
                </motion.p>
            </div>
            
            {/* Navigation Arrows */}
            <motion.div variants={fadeInUp} className="flex gap-4 hidden md:flex">
                <button 
                  onClick={() => scroll("left")}
                  className="w-14 h-14 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-[#d4f534] hover:text-black hover:border-[#d4f534] transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  className="w-14 h-14 rounded-full bg-[#d4f534] text-black flex items-center justify-center hover:bg-[#c7e81f] transition-all shadow-[0_0_20px_rgba(212,245,52,0.4)]"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
            </motion.div>
          </motion.div>

          {/* Cards Carousel */}
          <div className="relative -mx-8 md:-mx-0">
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto px-8 md:px-0 pb-12 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="snap-center flex-none w-[85vw] md:w-[380px] rounded-[2rem] p-10 relative group transition-all duration-500 hover:-translate-y-2"
                    style={{ backgroundColor: step.color }}
                >
                    <div className="absolute top-8 right-8">
                        <div className="w-12 h-12 rounded-full border-2 border-black/20 flex items-center justify-center font-bold text-xl text-black">
                            {step.id}
                        </div>
                    </div>
                    
                    {step.tag && (
                        <div className="mb-6">
                            <span className="px-3 py-1 bg-black/10 backdrop-blur-md rounded-full text-xs font-bold inline-block border border-black/5 text-black uppercase tracking-wider">
                            {step.tag}
                            </span>
                        </div>
                    )}
                    
                    <h3 className="text-4xl font-bold mb-6 mt-4 text-black">{step.title}</h3>
                    <p className="text-lg leading-relaxed font-medium text-black/70">
                        {step.description}
                    </p>
                    
                    {/* Decorative Circle */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}