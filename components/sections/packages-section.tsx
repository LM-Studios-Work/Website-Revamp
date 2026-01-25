"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PackageCard } from "@/components/ui/package-card";

const packages = [
  {
    title: "Essential Business Website",
    price: "R2,499",
    description:
      "A clean, modern 3-page website designed to make your business look credible and accessible.",
    features: [
      "3 professionally designed pages (Home, Services, Contact)",
      "Mobile-responsive, modern layout",
      "Contact form with email notifications",
      "Click-to-call & WhatsApp buttons",
      "Social media integration",
      "Basic SEO optimization",
      "Custom Domain",
    ],
    delivery: "Delivery in 5-7 working days",
    popular: false,
  },
  {
    title: "Professional Growth Website",
    price: "R4,999",
    description:
      "Perfect for businesses ready to grow, build trust, and showcase their work professionally.",
    features: [
      "Up to 6 pages (Home, About, Services, Gallery, Testimonials, Contact)",
      "Professionally written content",
      "High-quality gallery/portfolio",
      "Client testimonials section",
      "Google Maps integration",
      "Advanced contact forms",
      "Local SEO optimization",
      "Custom Domain",
      "Professional email setup",
    ],
    delivery: "Delivery in 7-12 working days",
    popular: true,
  },
  {
    title: "Personal Portfolio",
    price: "R1,999",
    description:
      "A stunning, modern portfolio to showcase your work, skills, and personality.",
    features: [
      "Single-page scrolling design",
      "Animated introductions & effects",
      "Project gallery with descriptions",
      "Resume/CV download link",
      "Contact form & social links",
      "Custom Domain",
    ],
    delivery: "Delivery in 4-6 working days",
    popular: false,
  },
  {
    title: "Event Management Website",
    price: "R3,499",
    description:
      "A dedicated website for your special event, like a wedding, conference, or party.",
    features: [
      "Event details & schedule",
      "Photo and video gallery",
      "RSVP form with guest management",
      "Gift registry links",
      "Password-protected access",
      "Custom Domain",
    ],
    delivery: "Delivery in 6-8 working days",
    popular: false,
  },
];

export function PackagesSection() {
  return (
    <SectionWrapper id="packages" className="bg-card/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Packages
        </h2>
        <p className="text-muted-foreground text-lg">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.title}
            title={pkg.title}
            price={pkg.price}
            description={pkg.description}
            features={pkg.features}
            delivery={pkg.delivery}
            popular={pkg.popular}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
