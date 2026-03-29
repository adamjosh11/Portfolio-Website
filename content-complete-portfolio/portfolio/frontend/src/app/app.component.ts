import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    PersonalComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-personal></app-personal>
      <app-contact></app-contact>
    </main>
    <footer class="site-footer">
      <p>Designed & built with Angular + .NET &mdash; {{ year }}</p>
    </footer>
  `,
  styles: [`
    :host { display: block; }
    .site-footer {
      text-align: center;
      padding: 2rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--text-muted);
      border-top: 1px solid var(--border);
    }
  `]
})
export class AppComponent {
  year = new Date().getFullYear();
}
