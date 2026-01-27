"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight, Monitor, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageType } from "@/lib/navigation";

interface NavigationProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const isServicePage = currentPage === "web-design" || currentPage === "seo";

  const servicePages = [
    { id: "web-design" as const, label: "Web Design", icon: Monitor, desc: "Custom & Responsive" },
    { id: "seo" as const, label: "SEO Services", icon: Package, desc: "Rank Higher" },
  ];

  const handleNavClick = (pageId: PageType) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* --- HEADER BAR --- 
        Added: Stronger blur, grainy feel via border-b, and distinct z-index stacking.
      */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 transition-all duration-300">
        
        {/* Glass Background Layer */}
        <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 shadow-lg" />

        {/* --- Logo --- */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="relative z-10 flex items-center gap-3 group"
        >
          {/* Logo Icon with depth */}
          <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border border-white/20 rounded-xl bg-white/5 group-hover:border-[#d4f534]/50 group-hover:shadow-[0_0_15px_rgba(212,245,52,0.3)]">
            <span className="font-bold text-xs text-white group-hover:text-[#d4f534]">LM</span>
          </div>
          {/* Text */}
          <div className="flex flex-col items-start">
            <span className="text-lg font-bold leading-none tracking-tight text-white transition-colors group-hover:text-gray-200">
              LM Studios
            </span>
          </div>
        </button>

        {/* --- Desktop Navigation --- */}
        <nav className="relative z-10 hidden items-center gap-1 md:flex">
          <DesktopNavLink 
            label="Home" 
            isActive={currentPage === "home"} 
            onClick={() => handleNavClick("home")} 
          />
          <DesktopNavLink 
            label="About Us" 
            isActive={currentPage === "about"} 
            onClick={() => handleNavClick("about")} 
          />
          <DesktopNavLink 
            label="Projects" 
            isActive={currentPage === "projects"} 
            onClick={() => handleNavClick("projects")} 
          />

          {/* Services Dropdown Trigger */}
          <div className="relative px-1" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                isServicePage || servicesOpen
                  ? "border-[#d4f534]/30 text-[#d4f534] bg-[#d4f534]/10 shadow-[0_0_15px_-5px_rgba(212,245,52,0.5)]" 
                  : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Premium Dropdown Menu */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "circOut" }}
                  className="absolute right-0 top-full mt-4 w-72 p-2 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-white/5"
                >
                  <div className="flex flex-col gap-1">
                    {servicePages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => handleNavClick(page.id)}
                        className={`group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 border border-transparent ${
                          currentPage === page.id 
                            ? "bg-[#1a1a1a] border-white/5" 
                            : "hover:bg-[#111] hover:border-white/5"
                        }`}
                      >
                        <div className={`p-2.5 rounded-lg transition-colors ${
                          currentPage === page.id ? "bg-[#d4f534] text-black" : "bg-white/5 text-gray-400 group-hover:text-white"
                        }`}>
                          <page.icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className={`text-sm font-bold transition-colors ${
                            currentPage === page.id ? "text-[#d4f534]" : "text-gray-200 group-hover:text-white"
                          }`}>
                            {page.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 font-medium">{page.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact CTA */}
          <div className="ml-4 pl-4 border-l border-white/10">
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-white text-black hover:bg-[#d4f534] transition-colors px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2"
            >
              Contact
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </nav>

        {/* --- Mobile Menu Toggle --- */}
        <button
          type="button"
          className="relative z-10 flex items-center justify-center w-10 h-10 text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* --- MOBILE MENU (High Fidelity) --- 
        Matches Reference Image 2: Dark, large typography, glowing active state, bottom CTA.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#050505] md:hidden"
          >
            {/* Mobile Header */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex items-center justify-end px-6 py-6 border-b border-white/5"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-white/5 text-gray-400 active:text-white active:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Mobile Links - Smooth Fade In */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
              className="flex flex-col justify-center flex-1 px-8 space-y-2"
            >
              <div className="flex flex-col gap-6">
                <MobileBigLink 
                  label="Home" 
                  isActive={currentPage === "home"} 
                  onClick={() => handleNavClick("home")} 
                />
                <MobileBigLink 
                  label="About Us" 
                  isActive={currentPage === "about"} 
                  onClick={() => handleNavClick("about")} 
                />
                <MobileBigLink 
                  label="Projects" 
                  isActive={currentPage === "projects"} 
                  onClick={() => handleNavClick("projects")} 
                />
                
                {/* Services Section in Mobile */}
                <div className="pt-4">
                  <div className={`text-3xl font-bold mb-4 transition-colors ${isServicePage ? "text-[#d4f534] drop-shadow-[0_0_15px_rgba(212,245,52,0.4)]" : "text-white"}`}>
                    Services
                    {isServicePage && <span className="block h-1 w-12 bg-[#d4f534] mt-2 rounded-full" />}
                  </div>
                  <div className="pl-4 space-y-4 border-l-2 border-white/10">
                    {servicePages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => handleNavClick(page.id)}
                        className={`flex items-center gap-3 text-lg font-medium transition-colors duration-200 ${
                          currentPage === page.id ? "text-[#d4f534]" : "text-gray-400 active:text-white"
                        }`}
                      >
                         <span className="capitalize">{page.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <MobileBigLink 
                  label="Calculator" 
                  isActive={currentPage === "calculator"} 
                  onClick={() => handleNavClick("calculator")} 
                />
              </div>
            </motion.div>

            {/* Mobile CTA Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 pb-8 border-t border-white/10"
            >
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full bg-[#d4f534] text-black font-bold py-3 px-4 rounded-lg text-sm transition-colors active:bg-[#c7e81f]"
              >
                Contact
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Helper Components ---

function DesktopNavLink({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
      {/* Glow Effect for Active State */}
      {isActive && (
        <motion.div
          layoutId="navGlow"
          className="absolute inset-0 rounded-full bg-white/5 -z-10 blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      {/* Bottom active indicator */}
      {isActive && (
         <motion.div 
           layoutId="navUnderline"
           className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d4f534] rounded-full shadow-[0_0_8px_#d4f534]" 
         />
      )}
    </button>
  );
}

function MobileBigLink({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`text-left text-4xl font-bold tracking-tight transition-colors duration-200 touch-manipulation ${
        isActive 
        ? "text-[#d4f534] drop-shadow-[0_0_15px_rgba(212,245,52,0.4)]" // The "Neon" look
        : "text-white active:text-gray-200"
      }`}
    >
      {label}
      {isActive && <div className="h-1 w-12 bg-[#d4f534] mt-2 rounded-full shadow-[0_0_10px_#d4f534]" />}
    </button>
  )
}
