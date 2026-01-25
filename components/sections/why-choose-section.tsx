import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    number: "01",
    title: "Clean & Modern Design",
    description:
      "Professional designs that make your business stand out and build customer trust.",
  },
  {
    number: "02",
    title: "Affordable Pricing",
    description:
      "Quality web design at prices that work for small businesses and startups.",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description:
      "Get your website live quickly with our streamlined 5-12 day delivery timeline.",
  },
];

export function WhyChooseSection() {
  return (
    <SectionWrapper id="why-choose">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Why Choose LM Studios?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature) => (
          <FeatureCard
            key={feature.number}
            number={feature.number}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
