"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";

// Reusing the Toggle Button style from your Calculator for consistency
interface ProjectTypeButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function ProjectTypeButton({
  label,
  selected,
  onClick,
}: ProjectTypeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-6 py-3 rounded-full border transition-all duration-300 ${
        selected
          ? "bg-[#00F0FF] border-[#00F0FF] text-black font-bold"
          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30"
      }`}
    >
      {label}
    </button>
  );
}

export default function ContactPage() {
  const [projectType, setProjectType] = useState("Web Design");

  const formTypes = ["Web Design", "SEO", "Migration", "Other"];

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white bg-black">
      {/* Global Background - Matching your existing pages */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/dark-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with SVG Decoration */}
          <div className="mb-16 relative">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Let's build <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #fff" }}
              >
                something great.
              </span>
            </h1>

            {/* The squiggly line from your Calculator page */}
            <svg
              className="mb-6 opacity-80"
              width="280"
              height="20"
              viewBox="0 0 280 20"
            >
              <path
                d="M 10 10 Q 20 5, 30 10 T 50 10 T 70 10 T 90 10 T 110 10 T 130 10 T 150 10 T 170 10 T 190 10 T 210 10 T 230 10 T 250 10 T 270 10"
                stroke="#00F0FF"
                strokeWidth="3"
                fill="none"
              />
            </svg>

            {/* Handwritten Annotation Style */}
            <div className="absolute top-0 right-0 lg:right-1/4 font-handwriting text-[#00F0FF] rotate-[15deg] hidden md:block">
              <div className="text-2xl">We reply</div>
              <div className="text-xl ml-4 underline decoration-wavy">
                fast!
              </div>
              <ArrowRight className="w-6 h-6 rotate-[135deg] mt-2 ml-2" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* LEFT COLUMN: Contact Info & Context */}
            <div className="w-full lg:w-1/3 space-y-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Fill out the form to get a quote or discuss your next project.
                Whether it's a standard Odoo implementation or a custom web app,
                we're ready to help.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-[#00F0FF]/50 transition-colors group">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-[#00F0FF] transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Email us</h3>
                    <p className="text-lg font-medium">hello@lmstudios.com</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-[#00F0FF]/50 transition-colors group">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-[#00F0FF] transition-colors">
                    <MapPin className="w-5 h-5 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Visit us</h3>
                    <p className="text-lg font-medium">Sandton, Gauteng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Form */}
            <div className="flex-1">
              <form className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all"
                    />
                  </div>
                </div>

                {/* Project Type Selection */}
                <div className="mb-8">
                  <label className="text-sm font-medium text-gray-300 ml-2 mb-4 block">
                    I'm interested in...
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {formTypes.map((type) => (
                      <ProjectTypeButton
                        key={type}
                        label={type}
                        selected={projectType === type}
                        onClick={() => setProjectType(type)}
                      />
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="mb-10 space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    placeholder="We need a website that..."
                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:bg-white/5 transition-all resize-none"
                  />
                </div>

                {/* Submit Button - Matches Homepage CTA Style */}
                <button
                  type="button"
                  className="w-full bg-[#00F0FF] text-black font-bold py-5 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-[#00D0E0] transition-colors text-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-gray-500 text-xs mt-6">
                  By sending this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
