/**
 * Area Web Design Page Data
 *
 * Data-driven configuration for city/area-specific web design pages.
 * Each area defines its unique content while sharing the same page structure.
 */

import type { PageType } from "./navigation";

// ============================================
// TYPES
// ============================================

export interface AreaFAQSection {
  category: string;
  iconName: string;
  questions: { q: string; a: string }[];
}

export interface AreaIndustry {
  iconName: string;
  title: string;
  description: string;
  color: string;
}

export interface AreaSEOFeature {
  iconName: string;
  text: string;
}

export interface AreaServiceZone {
  category: string;
  iconName: string;
  locations: string[];
  color: string;
}

export interface AreaBenefit {
  iconName: string;
  title: string;
  description: string;
}

export interface AreaPageData {
  cityName: string;
  region: string;
  pageId: PageType;

  hero: {
    outlineTitle: string;
    mainTitle: string;
    mainTitleHighlight: string;
    description: string;
    heroImage?: string;
    heroImageAlt?: string;
    heroImageFallbackIcon?: string;
  };

  trustBar: { value: string; label: string }[];

  whySection: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: { iconName: string; title: string; description: string }[];
  };

  industries: {
    title: string;
    titleHighlight: string;
    description: string;
    items: AreaIndustry[];
  };

  localSeo: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: AreaSEOFeature[];
    image?: string;
    imageAlt?: string;
    imageFallbackIcon?: string;
    testimonial?: string;
    testimonialLabel?: string;
  };

  packages: {
    title: string;
    titleHighlight: string;
    description: string;
  };

  serviceAreas: {
    title: string;
    titleHighlight: string;
    description: string;
    zones: AreaServiceZone[];
  };

  whyPartner: {
    title: string;
    titleHighlight: string;
    description: string;
    benefits: AreaBenefit[];
    image?: string;
    imageAlt?: string;
    imageFallbackIcon?: string;
  };

  automation: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: string[];
    image?: string;
    imageAlt?: string;
    imageFallbackIcon?: string;
  };

  faqs: {
    title: string;
    titleHighlight: string;
    description: string;
    sections: AreaFAQSection[];
  };

  cta: {
    title: string;
    description: string;
    seoText: string;
  };
}

// ============================================
// MIDRAND DATA
// ============================================

