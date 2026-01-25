"use client";

export default function SEOPage() {
  return (
    <div className="min-h-screen relative text-white bg-black font-sans">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="fixed inset-0 z-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <section className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 flex items-baseline gap-4">
              <span>SEO</span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px white",
                }}
              >
                Services
              </span>
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mb-12">
              Search engine optimization services to help your business get
              found online and rank higher in search results.
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center">
              <p className="text-gray-400">
                SEO services page coming soon. Get in touch with us to learn
                more about our SEO offerings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
