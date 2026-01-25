"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNavigation, servicePages, PageType } from "@/lib/navigation";

interface NavigationProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicePage =
    currentPage === "web-design" ||
    currentPage === "seo" ||
    currentPage === "compare";

  const handleNavClick = (pageId: PageType) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <div className="flex items-center">
        <button
          onClick={() => handleNavClick("home")}
          className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors touch-manipulation"
        >
          LM Studios
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2">
        {mainNavigation.map((link) => {
          return (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === link.id
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          );
        })}

        {/* Services Dropdown - Separate from main nav */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${
              isServicePage
                ? "text-primary bg-primary/10"
                : "text-foreground hover:text-primary"
            }`}
          >
            Services
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2">
              {servicePages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`w-full text-left px-4 py-2 transition-colors ${
                    currentPage === page.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-foreground p-2 touch-manipulation hover:bg-white/5 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="p-4 sm:p-5 space-y-1">
            {mainNavigation.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all touch-manipulation text-base sm:text-lg ${
                  currentPage === link.id
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-foreground hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            {servicePages.length > 0 && (
              <>
                <div className="border-t border-border my-3 pt-3">
                  <p className="px-4 py-2 text-xs sm:text-sm text-muted-foreground font-semibold uppercase tracking-wider">Services</p>
                  {servicePages.map((page) => (
                    <button
                      key={page.id}
                      onClick={() => handleNavClick(page.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all touch-manipulation ${
                        currentPage === page.id
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
