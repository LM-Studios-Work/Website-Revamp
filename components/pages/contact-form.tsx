"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  ShoppingBag, 
  Layout, 
  Utensils, 
  Calendar, 
  HelpCircle,
  Smartphone,
  Phone,
  Mail,
  Send
} from "lucide-react";

// Shared components
import { PageLayout } from "@/components/shared/page-layout";

// Building2 icon (not in lucide-react)
function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

// Form data interface
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
  projectType: string;
  projectStatus: string;
  budget: string;
  timeline: string;
  contentReadiness: string;
  currentUrl: string;
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "Email",
    projectType: "",
    projectStatus: "",
    budget: "",
    timeline: "",
    contentReadiness: "",
    currentUrl: "",
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout hideFooter>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-4xl">
          
          {/* Header & Progress */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Let&apos;s start your <span className="text-[#d4f534]">project</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              A few questions to help us understand your needs.
            </p>

            {/* Progress Bar */}
            <ProgressBar step={step} />
            
            {/* Step Names */}
            <div className="flex justify-between max-w-[300px] mx-auto text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className={step === 1 ? "text-white" : ""}>Identity</span>
              <span className={step === 2 ? "text-white" : ""}>Project</span>
              <span className={step === 3 ? "text-white" : ""}>Scope</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4f534]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

            {/* Step 1: Identity */}
            {step === 1 && <Step1Identity formData={formData} updateData={updateData} />}

            {/* Step 2: Project Details */}
            {step === 2 && <Step2Project formData={formData} updateData={updateData} />}

            {/* Step 3: Scope & Budget */}
            {step === 3 && <Step3Scope formData={formData} updateData={updateData} />}

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
              {step > 1 ? (
                <button 
                  onClick={handleBack}
                  className="text-muted-foreground hover:text-white flex items-center gap-2 px-4 py-2 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button 
                  onClick={handleNext}
                  className="bg-white text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  Next Step <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button 
                  onClick={() => alert("Form Submitted!")}
                  className="bg-[#d4f534] text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-[#c7e81f] transition-colors shadow-[0_0_20px_rgba(212,245,52,0.3)] hover:shadow-[0_0_30px_rgba(212,245,52,0.5)]"
                >
                  Submit Quote Request <Send className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

// --- Sub-components ---

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
            step >= num 
              ? "bg-[#d4f534] text-black shadow-[0_0_10px_rgba(212,245,52,0.4)]" 
              : "bg-white/10 text-muted-foreground"
          }`}>
            {num}
          </div>
          {num !== 3 && (
            <div className={`w-12 h-1 rounded-full transition-colors duration-500 ${
              step > num ? "bg-[#d4f534]" : "bg-white/10"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

interface StepProps {
  formData: FormData;
  updateData: (field: keyof FormData, value: string) => void;
}

function Step1Identity({ formData, updateData }: StepProps) {
  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-[#d4f534]">01.</span> Contact Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground ml-1">Full Name</label>
          <input 
            type="text" 
            value={formData.fullName}
            onChange={(e) => updateData("fullName", e.target.value)}
            className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] focus:bg-white/5 transition-all"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground ml-1">Phone Number</label>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => updateData("phone", e.target.value)}
            className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] focus:bg-white/5 transition-all"
            placeholder="+27..."
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm text-muted-foreground ml-1">Email Address</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => updateData("email", e.target.value)}
            className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] focus:bg-white/5 transition-all"
            placeholder="name@company.com"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm text-muted-foreground ml-1">Preferred mode of contact</label>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "WhatsApp", icon: Smartphone },
            { label: "Call", icon: Phone },
            { label: "Email", icon: Mail },
          ].map((method) => (
            <button
              key={method.label}
              type="button"
              onClick={() => updateData("contactMethod", method.label)}
              className={`flex items-center justify-center gap-2 py-4 rounded-xl border transition-all ${
                formData.contactMethod === method.label
                  ? "bg-[#d4f534]/10 border-[#d4f534] text-[#d4f534]"
                  : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
              }`}
            >
              <method.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{method.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step2Project({ formData, updateData }: StepProps) {
  const projectTypes = [
    { icon: ShoppingBag, label: "E-Commerce" },
    { icon: Layout, label: "Portfolio" },
    { icon: Utensils, label: "Restaurant" },
    { icon: Building2, label: "Business/Corp" },
    { icon: Calendar, label: "Event Management" },
    { icon: HelpCircle, label: "Other" },
  ];

  const projectStatuses = [
    "New Website Build",
    "Website Redesign",
    "Maintenance / Bug Fix",
    "Speed Optimization / SEO",
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-[#d4f534]">02.</span> Project Details
      </h2>

      <div className="mb-8">
        <label className="block text-sm text-muted-foreground ml-1 mb-4">What type of website do you need?</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projectTypes.map((type) => (
            <SelectionCard
              key={type.label}
              icon={<type.icon className="w-8 h-8" />}
              label={type.label}
              selected={formData.projectType === type.label}
              onClick={() => updateData("projectType", type.label)}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-muted-foreground ml-1 mb-4">Current Project Status</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectStatuses.map((status) => (
            <PillOption
              key={status}
              label={status}
              selected={formData.projectStatus === status}
              onClick={() => updateData("projectStatus", status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Step3Scope({ formData, updateData }: StepProps) {
  const budgets = ["R1,500 - R2,500", "R2,500 - R5,000", "R5,000+", "N/A"];
  const timelines = ["ASAP / Rush", "Within 2-4 weeks", "1-2 months", "Flexible"];

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-[#d4f534]">03.</span> Scope & Budget
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <label className="text-sm text-muted-foreground ml-1">Budget Range</label>
          <div className="flex flex-col gap-3">
            {budgets.map((opt) => (
              <PillOption
                key={opt}
                label={opt}
                selected={formData.budget === opt}
                onClick={() => updateData("budget", opt)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm text-muted-foreground ml-1">Timeline</label>
          <div className="flex flex-col gap-3">
            {timelines.map((opt) => (
              <PillOption
                key={opt}
                label={opt}
                selected={formData.timeline === opt}
                onClick={() => updateData("timeline", opt)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <label className="text-sm text-muted-foreground ml-1 mb-3 block">Content Readiness</label>
        <select 
          className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] cursor-pointer appearance-none"
          value={formData.contentReadiness}
          onChange={(e) => updateData("contentReadiness", e.target.value)}
        >
          <option value="" disabled className="text-muted-foreground">Select an option...</option>
          <option className="bg-gray-900" value="ready">I have all text and images ready.</option>
          <option className="bg-gray-900" value="help">I need help creating content.</option>
          <option className="bg-gray-900" value="working">I am still working on it.</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground ml-1">Current Website URL (Optional)</label>
        <input 
          type="url" 
          value={formData.currentUrl}
          onChange={(e) => updateData("currentUrl", e.target.value)}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] focus:bg-white/5 transition-all"
          placeholder="https://..."
        />
      </div>
    </div>
  );
}

// --- Reusable Form Components ---

function SelectionCard({ 
  icon, 
  label, 
  selected, 
  onClick 
}: { 
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 group ${
        selected
          ? "bg-[#d4f534]/10 border-[#d4f534] shadow-[0_0_15px_rgba(212,245,52,0.15)]"
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30"
      }`}
    >
      <div className={`mb-3 transition-colors ${selected ? "text-[#d4f534]" : "text-muted-foreground group-hover:text-white"}`}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${selected ? "text-white" : "text-gray-300"}`}>
        {label}
      </span>
    </button>
  );
}

function PillOption({ 
  label, 
  selected, 
  onClick 
}: { 
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-3 rounded-xl border text-sm text-left transition-all duration-200 flex items-center justify-between ${
        selected
          ? "bg-[#d4f534] border-[#d4f534] text-black font-bold"
          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
      }`}
    >
      {label}
      {selected && <CheckCircle className="w-4 h-4" />}
    </button>
  );
}
