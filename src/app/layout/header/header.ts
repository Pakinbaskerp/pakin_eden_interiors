import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS, SITE_CONFIG, telLink, whatsappLink } from '../../core/site-config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  readonly navLinks = NAV_LINKS;
  readonly siteName = SITE_CONFIG.name;
  readonly phone = SITE_CONFIG.phone;
  readonly logoUrl = SITE_CONFIG.logoUrl;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly whatsappUrl = whatsappLink();
  readonly telUrl = telLink();

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
