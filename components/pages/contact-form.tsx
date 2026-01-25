"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  ShoppingBag, 
  Layout, 
  Utensils, 
  Building2, 
  Calendar, 
  HelpCircle,
  Smartphone,
  Phone,
  Mail,
  Send
} from "lucide-react";

// --- Components for the Form ---

// 1. Selection Card (For Project Type)
function SelectionCard({ 
  icon: Icon, 
  label, 
  selected, 
  onClick 
}: { 
  icon: any, 
  label: string, 
  selected: boolean, 
  onClick: () => void 
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
      <Icon className={`w-8 h-8 mb-3 transition-colors ${selected ? "text-[#d4f534]" : "text-gray-400 group-hover:text-white"}`} />
      <span className={`text-sm font-medium ${selected ? "text-white" : "text-gray-300"}`}>{label}</span>
    </button>
  );
}

// 2. Simple Pill Option (For Budget/Timeline/Status)
function PillOption({ 
  label, 
  selected, 
  onClick 
}: { 
  label: string, 
  selected: boolean, 
  onClick: () => void 
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

export default function MultiStepContact() {
  const [step, setStep] = useState(1);
  
  // State to hold all form data
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "Email", // WhatsApp, Call, Email
    
    // Step 2
    projectType: "",
    projectStatus: "",
    
    // Step 3
    budget: "",
    timeline: "",
    contentReadiness: "",
    currentUrl: ""
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  // Update helper
  const updateData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white bg-black flex items-center justify-center py-12 px-4 sm:px-6">
      
      {/* Background Assets */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: "url(/images/dark-background.png)", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl">
        
        {/* Header & Progress */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Let's start your <span className="text-[#d4f534]">project</span>
          </h1>
          <p className="text-gray-400 mb-8">A few questions to help us understand your needs.</p>

          {/* Progress Bar */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  step >= num 
                    ? "bg-[#d4f534] text-black shadow-[0_0_10px_rgba(212,245,52,0.4)]" 
                    : "bg-white/10 text-gray-500"
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
          
          {/* Step Names */}
          <div className="flex justify-between max-w-[300px] mx-auto text-xs font-medium uppercase tracking-wider text-gray-500">
            <span className={step === 1 ? "text-white" : ""}>Identity</span>
            <span className={step === 2 ? "text-white" : ""}>Project</span>
            <span className={step === 3 ? "text-white" : ""}>Scope</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4f534]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          {/* STEP 1: IDENTITY */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#d4f534]">01.</span> Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => updateData("fullName", e.target.value)}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] focus:bg-white/5 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => updateData("phone", e.target.value)}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] focus:bg-white/5 transition-all"
                    placeholder="+27..."
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-gray-400 ml-1">Email Address</label>
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
                <label className="text-sm text-gray-400 ml-1">Preferred mode of contact</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "WhatsApp", icon: Smartphone },
                    { label: "Call", icon: Phone },
                    { label: "Email", icon: Mail }
                  ].map((method) => (
                    <button
                      key={method.label}
                      type="button"
                      onClick={() => updateData("contactMethod", method.label)}
                      className={`flex items-center justify-center gap-2 py-4 rounded-xl border transition-all ${
                        formData.contactMethod === method.label
                          ? "bg-[#d4f534]/10 border-[#d4f534] text-[#d4f534]"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      <method.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PROJECT DETAILS */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#d4f534]">02.</span> Project Details
              </h2>

              <div className="mb-8">
                <label className="block text-sm text-gray-400 ml-1 mb-4">What type of website do you need?</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SelectionCard 
                    icon={ShoppingBag} 
                    label="E-Commerce" 
                    selected={formData.projectType === "E-Commerce"}
                    onClick={() => updateData("projectType", "E-Commerce")}
                  />
                  <SelectionCard 
                    icon={Layout} 
                    label="Portfolio" 
                    selected={formData.projectType === "Portfolio"}
                    onClick={() => updateData("projectType", "Portfolio")}
                  />
                  <SelectionCard 
                    icon={Utensils} 
                    label="Restaurant" 
                    selected={formData.projectType === "Restaurant"}
                    onClick={() => updateData("projectType", "Restaurant")}
                  />
                  <SelectionCard 
                    icon={Building2} 
                    label="Business/Corp" 
                    selected={formData.projectType === "Business/Corp"}
                    onClick={() => updateData("projectType", "Business/Corp")}
                  />
                  <SelectionCard 
                    icon={Calendar} 
                    label="Event Mgmt" 
                    selected={formData.projectType === "Event Management"}
                    onClick={() => updateData("projectType", "Event Management")}
                  />
                  <SelectionCard 
                    icon={HelpCircle} 
                    label="Other / Not Sure" 
                    selected={formData.projectType === "Other"}
                    onClick={() => updateData("projectType", "Other")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 ml-1 mb-4">Current Project Status</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "New Website Build",
                    "Website Redesign",
                    "Maintenance / Bug Fix",
                    "Speed Optimization / SEO"
                  ].map((status) => (
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
          )}

          {/* STEP 3: SCOPE & BUDGET */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#d4f534]">03.</span> Scope & Budget
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Budget */}
                <div className="space-y-4">
                  <label className="text-sm text-gray-400 ml-1">Budget Range</label>
                  <div className="flex flex-col gap-3">
                    {["R1,500 - R2,500", "R2,500 - R5,000", "R5,000+", "N/A"].map((opt) => (
                       <PillOption
                       key={opt}
                       label={opt}
                       selected={formData.budget === opt}
                       onClick={() => updateData("budget", opt)}
                     />
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                  <label className="text-sm text-gray-400 ml-1">Timeline</label>
                  <div className="flex flex-col gap-3">
                    {["ASAP / Rush", "Within 2-4 weeks", "1-2 months", "Flexible"].map((opt) => (
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

              {/* Content Readiness */}
              <div className="mb-8">
                <label className="text-sm text-gray-400 ml-1 mb-3 block">Content Readiness</label>
                <select 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] cursor-pointer appearance-none"
                  value={formData.contentReadiness}
                  onChange={(e) => updateData("contentReadiness", e.target.value)}
                >
                  <option value="" disabled className="text-gray-500">Select an option...</option>
                  <option className="bg-gray-900" value="ready">I have all text and images ready.</option>
                  <option className="bg-gray-900" value="help">I need help creating content.</option>
                  <option className="bg-gray-900" value="working">I am still working on it.</option>
                </select>
              </div>

              {/* URL */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Current Website URL (Optional)</label>
                <input 
                  type="url" 
                  value={formData.currentUrl}
                  onChange={(e) => updateData("currentUrl", e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4f534] focus:bg-white/5 transition-all"
                  placeholder="https://..."
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
            {step > 1 ? (
              <button 
                onClick={handleBack}
                className="text-gray-400 hover:text-white flex items-center gap-2 px-4 py-2 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" /> Back
              </button>
            ) : (
              <div></div>
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
  );
}
