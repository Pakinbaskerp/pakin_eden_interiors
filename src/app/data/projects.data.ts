import { Project } from '../core/models';

const img = (seed: string, w = 1000, h = 750) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PROJECTS: Project[] = [
  {
    slug: 'modern-modular-kitchen',
    title: 'Modern Modular Kitchen',
    location: 'Chennai',
    coverImage: img('proj-kitchen-cover'),
    servicesProvided: ['Modular Kitchen', 'Tall Units', 'Kitchen Storage'],
    materials: ['Marine Plywood', 'PU Finish Shutters', 'Quartz Countertop'],
    description:
      'A complete modular kitchen rebuild focused on maximising storage and workflow for a family of four, finished in a warm walnut and matte white palette.',
    before: img('proj-kitchen-before'),
    during: img('proj-kitchen-during'),
    after: img('proj-kitchen-after'),
    gallery: [
      { src: img('proj-kitchen-1'), caption: 'Island counter and base cabinets' },
      { src: img('proj-kitchen-2'), caption: 'Tall unit with pull-out storage' },
      { src: img('proj-kitchen-3'), caption: 'Finished kitchen, evening light' },
    ],
  },
  {
    slug: 'full-bedroom-wardrobe',
    title: 'Full Bedroom Wardrobe',
    location: 'Chennai',
    coverImage: img('proj-wardrobe-cover'),
    servicesProvided: ['Sliding Wardrobes', 'Loft Storage'],
    materials: ['BWP Plywood', 'Laminate Finish', 'Soft-close Fittings'],
    description:
      'Floor-to-ceiling sliding wardrobes designed to fit an irregular wall, with dedicated loft storage above and a built-in dressing mirror.',
    gallery: [
      { src: img('proj-wardrobe-1'), caption: 'Sliding shutters, open view' },
      { src: img('proj-wardrobe-2'), caption: 'Internal shelving and drawers' },
    ],
  },
  {
    slug: 'custom-tv-unit',
    title: 'Custom TV Unit',
    location: 'Chennai',
    coverImage: img('proj-tv-cover'),
    servicesProvided: ['TV Units', 'Wall Panelling'],
    materials: ['Veneer Finish', 'Ambient LED Lighting'],
    description:
      'A floating TV unit paired with a textured wall panel and concealed cable management, designed as the centrepiece of the living room.',
    gallery: [
      { src: img('proj-tv-1'), caption: 'Floating unit with LED accent' },
      { src: img('proj-tv-2'), caption: 'Side storage detail' },
    ],
  },
  {
    slug: 'custom-wooden-bed',
    title: 'Custom Wooden Bed',
    location: 'Chennai',
    coverImage: img('proj-bed-cover'),
    servicesProvided: ['Custom Beds', 'Side Tables'],
    materials: ['Solid Wood Frame', 'Upholstered Headboard'],
    description:
      'A solid wood bed with a hydraulic storage base and matching side tables, built to order for a compact master bedroom.',
    gallery: [
      { src: img('proj-bed-1'), caption: 'Headboard and side table detail' },
      { src: img('proj-bed-2'), caption: 'Storage base, open' },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
