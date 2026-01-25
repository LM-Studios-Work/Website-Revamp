"use client";

import { ArrowRight, Sparkles, TrendingUp, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white bg-black">
      {/* Global Background 
         Using a fixed dark background to maintain the "studio" vibe throughout 
      */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)", // Ensure this image exists or use a dark color fallback
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark Overlay for readability */}
      <div className="fixed inset-0 z-0 bg-black/50 pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col">
        {/* =========================================
            HERO SECTION (LM Studios Brand)
           ========================================= */}
        <header className="relative w-full min-h-screen flex flex-col justify-between px-8 md:px-16 lg:px-24 pb-16">
          {/* Navigation */}
          <nav className="w-full flex justify-end items-center py-8">
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
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#00F0FF] transition-colors duration-200"
                  href="#"
                >
                  Why Us
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

          {/* Hero Text */}
          <div className="flex-grow flex flex-col justify-center max-w-[800px] mt-10 md:mt-0">
            <div className="relative mb-8">
              <div className="flex items-baseline leading-none select-none">
                <span
                  className="font-bold text-7xl md:text-8xl tracking-tighter mr-4"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px white",
                  }}
                >
                  LM
                </span>
                <div className="flex flex-col w-max">
                  <span className="font-bold text-white text-7xl md:text-8xl tracking-tight">
                    Studios
                  </span>
                  <div className="bg-[#00F0FF] h-[10px] rounded-[5px] w-full mt-2 shadow-[0_0_15px_rgba(0,240,255,0.6)]"></div>
                </div>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Innovative Web Design
                <br />
                for a Digital World.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-2xl font-light leading-relaxed text-gray-300">
                Crafting user-centric digital experiences with a focus on modern
                aesthetics, clean code, and Odoo integration.
              </p>
            </div>

            <div>
              <button className="bg-[#00F0FF] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-[#00D0E0] transition-colors text-lg shadow-lg shadow-[#00F0FF]/20">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block opacity-50">
            <ArrowRight className="w-6 h-6 rotate-90" />
          </div>
        </header>

        {/* =========================================
            SERVICES SECTION (New Content - Adapted Colors)
           ========================================= */}
        <section className="px-8 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-6xl font-bold text-white mb-4">
                Our{" "}
                <span
                  style={{
                    WebkitTextStroke: "1px #00F0FF",
                    color: "transparent",
                  }}
                >
                  services
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl">
                We offer comprehensive digital solutions to elevate your online
                presence and drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1: Web Design */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#00F0FF] transition-all group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#00F0FF]/10 z-10 group-hover:bg-transparent transition-colors"></div>
                  <img
                    src="https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?auto=format&fit=crop&w=1080&q=80"
                    alt="Web Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00F0FF] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Web Design
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Crafting beautiful, user-friendly websites tailored to
                        your brand
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our web design services combine stunning visuals with
                    seamless functionality. Whether you need a standard website
                    built with Odoo's native features or a fully custom
                    solution.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-300">
                    {[
                      "Custom & Standard Pack options",
                      "Responsive design for all devices",
                      "Built with Odoo Website Builder",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#00F0FF] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Service 2: SEO Optimization */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400 transition-all group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-purple-500/10 z-10 group-hover:bg-transparent transition-colors"></div>
                  <img
                    src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?auto=format&fit=crop&w=1080&q=80"
                    alt="SEO Optimization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        SEO Optimization
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Boost your visibility and drive organic traffic
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get found by your target audience. We optimize your
                    website's structure, content, and technical elements to
                    improve search engine rankings.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-300">
                    {[
                      "Keyword research & strategy",
                      "On-page & technical SEO",
                      "Performance tracking & reporting",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="text-purple-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CUSTOM PACK / DEEP DIVE (Old "Behind Scenes" Section)
           ========================================= */}
        <section className="px-8 py-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Image with annotation */}
            <div className="relative flex-1">
              <div className="absolute -top-12 left-8 z-10">
                <div className="text-white font-handwriting text-xl rotate-[-5deg]">
                  Behind <br /> the scenes
                </div>
                <svg
                  className="ml-8"
                  width="60"
                  height="80"
                  viewBox="0 0 60 80"
                >
                  <path
                    d="M 30 10 Q 25 40, 15 70"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="15" cy="70" r="3" fill="white" />
                </svg>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 text-white">
              <div className="mb-4 flex items-center">
                <span className="text-4xl font-light tracking-wide">
                  Custom Pack
                </span>
                <span className="ml-4 px-4 py-1 border border-[#00F0FF] text-[#00F0FF] rounded-full text-sm inline-block">
                  100h min.
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Tailored web design <br /> development
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                <p>
                  Our <strong>Custom Pack</strong> is perfect for businesses
                  seeking a fully tailored website with a unique design and
                  specialized functionalities. This package includes a
                  comprehensive process:{" "}
                  <strong>
                    sitemap creation, wireframing, prototyping, and full-stack
                    development.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            WHY CHOOSE US (New Content - Adapted Colors)
           ========================================= */}
        <section className="px-8 py-20 bg-gradient-to-b from-transparent to-black/80">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-5xl font-bold text-white mb-8">
                  Why choose <span className="text-[#00F0FF]">Odoo</span> web
                  design?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Expert Team",
                      desc: "Our experienced designers and developers bring your vision to life with precision.",
                    },
                    {
                      title: "Proven Results",
                      desc: "We deliver websites that not only look great but also drive conversions.",
                    },
                    {
                      title: "Odoo Integration",
                      desc: "Seamlessly integrate your website with Odoo's powerful suite of apps.",
                    },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00F0FF]/50 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00F0FF]" />{" "}
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 pl-7">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00F0FF]/10">
                  <img
                    src="https://images.unsplash.com/photo-1758518729685-f88df7890776?auto=format&fit=crop&w=1080&q=80"
                    alt="Modern office"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CTA SECTION (New Content - Adapted Colors)
           ========================================= */}
        <section className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#00F0FF] rounded-3xl p-16 text-center relative overflow-hidden group">
              {/* Decorative background circle */}
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full origin-center"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Ready to transform your online presence?
                </h2>
                <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                  Let's discuss your project and create a website that drives
                  results for your business.
                </p>
                <button className="bg-black text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors text-lg mx-auto shadow-xl">
                  Start your project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
