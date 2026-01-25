"use client";

import { Check } from "lucide-react";

const features = [
  { name: "Sitemap", standard: true, custom: true },
  { name: "Wireframes", standard: false, custom: true },
  { name: "Design and prototype", standard: false, custom: true },
  {
    name: "Page integration",
    subtitle: "(Page quantity depends on the pack)",
    standard: true,
    custom: true,
  },
  {
    name: "Standard features and modern components",
    standard: true,
    custom: true,
  },
  { name: "Custom features and building blocks", standard: false, custom: true },
  { name: "Domain name setup and redirects", standard: true, custom: true },
  { name: "Maintenance services", standard: false, custom: true },
  { name: "Customer training", standard: true, custom: true },
];

export default function ComparePage({ onPageChange }: ComparePageProps) {
  return (
    <div className="min-h-screen relative text-white px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background-solid.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12">Compare</h1>

        {/* Mobile view - stacked cards */}
        <div className="lg:hidden space-y-6 sm:space-y-8">
          {/* Standard Pack Card */}
          <div className="bg-card rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-6 touch-manipulation">
            <h2 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-center">Standard Pack</h2>
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 sm:py-2.5 border-b border-border last:border-0"
                >
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm">{feature.name}</div>
                    {feature.subtitle && (
                      <div className="text-gray-500 text-[10px] sm:text-xs">{feature.subtitle}</div>
                    )}
                  </div>
                  {feature.standard && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center ml-3 sm:ml-4 flex-shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black" strokeWidth={3} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Pack Card */}
          <div className="bg-card rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-6 relative overflow-hidden touch-manipulation">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url(/images/dark-background.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-center">Custom Pack</h2>
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 sm:py-2.5 border-b border-border last:border-0"
                  >
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm">{feature.name}</div>
                      {feature.subtitle && (
                        <div className="text-gray-500 text-[10px] sm:text-xs">
                          {feature.subtitle}
                        </div>
                      )}
                    </div>
                    {feature.custom && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center ml-3 sm:ml-4 flex-shrink-0">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop view - table */}
        <div className="hidden lg:flex gap-8">
          {/* Feature Names Column */}
          <div className="flex-1">
            <div className="h-20 mb-4" />
            {features.map((feature, index) => (
              <div
                key={index}
                className="h-16 flex items-center border-b border-gray-800"
              >
                <div>
                  <div className="text-white text-sm">{feature.name}</div>
                  {feature.subtitle && (
                    <div className="text-gray-500 text-xs mt-0.5">
                      {feature.subtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Standard Pack Column */}
          <div className="w-64">
            <div className="bg-card rounded-3xl border border-border overflow-hidden h-full">
              <div className="h-20 flex items-center justify-center border-b border-gray-800">
                <h2 className="text-xl font-bold">Standard Pack</h2>
              </div>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="h-16 flex items-center justify-center border-b border-gray-800"
                >
                  {feature.standard && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Check className="w-5 h-5 text-black" strokeWidth={3} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Pack Column */}
          <div className="w-64">
            <div className="bg-card rounded-3xl border border-border overflow-hidden relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "url(/images/dark-background.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="relative z-10">
                <div className="h-20 flex items-center justify-center border-b border-gray-800">
                  <h2 className="text-xl font-bold">Custom Pack</h2>
                </div>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="h-16 flex items-center justify-center border-b border-gray-800"
                  >
                    {feature.custom && (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Check className="w-5 h-5 text-black" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
