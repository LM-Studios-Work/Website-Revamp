"use client";

import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Code,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PageType } from "@/lib/navigation";
import { Footer } from "@/components/sections/footer";

interface HomePageProps {
  onPageChange?: (page: PageType) => void;
}

// --- Mobile-Optimized Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const staggerContainerMobile = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export default function HomePage({ onPageChange }: HomePageProps) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lighter parallax for desktop only
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, isMobile ? 0 : 30]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 1 : 0.8]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-x-hidden font-sans text-white bg-black selection:bg-[#d4f534] selection:text-black"
    >
      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/dark-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* =========================================
            HERO SECTION - OPTIMIZED FOR MOBILE
           ========================================= */}
        <header className="relative w-full min-h-[90dvh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden py-20 lg:py-0">
          <motion.div 
            style={isMobile ? {} : { y: heroY, opacity: heroOpacity }}
            className="w-full max-w-[1000px] mx-auto lg:mx-0"
          >
            {/* Brand Title - Simplified animation on mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? staggerContainerMobile : staggerContainer}
              className="relative mb-8 md:mb-10"
            >
              <div className="flex flex-col md:flex-row md:items-baseline leading-none select-none">
                <motion.span
                  variants={fadeInUp}
                  className="font-bold text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] tracking-tighter mr-0 md:mr-6 leading-[0.9]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(255,255,255,0.8)",
                  }}
                >
                  LM
                </motion.span>
                <div className="flex flex-col relative z-20">
                  <motion.span
                    variants={fadeInUp}
                    className="font-bold text-white text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] tracking-tight leading-[0.9]"
                  >
                    Studios
                  </motion.span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: isMobile ? 0.8 : 1.2, 
                      delay: isMobile ? 0.6 : 1, 
                      ease: "circOut" 
                    }}
                    className="bg-[#d4f534] h-[6px] sm:h-[8px] lg:h-[12px] rounded-full mt-2 sm:mt-4 shadow-[0_0_30px_rgba(212,245,52,0.6)]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Headline & Sub */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? staggerContainerMobile : staggerContainer}
              className="space-y-6 md:space-y-8 mb-10 md:mb-12 pl-4 border-l-2 border-white/10"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                Innovative Web Design <br />
                <span className="text-gray-500">for a Digital World.</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-light leading-relaxed text-gray-400"
              >
                Crafting user-centric digital experiences with a focus on modern
                aesthetics, clean code, and modern web technologies.
              </motion.p>
            </motion.div>

            {/* CTA - Simplified hover on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.8 : 1.2, duration: 0.6 }}
            >
              <button 
                onClick={() => onPageChange?.("contact")}
                className="group relative bg-[#d4f534] text-black font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-full flex items-center gap-3 overflow-hidden transition-all active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] touch-manipulation w-fit md:hover:scale-105"
              >
                <span className="relative z-10 text-base sm:text-lg">Start Your Project</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-active:translate-x-1 md:group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/30 translate-y-full group-active:translate-y-0 md:group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - Desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="hidden lg:flex absolute bottom-10 right-20 items-center gap-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 rotate-90 origin-right translate-x-8">Scroll</span>
            <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent relative overflow-hidden">
               <motion.div 
                 animate={{ y: [0, 96, 0] }} 
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 left-0 w-full h-1/2 bg-[#d4f534]" 
               />
            </div>
          </motion.div>
        </header>

        {/* =========================================
            SERVICES SECTION - OPTIMIZED
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: isMobile ? "0px" : "-10%", amount: 0.2 }}
              variants={isMobile ? staggerContainerMobile : staggerContainer}
              className="mb-12 md:mb-20"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
                Our{" "}
                <span
                  className="relative inline-block"
                  style={{
                    WebkitTextStroke: "1px #d4f534",
                    color: "transparent",
                  }}
                >
                  services
                  {!isMobile && (
                    <motion.span
                       initial={{ width: 0 }}
                       whileInView={{ width: "100%" }}
                       transition={{ duration: 0.8, delay: 0.3 }}
                       className="absolute -bottom-2 left-0 h-[2px] bg-[#d4f534]"
                    />
                  )}
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
                We offer comprehensive digital solutions to elevate your online
                presence and drive measurable results.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <ServiceCard
                title="Web Design"
                subtitle="Crafting beautiful, user-friendly websites"
                description="Our web design services combine stunning visuals with seamless functionality. Whether you need a standard website or a fully custom solution."
                icon={<Sparkles className="w-5 h-5 md:w-6 md:h-6 text-black" />}
                image="https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?auto=format&fit=crop&w=1080&q=80"
                items={["Custom & Standard Pack options", "Responsive design for all devices", "Built with modern frameworks"]}
                accentColor="#d4f534"
                isMobile={isMobile}
              />

              <ServiceCard
                title="SEO Optimization"
                subtitle="Boost your visibility & organic traffic"
                description="Get found by your target audience. We optimize your website's structure, content, and technical elements to improve search engine rankings."
                icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-black" />}
                image="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?auto=format&fit=crop&w=1080&q=80"
                items={["Keyword research & strategy", "On-page & technical SEO", "Performance tracking & reporting"]}
                accentColor="#c084fc"
                isMobile={isMobile}
              />
            </div>
          </div>
        </section>

        {/* =========================================
            CUSTOM PACK / DEEP DIVE - SIMPLIFIED MOBILE
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex-1 w-full"
            >
              <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-[#d4f534] mix-blend-color opacity-0 md:group-hover:opacity-20 transition-opacity duration-700 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-auto object-cover md:group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={isMobile ? staggerContainerMobile : staggerContainer}
              className="flex-1 text-white"
            >
              <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-4">
                <span className="text-5xl font-thin tracking-wide text-gray-400">01</span>
                <div className="h-[1px] w-20 bg-white/20"></div>
                <span className="px-4 py-1 border border-[#d4f534] text-[#d4f534] bg-[#d4f534]/10 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                  Custom Pack
                </span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.1]">
                Tailored web <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">development.</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300 font-light border-l border-white/10 pl-6">
                <p>
                  Our <strong>Custom Pack</strong> is designed for visionaries. It is perfect for businesses
                  seeking a fully tailored website with a unique design system and specialized functionalities.
                </p>
                <p>
                   We take you through a comprehensive <strong>100h+ process</strong> including
                   sitemap architecture, high-fidelity wireframing, interactive prototyping, and robust full-stack
                   development.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            WHY CHOOSE US - OPTIMIZED
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 bg-white/5 backdrop-blur-3xl border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              
              <div className="flex-1 space-y-10 md:space-y-12 w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    Why choose <span className="text-[#d4f534] underline decoration-4 decoration-white/20 underline-offset-8">LM Studios</span>?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400">Scale your business with integrated power.</p>
                </motion.div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Expert Team",
                      desc: "Our experienced designers and developers bring your vision to life with precision.",
                      icon: Code
                    },
                    {
                      title: "Proven Results",
                      desc: "We deliver websites that not only look great but also drive conversions.",
                      icon: Zap
                    },
                    {
                      title: "Modern Stack",
                      desc: "Built with cutting-edge technologies and best practices for performance.",
                      icon: CheckCircle
                    },
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="group p-5 md:p-6 rounded-2xl border border-white/5 bg-black/40 active:bg-[#d4f534]/5 md:hover:bg-[#d4f534]/5 md:hover:border-[#d4f534]/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-white/5 text-[#d4f534] md:group-hover:scale-110 transition-transform shrink-0">
                          <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:group-hover:text-[#d4f534] transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                  <img
                    src="https://images.unsplash.com/photo-1758518729685-f88df7890776?auto=format&fit=crop&w=1080&q=80"
                    alt="Modern office"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 right-6 md:right-auto">
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-xs">
                        <p className="text-sm font-medium text-white">"LM Studios transformed our digital infrastructure."</p>
                        <p className="text-xs text-[#d4f534] mt-2">— Client Review</p>
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            CTA SECTION - OPTIMIZED
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-[#d4f534] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 tracking-tight">
                  Ready to transform <br className="hidden md:block" /> your online presence?
                </h2>
                <p className="text-black/70 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                  Let's discuss your project and create a digital experience that drives
                  real results for your business.
                </p>
                <button
                  onClick={() => onPageChange?.("contact")}
                  className="bg-black text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-full flex items-center gap-3 active:scale-95 md:hover:scale-105 md:hover:bg-gray-900 transition-all text-base md:text-lg mx-auto shadow-2xl touch-manipulation"
                >
                  Start your project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

// --- Component: Service Card - Mobile Optimized ---
interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  items: string[];
  accentColor: string;
  isMobile: boolean;
}

function ServiceCard({ title, subtitle, description, icon, image, items, accentColor, isMobile }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 md:hover:border-white/30 transition-all duration-500 flex flex-col h-full"
    >
      <div className="aspect-[16/9] overflow-hidden relative shrink-0">
        <div className="absolute inset-0 bg-black/20 z-10 md:group-hover:bg-transparent transition-colors duration-500"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 md:p-8 lg:p-10 relative flex flex-col grow">
        <div 
            className="absolute -top-20 right-10 w-40 h-40 blur-[80px] rounded-full opacity-0 md:group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundColor: accentColor }}
        />
        
        <div className="flex items-start gap-4 md:gap-5 mb-6 relative z-10">
          <div 
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-8 leading-relaxed font-light text-base md:text-lg relative z-10 grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <ul className="space-y-3 mb-8 text-sm text-gray-400 relative z-10">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
              {item}
            </li>
          ))}
          </ul>
          
          <button 
              className="font-bold flex items-center gap-2 active:gap-4 md:hover:gap-4 transition-all uppercase text-sm tracking-widest"
              style={{ color: accentColor }}
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
