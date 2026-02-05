"use client";

import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import type { PageType } from "@/lib/navigation";

interface FooterProps {
  currentPage?: PageType;
  onPageChange?: (page: PageType) => void;
}

// Page accent colors mapping
const pageAccentColors: Record<PageType, string> = {
  "home": "#d4f534",
  "about": "#d4f534",
  "projects": "#d4f534",
  "web-design": "#d4f534",
  "seo": "#c084fc",
  "app-development": "#6ee2d1",
  "contact": "#d4f534",
  "midrand-web-design": "#d4f534",
  "centurion-web-design": "#d4f534",
  "sandton-web-design": "#d4f534",
  "thohoyandou-web-design": "#d4f534",
  "pretoria-web-design": "#d4f534",
  "polokwane-web-design": "#d4f534",
  "johannesburg-web-design": "#d4f534",
  "kempton-park-web-design": "#d4f534",
};

export function Footer({ currentPage = "home", onPageChange }: FooterProps) {
  const accentColor = pageAccentColors[currentPage] || "#d4f534";
  
  const serviceLinks = [
    { id: "web-design" as PageType, label: "Web Design" },
    { id: "seo" as PageType, label: "SEO Optimization" },
    { id: "app-development" as PageType, label: "App Development" },
  ];

  const handleNavClick = (page: PageType) => {
    onPageChange?.(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <div className="text-2xl font-bold">
              LM<span style={{ color: accentColor }}> Studios</span>
            </div>
            <p className="text-white/50 leading-relaxed text-sm">
              Your All-in-one Business Solution | Creative Digital Agency | Web design company | SEO (Search Engine Optimisation)
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white/50 cursor-pointer transition-colors" style={{ ["--hover-color" as string]: accentColor }} onMouseEnter={(e) => e.currentTarget.style.color = accentColor} onMouseLeave={(e) => e.currentTarget.style.color = ""} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white/50 cursor-pointer transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = accentColor} onMouseLeave={(e) => e.currentTarget.style.color = ""} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white/50 cursor-pointer transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = accentColor} onMouseLeave={(e) => e.currentTarget.style.color = ""} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-white/50 cursor-pointer transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = accentColor} onMouseLeave={(e) => e.currentTarget.style.color = ""} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-white/50">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleNavClick(service.id)}
                    className="transition-colors text-left"
                    style={{ color: currentPage === service.id ? accentColor : undefined }}
                    onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = currentPage === service.id ? accentColor : ""}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-white/50">
              <li>
                <button 
                  onClick={() => handleNavClick("about")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "about" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "about" ? accentColor : ""}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("projects")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "projects" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "projects" ? accentColor : ""}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("contact")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "contact" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "contact" ? accentColor : ""}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Areas We Serve</h4>
            <ul className="space-y-4 text-white/50">
              <li>
                <button 
                  onClick={() => handleNavClick("midrand-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "midrand-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "midrand-web-design" ? accentColor : ""}
                >
                  Midrand
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("centurion-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "centurion-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "centurion-web-design" ? accentColor : ""}
                >
                  Centurion
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("sandton-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "sandton-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "sandton-web-design" ? accentColor : ""}
                >
                  Sandton
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("thohoyandou-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "thohoyandou-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "thohoyandou-web-design" ? accentColor : ""}
                >
                  Thohoyandou
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("pretoria-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "pretoria-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "pretoria-web-design" ? accentColor : ""}
                >
                  Pretoria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("polokwane-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "polokwane-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "polokwane-web-design" ? accentColor : ""}
                >
                  Polokwane
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("johannesburg-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "johannesburg-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "johannesburg-web-design" ? accentColor : ""}
                >
                  Johannesburg
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("kempton-park-web-design")}
                  className="transition-colors text-left"
                  style={{ color: currentPage === "kempton-park-web-design" ? accentColor : undefined }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === "kempton-park-web-design" ? accentColor : ""}
                >
                  Kempton Park
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" style={{ color: accentColor }} />
                <a 
                  href="mailto:hello@lmstudios.co.za" 
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = ""}
                >
                  hello@lmstudios.co.za
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" style={{ color: accentColor }} />
                <a 
                  href="tel:+27111234567" 
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = ""}
                >
                  +27 (0) 11 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4" style={{ color: accentColor }} />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-white/30 text-sm">
          <p className="mb-4">
            Website Design Johannesburg | Web Design Midrand | Web Designers South Africa | Top Website Design Company in South Africa | Website Designing | Website Hosting
          </p>
          <p>© {new Date().getFullYear()} LM Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
