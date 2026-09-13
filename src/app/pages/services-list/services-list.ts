import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services-list.html',
})
export class ServicesList {
  readonly services = SERVICES;
}
