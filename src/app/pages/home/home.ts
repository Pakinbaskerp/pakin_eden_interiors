import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { HERO_SLIDES, PROCESS_STEPS, TESTIMONIALS, WHY_CARDS } from '../../data/content.data';
import { SERVICES } from '../../data/services.data';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, ParallaxDirective],
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {
  readonly slides = HERO_SLIDES;
  readonly services = SERVICES;
  readonly featuredProjects = PROJECTS;
  readonly processSteps = PROCESS_STEPS;
  readonly whyCards = WHY_CARDS;
  readonly testimonials = TESTIMONIALS;
  readonly activeSlide = signal(0);

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.next(), 6000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  next(): void {
    this.activeSlide.update((i) => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.activeSlide.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(i: number): void {
    this.activeSlide.set(i);
  }

  stars(count: number): number[] {
    return Array.from({ length: count });
  }
}
