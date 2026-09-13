import { Component } from '@angular/core';
import { SITE_CONFIG, telLink, whatsappLink } from '../../core/site-config';

@Component({
  selector: 'app-sticky-contact',
  standalone: true,
  imports: [],
  templateUrl: './sticky-contact.html',
})
export class StickyContact {
  readonly site = SITE_CONFIG;
  readonly whatsappUrl = whatsappLink();
  readonly telUrl = telLink();
}
