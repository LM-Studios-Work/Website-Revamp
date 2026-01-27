export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  delivery: string;
  features: string[];
  color: string;
  popular?: boolean;
}

export const servicePackages: ServicePackage[] = [
   {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    price: "R1,999",
    description:
      "A stunning, modern portfolio to showcase your work, skills, and personality.",
    delivery: "4–6 working days",
    features: [
      "Single-page scrolling design",
      "Animated introductions & effects",
      "Project gallery with descriptions",
      "Resume/CV download link",
      "Contact form & social links",
      "Custom Domain",
    ],
    color: "#b4a7d6",
    popular: false,
  },
  {
    id: "startup",
    name: "Startup Pack",
    price: "R999",
    description:
      "Perfect for launching your online presence with a clean, professional site.",
    delivery: "3–5 working days",
    features: [
      "3 professionally designed pages",
      "Mobile-responsive layout",
      "Contact form & email setup",
      "Click-to-call & WhatsApp buttons",
      "Social media integration",
      "Basic SEO optimization",
      "Custom Domain",
    ],
    color: "#d4f534",
    popular: false,
  },
  {
    id: "professional-growth",
    name: "Professional Growth",
    price: "R1,999",
    description:
      "A comprehensive solution for established businesses wanting to scale.",
    delivery: "5–7 working days",
    features: [
      "Up to 6 pages (Home, About, Services...)",
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
    id: "event-management",
    name: "Event Management",
    price: "R3,499",
    description:
      "A dedicated website for your special event, like a wedding, conference, or party.",
    delivery: "6–8 working days",
    features: [
      "Event details & schedule",
      "Photo and video gallery",
      "RSVP form with guest management",
      "Gift registry links",
      "Password-protected access",
      "Custom Domain",
    ],
    color: "#ff6b6b",
    popular: false,
  },
];
