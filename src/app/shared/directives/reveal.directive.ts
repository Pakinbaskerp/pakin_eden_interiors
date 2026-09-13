import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private trigger?: ScrollTrigger;
  private tween?: gsap.core.Tween;

  @Input('appReveal') direction: RevealDirection = 'up';
  @Input() revealDelay = 0;
  @Input() revealDistance = 40;
  @Input() revealDuration = 0.8;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const offset = this.getOffset();

    gsap.set(node, { opacity: 0, x: offset.x, y: offset.y });

    this.tween = gsap.to(node, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: this.revealDuration,
      delay: this.revealDelay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: node,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });

    this.trigger = this.tween.scrollTrigger;
  }

  private getOffset(): { x: number; y: number } {
    switch (this.direction) {
      case 'up':
        return { x: 0, y: this.revealDistance };
      case 'down':
        return { x: 0, y: -this.revealDistance };
      case 'left':
        return { x: this.revealDistance, y: 0 };
      case 'right':
        return { x: -this.revealDistance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  }

  ngOnDestroy(): void {
    this.trigger?.kill();
    this.tween?.kill();
  }
}
