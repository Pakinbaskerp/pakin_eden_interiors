import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SERVICES } from '../../data/services.data';
import { SITE_CONFIG, telLink, whatsappLink } from '../../core/site-config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  readonly services = SERVICES;
  readonly site = SITE_CONFIG;
  readonly whatsappUrl = whatsappLink();
  readonly telUrl = telLink();
  readonly submitted = signal(false);
  readonly fileNames = signal<string[]>([]);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
    whatsappNumber: [''],
    email: ['', [Validators.required, Validators.email]],
    service: ['', Validators.required],
    location: ['', Validators.required],
    requirement: ['', [Validators.required, Validators.minLength(10)]],
    preferredContact: ['whatsapp', Validators.required],
  });

  constructor() {
    const service = this.route.snapshot.queryParamMap.get('service');
    if (service) {
      this.form.patchValue({ service });
    }
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileNames.set(input.files ? Array.from(input.files).map((f) => f.name) : []);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // No backend wired up yet — replace with a real email/API integration.
    this.submitted.set(true);
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
