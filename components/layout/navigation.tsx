"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageType } from "@/lib/navigation";

interface NavigationProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const isServicePage = currentPage === "web-design" || currentPage === "seo" || currentPage === "app-development";

  const servicePages = [
    { id: "web-design" as const, label: "Web" },
    { id: "seo" as const, label: "SEO" },
    { id: "app-development" as const, label: "Apps" },
  ];

  const handleNavClick = (pageId: PageType) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation - Editorial Style */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}>
        <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}`} />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo - Clean Typography */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="group flex items-baseline gap-1"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              LM
            </span>
            <span className="text-xl md:text-2xl font-light tracking-tight text-white/60 group-hover:text-white transition-colors">
              Studios
            </span>
          </button>

          {/* Desktop Nav - Horizontal with Services Inline */}
          <nav className="hidden md:flex items-center">
            {/* Main Links */}
            <div className="flex items-center border-r border-white/10 pr-8 mr-8">
              <NavLink 
                label="Home" 
                isActive={currentPage === "home"} 
                onClick={() => handleNavClick("home")} 
              />
              <NavLink 
                label="About" 
                isActive={currentPage === "about"} 
                onClick={() => handleNavClick("about")} 
              />
              <NavLink 
                label="Work" 
                isActive={currentPage === "projects"} 
                onClick={() => handleNavClick("projects")} 
              />
            </div>

            {/* Services - Inline, no dropdown */}
            <div className="flex items-center gap-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30 mr-4">Services</span>
              {servicePages.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`relative px-3 py-1.5 text-sm transition-all duration-300 ${
                    currentPage === page.id 
                      ? "text-white" 
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {page.label}
                  {currentPage === page.id && (
                    <motion.span 
                      layoutId="serviceIndicator"
                      className="absolute -bottom-1 left-3 right-3 h-px bg-white"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {idx < servicePages.length - 1 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white/10">/</span>
                  )}
                </button>
              ))}
            </div>

            {/* Contact - Minimal */}
            <button
              onClick={() => handleNavClick("contact")}
              className={`ml-10 text-sm font-medium transition-all duration-300 ${
                currentPage === "contact" 
                  ? "text-black bg-white px-5 py-2" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Toggle - Custom Lines */}
          <button
            type="button"
            className="relative z-10 md:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-[5px]" : "w-8"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0 w-4" : "w-5"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[5px]" : "w-6"}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Editorial */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-black md:hidden"
          >
            <div className="h-full flex flex-col pt-24 px-8 pb-10">
              {/* Main Navigation */}
              <nav className="flex-1 flex flex-col justify-center">
                <div className="space-y-1">
                  <MobileLink 
                    label="Home" 
                    isActive={currentPage === "home"} 
                    onClick={() => handleNavClick("home")}
                    index={0}
                  />
                  <MobileLink 
                    label="About" 
                    isActive={currentPage === "about"} 
                    onClick={() => handleNavClick("about")}
                    index={1}
                  />
                  <MobileLink 
                    label="Work" 
                    isActive={currentPage === "projects"} 
                    onClick={() => handleNavClick("projects")}
                    index={2}
                  />
                </div>

                {/* Services Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/30 block mb-6">Services</span>
                  <div className="grid grid-cols-3 gap-4">
                    {servicePages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => handleNavClick(page.id)}
                        className={`text-left py-3 border-b transition-all duration-300 ${
                          currentPage === page.id 
                            ? "text-white border-white" 
                            : "text-white/40 border-white/10 active:text-white"
                        }`}
                      >
                        <span className="text-lg font-medium">{page.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full bg-white text-black font-medium py-4 text-base transition-colors active:bg-white/90"
                >
                  Get in Touch
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Desktop Nav Link
function NavLink({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
        isActive ? "text-white" : "text-white/40 hover:text-white"
      }`}
    >
      {label}
      {isActive && (
        <motion.span 
          layoutId="navIndicator"
          className="absolute -bottom-1 left-4 right-4 h-px bg-white"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
}

// Mobile Link - Large Typography
function MobileLink({ label, isActive, onClick, index }: { label: string; isActive: boolean; onClick: () => void; index: number }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onClick={onClick}
      className={`block text-left w-full py-2 transition-colors duration-200 ${
        isActive ? "text-white" : "text-white/30 active:text-white"
      }`}
    >
      <span className="text-5xl font-light tracking-tight">{label}</span>
    </motion.button>
  );
}
