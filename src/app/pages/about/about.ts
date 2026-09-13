import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { WHY_CARDS } from '../../data/content.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './about.html',
})
export class About {
  readonly whyCards = WHY_CARDS;
  readonly heroImage = 'https://picsum.photos/seed/about-hero/1600/900';
  readonly workshopImage = 'https://picsum.photos/seed/about-workshop/900/1100';
}
