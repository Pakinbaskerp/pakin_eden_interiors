import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Paul Eden Interiors — Crafted with Purpose',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'Our Story — Paul Eden Interiors',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services-list/services-list').then((m) => m.ServicesList),
    title: 'Services — Paul Eden Interiors',
  },
  {
    path: 'services/:slug',
    loadComponent: () => import('./pages/service-detail/service-detail').then((m) => m.ServiceDetail),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-list/projects-list').then((m) => m.ProjectsList),
    title: 'Projects — Paul Eden Interiors',
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Get a Quote — Paul Eden Interiors',
  },
  {
    path: 'quote',
    redirectTo: 'contact',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Page Not Found — Paul Eden Interiors',
  },
];
