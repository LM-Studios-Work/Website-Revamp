/**
 * Centralized Data Store
 * 
 * All static data arrays used across the application.
 * Separating data from components improves maintainability and reusability.
 */

// ============================================
// PROJECTS DATA
// ============================================

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
  description: string;
  accent: string;
  url?: string;
}

export type ProjectCategory = 
  | "Web Design" 
  | "SEO" 
  | "E-commerce" 
  | "App Development" 
  | "Portfolio" 
  | "Event Management" 
  | "Essential Business";

export const projectCategories: ProjectCategory[] = [
  "Web Design",
  "SEO",
  "E-commerce",
  "App Development",
  "Portfolio",
  "Essential Business",
];

export const projects: Project[] = [
  {
    id: 7,
    title: "MR FLOAT - Transport Service",
    description:
      "A transport company in Zimbabwe that offers a wide array of services, including taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries.",
    image: "/preview/float.webp",
    url: "https://private-car-hire.vercel.app",
    category: "Essential Business",
    tags: ["Transportation", "Booking"],
    accent: "#D4FF3F",
  },
  {
    id: 8,
    title: "Vuza Trading",
    description:
      "A professional trading platform with real-time analytics and user-friendly interface.",
    image: "/preview/vuza-trading.png",
    url: "https://vuzatrading.com",
    category: "Essential Business",
    tags: ["Automated Security", "Aluminum Solutions", "CCTV", "Alarm Systems"],
    accent: "#6ee2d1",
  },
  {
    id: 9,
    title: "Mothupi & Lesego - Wedding",
    description:
      "A wedding invitation with an interactive map and a gift registry.",
    image: "/preview/mothupi-and-lesego.png",
    url: "https://mothupi-and-lesego.co.za",
    category: "Event Management",
    tags: ["Wedding", "Event"],
    accent: "#c1a8f8",
  },
  {
    id: 10,
    title: "Rokunda Mboyi",
    description: "A passionate architect shaping the future of design with innovative and sustainable solutions.",
    image: "/preview/rokunda-mboyi.png",
    url: "https://rokundamboyi.com",
    category: "Portfolio",
    tags: ["Architect", "Portfolio"],
    accent: "#D4FF3F",
  },
  {
    id: 11,
    title: "Monare Selahle",
    description: "Modern portfolio for a Computer Science student.",
    image: "/preview/monare-selahle.png",
    url: "https://monareselahle.co.za",
    category: "Portfolio",
    tags: ["Software Engineer", "Portfolio"],
    accent: "#6ee2d1",
  },
  {
    id: 12,
    title: "Shots By Ozee",
    description:
      "A photographer and visionary creative currently studying Chemical Engineering.",
    image: "/preview/shots-by-ozee.png",
    url: "https://shotsbyozee.co.za",
    category: "Portfolio",
    tags: ["Photography", "Portfolio"],
    accent: "#c1a8f8",
  },
  {
    id: 13,
    title: "Gordian Malaka",
    description: "A film student who has a passion for photography.",
    image: "/preview/gordian-malaka.png",
    url: "https://uvhu-portfolio-9rw1.vercel.app/",
    category: "Portfolio",
    tags: ["Photography", "Videography", "Portfolio"],
    accent: "#D4FF3F",
  },
];

// ============================================
// TEAM MEMBERS DATA
// ============================================

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  roleColor: string;
  description: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Lupry",
    role: "Lead Designer",
    roleColor: "text-[#d4f534]",
    description: "Obsessed with pixel perfection and user psychology. Lupry turns complex problems into intuitive interfaces.",
    skills: ["UI/UX", "Brand Strategy", "Motion"],
    gradientFrom: "from-[#d4f534]",
    gradientTo: "to-emerald-500",
  },
  {
    id: 2,
    name: "Monare",
    role: "Tech Lead",
    roleColor: "text-[#5dd9c1]",
    description: "Full-stack wizard who dreams in code. Monare ensures your platform is scalable, secure, and lightning fast.",
    skills: ["Next.js", "System Arch", "Cloud"],
    gradientFrom: "from-[#5dd9c1]",
    gradientTo: "to-blue-500",
  },
];

