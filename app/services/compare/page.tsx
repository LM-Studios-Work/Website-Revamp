"use client";

import { Check, X } from "lucide-react";
import { servicePackages } from "@/lib/services";

const comparisonFeatures = [
  "Pages Included",
  "Mobile Responsive",
  "Contact Forms",
  "SEO Optimization",
  "Social Integration",
  "Gallery/Portfolio",
  "Testimonials Section",
  "Custom Domain",
  "Email Setup",
  "Analytics Setup",
  "Delivery Time",
  "Revisions Included",
];

export default function ComparePage() {
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Compare Our{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #d4f534",
                }}
              >
                Packages
              </span>
            </h1>

            <p className="text-gray-300 text-xl max-w-3xl mb-12">
              Find the perfect package for your business needs. All packages
              include professional design, responsive layouts, and dedicated
              support.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 font-bold text-white">
                      Feature
                    </th>
                    {servicePackages.map((pkg) => (
                      <th
                        key={pkg.id}
                        className="text-center px-6 py-4 font-bold text-white"
                      >
                        <div className="text-sm">{pkg.name}</div>
                        <div className="text-2xl font-bold mt-2">{pkg.price}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-300">{feature}</td>
                      {servicePackages.map((pkg) => (
                        <td key={pkg.id} className="text-center px-6 py-4">
                          {feature === "Pages Included" && (
                            <span className="text-[#d4f534]">
                              {pkg.id === "startup" && "3"}
                              {pkg.id === "professional-growth" && "6"}
                              {pkg.id === "personal-portfolio" && "1"}
                              {pkg.id === "event-management" && "Custom"}
                            </span>
                          )}
                          {feature === "Delivery Time" && (
                            <span className="text-gray-300 text-sm">
                              {pkg.delivery}
                            </span>
                          )}
                          {feature === "Revisions Included" && (
                            <span className="text-gray-300">
                              {pkg.id === "startup" && "2"}
                              {pkg.id === "professional-growth" && "5"}
                              {pkg.id === "personal-portfolio" && "3"}
                              {pkg.id === "event-management" && "Unlimited"}
                            </span>
                          )}
                          {![
                            "Pages Included",
                            "Delivery Time",
                            "Revisions Included",
                          ].includes(feature) && (
                            <>
                              {pkg.features.some(
                                (f) =>
                                  f.includes(feature) || feature.includes(f)
                              ) ? (
                                <Check className="w-5 h-5 text-[#d4f534] mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-500 mx-auto" />
                              )}
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-[#d4f534] rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-black mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-black/80 mb-8 max-w-2xl mx-auto">
                Choose your package and let's bring your project to life.
              </p>
              <button className="bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-black/90 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
