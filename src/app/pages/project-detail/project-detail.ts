import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { getProjectBySlug } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  readonly project = computed(() => getProjectBySlug(this.slug()));
}
