"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Clock,
  ArrowRight,
  Sparkles,
  MapPin,
  Globe,
  Zap,
  Layout,
  Server,
  Smartphone
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PageType } from "@/lib/navigation";
import { Footer } from "@/components/sections/footer";

interface StandardPackPageProps {
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

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -5, transition: { duration: 0.3 } },
};

// Building2 Icon Component
function Building2(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    )
}

export default function StandardPackPage({ onPageChange }: StandardPackPageProps) {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const packages = [
    {
      id: 1,
      name: "Essential Business",
      price: "R2,499",
      description: "A clean, modern 3-page website designed to make your business look credible.",
      delivery: "5–7 days",
      features: [
        "3 professionally designed pages",
        "Mobile-responsive layout",
        "Contact form & email setup",
        "Click-to-call & WhatsApp",
        "Social media integration",
        "Basic SEO optimization",
        "Custom Domain",
      ],
      color: "#d4f534",
      popular: false,
    },
    {
      id: 2,
      name: "Professional Growth",
      price: "R4,999",
      description: "Perfect for businesses ready to grow, build trust, and showcase work.",
      delivery: "7–12 days",
      features: [
        "Up to 6 pages (Home, About...)",
        "Professionally written content",
        "High-quality gallery/portfolio",
        "Client testimonials section",
        "Google Maps integration",
        "Advanced contact forms",
        "Local SEO optimization",
        "Professional email setup",
      ],
      color: "#5dd9c1",
      popular: true,
    },
    {
      id: 3,
      name: "Personal Portfolio",
      price: "R1,999",
      description: "A stunning, modern portfolio to showcase your work and skills.",
      delivery: "4–6 days",
      features: [
        "Single-page scrolling design",
        "Animated introductions",
        "Project gallery with details",
        "Resume/CV download link",
        "Contact form & social links",
        "Custom Domain",
      ],
      color: "#b4a7d6",
      popular: false,
    },
    {
      id: 4,
      name: "Event Management",
      price: "R3,499",
      description: "A dedicated website for your special event, wedding, or conference.",
      delivery: "6–8 days",
      features: [
        "Event details & schedule",
        "Photo and video gallery",
        "RSVP guest management",
        "Gift registry links",
        "Password-protected access",
        "Custom Domain",
      ],
      color: "#ff6b6b",
      popular: false,
    },
  ];

  const processSteps = [
    { id: 1, title: "Sitemap", description: "We create a structured blueprint that maps your website's pages and their relationships.", color: "#d4f534", tag: null },
    { id: 2, title: "Wireframes", description: "Wireframes outline layout and functionality, providing a design-ready page structure.", color: "#5dd9c1", tag: "Custom Pack" },
    { id: 3, title: "Design", description: "We craft a visually appealing brand-aligned design for your website.", color: "#b4a7d6", tag: null },
    { id: 4, title: "Build", description: "We bring the design to life with clean, SEO-friendly code using modern frameworks.", color: "#ff6b6b", tag: null }
  ];

  const faqs = [
    {
      category: "Local Coverage",
      icon: MapPin,
      questions: [
        { q: "Do you offer web design services in Midrand?", a: "Yes. We provide full web design and development services across Midrand, including business hubs such as Waterfall City, Kyalami, and Carlswald. Being locally based allows us to meet in person when required." },
        { q: "Are you a Johannesburg-based web design company?", a: "Yes. LM Studios works with clients throughout Johannesburg and Gauteng. Our websites are built with South African users and search behaviour in mind." },
        { q: "Can you meet in person for a consultation?", a: "Yes. We are available for in-person consultations in Midrand, Johannesburg, and surrounding Gauteng areas to discuss project scope, UX/UI, and technical requirements." }
      ]
    },
    {
      category: "Small Business",
      icon: Globe,
      questions: [
        { q: "Do you offer affordable web design for small businesses?", a: "Yes. We provide tailored website solutions for small businesses that need a professional online presence without unnecessary complexity or cost." },
        { q: "Will I be able to manage content myself?", a: "Yes. We build custom content management solutions that allow you to update text, images, and pages without relying on a developer for routine changes." },
        { q: "How long does it take to build a website?", a: "A typical small to medium business website usually takes 2–4 weeks, depending on project scope and content readiness." }
      ]
    },
    {
        category: "Large Business & Enterprise",
        icon: Building2,
        questions: [
            { q: "Do you provide custom web development?", a: "Yes. We specialise in custom web development for businesses that require bespoke functionality, internal systems, or advanced workflows." },
            { q: "Can you integrate with existing systems?", a: "Yes. We offer API integrations with CRM, ERP, accounting, and operational systems to enable seamless data flow." },
            { q: "How do you handle security?", a: "We provide structured maintenance and support services, including updates, monitoring, backups, and security management." }
        ]
    },
    {
        category: "Technical & SEO",
        icon: Server,
        questions: [
          { q: "Do your websites include SEO best practices?", a: "Yes. Every website is built with technical SEO foundations, including fast load speeds, mobile-first design, clean code structure, and schema-ready markup to support Google rankings in South Africa." },
          { q: "Are your websites mobile-friendly?", a: "Yes. All websites we build are fully responsive and tested across devices to ensure consistent performance and usability." },
        ]
      }
  ];

  return (
    <div ref={containerRef} className="min-h-[100dvh] relative text-white bg-black font-sans selection:bg-[#d4f534] selection:text-black overflow-x-hidden">
      
      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "url(/images/dark-background.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- Hero Section --- */}
      <section className="relative z-10 px-4 sm:px-8 py-20 md:py-32 overflow-hidden">
        <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex-1">
            <motion.div variants={fadeInUp} className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold select-none tracking-tight" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", WebkitTextFillColor: "transparent" }}>
                Website Design Company
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4f534]/50 bg-[#d4f534]/10 rounded-full text-[#d4f534] text-xs font-bold tracking-widest uppercase">
                <MapPin className="w-3 h-3" /> Johannesburg & Midrand
              </div>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Responsive Design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">& Development.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-base md:text-lg leading-relaxed max-w-xl text-gray-300 font-light border-l border-white/20 pl-6">
              <p>
                LM Studios is a <strong className="text-white">Johannesburg-based web design company</strong> providing professional website design services. We work with small, growing, and large businesses across South Africa.
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} style={{ y: imageY }} className="flex-1 w-full hidden md:block">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4f534]/20 to-transparent mix-blend-overlay z-10"></div>
              <img src="https://images.unsplash.com/photo-1704652070195-61e76e1466db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" alt="Web Design Johannesburg" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Packages Grid (High-Performance Animation) --- */}
      <section className="relative z-10 px-4 sm:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Packages</h2>
            <p className="text-gray-400 max-w-2xl">We do not use templates. We build custom solutions tailored to your business needs.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-16"
          >
            {packages.map((pkg) => (
              <motion.div 
                key={pkg.id} 
                variants={{
                  hidden: { opacity: 0, y: 100, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      type: "spring",
                      stiffness: 70,
                      damping: 15,
                      mass: 1.2
                    }
                  }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="relative group"
              >
                <div 
                  className="h-full bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative overflow-hidden transition-colors duration-300 group-hover:border-white/20" 
                  style={{ borderColor: pkg.popular ? pkg.color : "rgba(255,255,255,0.1)" }}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 p-4">
                      <motion.span 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="px-3 py-1 text-black rounded-full text-[10px] font-bold inline-block shadow-lg uppercase tracking-wider" 
                        style={{ backgroundColor: pkg.color }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}

                  <div className="mb-5 border-b border-white/10 pb-5">
                    <h3 className="text-xl font-bold mb-1 text-white">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: pkg.color }}>{pkg.price}</span>
                      <span className="text-xs text-gray-500 font-medium">/ once-off</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-xs">{pkg.description}</p>
                  </div>

                  <div className="mb-6 space-y-2.5">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-opacity-20" style={{ backgroundColor: pkg.color }}>
                          <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> <span>Delivery: {pkg.delivery}</span>
                    </div>
                    <button 
                      onClick={() => onPageChange?.("contact")} 
                      className="w-full py-3 rounded-lg font-bold text-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 group/btn relative overflow-hidden" 
                      style={{ backgroundColor: pkg.color }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Choose Plan <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SEO Content: Small vs Large Business --- */}
      <section className="relative z-10 px-4 sm:px-8 py-16 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 lg:order-1">
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">Web Design for <span className="text-[#5dd9c1]">Small & Large</span> Businesses</motion.h2>
                    <motion.div variants={fadeInUp} className="space-y-6 text-gray-300 font-light leading-relaxed">
                        <p>
                            Every business is different. We do not use templates or off-the-shelf website builders. 
                            Our work ranges from focused micro-sites to fully custom-built, content-managed websites tailored to your business needs.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                                <h3 className="text-[#d4f534] font-bold mb-2 flex items-center gap-2"><Smartphone className="w-4 h-4"/> Small Business</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"/> Cost-effective custom solutions</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"/> Fast development timelines</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"/> Full ownership of code</li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                                <h3 className="text-[#5dd9c1] font-bold mb-2 flex items-center gap-2"><Server className="w-4 h-4"/> Large Enterprise</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"/> Fully custom web apps</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"/> Scalable architectures</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"/> Secure integrations</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="order-1 lg:order-2 relative hidden md:block">
                    <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#5dd9c1]/10 rounded-full blur-[80px]"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" alt="Team working" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-4 text-white">Our <span className="text-transparent" style={{ WebkitTextStroke: "1px #d4f534" }}>process</span></motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-400 max-w-xl text-lg">From concept to launch, we craft visually striking websites.</motion.p>
            </div>
            <motion.div variants={fadeInUp} className="flex gap-4 hidden md:flex">
                <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4f534] hover:text-black transition-all"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full bg-[#d4f534] text-black flex items-center justify-center hover:bg-[#c7e81f]"><ChevronRight className="w-6 h-6" /></button>
            </motion.div>
          </motion.div>

          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div ref={scrollRef} className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="snap-center flex-none w-[85vw] md:w-[350px] rounded-[2rem] p-8 relative transition-all hover:-translate-y-2" 
                  style={{ backgroundColor: step.color }}
                >
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center font-bold text-black">{step.id}</div>
                    {step.tag && <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold border border-black/5 text-black uppercase">{step.tag}</span>}
                    <h3 className="text-3xl font-bold mb-4 mt-6 text-black">{step.title}</h3>
                    <p className="text-base font-medium text-black/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO Content: Usability & FAQs --- */}
      <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                 <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#b4a7d6]/10 text-[#b4a7d6] text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-3 h-3"/> Usability & Performance
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Attention to Detail</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    Often, it&apos;s the smallest design and usability decisions that set a website apart. 
                    We prioritise <span className="text-white font-medium">user-focused design, fast page load speeds, and clean code</span>. 
                    Without usability, even the most visually appealing site will underperform.
                 </p>
             </motion.div>

             <div className="space-y-8">
                {faqs.map((section, idx) => (
                    <motion.div 
                        key={idx}
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, margin: "-50px" }} 
                        variants={fadeInUp}
                        className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors"
                    >
                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#d4f534] flex items-center gap-3">
                            <section.icon className="w-6 h-6"/>
                            {section.category}
                        </h3>
                        <div className="space-y-4">
                            {section.questions.map((item, qIdx) => (
                                <FAQItem key={qIdx} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </motion.div>
                ))}
             </div>
        </div>
      </section>

      {/* --- Contact / Location --- */}
      <section className="relative z-10 px-4 py-20 text-center border-t border-white/10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for a web design company in <span className="text-[#d4f534]">Johannesburg or Midrand</span>?</h2>
                <p className="text-gray-400 mb-8 text-lg">LM Studios delivers custom, results-driven web design solutions.</p>
                <button onClick={() => onPageChange?.("contact")} className="bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-[#d4f534] transition-colors shadow-xl">
                    Get a Quote
                </button>
            </motion.div>
      </section>
      <Footer />
    </div>
  );
}

// --- Helper Component: FAQ Accordion ---
function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-start justify-between text-left group py-2"
            >
                <span className="font-bold text-white text-sm md:text-base group-hover:text-[#d4f534] transition-colors pr-4">{question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-2 text-sm text-gray-400 leading-relaxed font-light">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

