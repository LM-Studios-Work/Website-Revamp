import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-20 bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              odoo<span className="text-[#d4ff3f]">web design</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Your All-in-one Business Solution | Creative Digital Agency | Web design company | SEO (Search Engine Optimisation)
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white/50 hover:text-[#d4ff3f] cursor-pointer transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white/50 hover:text-[#d4ff3f] cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white/50 hover:text-[#d4ff3f] cursor-pointer transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-white/50 hover:text-[#d4ff3f] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-white/50">
              <li>
                <Link href="/services/web-design" className="hover:text-[#d4ff3f] transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-[#d4ff3f] text-[#d4ff3f] transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4ff3f] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4ff3f] transition-colors">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-white/50">
              <li>
                <Link href="/privacy" className="hover:text-[#d4ff3f] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="hover:text-[#d4ff3f] transition-colors">
                  Returns and Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="hover:text-[#d4ff3f] transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4ff3f]" />
                <a href="mailto:hello@odooweb.co.za" className="hover:text-[#d4ff3f] transition-colors">
                  hello@odooweb.co.za
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4ff3f]" />
                <a href="tel:+27111234567" className="hover:text-[#d4ff3f] transition-colors">
                  +27 (0) 11 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#d4ff3f]" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-white/30 text-sm">
          <p className="mb-4">
            Website Design Johannesburg | Web Designers South Africa | Top Website Design Company in South Africa | Website Designing | Website Hosting
          </p>
          <p>© {new Date().getFullYear()} Odoo Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
