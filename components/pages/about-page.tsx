"use client";

import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/lib/team";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative text-white">
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

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/30 to-transparent opacity-100" />

      <div className="relative z-10 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
              The Team
            </h1>
            {/* Wavy underline */}
            <svg
              className="text-primary mx-auto"
              height="20"
              viewBox="0 0 100 20"
              width="128"
            >
              <path
                d="M0 10 Q 25 20 50 10 T 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-8">
              We are a{" "}
              <span className="font-bold text-white">compact</span> and highly
              skilled team focused on delivering excellence. Unlike large
              agencies, you work directly with your{" "}
              <span className="text-primary font-bold">
                designer and developer
              </span>
              . Our process is{" "}
              <span className="font-bold text-white">
                agile, personal, and fully invested
              </span>{" "}
              in your project&apos;s success.
            </p>
          </div>

          {/* Team Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto items-start">
            {/* Handwritten annotations */}
            <div className="absolute -top-12 -left-4 md:-left-24 transform -rotate-12 hidden md:block">
              <p className="font-handwriting text-muted-foreground text-xl mb-1">
                No middlemen
              </p>
              <svg
                className="w-8 h-12 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 36"
              >
                <path
                  d="M12 0 C8 12 16 24 12 36"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M8 32 L12 36 L16 32"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="absolute top-1/2 -right-12 transform rotate-6 hidden lg:block z-20">
              <p className="font-handwriting text-accent text-2xl mb-2 ml-4">
                Direct access!
              </p>
              <svg
                fill="none"
                height="50"
                viewBox="0 0 60 50"
                width="60"
                className="text-accent"
              >
                <path
                  d="M50 5 C30 15 45 40 10 45 M10 45 L20 35 M10 45 L22 52"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group relative ${index === 1 ? "mt-8 md:mt-24" : ""}`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500`}
                />

                <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl border border-border h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                      src={member.imageUrl || "/placeholder.svg"}
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent h-32" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className={`${member.roleColor} font-medium`}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {member.description}
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 md:mt-32 relative">
            {/* Dashed line connector */}
            <div className="absolute left-1/2 -top-24 h-24 border-l-2 border-dashed border-border hidden md:block" />

            <div className="bg-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-border shadow-2xl relative overflow-hidden group">
              {/* Glow */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Ready to start?
                </h2>
                <p className="text-muted-foreground">
                  Let&apos;s build something amazing together.
                </p>
              </div>

              <div className="relative z-10">
                <button
                  type="button"
                  className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center gap-4 text-lg shadow-lg group-hover:shadow-primary/20"
                >
                  Discuss your project
                  <div className="bg-primary rounded-full p-1 text-primary-foreground flex items-center justify-center w-8 h-8 transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Handwritten annotation */}
                <div className="absolute -bottom-10 -right-4 transform -rotate-12 hidden lg:block">
                  <span className="font-handwriting text-muted-foreground text-lg">
                    Let&apos;s go!
                  </span>
                  <svg
                    className="w-8 h-8 text-muted-foreground absolute -top-4 -left-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