// ============================================
// SERVICES DATA
// ============================================

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
  accentColor: string;
}

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    subtitle: "Crafting beautiful, user-friendly websites",
    description: "Our web design services combine stunning visuals with seamless functionality. Whether you need a standard website or a fully custom solution.",
    image: "https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?auto=format&fit=crop&w=1080&q=80",
    items: ["Custom & Standard Pack options", "Responsive design for all devices", "Built with modern frameworks"],
    accentColor: "#d4f534",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    subtitle: "Boost your visibility & organic traffic",
    description: "Get found by your target audience. We optimize your website's structure, content, and technical elements to improve search engine rankings.",
    image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?auto=format&fit=crop&w=1080&q=80",
    items: ["Keyword research & strategy", "On-page & technical SEO", "Performance tracking & reporting"],
    accentColor: "#c084fc",
  },
  {
    id: "app-development",
    title: "App Development",
    subtitle: "Mobile & Web Applications",
    description: "From concept to launch, we build high-performance mobile and web applications that engage users and drive business growth.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1080&q=80",
    items: ["iOS & Android Development", "Cross-platform solutions", "Custom backend & APIs"],
    accentColor: "#6ee2d1",
  },
];

// ============================================
// WEB DESIGN PACKAGES DATA
// ============================================

export interface WebPackage {
  id: number;
  name: string;
  price: string;
  description: string;
  delivery: string;
  features: string[];
  color: string;
  popular: boolean;
}

export const webPackages: WebPackage[] = [
  {
    id: 1,
    name: "Essential Business",
    price: "R2,499",
    description: "A clean, modern 3-page website designed to make your business look credible.",
    delivery: "5-7 days",
    features: [
      "3 professionally designed pages",
      "Mobile-responsive layout",
      "Contact form & email setup",
      "Click-to-call & WhatsApp",
      "Social media integration",
      "Basic SEO optimization",
      "Custom Domain",
    ],
    color: "#d4f534",
    popular: false,
  },
  {
    id: 2,
    name: "Professional Growth",
    price: "R4,999",
    description: "Perfect for businesses ready to grow, build trust, and showcase work.",
    delivery: "7-12 days",
    features: [
      "Up to 6 pages (Home, About...)",
      "Professionally written content",
      "High-quality gallery/portfolio",
      "Client testimonials section",
      "Google Maps integration",
      "Advanced contact forms",
      "Local SEO optimization",
      "Professional email setup",
    ],
    color: "#5dd9c1",
    popular: true,
  },
  {
    id: 3,
    name: "Personal Portfolio",
    price: "R1,999",
    description: "A stunning, modern portfolio to showcase your work and skills.",
    delivery: "4-6 days",
    features: [
      "Single-page scrolling design",
      "Animated introductions",
      "Project gallery with details",
      "Resume/CV download link",
      "Contact form & social links",
      "Custom Domain",
    ],
    color: "#b4a7d6",
    popular: false,
  },
  {
    id: 4,
    name: "Event Management",
    price: "R3,499",
    description: "A dedicated website for your special event, wedding, or conference.",
    delivery: "6-8 days",
    features: [
      "Event details & schedule",
      "Photo and video gallery",
      "RSVP guest management",
      "Gift registry links",
      "Password-protected access",
      "Custom Domain",
    ],
    color: "#ff6b6b",
    popular: false,
  },
];

// ============================================
// SEO PACKAGES DATA
// ============================================

export interface SEOPackage {
  name: string;
  time: string;
  price: string;
  billing: string;
  description: string;
  idealFor: string;
  features: string[];
  accent: string;
  popular: boolean;
}

export const seoPackages: SEOPackage[] = [
  {
    name: "Local Kickstart",
    time: "25h min.",
    price: "R3,499",
    billing: "once-off",
    description: "Essential setup for local businesses to get found on Google Maps and local search.",
    idealFor: "Small local shops, plumbers, salons",
    features: [
      "Google Business Profile Optimization",
      "Technical Site Audit & Fixes",
      "Local Keyword Research",
      "Meta Title & Description Setup",
      "Google Analytics & Console Setup",
    ],
    accent: "border-[#c084fc]/20",
    popular: false,
  },
  {
    name: "Growth Engine",
    time: "60h min.",
    price: "R4,500",
    billing: "per month",
    description: "A monthly campaign designed to increase rankings and organic traffic consistently.",
    idealFor: "Growing businesses, service providers",
    features: [
      "Everything in Kickstart",
      "2x High-Quality Blog Posts/mo",
      "On-Page Content Optimization",
      "Monthly Backlink Strategy",
      "Keyword Tracking Dashboard",
    ],
    accent: "border-[#c084fc]/50 bg-gradient-to-br from-[#c084fc]/10 to-transparent",
    popular: true,
  },
  {
    name: "Market Leader",
    time: "100h min.",
    price: "R8,500",
    billing: "per month",
    description: "Aggressive SEO strategy to dominate high-competition keywords and industry leaders.",
    idealFor: "E-commerce, National brands",
    features: [
      "4x High-Quality Blog Posts/mo",
      "Advanced Content Strategy",
      "High-Authority Link Building",
      "Dedicated SEO Manager",
      "Quarterly Strategy Review",
    ],
    accent: "border-[#c084fc]",
    popular: false,
  },
];

