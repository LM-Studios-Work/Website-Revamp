"use client";

import React from "react"

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowRight } from "lucide-react";

type Step = 1 | 2 | 3;

export function QuoteFormSection() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMode: "whatsapp" as "whatsapp" | "call" | "email",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContactModeChange = (mode: "whatsapp" | "call" | "email") => {
    setFormData((prev) => ({
      ...prev,
      contactMode: mode,
    }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as Step);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-card/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request a Free Quote
          </h2>
          <p className="text-muted-foreground">
            Answer a few questions to help us understand your project needs.
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              1
            </div>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Identity
            </span>
          </div>
          <div className="w-8 h-px bg-border" />
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              2
            </div>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Project Type
            </span>
          </div>
          <div className="w-8 h-px bg-border" />
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 3
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              3
            </div>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Scope
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card rounded-3xl border border-border p-8">
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Step 1: Contact Information
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Let us know how to reach you.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+27 66 000 0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Preferred mode of contact
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {(["whatsapp", "call", "email"] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => handleContactModeChange(mode)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                          formData.contactMode === mode
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/10 text-foreground hover:bg-white/20 border border-border"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Step 2: Project Type
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                What kind of website do you need?
              </p>
              <div className="space-y-3">
                {[
                  "Essential Business Website",
                  "Professional Growth Website",
                  "Personal Portfolio",
                  "Event Management Website",
                  "Other",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="w-full text-left px-4 py-3 rounded-xl border border-border bg-white/5 hover:bg-white/10 transition-colors text-foreground"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Step 3: Project Scope
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Tell us more about your project.
              </p>
              <textarea
                placeholder="Describe your project, goals, and any specific features you need..."
                className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleNextStep}
            className="w-full mt-6 bg-primary text-primary-foreground py-3 px-6 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            {step === 3 ? "Submit Request" : "Next Step"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
