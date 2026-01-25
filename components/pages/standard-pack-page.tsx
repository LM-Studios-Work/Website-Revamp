"use client";

import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function StandardPackPage() {
  const packages = [
    {
      id: 1,
      name: "Essential Business",
      price: "R2,499",
      description:
        "A clean, modern 3-page website designed to make your business look credible and accessible.",
      delivery: "5–7 working days",
      features: [
        "3 professionally designed pages",
        "Mobile-responsive layout",
        "Contact form & email setup",
        "Click-to-call & WhatsApp buttons",
        "Social media integration",
        "Basic SEO optimization",
        "Custom Domain",
      ],
      // Changed to Brand Cyan
      color: "#00F0FF",
      popular: false,
    },
    {
      id: 2,
      name: "Professional Growth",
      price: "R4,999",
      description:
        "Perfect for businesses ready to grow, build trust, and showcase their work professionally.",
      delivery: "7–12 working days",
      features: [
        "Up to 6 pages (Home, About, Services...)",
        "Professionally written content",
        "High-quality gallery/portfolio",
        "Client testimonials section",
        "Google Maps integration",
        "Advanced contact forms",
        "Local SEO optimization",
        "Professional email setup",
      ],
      // Kept Teal/Mint as secondary accent
      color: "#5dd9c1",
      popular: true,
    },
    {
      id: 3,
      name: "Personal Portfolio",
      price: "R1,999",
      description:
        "A stunning, modern portfolio to showcase your work, skills, and personality.",
      delivery: "4–6 working days",
      features: [
        "Single-page scrolling design",
        "Animated introductions & effects",
        "Project gallery with descriptions",
        "Resume/CV download link",
        "Contact form & social links",
        "Custom Domain",
      ],
      // Kept Purple
      color: "#b4a7d6",
      popular: false,
    },
    {
      id: 4,
      name: "Event Management",
      price: "R3,499",
      description:
        "A dedicated website for your special event, like a wedding, conference, or party.",
      delivery: "6–8 working days",
      features: [
        "Event details & schedule",
        "Photo and video gallery",
        "RSVP form with guest management",
        "Gift registry links",
        "Password-protected access",
        "Custom Domain",
      ],
      // Kept Red/Pink
      color: "#ff6b6b",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen relative text-white bg-black font-sans selection:bg-[#00F0FF] selection:text-black">
      {/* Global Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)", // Consistent with Home
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none" />

      {/* Navigation (Consistent with other pages) */}
      <div className="relative z-20">
        <nav className="w-full flex justify-end items-center py-8 px-8 md:px-16">
          <ul className="flex space-x-8 text-sm md:text-base font-medium tracking-wide">
            <li>
              <a
                className="hover:text-[#00F0FF] transition-colors duration-200"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#00F0FF] transition-colors duration-200"
                href="#"
              >
                Packages
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#00F0FF] transition-colors duration-200"
                href="#"
              >
                Process
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#00F0FF] transition-colors duration-200"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-8 py-10 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h2
                className="text-4xl md:text-5xl mb-2 font-bold select-none"
                style={{
                  WebkitTextStroke: "2px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Web Design
              </h2>
              <span className="px-4 py-1 border border-[#00F0FF] text-[#00F0FF] rounded-full text-sm inline-block tracking-wider uppercase">
                Fixed Price Packages
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Professional websites
              <br />
              <span className="text-white">for every need.</span>
            </h1>

            <div className="text-base md:text-lg leading-relaxed max-w-xl text-gray-300">
              <p className="mb-4">
                Choose the perfect package for your business. From{" "}
                <strong>
                  simple portfolios to comprehensive business websites
                </strong>
                , we offer fixed-price packages designed to get you online
                quickly and professionally.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,240,255,0.1)] relative">
              <div className="absolute inset-0 bg-[#00F0FF]/10 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1704652070195-61e76e1466db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                alt="Office workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid Section */}
      <section className="relative z-10 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative group transition-all duration-300 hover:border-opacity-50 hover:-translate-y-1"
                style={{
                  borderColor: pkg.popular
                    ? pkg.color
                    : "rgba(255,255,255,0.1)",
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-8">
                    <span
                      className="px-4 py-1 text-black rounded-full text-xs font-bold inline-block shadow-lg"
                      style={{ backgroundColor: pkg.color }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: pkg.color }}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-sm text-gray-400">once-off</span>
                  </div>
                  <p className="text-base leading-relaxed text-gray-300 min-h-[3rem]">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8 space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-opacity-20"
                        style={{ backgroundColor: `${pkg.color}20` }} // 20% opacity background
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: pkg.color }}
                          strokeWidth={4}
                        />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Delivery in {pkg.delivery}</span>
                  </div>

                  <button
                    className="w-full py-4 rounded-full font-bold text-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: pkg.color,
                      boxShadow: `0 0 20px ${pkg.color}40`,
                    }}
                  >
                    Choose Plan <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative z-10 px-8 py-20 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Our{" "}
              <span
                style={{
                  WebkitTextStroke: "1px #00F0FF",
                  color: "transparent",
                }}
              >
                process
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              From concept to launch, we craft user-friendly, visually striking
              websites tailored to your brand.
            </p>
          </div>

          {/* Cards Carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
              {/* Card 1 - Sitemap (Cyan) */}
              <div className="snap-center flex-none w-[85vw] md:w-[350px] bg-[#00F0FF] text-black rounded-3xl p-8 relative group">
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-6 mt-8">Sitemap</h3>
                <p className="text-base leading-relaxed font-medium opacity-80">
                  We create a structured blueprint that maps your website's
                  pages and their relationships.
                </p>
              </div>

              {/* Card 2 - Wireframes (Teal) */}
              <div className="snap-center flex-none w-[85vw] md:w-[350px] bg-[#5dd9c1] text-black rounded-3xl p-8 relative group">
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-bold inline-block border border-black/10">
                    Custom Pack only
                  </span>
                </div>
                <h3 className="text-4xl font-bold mb-6">Wireframes</h3>
                <p className="text-base leading-relaxed font-medium opacity-80">
                  Wireframes outline layout and functionality, providing a
                  design-ready page structure.
                </p>
              </div>

              {/* Card 3 - Design (Purple) */}
              <div className="snap-center flex-none w-[85vw] md:w-[350px] bg-[#b4a7d6] text-black rounded-3xl p-8 relative group">
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-6 mt-8">Design</h3>
                <p className="text-base leading-relaxed font-medium opacity-80">
                  We craft a visually appealing brand-aligned design for your
                  website.
                </p>
              </div>

              {/* Card 4 - Development (Red - Added for completeness based on palette) */}
              <div className="snap-center flex-none w-[85vw] md:w-[350px] bg-[#ff6b6b] text-black rounded-3xl p-8 relative group">
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-6 mt-8">Build</h3>
                <p className="text-base leading-relaxed font-medium opacity-80">
                  We bring the design to life with clean, SEO-friendly code on
                  the Odoo framework.
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8 hidden md:flex">
              <button className="w-12 h-12 rounded-full border border-[#00F0FF] text-[#00F0FF] flex items-center justify-center hover:bg-[#00F0FF] hover:text-black transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#00F0FF] text-black flex items-center justify-center hover:bg-[#00D0E0] transition-all shadow-[0_0_15px_#00F0FF]">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
