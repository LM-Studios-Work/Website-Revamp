export interface Project {
  title: string;
  description: string;
  img: string;
  url: string;
  type: "Portfolio" | "Event Management" | "Essential Business";
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "MR FLOAT - Transport Service",
    description:
      "A transport company in Zimbabwe that offers a wide array of services, including taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries.",
    img: "/preview/float.webp",
    url: "https://private-car-hire.vercel.app",
    type: "Essential Business",
    tags: ["Transportation", "Booking"],
  },
  {
    title: "Vuza Trading",
    description:
      "A professional trading platform with real-time analytics and user-friendly interface.",
    img: "/preview/vuza-trading.png",
    url: "https://vuzatrading.com",
    type: "Essential Business",
    tags: ["Automated Security", "Aluminum Solutions", "CCTV", "Alarm Systems"],
  },
  {
    title: "Mothupi & Lesego - Wedding",
    description:
      "A wedding invitation with an interactive map and a gift registry.",
    img: "/preview/mothupi-and-lesego.png",
    url: "https://mothupi-and-lesego.co.za",
    type: "Event Management",
    tags: ["Wedding", "Event"],
  },
  {
    title: "Rokunda Mboyi",
    description: "A passionate architect shaping the future of design with innovative and sustainable solutions.",
    img: "/preview/rokunda-mboyi.png",
    url: "https://rokundamboyi.com",
    type: "Portfolio",
    tags: ["Architect", "Portfolio"],
  },
  {
    title: "Monare Selahle",
    description: "Modern portfolio for a Computer Science student.",
    img: "/preview/monare-selahle.png",
    url: "https://monareselahle.co.za",
    type: "Portfolio",
    tags: ["Software Engineer", "Portfolio"],
  },
  {
    title: "Shots By Ozee",
    description:
      "A photographer and visionary creative currently studying Chemical Engineering.",
    img: "/preview/shots-by-ozee.png",
    url: "https://shotsbyozee.co.za",
    type: "Portfolio",
    tags: ["Photography", "Portfolio"],
  },
  {
    title: "Gordian Malaka",
    description: "A film student who has a passion for photography.",
    img: "/preview/gordian-malaka.png",
    url: "https://uvhu-portfolio-9rw1.vercel.app/",
    type: "Portfolio",
    tags: ["Photography", "Videography", "Portfolio"],
  },
];
