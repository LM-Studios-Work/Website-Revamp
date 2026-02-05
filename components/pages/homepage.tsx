"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, Code, Zap, CheckCircle, Smartphone } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Centralized imports
import type { PageType } from "@/lib/navigation";
import { services, features } from "@/lib/data";
import { 
  fadeInUp, 
  staggerContainer, 
  staggerContainerMobile,
  expandWidth,
  expandWidthMobile,
} from "@/lib/animations";

// Shared components
import { PageLayout, PageHero } from "@/components/shared/page-layout";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { ServiceCard } from "@/components/shared/service-card";

interface HomePageProps {
  onPageChange?: (page: PageType) => void;
}

// Icon mapping for services
const serviceIcons: Record<string, React.ReactNode> = {
  "web-design": <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-black" />,
  "seo": <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-black" />,
  "app-development": <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-black" />,
};

// Icon mapping for features
const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Zap,
  CheckCircle,
};

export default function HomePage({ onPageChange }: HomePageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lighter parallax for desktop only
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, isMobile ? 0 : 30]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 1 : 0.8]);

  return (
    <PageLayout containerRef={containerRef} currentPage="home" onPageChange={onPageChange}>
      {/* Hero Section */}
      <PageHero size="large" className="lg:min-h-screen">
        <motion.div 
          style={isMobile ? {} : { y: heroY, opacity: heroOpacity }}
          className="w-full max-w-[1000px] mx-auto lg:mx-0"
        >
          {/* Brand Title */}
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
                  variants={isMobile ? expandWidthMobile : expandWidth}
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
              <span className="text-gray-500">for Johannesburg Businesses.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-light leading-relaxed text-muted-foreground"
            >
              Crafting modern, mobile-responsive websites with a single focus: turning site visitors into paying customers. We combine aesthetics with clean code to drive results.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
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
        <ScrollIndicator />
      </PageHero>

      {/* Services Section */}
      <SectionWrapper isMobile={isMobile}>
        <SectionHeader
          title="Our"
          titleHighlight="services"
          description="We specialize in partnering with small and medium-sized businesses (SMBs) across Gauteng. Our goal is simple: to provide the digital infrastructure you need for stable growth and long-term profits."
          isMobile={isMobile}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              icon={serviceIcons[service.id]}
              image={service.image}
              items={service.items}
              accentColor={service.accentColor}
              isMobile={isMobile}
              compact
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Custom Pack Section */}
      <CustomPackSection isMobile={isMobile} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection isMobile={isMobile} />

      {/* CTA Section */}
      <CTASection onPageChange={onPageChange} />
    </PageLayout>
  );
}

// --- Sub-components ---

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="hidden lg:flex absolute bottom-10 right-20 items-center gap-4"
    >
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground rotate-90 origin-right translate-x-8">
        Scroll
      </span>
      <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent relative overflow-hidden">
        <motion.div 
          animate={{ y: [0, 96, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-1/2 bg-[#d4f534]" 
        />
      </div>
    </motion.div>
  );
}

function CustomPackSection({ isMobile }: { isMobile: boolean }) {
  return (
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
              alt="Team researching industry trends"
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
            <span className="text-5xl font-thin tracking-wide text-muted-foreground">01</span>
            <div className="h-[1px] w-20 bg-white/20" />
            <span className="px-4 py-1 border border-[#d4f534] text-[#d4f534] bg-[#d4f534]/10 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              Tailored Solutions
            </span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.1]">
            Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">your industry.</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground font-light border-l border-white/10 pl-6">
            <p>
              <strong className="text-white">Beyond Constant Research.</strong> We are committed to ensuring that every website we build blends sound business principles, marketing strategy, and financial logic into a solution that works for you.
            </p>
            <p>
              <strong className="text-white">From Startup to Scale.</strong> From well-established businesses to new startups, we assist you with the next step in your online journey. We don&apos;t just design; we build solutions that fit your business model.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#d4f534]" />
              <span className="text-sm text-white/70">Competitor Analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#d4f534]" />
              <span className="text-sm text-white/70">Industry Research</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#d4f534]" />
              <span className="text-sm text-white/70">Audience Targeting</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#d4f534]" />
              <span className="text-sm text-white/70">Custom Strategy</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUsSection({ isMobile }: { isMobile: boolean }) {
  return (
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
              <p className="text-lg md:text-xl text-muted-foreground">
                Scale your business with integrated power.
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((feature, idx) => {
                const IconComponent = featureIcons[feature.icon];
                return (
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
                        {IconComponent && <IconComponent className="w-5 h-5 md:w-6 md:h-6" />}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:group-hover:text-[#d4f534] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
              <img
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?auto=format&fit=crop&w=1080&q=80"
                alt="Modern office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 right-6 md:right-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-xs">
                  <p className="text-sm font-medium text-white">
                    &quot;LM Studios transformed our digital infrastructure.&quot;
                  </p>
                  <p className="text-xs text-[#d4f534] mt-2">— Client Review</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="bg-[#d4f534] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 tracking-tight">
              Ready to transform <br className="hidden md:block" /> your online presence?
            </h2>
            <p className="text-black/70 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Let&apos;s discuss your project and create a digital experience that drives
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
  );
}
