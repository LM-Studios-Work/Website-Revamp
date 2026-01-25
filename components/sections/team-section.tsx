"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import { ArrowRight } from "lucide-react";

export function TeamSection() {
  return (
    <SectionWrapper id="about" className="bg-card/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Team with Big Passion
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Meet the minds behind LM Studios.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-4">
            Direct Collaboration, No Middlemen
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Our compact and highly skilled team allows us to work efficiently
            and personally on every project. When you work with us, you
            collaborate directly with the designer and the developer who are
            building your site. This ensures clear communication, fast delivery,
            and a final result that reflects your vision perfectly.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Our lean structure allows us to be agile, personal, and fully
            invested in your success. We combine our complementary skills to
            build websites that are not only beautiful but also fast, secure,
            and reliable.
          </p>

          <button
            type="button"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Enquire About Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Content - Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TeamMemberCard
            role="The Designer"
            description="Crafting beautiful, intuitive user experiences that capture your brand's essence."
          />
          <TeamMemberCard
            role="The Developer"
            description="Building fast, secure, and scalable websites with clean, modern code."
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
