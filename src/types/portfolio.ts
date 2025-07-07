export interface Technology {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "mobile" | "cloud" | "other";
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  shortDescription: {
    th: string;
    en: string;
  };
  category: "web" | "mobile" | "system" | "ecommerce";
  client: string;
  year: number;
  duration: string;
  teamSize: number;
  status: "completed" | "in-progress" | "maintenance";
  technologies: Technology[];
  features: {
    th: string[];
    en: string[];
  };
  challenges: {
    th: string[];
    en: string[];
  };
  solutions: {
    th: string[];
    en: string[];
  };
  results: {
    th: string[];
    en: string[];
  };
  images: {
    main: string;
    gallery: string[];
    thumbnail: string;
  };
  testimonial?: {
    text: {
      th: string;
      en: string;
    };
    author: string;
    position: string;
    company: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

export type PortfolioCategory = "all" | "web" | "mobile" | "system" | "ecommerce";
