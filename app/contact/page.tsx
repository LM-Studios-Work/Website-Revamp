"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Send, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "web-design",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus("success");
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          projectType: "web-design",
          message: "",
        });
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen relative text-white bg-black font-sans selection:bg-[#d4f534] selection:text-black overflow-x-hidden">
      
      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/dark-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 min-h-screen flex items-center">
        <section className="w-full px-8 py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
            >
              
              {/* --- Left Side: Contact Info --- */}
              <div className="flex flex-col justify-center h-full">
                <motion.div variants={fadeInUp} className="mb-8">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
                    Get in{" "}
                    <span
                      className="relative inline-block"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "2px #d4f534",
                      }}
                    >
                      Touch
                      {/* Decorative underline */}
                      <motion.span 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
                        className="absolute -bottom-2 left-0 h-[6px] bg-[#d4f534] rounded-full"
                      />
                    </span>
                  </h1>

                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                    Have a project in mind? Let's discuss how we can help bring
                    your vision to life. We're here to answer any questions you
                    might have.
                  </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email us", value: "hello@lmstudios.com", href: "mailto:hello@lmstudios.com" },
                    { icon: Phone, label: "Call us", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                    { icon: MapPin, label: "Visit us", value: "Sandton, Gauteng, South Africa", href: "#" },
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      variants={fadeInUp}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 group transition-all duration-300"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-full bg-[#d4f534]/10 flex items-center justify-center group-hover:bg-[#d4f534] transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-[#d4f534] group-hover:text-black transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</h3>
                          <p className="text-lg font-medium text-white">{item.value}</p>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                           <ArrowRight className="w-5 h-5 text-[#d4f534]" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* --- Right Side: Contact Form --- */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
              >
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4f534]/5 rounded-full blur-[80px] pointer-events-none"></div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2 group">
                      <label className="text-sm font-medium text-gray-400 ml-2 group-focus-within:text-[#d4f534] transition-colors">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4f534]/50 focus:bg-white/5 focus:shadow-[0_0_20px_rgba(212,245,52,0.05)] transition-all duration-300"
                        required
                        disabled={formStatus !== "idle"}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2 group">
                      <label className="text-sm font-medium text-gray-400 ml-2 group-focus-within:text-[#d4f534] transition-colors">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4f534]/50 focus:bg-white/5 focus:shadow-[0_0_20px_rgba(212,245,52,0.05)] transition-all duration-300"
                        required
                        disabled={formStatus !== "idle"}
                      />
                    </div>
                  </div>

                  {/* Project Type Selection */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-gray-400 ml-2 group-focus-within:text-[#d4f534] transition-colors">
                      I'm interested in...
                    </label>
                    <div className="relative">
                        <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4f534]/50 focus:bg-white/5 appearance-none transition-all duration-300 cursor-pointer"
                        disabled={formStatus !== "idle"}
                        >
                        <option value="web-design" className="bg-gray-900">Web Design</option>
                        <option value="standard-pack" className="bg-gray-900">Standard Pack</option>
                        <option value="custom" className="bg-gray-900">Custom Project</option>
                        <option value="consultation" className="bg-gray-900">Consultation</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                        </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-gray-400 ml-2 group-focus-within:text-[#d4f534] transition-colors">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="We need a website that..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4f534]/50 focus:bg-white/5 focus:shadow-[0_0_20px_rgba(212,245,52,0.05)] transition-all duration-300 resize-none"
                      required
                      disabled={formStatus !== "idle"}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                        type="submit"
                        disabled={formStatus !== "idle"}
                        className="w-full bg-[#d4f534] text-black font-bold py-5 px-8 rounded-full flex items-center justify-center gap-3 relative overflow-hidden transition-all shadow-[0_0_20px_rgba(212,245,52,0.3)] hover:shadow-[0_0_40px_rgba(212,245,52,0.5)] disabled:opacity-80 disabled:cursor-not-allowed"
                        whileHover={formStatus === "idle" ? { scale: 1.02 } : {}}
                        whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
                    >
                        <AnimatePresence mode="wait">
                            {formStatus === "idle" && (
                                <motion.div 
                                    key="idle"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5" />
                                </motion.div>
                            )}
                            
                            {formStatus === "submitting" && (
                                <motion.div 
                                    key="submitting"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                >
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                </motion.div>
                            )}

                            {formStatus === "success" && (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-2"
                                >
                                    <span>Message Sent!</span>
                                    <Check className="w-5 h-5" strokeWidth={3} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                  </div>

                  <p className="text-center text-gray-500 text-xs mt-4">
                    By sending this form, you agree to our privacy policy.
                  </p>
                </form>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}