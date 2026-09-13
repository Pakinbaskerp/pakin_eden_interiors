export interface NavLink {
  label: string;
  path: string;
}

export interface SubService {
  name: string;
  image: string;
  description?: string;
}

export interface PricingItem {
  icon: string;
  name: string;
  startingFrom: string;
}

export interface ProcessStep {
  index: string;
  title: string;
}

export interface Service {
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  heroDescription: string;
  cardImage: string;
  subServices: SubService[];
  pricingItems?: PricingItem[];
}

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  coverImage: string;
  servicesProvided: string[];
  materials: string[];
  description: string;
  gallery: ProjectImage[];
  before?: string;
  during?: string;
  after?: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface HeroSlide {
  title: string;
  description: string;
  image: string;
}
