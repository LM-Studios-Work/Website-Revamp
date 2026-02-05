"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  Award,
  Users,
  Rocket,
  Code,
  Search,
  Smartphone,
  CreditCard,
  Calendar,
  FileCheck,
  Building2,
  Briefcase,
  HeartPulse,
  Home,
  GraduationCap,
  Palette,
  ChevronDown,
  CheckCircle2,
  Star,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Monitor,
  ShoppingBag,
  BarChart,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface SandtonWebDesignPageProps {
  onPageChange?: (page: string) => void;
}

export function SandtonWebDesignPage({ onPageChange }: SandtonWebDesignPageProps) {
  const primaryColor = "#d4f534";
  const secondaryColor = "#5dd9c1";
  const accentColor = "#b4a7d6";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#d4f534]/5 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
              <MapPin className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-white/70">Serving South Africa's Premier Business Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
              <span className="bg-gradient-to-r from-[#d4f534] via-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">
                Web Design
              </span>
              <br />
              <span className="text-white">that Matches the</span>
              <br />
              <span className="text-white">Sandton Standard</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed text-balance">
              In South Africa's most competitive business hub, first impressions are everything. Your website should command the same respect as your business address.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg"
                className="group relative overflow-hidden px-8 py-6 text-lg font-semibold"
                style={{ 
                  backgroundColor: primaryColor,
                  color: '#000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = secondaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor;
                }}
                onClick={() => onPageChange?.("contact")}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm"
                onClick={() => onPageChange?.("projects")}
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: Award, label: "Premium Clients", value: "500+", color: primaryColor },
              { icon: Rocket, label: "Projects Launched", value: "1,200+", color: secondaryColor },
              { icon: TrendingUp, label: "Average ROI", value: "340%", color: accentColor }
            ].map((stat, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${stat.color}20, transparent)` 
                  }}
                />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Premium Statement Section */}
      <SectionWrapper className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5dd9c1]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <Building2 className="w-4 h-4" style={{ color: secondaryColor }} />
                <span className="text-sm text-white/70">Your Digital Partner in Excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                Don't Let Your Website <span style={{ color: primaryColor }}>Damage Your Reputation</span>
              </h2>
              
              <p className="text-lg text-white/60 leading-relaxed">
                In Sandton's competitive landscape—from boutique consultancies in Bryanston to specialized firms on Rivonia Road—your clients expect excellence. An outdated or poorly functioning website doesn't just lose traffic; it damages the reputation you've worked years to build.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Professional design that commands respect",
                  "Lightning-fast performance that retains clients",
                  "Mobile experiences that match desktop quality",
                  "SEO strategies that dominate local search"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: secondaryColor }} />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <Monitor className="w-24 h-24 mx-auto" style={{ color: primaryColor }} />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Premium Web Solutions</h3>
                    <p className="text-white/50">For Sandton's Elite Businesses</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d4f534]/20 via-[#5dd9c1]/20 to-[#b4a7d6]/20 blur-3xl opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who is LM Studios */}
      <SectionWrapper className="py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm text-white/70">Your Strategic Partner</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Who is <span style={{ color: primaryColor }}>LM Studios</span>?
            </h2>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              A specialized digital development agency based in Midrand, perfectly positioned to service the Greater Sandton area with the expertise you demand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "The Middle Ground",
                description: "We bridge the gap between cheap freelancers and overpriced agencies. You get top-tier expertise without the corporate bloat.",
                color: primaryColor
              },
              {
                icon: Shield,
                title: "Technical Excellence",
                description: "High-performance code, modern design, and measurable growth. We focus purely on delivering results that matter to your business.",
                color: secondaryColor
              },
              {
                icon: Zap,
                title: "Lean & Efficient",
                description: "No glass office in Sandton CBD means no inflated overhead costs. We're remote-first, which means you pay for expertise, not real estate.",
                color: accentColor
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8 hover:border-white/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${feature.color}30, transparent)` 
                  }}
                />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Custom Website Design for Professionals */}
      <SectionWrapper className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#b4a7d6]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Code className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-white/70">Tailored Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Custom Website Design for <span style={{ color: secondaryColor }}>Sandton Professionals</span>
            </h2>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Your website is the first place potential clients meet you. In Sandton's competitive market, it needs to answer three critical questions immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                icon: Shield, 
                question: "Are they professional?",
                answer: "Clean layouts and strong typography establish immediate credibility",
                color: primaryColor 
              },
              { 
                icon: CheckCircle2, 
                question: "Can I trust them?",
                answer: "Fast load times and polished design signal reliability and competence",
                color: secondaryColor 
              },
              { 
                icon: Phone, 
                question: "How do I contact them?",
                answer: "Clear CTAs and intuitive navigation make conversion effortless",
                color: accentColor 
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8 hover:border-white/20 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <item.icon className="w-full h-full" style={{ color: item.color }} />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: item.color }}>{item.question}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Industry Solutions */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4f534]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Briefcase className="w-7 h-7" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="text-2xl font-bold">Professional Services</h3>
                </div>
                
                <p className="text-white/60 leading-relaxed">
                  We specialize in building authoritative websites for attorneys, financial planners, architects, and recruitment specialists. Your business relies on trust—we ensure you look like the market leader in your niche.
                </p>

                <div className="space-y-3">
                  {[
                    "Law firms and legal consultancies",
                    "Financial advisors and wealth managers",
                    "Executive recruitment agencies",
                    "Management consultancies",
                    "Architectural and engineering firms"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }} />
                      <span className="text-sm text-white/70">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5dd9c1]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Palette className="w-7 h-7" style={{ color: secondaryColor }} />
                  </div>
                  <h3 className="text-2xl font-bold">Luxury & Lifestyle</h3>
                </div>
                
                <p className="text-white/60 leading-relaxed">
                  From aesthetics clinics in Illovo to interior designers in Hyde Park, we build visually stunning portfolios that showcase your work. Your clients buy with their eyes—we ensure every pixel is perfect.
                </p>

                <div className="space-y-3">
                  {[
                    "Aesthetics and wellness clinics",
                    "Interior design studios",
                    "Luxury real estate agencies",
                    "High-end retail boutiques",
                    "Premium hospitality services"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: secondaryColor }} />
                      <span className="text-sm text-white/70">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* SEO Strategy Section */}
      <SectionWrapper className="py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 flex items-center justify-center">
                <div className="space-y-8 w-full">
                  <div className="flex items-center gap-4">
                    <Search className="w-12 h-12" style={{ color: accentColor }} />
                    <div>
                      <div className="text-3xl font-bold" style={{ color: accentColor }}>Rank #1</div>
                      <div className="text-sm text-white/50">In Sandton Searches</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Keyword Research", value: "95%" },
                      { label: "On-Page SEO", value: "88%" },
                      { label: "Local Optimization", value: "92%" },
                      { label: "Technical SEO", value: "97%" }
                    ].map((metric, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">{metric.label}</span>
                          <span style={{ color: accentColor }}>{metric.value}</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: metric.value,
                              backgroundColor: accentColor
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#b4a7d6]/20 via-[#5dd9c1]/20 to-[#d4f534]/20 blur-3xl opacity-20 -z-10" />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4" style={{ color: accentColor }} />
                <span className="text-sm text-white/70">Local SEO Dominance</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                Be Visible in the <span style={{ color: accentColor }}>Sandton Noise</span>
              </h2>
              
              <p className="text-lg text-white/60 leading-relaxed">
                A beautiful website is useless if nobody can find it. In Sandton's massive market, competition is fierce. Whether you're a dentist in Bryanston or a business coach in Woodmead, you're fighting for the top spot.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold">Our Local Dominance Strategy:</h3>
                {[
                  {
                    title: "Precision Keyword Research",
                    desc: "We identify exactly what high-value clients are searching for"
                  },
                  {
                    title: "Complete On-Page Optimization",
                    desc: "Content, speed, and technical excellence that Google rewards"
                  },
                  {
                    title: "Google Business Profile Mastery",
                    desc: "Dominate local search results and map pack rankings"
                  },
                  {
                    title: "Quality Lead Focus",
                    desc: "Get in front of clients who can actually afford your services"
                  }
                ].map((strategy, idx) => (
                  <Card key={idx} className="bg-white/5 border-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                      <div>
                        <div className="font-semibold text-white">{strategy.title}</div>
                        <div className="text-sm text-white/60">{strategy.desc}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* E-Commerce and Digital Tools */}
      <SectionWrapper className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4f534]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <ShoppingBag className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-white/70">Revenue-Generating Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              E-Commerce & <span style={{ color: primaryColor }}>Digital Tools</span>
            </h2>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              For businesses that need more than a brochure, we build functional tools that help you make money while you sleep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4f534]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <CreditCard className="w-8 h-8" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="text-2xl font-bold">Boutique E-Commerce</h3>
                </div>
                
                <p className="text-white/60 leading-relaxed">
                  Secure, easy-to-manage online stores that allow local retailers to sell to a wider audience. We handle payment gateway integrations (PayFast, Yoco) and ensure smooth, secure checkout experiences.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "PayFast & Yoco payment integration",
                    "Inventory management systems",
                    "Automated order processing",
                    "Mobile-optimized checkout",
                    "Secure customer data handling"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3" style={{ color: primaryColor }} />
                      </div>
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5dd9c1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Calendar className="w-8 h-8" style={{ color: secondaryColor }} />
                  </div>
                  <h3 className="text-2xl font-bold">Automated Booking</h3>
                </div>
                
                <p className="text-white/60 leading-relaxed">
                  Stop playing phone tag with clients. We integrate automated calendar systems that allow your clients to book consultations or appointments directly from your website, 24/7.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Real-time availability syncing",
                    "Automated confirmation emails",
                    "Calendar integration (Google, Outlook)",
                    "Payment collection at booking",
                    "Customizable booking rules"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3" style={{ color: secondaryColor }} />
                      </div>
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Sandton SMEs Partner with Us */}
      <SectionWrapper className="py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Users className="w-4 h-4" style={{ color: secondaryColor }} />
              <span className="text-sm text-white/70">Your Business Partner</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Why Sandton SMEs <span style={{ color: secondaryColor }}>Partner with LM Studios</span>
            </h2>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              We're not just developers—we're business partners who understand the pressure of operating in South Africa's most competitive market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "We Are Your Neighbors",
                description: "Based in Midrand, we're just down the highway. We understand the local context, geography, and business culture of Gauteng.",
                color: primaryColor
              },
              {
                icon: Users,
                title: "Direct Access",
                description: "No junior account managers. You have direct access to the experts building your site. Plain English explanations, transparent pricing.",
                color: secondaryColor
              },
              {
                icon: FileCheck,
                title: "Full Ownership",
                description: "Once your project is paid for, you own 100% of your website, design, and code. No expensive monthly contracts to keep your site online.",
                color: accentColor
              }
            ].map((benefit, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${benefit.color}30, transparent)` 
                  }}
                />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Service Areas - Sandton Specific */}
      <SectionWrapper className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#b4a7d6]/5 via-transparent to-[#5dd9c1]/5 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Globe className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm text-white/70">Greater Sandton Coverage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Proudly Serving the <span style={{ color: primaryColor }}>Greater Sandton Area</span>
            </h2>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              From Bryanston to Woodmead, we provide premium web design services across all of Sandton's key business districts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Sandton Central", icon: Building2 },
              { name: "Bryanston", icon: Home },
              { name: "Rivonia", icon: Briefcase },
              { name: "Morningside", icon: MapPin },
              { name: "Woodmead", icon: Building2 },
              { name: "Illovo", icon: Palette },
              { name: "Hyde Park", icon: Home },
              { name: "Sandown", icon: Briefcase }
            ].map((area, index) => {
              const colors = [primaryColor, secondaryColor, accentColor];
              const color = colors[index % colors.length];
              
              return (
                <Card 
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 p-6 hover:border-white/20 transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${color}30, transparent)` 
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <area.icon className="w-5 h-5 flex-shrink-0" style={{ color }} />
                    <span className="font-semibold text-sm">{area.name}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <SectionWrapper className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <FileCheck className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm text-white/70">Common Questions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span style={{ color: accentColor }}>Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Why should I choose LM Studios over other Sandton web design agencies?",
                answer: "We offer the perfect middle ground: top-tier expertise without corporate bloat. You get premium design and development at fair prices because we operate lean and remote-first. Plus, being based in Midrand means we understand the local market intimately."
              },
              {
                question: "How long does it take to build a professional website?",
                answer: "Most professional service websites take 4-6 weeks from kickoff to launch. E-commerce solutions and complex booking systems may take 8-12 weeks. We provide detailed timelines during our discovery phase and keep you updated throughout the process."
              },
              {
                question: "Do you offer SEO services for Sandton businesses?",
                answer: "Absolutely. We specialize in local SEO strategies that help Sandton businesses dominate search results in their specific areas—whether you're in Bryanston, Rivonia, or Woodmead. We focus on attracting high-value clients who can afford premium services."
              },
              {
                question: "What's included in your e-commerce solutions?",
                answer: "Our e-commerce packages include secure payment gateway integration (PayFast, Yoco), inventory management, automated order processing, mobile-optimized checkout, and ongoing support. Everything you need to sell online successfully."
              },
              {
                question: "Can you integrate automated booking into my existing website?",
                answer: "Yes! We can integrate booking systems into existing sites or build new ones from scratch. Our booking solutions sync with Google Calendar, Outlook, and other platforms, with automated confirmations and payment collection."
              },
              {
                question: "Do I own the website after it's completed?",
                answer: "100%. Once your project is fully paid for, you own all the code, design files, and content. We believe in fair business—no lock-in contracts or hidden fees to keep your site running."
              },
              {
                question: "What kind of businesses do you work with in Sandton?",
                answer: "We specialize in professional services (law firms, financial advisors, consultancies) and luxury/lifestyle brands (aesthetics clinics, interior designers, real estate). Any Sandton business that values quality and needs a competitive edge online."
              },
              {
                question: "How do you handle ongoing support and maintenance?",
                answer: "We offer flexible support packages based on your needs—from basic hosting and security updates to full-service management including content updates, SEO optimization, and performance monitoring. No mandatory monthly fees; you choose what you need."
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 bg-white/5 rounded-xl px-6 data-[state=open]:bg-white/[0.07]"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4f534]/10 via-[#5dd9c1]/10 to-[#b4a7d6]/10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                Ready to Upgrade Your <span className="bg-gradient-to-r from-[#d4f534] via-[#5dd9c1] to-[#b4a7d6] bg-clip-text text-transparent">Digital Presence</span>?
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Don't let your business blend into the background. Partner with LM Studios to build a website that stands out in South Africa's toughest market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                className="group relative overflow-hidden px-10 py-7 text-lg font-semibold"
                style={{ 
                  backgroundColor: primaryColor,
                  color: '#000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = secondaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor;
                }}
                onClick={() => onPageChange?.("contact")}
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: primaryColor }} />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: secondaryColor }} />
                <span>No Obligation Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: accentColor }} />
                <span>Fast Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
