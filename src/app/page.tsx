import { HeroSection } from "@/src/components/sections/HeroSection";
import { ServicesSection } from "@/src/components/sections/ServicesSection";
import { CtaSection } from "@/src/components/sections/CtaSection";
import { BackgroundWrapper } from "@/src/components/BackgroundWrapper";

export default function Home() {
  return (
    <BackgroundWrapper variant="default">
      <main className="min-h-screen relative overflow-hidden selection:bg-[#d4f534] selection:text-black">
        <HeroSection />
        <ServicesSection />
        <CtaSection />
      </main>
    </BackgroundWrapper>
  );
}
