import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG, telLink, whatsappLink } from '../../core/site-config';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  readonly site = SITE_CONFIG;
  readonly services = SERVICES;
  readonly year = new Date().getFullYear();
  readonly whatsappUrl = whatsappLink();
  readonly telUrl = telLink();
}
