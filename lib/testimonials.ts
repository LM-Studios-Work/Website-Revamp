export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Innovations Inc",
    content:
      "LM Studios transformed our online presence. The website is not only beautiful but also significantly improved our conversion rates. Highly professional team!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "Business Owner",
    company: "Chen's E-commerce",
    content:
      "Working with LM Studios was a game-changer. They understood our vision perfectly and delivered a site that exceeded expectations. The support was exceptional.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Modern Consulting Group",
    content:
      "Professional, creative, and detail-oriented. LM Studios delivered a website that perfectly represents our brand. Couldn't be happier with the results!",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "David Thompson",
    role: "Founder",
    company: "Creative Studio Co",
    content:
      "Best decision we made. The team went above and beyond to ensure our website was perfect. Great communication throughout the entire process.",
    rating: 5,
  },
];
