"use client";

export default function WebDesignPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white">
      {/* Background 
        Kept from your original code.
      */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay for better text readability (Optional, matches Source 2 dark vibe) */}
      <div className="fixed inset-0 z-0 bg-black/40 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* =========================================
            NEW HERO SECTION (Integrated from Source 2)
           ========================================= */}
        <header className="relative w-full min-h-screen flex flex-col justify-between px-8 md:px-16 lg:px-24 pb-16">
          {/* Main Hero Content */}
          <div className="flex-grow flex flex-col justify-center max-w-[750px] mt-10 md:mt-0">
            {/* Brand Logo Area */}
            <div className="relative mb-8">
              <div className="flex items-baseline leading-none select-none">
                {/* "LM" Outline Text - Using inline style for the text-stroke effect */}
                <span
                  className="font-bold text-7xl md:text-8xl tracking-tighter mr-4"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px white",
                  }}
                >
                  LM
                </span>

                {/* "Studios" Solid Text & Underline Container */}
                <div className="flex flex-col w-max">
                  <span className="font-bold text-white text-7xl md:text-8xl tracking-tight">
                    Studios
                  </span>
                  {/* Cyan Underline Bar */}
                  <div className="bg-[#00F0FF] h-[10px] rounded-[5px] w-full mt-2 shadow-[0_0_15px_rgba(0,240,255,0.6)]"></div>
                </div>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-8 mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Innovative Web Design
                <br />
                for a Digital World.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-2xl font-light leading-relaxed text-gray-300">
                Crafting user-centric digital experiences with a focus on modern
                aesthetics and clean code.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#"
                className="inline-block bg-[#00F0FF] hover:bg-[#00D0E0] text-black font-bold text-lg px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg shadow-[#00F0FF]/20"
              >
                Start Your Project.
              </a>
            </div>
          </div>

          {/* Scroll Indicator (Optional addition to connect the two sections) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </header>

        {/* =========================================
            ORIGINAL CUSTOM PACK SECTION (From Source 1)
           ========================================= */}
        <section className="px-8 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Image with annotation */}
            <div className="relative flex-1">
              <div className="absolute -top-12 left-8 z-10">
                <div className="text-white font-handwriting text-xl rotate-[-5deg]">
                  Behind
                  <br />
                  the scenes
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

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 text-white">
              <div className="mb-4 flex items-center">
                <span
                  className="text-4xl font-light tracking-wide"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Custom Pack
                </span>
                <span className="ml-4 px-4 py-1 border-2 border-white rounded-full text-sm inline-block">
                  100h min.
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Tailored web design
                <br />
                development
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
      </div>
    </div>
  );
}
