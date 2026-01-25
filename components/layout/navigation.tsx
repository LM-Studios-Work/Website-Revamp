"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Monitor, Package, Calculator, Layers, Info } from "lucide-react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const isServicePage =
    currentPage === "web-design" ||
    currentPage === "seo";

  const servicePages = [
    { id: "web-design" as const, label: "Web Design", icon: Monitor, desc: "Custom & Responsive" },
    { id: "seo" as const, label: "SEO Services", icon: Package, desc: "Rank Higher" },
  ];

  const navLinks = [
    { id: "home", label: "Home", icon: Sparkles },
    { id: "about", label: "About", icon: Info },
    { id: "projects", label: "Projects", icon: Layers },
  ];

  const handleNavClick = (pageId: PageType) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="px-6 md:px-12 py-5 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        {/* --- Logo --- */}
        <button
          type="button"
          onClick={() => { handleNavClick("home"); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full border-2 border-white group-hover:border-[#d4f534] transition-colors flex items-center justify-center">
             <span className="font-bold text-[10px] text-white group-hover:text-[#d4f534]">LM</span>
          </div>
          <div className="text-white text-left">
            <div className="font-bold text-lg tracking-tight leading-none group-hover:text-[#d4f534] transition-colors">LM Studios</div>
          </div>
        </button>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Home */}
          <DesktopNavLink 
            label="Home" 
            isActive={currentPage === "home"} 
            onClick={() => handleNavClick("home")} 
          />

          {/* About */}
          <DesktopNavLink 
            label="About" 
            isActive={currentPage === "about"} 
            onClick={() => handleNavClick("about")} 
          />

          {/* Projects */}
          <DesktopNavLink 
            label="Projects" 
            isActive={currentPage === "projects"} 
            onClick={() => handleNavClick("projects")} 
          />

          {/* Services Dropdown */}
          <div className="relative px-2" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isServicePage 
                  ? "text-black bg-[#d4f534] font-bold shadow-[0_0_15px_rgba(212,245,52,0.3)]" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-4 w-64 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-2 overflow-hidden backdrop-blur-3xl"
                >
                  {servicePages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => handleNavClick(page.id)}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all ${
                        currentPage === page.id 
                          ? "bg-white/10" 
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${currentPage === page.id ? "bg-[#d4f534] text-black" : "bg-white/5 text-gray-400"}`}>
                        <page.icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className={`text-sm font-bold ${currentPage === page.id ? "text-[#d4f534]" : "text-white"}`}>
                          {page.label}
                        </div>
                        <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{page.desc}</div>
                      </div>
                    </button>
                  ))}
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

        {/* --- Mobile Menu Button --- */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-50 bg-black/95 backdrop-blur-xl border-l border-white/10 md:hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-6 space-y-6">
                {/* Main Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id as PageType)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === link.id
                          ? "text-white bg-white/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                {/* Services */}
                <div>
                  <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider font-medium">Services</div>
                  <div className="space-y-1 mt-2">
                    {servicePages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => handleNavClick(page.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === page.id
                            ? "text-white bg-white/10"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {page.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="w-full bg-[#d4f534] text-black font-bold py-3 px-4 rounded-lg text-sm transition-colors hover:bg-[#c7e81f]"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          </>
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
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {label}
      {isActive && (
        <motion.div 
            layoutId="activeNav"
            className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#d4f534] shadow-[0_0_10px_#d4f534]" 
        />
      )}
    </button>
  );
}

function MobileNavLink({ label, isActive, onClick, icon: Icon }: { label: string, isActive: boolean, onClick: () => void, icon: any }) {
    return (
        <button 
            onClick={onClick}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${
                isActive 
                ? "bg-white/10 border-white/20 text-white" 
                : "bg-transparent border-transparent hover:bg-white/5 text-gray-400 hover:text-white"
            }`}
        >
            <div className={`p-2 rounded-lg ${isActive ? "bg-[#d4f534] text-black" : "bg-white/5 text-gray-500"}`}>
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold">{label}</span>
            {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-[#d4f534] shadow-[0_0_10px_#d4f534]" />}
        </button>
    )
}
