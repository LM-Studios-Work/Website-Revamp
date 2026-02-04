"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Globe,
  Server,
  Clock,
  Zap,
  Code,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { PageType } from "@/lib/navigation";
import { appPackages, appProcessSteps, appDevFAQs } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

import { PageLayout, Breadcrumb, PageBadge } from "@/components/shared/page-layout";
import { PackageCard } from "@/components/shared";

interface AppDevelopmentPageProps {
  onPageChange?: (page: PageType) => void;
}

const faqIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Clock,
  Server,
};

export default function AppDevelopmentPage({ onPageChange }: AppDevelopmentPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <PageLayout solidBackground vignette currentPage="app-development" onPageChange={onPageChange}>
      <div className="relative z-10">
        <HeroSection onPageChange={onPageChange} />
        <TechStackSection />
        <PackagesSection onPageChange={onPageChange} />
        <ProcessSection scrollRef={scrollRef} scroll={scroll} />
        <FAQsSection />
        <CTASection onPageChange={onPageChange} />
      </div>
    </PageLayout>
  );
}

function HeroSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6ee2d1]/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumb
          items={[
            { label: "Home", onClick: () => onPageChange?.("home") },
            { label: "App Development" },
          ]}
          accentColor="#6ee2d1"
        />

        <div className="flex items-center gap-3 mb-6">
          <PageBadge color="#6ee2d1">App Development</PageBadge>
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
            Build apps that <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              users love.
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path d="M2 10C50 2 150 2 298 10" stroke="#6ee2d1" strokeWidth="4" strokeLinecap="round" />
              </motion.svg>
            </span>
          </h1>
        </motion.div>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-6">
          From concept to launch, we build high-performance mobile and web applications that engage users and drive business growth.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mb-10">
          <h3 className="text-sm font-bold text-[#6ee2d1] mb-3 uppercase tracking-wider">What We Build</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We develop native iOS and Android applications, cross-platform solutions using React Native and Flutter, Progressive Web Apps (PWAs), and custom web applications. Our team handles everything from UI/UX design to backend development and app store deployment.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onPageChange?.("contact")}
            className="bg-[#6ee2d1] text-black font-bold py-4 px-8 rounded-full hover:bg-[#5dd9c1] hover:scale-105 transition-all shadow-[0_0_30px_rgba(110,226,209,0.3)]"
          >
            Start Your Project
          </button>
          <button
            onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all"
          >
            View Packages
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[60%] opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 400 200" className="w-full h-full text-[#6ee2d1] drop-shadow-[0_0_10px_rgba(110,226,209,0.5)]">
          <rect x="50" y="20" width="100" height="160" rx="20" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="250" y="40" width="120" height="80" rx="8" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
          <circle cx="100" cy="160" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M150 100 L250 80" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>
    </div>
  );
}

function TechStackSection() {
  const technologies = [
    { name: "React Native", icon: Smartphone, description: "Cross-platform mobile" },
    { name: "Swift / Kotlin", icon: Code, description: "Native development" },
    { name: "Next.js", icon: Globe, description: "Web applications" },
    { name: "Node.js", icon: Server, description: "Backend services" },
  ];

  return (
    <div className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6ee2d1]/30 transition-colors"
            >
              <tech.icon className="w-8 h-8 text-[#6ee2d1] mb-3" />
              <span className="text-white font-bold text-sm">{tech.name}</span>
              <span className="text-muted-foreground text-xs mt-1">{tech.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PackagesSection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <section id="packages" className="relative z-10 px-4 sm:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#6ee2d1]">App Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            From simple mobile apps to complex enterprise solutions, we have a package that fits your needs and budget.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {appPackages.map((pkg) => (
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
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection({
  scrollRef,
  scroll,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  scroll: (direction: "left" | "right") => void;
}) {
  return (
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
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Our <span className="text-transparent" style={{ WebkitTextStroke: "1px #6ee2d1" }}>process</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl text-lg">
              A proven development workflow that delivers quality apps on time and within budget.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp} className="gap-4 hidden md:flex">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#6ee2d1] hover:text-black transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#6ee2d1] text-black flex items-center justify-center hover:bg-[#5dd9c1]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {appProcessSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="snap-center flex-none w-[85vw] md:w-[350px] rounded-[2rem] p-8 relative transition-all hover:-translate-y-2"
                style={{ backgroundColor: step.color.replace("bg-[", "").replace("]", "") }}
              >
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center font-bold text-black">
                  {step.id}
                </div>
                {step.tag && (
                  <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold border border-black/5 text-black uppercase">
                    {step.tag}
                  </span>
                )}
                <h3 className="text-3xl font-bold mb-4 mt-6 text-black">{step.title}</h3>
                <p className="text-base font-medium text-black/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQsSection() {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-16 md:py-24 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#6ee2d1]/10 text-[#6ee2d1] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3 h-3" /> Questions & Answers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know about our app development services.
          </p>
        </motion.div>

        <div className="space-y-8">
          {appDevFAQs.map((section, idx) => {
            const IconComponent = faqIcons[section.icon] || Globe;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#6ee2d1] flex items-center gap-3">
                  <IconComponent className="w-6 h-6" />
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <FAQItem key={qIdx} question={item.q} answer={item.a} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-start justify-between text-left group py-2">
        <span className="font-bold text-white text-sm md:text-base group-hover:text-[#6ee2d1] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pt-2 text-sm text-muted-foreground leading-relaxed font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CTASection({ onPageChange }: { onPageChange?: (page: PageType) => void }) {
  return (
    <div className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6ee2d1]/10 blur-[100px] -mr-48 -mt-48" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#6ee2d1] animate-pulse" />
                Available for new projects
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                {"Let's build your"} <br />
                <span className="text-[#6ee2d1]">next app.</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Ready to bring your app idea to life? Contact us for a free consultation and project estimate.
              </p>

              <div className="space-y-4">
                {[
                  "Free Project Consultation",
                  "Detailed Technical Proposal",
                  "Transparent Pricing",
                  "Dedicated Project Manager",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-muted-foreground">
                    <svg className="w-5 h-5 text-[#6ee2d1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="bg-[#6ee2d1] text-black font-bold py-5 px-10 rounded-full hover:bg-[#5dd9c1] hover:scale-105 transition-all text-lg shadow-[0_0_40px_rgba(110,226,209,0.3)]"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