// ============================================
// SEO PROCESS STEPS
// ============================================

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  tag?: string;
}

export const seoProcessSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Analyse your website",
    description: "We first analyse your website, followed by a step-by-step plan to have the website communicate keywords more effectively to search engines.",
    color: "bg-[#c084fc]",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "RESEARCH",
    description: "Keyword density tells you how often a search term appears in a text in relation to the total number of words it contains.",
    color: "bg-[#a960ec]",
    textColor: "text-black",
    tag: "Priority",
  },
  {
    id: 3,
    title: "ONSITE OPTIMISATION",
    description: "Optimisation refers to all measures that can be taken directly within the website in order to improve its position.",
    color: "bg-[#9333ea]",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "REPORTING AND ANALYSIS",
    description: "Our SEO review consists of several factors like content, linking structure, social media efforts, and trust on the internet.",
    color: "bg-[#7c3aed]",
    textColor: "text-white",
  },
];

export const webProcessSteps: ProcessStep[] = [
  { 
    id: 1, 
    title: "Sitemap", 
    description: "We create a structured blueprint that maps your website's pages and their relationships.", 
    color: "bg-[#d4f534]", 
    textColor: "text-black",
  },
  { 
    id: 2, 
    title: "Wireframes", 
    description: "Wireframes outline layout and functionality, providing a design-ready page structure.", 
    color: "bg-[#5dd9c1]", 
    textColor: "text-black",
    tag: "Custom Pack",
  },
  { 
    id: 3, 
    title: "Design", 
    description: "We craft a visually appealing brand-aligned design for your website.", 
    color: "bg-[#b4a7d6]", 
    textColor: "text-black",
  },
  { 
    id: 4, 
    title: "Build", 
    description: "We bring the design to life with clean, SEO-friendly code using modern frameworks.", 
    color: "bg-[#ff6b6b]", 
    textColor: "text-black",
  },
];

// ============================================
// FEATURES / BENEFITS DATA
// ============================================

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Expert Team",
    description: "Our experienced designers and developers bring your vision to life with precision.",
    icon: "Code",
  },
  {
    title: "Proven Results",
    description: "We deliver websites that not only look great but also drive conversions.",
    icon: "Zap",
  },
  {
    title: "Modern Stack",
    description: "Built with cutting-edge technologies and best practices for performance.",
    icon: "CheckCircle",
  },
];

// ============================================
// APP DEVELOPMENT PACKAGES DATA
// ============================================

export interface AppPackage {
  id: number;
  name: string;
  price: string;
  description: string;
  delivery: string;
  features: string[];
  color: string;
  popular: boolean;
}

export const appPackages: AppPackage[] = [
  {
    id: 1,
    name: "Starter App",
    price: "R15,000",
    description: "A simple mobile app with essential features for startups and small businesses.",
    delivery: "4-6 weeks",
    features: [
      "Single platform (iOS or Android)",
      "Up to 5 core screens",
      "Basic user authentication",
      "Push notifications",
      "App store submission",
      "3 months support",
    ],
    color: "#6ee2d1",
    popular: false,
  },
  {
    id: 2,
    name: "Business App",
    price: "R35,000",
    description: "Cross-platform app with advanced features for growing businesses.",
    delivery: "8-12 weeks",
    features: [
      "iOS & Android (React Native)",
      "Up to 15 screens",
      "User profiles & dashboards",
      "Payment integration",
      "Admin panel included",
      "API integrations",
      "6 months support",
    ],
    color: "#6ee2d1",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise Solution",
    price: "Custom",
    description: "Fully custom app development for complex enterprise requirements.",
    delivery: "12+ weeks",
    features: [
      "Native iOS & Android",
      "Unlimited screens & features",
      "Custom backend development",
      "Third-party integrations",
      "Dedicated project manager",
      "12 months support & maintenance",
    ],
    color: "#b4a7d6",
    popular: false,
  },
];

export const appProcessSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description: "We analyse your requirements, target audience, and define the app's core features and user flows.",
    color: "bg-[#6ee2d1]",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "We create wireframes and high-fidelity designs that prioritise user experience and brand consistency.",
    color: "bg-[#5dd9c1]",
    textColor: "text-black",
    tag: "Critical",
  },
  {
    id: 3,
    title: "Development",
    description: "Our developers build your app using modern frameworks, ensuring clean code and optimal performance.",
    color: "bg-[#4fd1b5]",
    textColor: "text-black",
  },
  {
    id: 4,
    title: "Testing & Launch",
    description: "Rigorous QA testing across devices, followed by app store submission and launch support.",
    color: "bg-[#38c4a8]",
    textColor: "text-white",
  },
];

