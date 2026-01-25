"use client";

import { useRef } from "react";
import { ArrowUpRight, Code, PenTool, Linkedin, Twitter, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Mock Data (Replace with your @/lib/team import) ---
const teamMembers = [
  {
    id: 1,
    name: "Lupry",
    role: "Lead Designer",
    roleColor: "text-[#d4f534]", // Lime
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
    description: "Obsessed with pixel perfection and user psychology. Alex turns complex problems into intuitive interfaces.",
    skills: ["UI/UX", "Brand Strategy", "Motion"],
    gradientFrom: "from-[#d4f534]",
    gradientTo: "to-emerald-500",
  },
  {
    id: 2,
    name: "Monare",
    role: "Tech Lead",
    roleColor: "text-[#5dd9c1]", // Teal
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80",
    description: "Full-stack wizard who dreams in code. Jordan ensures your platform is scalable, secure, and lightning fast.",
    skills: ["Next.js", "System Arch", "Cloud"],
    gradientFrom: "from-[#5dd9c1]",
    gradientTo: "to-blue-500",
  },
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, delay: 0.5 },
  },
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen relative text-white bg-black font-sans selection:bg-[#d4f534] selection:text-black overflow-x-hidden">
      
      {/* --- Global Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/dark-background-solid.png)", // Fallback if image missing
            backgroundColor: "#050505",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="relative z-10 px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          
          {/* --- Header Section --- */}
          <motion.div 
            style={{ y: headerY }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-32 relative"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/5 rounded-full text-gray-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3 text-[#d4f534]" />
              Meet the Makers
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-none">
              The Team
            </motion.h1>
            
            {/* Wavy underline animation */}
            <motion.svg
              variants={fadeInUp}
              className="text-[#d4f534] mx-auto w-32 md:w-48 h-6"
              viewBox="0 0 100 20"
            >
              <motion.path
                variants={drawLine}
                d="M0 10 Q 25 20 50 10 T 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl leading-relaxed text-gray-400 mt-10 font-light">
              We are a{" "}
              <strong className="text-white font-semibold">compact</strong> and highly
              skilled team. Unlike large agencies, you work directly with your{" "}
              <span className="text-[#d4f534] font-semibold underline decoration-white/20 underline-offset-4 decoration-2">
                designer and developer
              </span>
              . Our process is agile, personal, and fully invested in your success.
            </motion.p>
          </motion.div>

          {/* --- Team Cards Grid --- */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto items-start">
            
            {/* Annotation 1: No Middlemen */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute -top-16 -left-4 md:-left-32 transform -rotate-12 hidden md:block z-20"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-serif italic text-gray-400 text-xl mb-2"
              >
                No middlemen
              </motion.p>
              <svg className="w-10 h-16 text-gray-500" viewBox="0 0 24 36">
                <motion.path
                  variants={drawLine}
                  d="M12 0 C8 12 16 24 12 36"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <motion.path
                  variants={drawLine}
                  d="M8 32 L12 36 L16 32"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Annotation 2: Direct Access */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute top-1/2 -right-4 md:-right-24 transform rotate-6 hidden lg:block z-20"
            >
              <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.2 }}
                 className="font-serif italic text-[#d4f534] text-2xl mb-2 ml-4"
              >
                Direct access!
              </motion.p>
              <svg fill="none" height="50" viewBox="0 0 60 50" width="60" className="text-[#d4f534]">
                <motion.path
                  variants={drawLine}
                  d="M50 5 C30 15 45 40 10 45"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <motion.path
                   variants={drawLine}
                   d="M10 45 L20 35 M10 45 L22 52"
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`group relative ${index === 1 ? "md:mt-32" : ""}`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700`}
                />

                <div className="relative bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 h-full flex flex-col group-hover:border-white/20 transition-colors duration-500">
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900 mix-blend-color z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out" />
                    <img
                      alt={member.name}
                      src={member.imageUrl}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
                    
                    {/* Floating Info on Image */}
                    <div className="absolute bottom-6 left-8 z-30">
                      <h3 className="text-3xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className={`${member.roleColor} font-bold uppercase tracking-wider text-sm flex items-center gap-2`}>
                        {index === 0 ? <PenTool className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                        {member.role}
                      </p>
                    </div>

                    {/* Socials Overlay (Optional) */}
                    <div className="absolute top-6 right-6 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors cursor-pointer">
                            <Linkedin className="w-4 h-4" />
                        </div>
                        <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors cursor-pointer">
                            <Twitter className="w-4 h-4" />
                        </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8 relative z-20 bg-[#0a0a0a]">
                    <p className="text-gray-400 leading-relaxed text-base mb-6 font-light">
                      {member.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- CTA Section --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-32 md:mt-48 relative"
          >
            {/* Dashed line connector */}
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 96 }} // 24rem
                transition={{ duration: 1 }}
                className="absolute left-1/2 -top-24 w-[1px] border-l-2 border-dashed border-gray-800 hidden md:block" 
            />

            <motion.div 
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between border border-white/10 shadow-2xl relative overflow-hidden group"
            >
              {/* Animated Background Glow */}
              <div className="absolute right-0 top-0 w-96 h-96 bg-[#d4f534]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 group-hover:bg-[#d4f534]/20 transition-colors duration-700" />

              <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Ready to start?
                </h2>
                <p className="text-gray-400 text-lg">
                  No account managers. No fluff. Just you and the experts building something amazing.
                </p>
              </div>

              <div className="relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black hover:bg-[#d4f534] transition-colors px-8 py-5 rounded-full font-bold flex items-center gap-4 text-lg shadow-xl"
                >
                  Discuss your project
                  <div className="bg-black text-white rounded-full p-2 flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.button>

                {/* Handwritten annotation CTA */}
                <motion.div 
                    initial={{ opacity: 0, rotate: -12 }}
                    whileInView={{ opacity: 1, rotate: -12 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-12 -right-8 hidden lg:block"
                >
                  <span className="font-serif italic text-gray-500 text-lg">
                    Let&apos;s go!
                  </span>
                  <svg
                    className="w-8 h-8 text-gray-500 absolute -top-4 -left-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      variants={drawLine}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}