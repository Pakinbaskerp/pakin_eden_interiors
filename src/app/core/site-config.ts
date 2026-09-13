import { NavLink } from './models';

// TODO: replace placeholder contact details below with the real business details.
export const SITE_CONFIG = {
  name: 'Paul Eden Interiors',
  tagline: 'Crafted with Purpose.',
  phone: '+91 90000 00000',
  whatsapp: '919000000000',
  email: 'hello@pauledeninteriors.com',
  instagram: 'https://instagram.com/pauledeninteriors',
  serviceArea: 'Chennai & surrounding areas',
  whatsappDefaultMessage: 'Hi Paul Eden Interiors, I would like to enquire about a project.',
  logoUrl: 'https://cdn.jsdelivr.net/gh/Pakinbaskerp/Image_cdn@main/PaulEden/logo.svg',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? SITE_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${text}`;
}

export function telLink(): string {
  return `tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`;
}
