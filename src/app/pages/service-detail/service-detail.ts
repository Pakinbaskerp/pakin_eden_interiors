import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { getServiceBySlug } from '../../data/services.data';
import { PROCESS_STEPS } from '../../data/content.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './service-detail.html',
})
export class ServiceDetail {
  private readonly route = inject(ActivatedRoute);
  readonly processSteps = PROCESS_STEPS;

  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  readonly service = computed(() => getServiceBySlug(this.slug()));
}
