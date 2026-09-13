import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './projects-list.html',
})
export class ProjectsList {
  readonly projects = PROJECTS;
}
