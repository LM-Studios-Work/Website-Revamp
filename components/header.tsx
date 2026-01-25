"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type PageType =
  | "web-design"
  | "standard-pack"
  | "calculator"
  | "compare"
  | "projects"
  | "about";

interface HeaderProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
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
    currentPage === "standard-pack" ||
    currentPage === "compare";

  const servicePages = [
    { id: "web-design" as const, label: "Web Design" },
    { id: "standard-pack" as const, label: "Standard Pack" },
    { id: "compare" as const, label: "Compare" },
  ];

  return (
    <header className="px-6 md:px-8 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      {/* Logo */}
      <button
        type="button"
        onClick={() => onPageChange("web-design")}
        className="flex items-center gap-2"
      >
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full border-2 border-white" />
          <div className="w-3 h-3 rounded-full border-2 border-white" />
          <div className="w-3 h-3 rounded-full border-2 border-white" />
          <div className="w-3 h-3 rounded-full border-2 border-white" />
        </div>
        <div className="text-white ml-1">
          <div className="text-xl tracking-wide">odoo</div>
          <div className="text-sm italic -mt-1">web design</div>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-white text-sm">
        <button
          type="button"
          onClick={() => onPageChange("web-design")}
          className="hover:opacity-80 transition-opacity"
        >
          home
        </button>
        <button
          type="button"
          onClick={() => onPageChange("about")}
          className={`hover:opacity-80 transition-opacity pb-1 ${
            currentPage === "about" ? "border-b-2 border-yellow-400" : ""
          }`}
        >
          about us
        </button>
        <button
          type="button"
          onClick={() => onPageChange("projects")}
          className={`hover:opacity-80 transition-opacity pb-1 ${
            currentPage === "projects" ? "border-b-2 border-yellow-400" : ""
          }`}
        >
          projects
        </button>

        {/* Services Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setServicesOpen(!servicesOpen)}
            className={`hover:opacity-80 transition-opacity flex items-center gap-1 pb-1 ${
              isServicePage ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            services
            <ChevronDown
              className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-xl p-2 min-w-[180px] shadow-xl">
              {servicePages.map((page) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => {
                    onPageChange(page.id);
                    setServicesOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                    currentPage === page.id ? "text-primary" : "text-white"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => onPageChange("calculator")}
          className={`hover:opacity-80 transition-opacity pb-1 ${
            currentPage === "calculator" ? "border-b-2 border-yellow-400" : ""
          }`}
        >
          calculator
        </button>
        <button
          type="button"
          className="hover:opacity-80 transition-opacity"
        >
          contact
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                onPageChange("web-design");
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-primary transition-colors py-2 text-left"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => {
                onPageChange("about");
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-primary transition-colors py-2 text-left"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => {
                onPageChange("projects");
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-primary transition-colors py-2 text-left"
            >
              Projects
            </button>

            <div className="border-t border-border pt-4 mt-2">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">
                Services
              </p>
              {servicePages.map((page) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => {
                    onPageChange(page.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 transition-colors ${
                    currentPage === page.id
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                onPageChange("calculator");
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-primary transition-colors py-2 text-left"
            >
              Calculator
            </button>
            <button
              type="button"
              className="text-white hover:text-primary transition-colors py-2 text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
