import { HeroSlide, ProcessStep, Testimonial, WhyCard } from '../core/models';

const img = (seed: string, w = 1600, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Crafted with Purpose.',
    description: 'Custom carpentry and interiors built around how you actually live.',
    image: img('hero-1'),
  },
  {
    title: 'Designed for Your Space.',
    description: 'Every room measured, planned and built to fit — not the other way around.',
    image: img('hero-2'),
  },
  {
    title: 'Built to Last.',
    description: 'Solid materials and honest craftsmanship, passed down through generations.',
    image: img('hero-3'),
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { index: '01', title: 'Tell Us' },
  { index: '02', title: 'Site Visit' },
  { index: '03', title: 'Measure & Plan' },
  { index: '04', title: 'Quotation' },
  { index: '05', title: 'Craft' },
  { index: '06', title: 'Installation' },
  { index: '07', title: 'Handover' },
];

export const WHY_CARDS: WhyCard[] = [
  {
    icon: '🪵',
    title: 'Experienced Craftsmanship',
    description: 'Built on years of hands-on carpentry experience, passed down and refined.',
  },
  {
    icon: '📐',
    title: 'Custom Solutions',
    description: 'Every piece is designed around your space, not picked off a catalogue.',
  },
  {
    icon: '✅',
    title: 'Quality Materials',
    description: 'We use marine-grade plywood, solid wood and trusted hardware brands.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'Clear quotations with no hidden costs, agreed before work begins.',
  },
  {
    icon: '🔍',
    title: 'Attention to Detail',
    description: 'From the first sketch to the final polish, every detail is checked.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya Raman',
    location: 'Chennai',
    rating: 5,
    quote: 'Our kitchen turned out better than we imagined. The team was punctual, clean and genuinely cared about getting the details right.',
  },
  {
    name: 'Arun Kumar',
    location: 'Chennai',
    rating: 5,
    quote: 'From the first site visit to installation, everything was clearly explained. The wardrobe fits perfectly into an awkward corner we thought was unusable.',
  },
  {
    name: 'Meena Iyer',
    location: 'Chennai',
    rating: 5,
    quote: 'Quick, honest and skilled — they fixed a handful of small carpentry issues around the house in one visit.',
  },
];