export const midrandData: AreaPageData = {
  cityName: "Midrand",
  region: "Gauteng",
  pageId: "midrand-web-design",

  hero: {
    outlineTitle: "Web Design in Midrand",
    mainTitle: "Professional Websites",
    mainTitleHighlight: "for Midrand Businesses.",
    description:
      "Positioned between Johannesburg and Pretoria, Midrand is Gauteng's fastest-growing business hub. Whether you're launching a startup in Vorna Valley or running an operation near the Gallagher Convention Centre, we build custom websites that match the pace of this area.",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1080&q=80",
    heroImageAlt:
      "Midrand business district skyline representing web design services in the area",
  },

  trustBar: [
    { value: "50+", label: "Websites Delivered" },
    { value: "100%", label: "Code Ownership" },
    { value: "5-7", label: "Day Turnaround" },
    { value: "Local", label: "Midrand Based" },
  ],

  whySection: {
    badge: "Midrand's Digital Partner",
    title: "Why Your Midrand Business Needs",
    titleHighlight: "a Professional Website",
    description:
      "You don't need to outsource your digital strategy to a generic agency in Cape Town or an expensive firm in Sandton. We are based right here, and we understand the unique mix of Midrand's economy — from the retail bustle of the Mall of Africa district to the logistics powerhouses in Kyalami.",
    items: [
      {
        iconName: "Globe",
        title: "Remote-First, Locally Rooted",
        description:
          "We operate as a remote-first team rooted in the Midrand area. This model allows us to offer premium, agency-grade development without the inflated costs of renting office space in Waterfall City. You get high-performance code, personal service, and local accountability.",
      },
      {
        iconName: "TrendingUp",
        title: "Midrand Is Growing Fast",
        description:
          "With developments in Waterfall City, the N1 corridor, and Kyalami, Midrand attracts more businesses every month. A professional website positions you to capture this growing market before competitors do.",
      },
      {
        iconName: "ShieldCheck",
        title: "Full Code Ownership",
        description:
          "You own every line of code we write. No lock-in contracts, no hidden fees, no monthly website rental schemes. Just a solid digital asset owned 100% by you.",
      },
    ],
  },

  industries: {
    title: "Custom Website Design for",
    titleHighlight: "Midrand's Industries",
    description:
      "Your website is your 24/7 salesperson. We build sites that work for your specific industry, whether you're a local service provider or a national distributor operating from the N1 corridor.",
    items: [
      {
        iconName: "Home",
        title: "Service Businesses in Carlswald & Noordwyk",
        description:
          "If you are a plumber, electrician, or consultant servicing the residential estates, we build fast, mobile-responsive sites that convert neighbours into clients. Your website will feature click-to-call buttons, WhatsApp integration, and service area pages targeting Midrand suburbs.",
        color: "#d4f534",
      },
      {
        iconName: "Store",
        title: "Retail & E-Commerce near Mall of Africa",
        description:
          "With the massive foot traffic around Mall of Africa, your physical store needs a digital twin. We build e-commerce platforms that let you sell locally and nationally, complete with inventory management, payment gateways, and product catalogues optimised for search.",
        color: "#5dd9c1",
      },
      {
        iconName: "Briefcase",
        title: "B2B & Industrial in Halfway House & Kyalami",
        description:
          "For businesses in the Halfway House and Kyalami Business Parks, we design credible, information-rich websites that help you secure tenders and corporate contracts. Think detailed service pages, case studies, and professional contact flows.",
        color: "#b4a7d6",
      },
    ],
  },

  localSeo: {
    badge: "SEO for Midrand",
    title: "Dominating Search Results",
    titleHighlight: "Along the N1 Corridor",
    description:
      "Midrand is highly competitive. When a potential client in Blue Hills or Crowthorne searches for your services, they should not find a competitor in Centurion. We specialise in hyper-local SEO that puts your business in front of the right people, at the right time.",
    features: [
      { iconName: "Search", text: "Google Business Profile optimisation for Midrand map pack results" },
      { iconName: "MapPin", text: "Hyper-local keyword targeting for Waterfall, Kyalami, and surrounding areas" },
      { iconName: "BarChart3", text: "High-intent local traffic driven directly to your phone and inbox" },
      { iconName: "Globe", text: "Position capture from the N1 corridor and suburban routes like Allandale and Main Road" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "SEO analytics dashboard showing local search performance for Midrand businesses",
    testimonial: "Ranked #1 for web design Midrand within 3 months of launch.",
    testimonialLabel: "Local SEO Case Study",
  },

  packages: {
    title: "Web Design Packages for",
    titleHighlight: "Midrand",
    description:
      "We do not use templates. Every website is custom-built for your business. Whether you're a solo consultant in Noordwyk or a growing company in Waterfall City, we have a package that fits.",
  },

  serviceAreas: {
    title: "Serving the",
    titleHighlight: "Entire Midrand Region",
    description:
      "We don't just say \"Midrand\". We mean the whole ecosystem. Our web design and SEO services cover the key economic and residential nodes across the region.",
    zones: [
      {
        category: "Commercial Hubs",
        iconName: "Building2",
        locations: ["Waterfall City", "Halfway House", "Kyalami Business Park", "Barbeque Downs"],
        color: "#d4f534",
      },
      {
        category: "Residential Growth Zones",
        iconName: "Users",
        locations: ["Vorna Valley", "Carlswald", "Noordwyk", "Blue Hills", "Crowthorne", "Glen Austin"],
        color: "#5dd9c1",
      },
      {
        category: "Key Landmarks",
        iconName: "MapPin",
        locations: ["Mall of Africa", "Gallagher Convention Centre", "Grand Central Airport", "Kyalami Grand Prix Circuit"],
        color: "#b4a7d6",
      },
    ],
  },

  whyPartner: {
    title: "Why Partner With a",
    titleHighlight: "Local Remote Team",
    description:
      "We offer the best of both worlds. Local enough to meet you at a coffee shop in Waterfall City, remote enough to keep our prices competitive.",
    benefits: [
      {
        iconName: "Users",
        title: "Accessible & Understandable",
        description: "We speak plain English, avoiding confusing jargon. We explain exactly how your investment will generate returns for your Midrand business.",
      },
      {
        iconName: "Zap",
        title: "Efficient & Cost-Effective",
        description: "Our remote model eliminates overhead costs. You receive the same quality of work as a Sandton agency at a fraction of the price.",
      },
      {
        iconName: "Code",
        title: "Modern Technology Stack",
        description: "We build with Next.js, React, and Tailwind CSS. Your website will be fast, secure, and built to scale as your business grows.",
      },
      {
        iconName: "ShieldCheck",
        title: "No Lock-In Contracts",
        description: "You own everything. Your domain, your hosting, your code. We believe in earning your business through results, not contracts.",
      },
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Web design team collaborating on a project for a Midrand client",
  },

  automation: {
    badge: "Beyond Websites",
    title: "App Development &",
    titleHighlight: "Business Automation",
    description:
      "As Midrand grows, so does the complexity of running a business here. We build custom software solutions to streamline your operations and help you scale efficiently.",
    items: [
      "Managing a fleet near Grand Central Airport? We build logistics dashboards.",
      "Handling bookings for a lifestyle business in Blue Hills? We create automated booking systems.",
      "Running inventory across multiple locations? We develop custom inventory management tools.",
      "Need a client portal for your Kyalami-based firm? We build secure, branded portals.",
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Custom app development and business automation solutions for Midrand businesses",
  },

  faqs: {
    title: "Frequently Asked Questions About",
    titleHighlight: "Web Design in Midrand",
    description: "Everything you need to know about getting a professional website built for your Midrand business.",
    sections: [
      {
        category: "Web Design in Midrand",
        iconName: "Globe",
        questions: [
          {
            q: "Do you provide web design services specifically for Midrand businesses?",
            a: "Yes. We provide full web design and development services tailored specifically for businesses operating in the Midrand area, including Waterfall City, Kyalami, Halfway House, Vorna Valley, Carlswald, Noordwyk, and Blue Hills. We understand the local market dynamics and build websites that resonate with your target audience.",
          },
          {
            q: "How much does a website cost for a small business in Midrand?",
            a: "Our Essential Business package starts at R2,499 for a professional 3-page website delivered in 5-7 days. For growing businesses that need more pages and features, our Professional Growth package is R4,999. Every website is custom-built, mobile-responsive, and SEO-optimised for local Midrand search terms.",
          },
          {
            q: "Can we meet in person to discuss my project?",
            a: "Absolutely. While we operate as a remote-first team for efficiency, we are locally based and available for in-person consultations across the Midrand area. We can meet at a location convenient to you in Waterfall City, Kyalami, or any other part of Midrand.",
          },
        ],
      },
      {
        category: "Local SEO & Rankings",
        iconName: "Search",
        questions: [
          {
            q: "Can you help my business rank on Google in the Midrand area?",
            a: "Yes. We specialise in local SEO for Midrand businesses. We optimise your Google Business Profile, target hyper-local keywords such as 'web design Midrand', 'plumber Waterfall City', and 'electrician Kyalami', and implement technical SEO to help you appear in the Google Map Pack and organic search results.",
          },
          {
            q: "How long does it take to see SEO results?",
            a: "Local SEO results typically begin to show within 2-4 months, with significant improvements in 4-6 months. The timeline depends on competition in your industry and the current state of your online presence. We provide monthly reporting so you can track progress.",
          },
          {
            q: "Do you optimise for specific Midrand suburbs and areas?",
            a: "Yes. We create location-specific content and optimise for suburbs including Waterfall, Kyalami, Halfway House, Vorna Valley, Carlswald, Noordwyk, Blue Hills, Crowthorne, Glen Austin, and Barbeque Downs. This hyper-local approach ensures you capture traffic from people searching in your immediate service area.",
          },
        ],
      },
      {
        category: "Process & Delivery",
        iconName: "Zap",
        questions: [
          {
            q: "How long does it take to build a website?",
            a: "Our Essential Business package is typically delivered within 5-7 business days. The Professional Growth package takes 7-12 business days. Custom and e-commerce solutions take longer depending on complexity. We provide clear timelines during the initial consultation.",
          },
          {
            q: "Do I own the website after it is built?",
            a: "Yes, 100%. You own every line of code, your domain name, and your hosting account. There are no lock-in contracts or monthly website rental fees. The website is a digital asset that belongs entirely to you.",
          },
          {
            q: "What technologies do you use to build websites?",
            a: "We build with modern frameworks including Next.js, React, and Tailwind CSS. These technologies ensure your website is fast, secure, accessible, and easy to maintain. We also implement structured data, meta tags, and other technical SEO elements as standard.",
          },
        ],
      },
    ],
  },

  cta: {
    title: "Ready to Build Your Digital Presence in Midrand?",
    description:
      "The Midrand market is moving fast. Don't let your business get left behind with an outdated website. Let's build a solution that secures your place in Gauteng's most dynamic business hub.",
    seoText:
      "LM Studios is a professional web design company in Midrand, providing custom website design, SEO optimisation, and app development services to businesses across Waterfall City, Kyalami, Halfway House, Vorna Valley, Carlswald, Noordwyk, Blue Hills, and the greater Midrand region. We serve both the Johannesburg and Pretoria markets along the N1 corridor.",
  },
};

// ============================================
// CENTURION DATA
// ============================================

export const centurionData: AreaPageData = {
  cityName: "Centurion",
  region: "Gauteng",
  pageId: "centurion-web-design",

  hero: {
    outlineTitle: "Web Design in Centurion",
    mainTitle: "High-Performance Sites",
    mainTitleHighlight: "for Centurion Businesses.",
    description:
      "Centurion is more than the bridge between Johannesburg and Pretoria -- it's a thriving independent economy. From tech hubs in Highveld to the industrial sector in Hennopspark, we build custom websites that command authority in this competitive market.",
    heroImageFallbackIcon: "Building2",
  },

  trustBar: [
    { value: "50+", label: "Websites Delivered" },
    { value: "100%", label: "Code Ownership" },
    { value: "5-7", label: "Day Turnaround" },
    { value: "Local", label: "Centurion Based" },
  ],

  whySection: {
    badge: "Centurion's Digital Partner",
    title: "Why Your Centurion Business Needs",
    titleHighlight: "a Professional Website",
    description:
      "Business in Centurion requires a balance of suburban trust and corporate efficiency. You don't need to look to Pretoria or Sandton for expert development. We operate locally, understanding the unique dynamics of the Centurion \"Garden City\" economy. As a remote-first team, we eliminate agency bloat -- you get enterprise-grade development at a price point that makes sense.",
    items: [
      {
        iconName: "Globe",
        title: "Remote-First, Locally Rooted",
        description:
          "We operate as a remote-first team rooted in the Centurion area. This model lets us offer premium, agency-grade development without inflated costs. You get high-performance code suitable for Highveld Techno Park, at a price that works for a family business in Lyttelton.",
      },
      {
        iconName: "TrendingUp",
        title: "Centurion Is Growing Fast",
        description:
          "With developments in Eco Park, the Centurion CBD revival, and ongoing expansion in Irene, Centurion attracts more businesses every month. A professional website positions you to capture this growing market before competitors do.",
      },
      {
        iconName: "ShieldCheck",
        title: "Full Code Ownership",
        description:
          "You own every line of code we write. No lock-in contracts, no hidden fees, no monthly website rental schemes. Just a solid digital asset owned 100% by you.",
      },
    ],
  },

  industries: {
    title: "Custom Website Design for",
    titleHighlight: "Centurion's Industries",
    description:
      "One size does not fit all in Centurion. We adapt our design strategy to your specific location and industry, whether you're in the industrial belt or the tech parks.",
    items: [
      {
        iconName: "Factory",
        title: "Industrial & Manufacturing (Hennopspark & Sunderland Ridge)",
        description:
          "If you operate in Centurion's industrial belt, you need credibility. We build robust, information-rich websites that showcase your capabilities, catalogues, and safety certifications to secure B2B contracts.",
        color: "#d4f534",
      },
      {
        iconName: "Wrench",
        title: "Service Professionals (Rooihuiskraal & Wierda Park)",
        description:
          "The competition for home services in suburbs like Rooihuiskraal is fierce. We build fast, conversion-focused sites for plumbers, electricians, and contractors that turn local Google searches into phone calls.",
        color: "#5dd9c1",
      },
      {
        iconName: "Briefcase",
        title: "Professional Services (Highveld & Eco Park)",
        description:
          "For the financial advisors, legal firms, and tech consultants in the business parks, we create polished, corporate-identity websites that mirror the professionalism of your physical offices.",
        color: "#b4a7d6",
      },
    ],
  },

  localSeo: {
    badge: "SEO for Centurion",
    title: "Dominating Search Results",
    titleHighlight: "from Zwartkop to Irene",
    description:
      "The battle for visibility in Centurion is fought on \"Near Me\" search results. If a resident in Eldoraigne searches for your service, they shouldn't be seeing results from Midrand. We implement hyper-local SEO strategies to ensure you own your backyard.",
    features: [
      { iconName: "Search", text: "Google Business Profile optimisation for Centurion map pack results" },
      { iconName: "MapPin", text: "Hyper-local keyword targeting for Highveld, Irene, Lyttelton, and surrounding areas" },
      { iconName: "BarChart3", text: "High-intent local traffic driven directly to your phone and inbox" },
      { iconName: "Globe", text: "Position capture from the N1 and N14 highways and commuter routes" },
    ],
    imageFallbackIcon: "Search",
    testimonial: "Leveraging local signals around Centurion Mall and the Gautrain Station for Map Pack dominance.",
    testimonialLabel: "Local SEO Strategy",
  },

  packages: {
    title: "Web Design Packages for",
    titleHighlight: "Centurion",
    description:
      "We do not use templates. Every website is custom-built for your business. Whether you're a solo consultant in Highveld or a growing company in Eco Park, we have a package that fits.",
  },

  serviceAreas: {
    title: "Serving the",
    titleHighlight: "Entire Centurion Region",
    description:
      "Centurion is a collection of distinct communities. Our digital services cover the entire region, anchoring your presence around key landmarks like SuperSport Park and the Unitas Hospital district.",
    zones: [
      {
        category: "Business & Tech Hubs",
        iconName: "Building2",
        locations: ["Highveld Techno Park", "Eco Park Estate", "Centurion CBD", "Icon Industrial Park"],
        color: "#d4f534",
      },
      {
        category: "Industrial Zones",
        iconName: "Factory",
        locations: ["Hennopspark", "Sunderland Ridge", "Lyttelton Industrial", "Zwartkop"],
        color: "#5dd9c1",
      },
      {
        category: "Residential & Lifestyle",
        iconName: "Users",
        locations: ["Irene", "Lyttelton", "Eldoraigne", "Clubview", "Rooihuiskraal", "Wierda Park", "The Reeds", "Southdowns"],
        color: "#b4a7d6",
      },
    ],
  },

  whyPartner: {
    title: "Why Partner With a",
    titleHighlight: "Local Remote Team",
    description:
      "We offer the agility of a modern tech partner with the understanding of a local neighbour. We cut through the jargon to explain exactly how your website will deliver ROI.",
    benefits: [
      {
        iconName: "Users",
        title: "Accessible & Understandable",
        description: "We speak plain English, avoiding confusing jargon. We explain exactly how your investment will generate returns for your Centurion business.",
      },
      {
        iconName: "Zap",
        title: "Efficient & Cost-Effective",
        description: "Our remote model eliminates overhead costs. You receive the same quality of work as a Pretoria or Sandton agency at a fraction of the price.",
      },
      {
        iconName: "Code",
        title: "Modern Technology Stack",
        description: "We build with Next.js, React, and Tailwind CSS. Your website will be fast, secure, and built to scale as your business grows.",
      },
      {
        iconName: "ShieldCheck",
        title: "No Lock-In Contracts",
        description: "You own everything. Your domain, your hosting, your code. We believe in earning your business through results, not contracts.",
      },
    ],
    imageFallbackIcon: "Code",
  },

  automation: {
    badge: "Beyond Websites",
    title: "App Development &",
    titleHighlight: "Business Automation",
    description:
      "Centurion is a hub for innovation. We support this with custom software development designed to streamline your operations and help you scale efficiently.",
    items: [
      "Need a secure client portal for a firm in Southdowns? We build secure, branded portals.",
      "Managing inventory for a warehouse in Hennopspark? We develop custom inventory management tools.",
      "Handling bookings for a lifestyle business in Irene? We create automated booking systems.",
      "Running staff across multiple locations? We build staff management portals and B2B interfaces.",
    ],
    imageFallbackIcon: "Smartphone",
  },

  faqs: {
    title: "Frequently Asked Questions About",
    titleHighlight: "Web Design in Centurion",
    description: "Everything you need to know about getting a professional website built for your Centurion business.",
    sections: [
      {
        category: "Web Design in Centurion",
        iconName: "Globe",
        questions: [
          {
            q: "Do you provide web design services specifically for Centurion businesses?",
            a: "Yes. We provide full web design and development services tailored specifically for businesses operating in the Centurion area, including Highveld, Hennopspark, Irene, Lyttelton, Eldoraigne, Clubview, Rooihuiskraal, and Wierda Park. We understand the local market dynamics and build websites that resonate with your target audience.",
          },
          {
            q: "How much does a website cost for a small business in Centurion?",
            a: "Our Essential Business package starts at R2,499 for a professional 3-page website delivered in 5-7 days. For growing businesses that need more pages and features, our Professional Growth package is R4,999. Every website is custom-built, mobile-responsive, and SEO-optimised for local Centurion search terms.",
          },
          {
            q: "Can we meet in person to discuss my project?",
            a: "Absolutely. While we operate as a remote-first team for efficiency, we are locally based and available for in-person consultations across the Centurion area. We can meet at a location convenient to you in Highveld, Irene, or any other part of Centurion.",
          },
        ],
      },
      {
        category: "Local SEO & Rankings",
        iconName: "Search",
        questions: [
          {
            q: "Can you help my business rank on Google in the Centurion area?",
            a: "Yes. We specialise in local SEO for Centurion businesses. We optimise your Google Business Profile, target hyper-local keywords such as 'web design Centurion', 'plumber Rooihuiskraal', and 'accountant Highveld', and implement technical SEO to help you appear in the Google Map Pack and organic search results.",
          },
          {
            q: "How long does it take to see SEO results?",
            a: "Local SEO results typically begin to show within 2-4 months, with significant improvements in 4-6 months. The timeline depends on competition in your industry and the current state of your online presence. We provide monthly reporting so you can track progress.",
          },
          {
            q: "Do you optimise for specific Centurion suburbs and areas?",
            a: "Yes. We create location-specific content and optimise for suburbs including Highveld, Irene, Lyttelton, Eldoraigne, Clubview, Rooihuiskraal, Wierda Park, Hennopspark, Sunderland Ridge, Southdowns, The Reeds, and Zwartkop. This hyper-local approach ensures you capture traffic from people searching in your immediate service area.",
          },
        ],
      },
      {
        category: "Process & Delivery",
        iconName: "Zap",
        questions: [
          {
            q: "How long does it take to build a website?",
            a: "Our Essential Business package is typically delivered within 5-7 business days. The Professional Growth package takes 7-12 business days. Custom and e-commerce solutions take longer depending on complexity. We provide clear timelines during the initial consultation.",
          },
          {
            q: "Do I own the website after it is built?",
            a: "Yes, 100%. You own every line of code, your domain name, and your hosting account. There are no lock-in contracts or monthly website rental fees. The website is a digital asset that belongs entirely to you.",
          },
          {
            q: "What technologies do you use to build websites?",
            a: "We build with modern frameworks including Next.js, React, and Tailwind CSS. These technologies ensure your website is fast, secure, accessible, and easy to maintain. We also implement structured data, meta tags, and other technical SEO elements as standard.",
          },
        ],
      },
    ],
  },

  cta: {
    title: "Ready to Build Your Digital Presence in Centurion?",
    description:
      "The Centurion market is competitive. Don't let your business get left behind with an outdated website. Let's build a solution that commands authority in Gauteng's Garden City.",
    seoText:
      "LM Studios is a professional web design company in Centurion, providing custom website design, SEO optimisation, and app development services to businesses across Highveld, Hennopspark, Irene, Lyttelton, Eldoraigne, Clubview, Rooihuiskraal, Wierda Park, and the greater Centurion region. We serve both the Johannesburg and Pretoria markets along the N1 and N14 corridors.",
  },
};

// ============================================
// LOOKUP MAP
// ============================================

export const areaDataMap: Record<string, AreaPageData> = {
  "midrand-web-design": midrandData,
  "centurion-web-design": centurionData,
};
