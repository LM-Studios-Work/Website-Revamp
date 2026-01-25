"use client";

import { useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Code,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageType } from "@/lib/navigation";

interface HomePageProps {
  onPageChange?: (page: PageType) => void;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" as const },
  },
};

export default function HomePage({ onPageChange }: HomePageProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax for Hero
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
        {/* Grain Texture Overlay (Optional for 'Studio' feel) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* =========================================
            HERO SECTION
           ========================================= */}
        <header className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-start lg:justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-20">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full max-w-[900px]">
            {/* Brand Title */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative mb-6 sm:mb-8 md:mb-10"
            >
              <div className="flex flex-col md:flex-row md:items-baseline leading-none select-none">
                <motion.span
                  variants={fadeInUp}
                  className="font-bold text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] tracking-tighter mr-0 md:mr-6 leading-none"
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
                    className="font-bold text-white text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] tracking-tight leading-none"
                  >
                    Studios
                  </motion.span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 1, ease: "circOut" }}
                    className="bg-[#d4f534] h-[4px] sm:h-[6px] md:h-[8px] lg:h-[12px] rounded-full mt-1 sm:mt-2 md:mt-4 shadow-[0_0_30px_rgba(212,245,52,0.6)]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Headline & Sub */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-10 md:mb-12 pl-2 md:pl-4 border-l-2 border-white/10"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <button className="group relative bg-[#d4f534] text-black font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full flex items-center gap-2 sm:gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(212,245,52,0.3)] touch-manipulation">
                <span className="relative z-10 text-base sm:text-lg">Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="hidden md:flex absolute bottom-10 right-10 md:right-20 items-center gap-4"
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
            SERVICES SECTION
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-12 sm:mb-16 md:mb-24"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6">
                Our{" "}
                <span
                  className="relative inline-block"
                  style={{
                    WebkitTextStroke: "1px #d4f534",
                    color: "transparent",
                  }}
                >
                  services
                  <motion.span
                     initial={{ width: 0 }}
                     whileInView={{ width: "100%" }}
                     transition={{ duration: 1, delay: 0.5 }}
                     className="absolute -bottom-2 left-0 h-[2px] bg-[#d4f534]"
                  />
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl font-light">
                We offer comprehensive digital solutions to elevate your online
                presence and drive measurable results.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Service Card 1 */}
              <ServiceCard
                title="Web Design"
                subtitle="Crafting beautiful, user-friendly websites"
                description="Our web design services combine stunning visuals with seamless functionality. Whether you need a standard website or a fully custom solution."
                icon={<Sparkles className="w-6 h-6 text-black" />}
                image="https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?auto=format&fit=crop&w=1080&q=80"
                items={["Custom & Standard Pack options", "Responsive design for all devices", "Built with modern frameworks"]}
                accentColor="#d4f534"
              />

              {/* Service Card 2 */}
              <ServiceCard
                title="SEO Optimization"
                subtitle="Boost your visibility & organic traffic"
                description="Get found by your target audience. We optimize your website's structure, content, and technical elements to improve search engine rankings."
                icon={<TrendingUp className="w-6 h-6 text-black" />}
                image="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?auto=format&fit=crop&w=1080&q=80"
                items={["Keyword research & strategy", "On-page & technical SEO", "Performance tracking & reporting"]}
                accentColor="#c084fc" // Purple accent for variety
              />
            </div>
          </div>
        </section>

        {/* =========================================
            CUSTOM PACK / DEEP DIVE
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16 md:gap-20">
            {/* Image Side with Parallax */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative flex-1 w-full"
            >
              {/* Handwritten Annotation */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute -top-16 -left-4 md:-left-12 z-20 pointer-events-none"
              >
                <motion.div variants={fadeInUp} className="text-white font-serif italic text-2xl rotate-[-5deg] mb-2">
                  Behind the scenes
                </motion.div>
                <svg width="80" height="100" viewBox="0 0 60 80" className="ml-8 drop-shadow-lg">
                  <motion.path
                    variants={drawLine}
                    d="M 40 10 Q 30 40, 15 70"
                    stroke="#d4f534"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <motion.circle 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                    cx="15" cy="70" r="4" fill="#d4f534" 
                  />
                </svg>
              </motion.div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-[#d4f534] mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex-1 text-white"
            >
              <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-4">
                <span className="text-5xl font-thin tracking-wide text-gray-400">
                  01
                </span>
                <div className="h-[1px] w-20 bg-white/20"></div>
                <span className="px-4 py-1 border border-[#d4f534] text-[#d4f534] bg-[#d4f534]/10 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                  Custom Pack
                </span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
                Tailored web <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">development.</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6 text-lg leading-relaxed text-gray-300 font-light border-l border-white/10 pl-6">
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
            WHY CHOOSE US
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-32 bg-white/5 backdrop-blur-3xl border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 md:gap-20 items-center">
              
              <div className="flex-1 space-y-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    Why choose <span className="text-[#d4f534] underline decoration-4 decoration-white/20 underline-offset-8">LM Studios</span>?
                  </h2>
                  <p className="text-xl text-gray-400">Scale your business with integrated power.</p>
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
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="group p-6 rounded-2xl border border-white/5 bg-black/40 hover:bg-[#d4f534]/5 hover:border-[#d4f534]/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-white/5 text-[#d4f534] group-hover:scale-110 transition-transform">
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4f534] transition-colors">
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
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                  <img
                    src="https://images.unsplash.com/photo-1758518729685-f88df7890776?auto=format&fit=crop&w=1080&q=80"
                    alt="Modern office"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
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
            CTA SECTION
           ========================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#d4f534] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group"
            >
              {/* Noise Texture on CTA */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply"></div>
              
              {/* Decorative Pulsing Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] animate-pulse"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
                  Ready to transform <br /> your online presence?
                </h2>
                <p className="text-black/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                  Let's discuss your project and create a digital experience that drives
                  real results for your business.
                </p>
                <motion.button
                  onClick={() => onPageChange?.("contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white font-bold py-5 px-10 rounded-full flex items-center gap-3 hover:bg-gray-900 transition-colors text-lg mx-auto shadow-2xl"
                >
                  Start your project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

// --- Component: Service Card ---
interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  items: string[];
  accentColor: string;
}

function ServiceCard({ title, subtitle, description, icon, image, items, accentColor }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 md:p-10 relative">
        {/* Glow Effect on Hover */}
        <div 
            className="absolute -top-20 right-10 w-40 h-40 blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{ backgroundColor: accentColor }}
        />
        
        <div className="flex items-start gap-5 mb-6 relative z-10">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg relative z-10">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8 text-sm text-gray-400 relative z-10">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
              {item}
            </li>
          ))}
        </ul>
        
        <button 
            className="font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-sm tracking-widest"
            style={{ color: accentColor }}
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}