import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private tween?: gsap.core.Tween;

  @Input('appParallax') strength = 60;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;

    this.tween = gsap.fromTo(
      node,
      { y: -this.strength },
      {
        y: this.strength,
        ease: 'none',
        scrollTrigger: {
          trigger: node,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  }

  ngOnDestroy(): void {
    this.tween?.scrollTrigger?.kill();
    this.tween?.kill();
  }
}