export const appDevFAQs: FAQ[] = [
  {
    category: "Platforms & Technology",
    icon: "Smartphone",
    questions: [
      {
        q: "Do you build native or cross-platform apps?",
        a: "We offer both options. For cost-effective solutions, we use React Native for cross-platform development. For maximum performance, we build native apps using Swift (iOS) and Kotlin (Android).",
      },
      {
        q: "Which technology stack do you use?",
        a: "We use React Native and Flutter for cross-platform apps, Swift/SwiftUI for iOS, and Kotlin for Android. Backend services are typically built with Node.js, Python, or Go.",
      },
      {
        q: "Can you develop web applications as well?",
        a: "Yes. We build Progressive Web Apps (PWAs) and full-stack web applications using Next.js, React, and modern backend technologies.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    icon: "Clock",
    questions: [
      {
        q: "How long does it take to build an app?",
        a: "A simple app takes 4-6 weeks, while complex apps with multiple features can take 3-6 months. We provide detailed timelines after the discovery phase.",
      },
      {
        q: "Do you handle app store submissions?",
        a: "Yes. We manage the entire submission process for both Apple App Store and Google Play Store, including compliance with their guidelines.",
      },
      {
        q: "What is your development process?",
        a: "We follow an agile methodology with regular sprints, demos, and feedback sessions. You'll have visibility into progress through weekly updates and milestone reviews.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    icon: "Server",
    questions: [
      {
        q: "Do you provide ongoing maintenance?",
        a: "Yes. All packages include post-launch support. We also offer monthly maintenance plans for updates, bug fixes, and new feature development.",
      },
      {
        q: "Can you update my existing app?",
        a: "Yes. We can take over existing projects, perform code audits, and implement improvements or new features.",
      },
      {
        q: "What happens after the app is launched?",
        a: "We monitor performance, address user feedback, and provide analytics reports. Our team remains available for iterations and scaling as your user base grows.",
      },
    ],
  },
];

// ============================================
// FAQS DATA
// ============================================

export interface FAQ {
  category: string;
  icon: string;
  questions: { q: string; a: string }[];
}

export const webDesignFAQs: FAQ[] = [
  {
    category: "Local Coverage",
    icon: "MapPin",
    questions: [
      { 
        q: "Do you offer web design services in Midrand?", 
        a: "Yes. We provide full web design and development services across Midrand, including business hubs such as Waterfall City, Kyalami, and Carlswald. Being locally based allows us to meet in person when required." 
      },
      { 
        q: "Are you a Johannesburg-based web design company?", 
        a: "Yes. LM Studios works with clients throughout Johannesburg and Gauteng. Our websites are built with South African users and search behaviour in mind." 
      },
      { 
        q: "Can you meet in person for a consultation?", 
        a: "Yes. We are available for in-person consultations in Midrand, Johannesburg, and surrounding Gauteng areas to discuss project scope, UX/UI, and technical requirements." 
      },
    ],
  },
  {
    category: "Small Business",
    icon: "Globe",
    questions: [
      { 
        q: "Do you offer affordable web design for small businesses?", 
        a: "Yes. We provide tailored website solutions for small businesses that need a professional online presence without unnecessary complexity or cost." 
      },
      { 
        q: "Will I be able to manage content myself?", 
        a: "Yes. We build custom content management solutions that allow you to update text, images, and pages without relying on a developer for routine changes." 
      },
      { 
        q: "How long does it take to build a website?", 
        a: "A typical small to medium business website usually takes 2-4 weeks, depending on project scope and content readiness." 
      },
    ],
  },
  {
    category: "Large Business & Enterprise",
    icon: "Building2",
    questions: [
      { 
        q: "Do you provide custom web development?", 
        a: "Yes. We specialise in custom web development for businesses that require bespoke functionality, internal systems, or advanced workflows." 
      },
      { 
        q: "Can you integrate with existing systems?", 
        a: "Yes. We offer API integrations with CRM, ERP, accounting, and operational systems to enable seamless data flow." 
      },
      { 
        q: "How do you handle security?", 
        a: "We provide structured maintenance and support services, including updates, monitoring, backups, and security management." 
      },
    ],
  },
  {
    category: "Technical & SEO",
    icon: "Server",
    questions: [
      { 
        q: "Do your websites include SEO best practices?", 
        a: "Yes. Every website is built with technical SEO foundations, including fast load speeds, mobile-first design, clean code structure, and schema-ready markup to support Google rankings in South Africa." 
      },
      { 
        q: "Are your websites mobile-friendly?", 
        a: "Yes. All websites we build are fully responsive and tested across devices to ensure consistent performance and usability." 
      },
    ],
  },
];
