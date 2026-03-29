import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <div class="container">
        <span class="section-label">03 — Projects</span>
        <h2 class="section-title">Things I've<br>built.</h2>

        <div class="projects-grid" *ngIf="projects.length; else loading">
          <article class="project-card" *ngFor="let p of projects; let i = index">
            <div class="card-header">
              <span class="card-index">{{ (i + 1).toString().padStart(2, '0') }}</span>
              <span class="card-year">{{ p.year }}</span>
            </div>
            <div class="card-body">
              <span class="tag category-tag">{{ p.category }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.description }}</p>
            </div>
            <div class="card-footer">
              <div class="tech-list">
                <span class="tag" *ngFor="let tech of p.technologies">{{ tech }}</span>
              </div>
              <div class="card-links">
                <a *ngIf="p.githubUrl" [href]="p.githubUrl" target="_blank" class="card-link">
                  GitHub →
                </a>
                <a *ngIf="p.liveUrl" [href]="p.liveUrl" target="_blank" class="card-link live">
                  Live →
                </a>
              </div>
            </div>
          </article>
        </div>

        <ng-template #loading>
          <div class="loading-state">
            <span class="section-label">Loading projects...</span>
          </div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--bg-alt); }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5px;
      border: 1.5px solid var(--border);
    }
    .project-card {
      background: var(--bg-card);
      padding: 2rem;
      display: flex; flex-direction: column;
      gap: 1.5rem;
      border: 1.5px solid transparent;
      transition: border-color 0.25s, background 0.25s;
      cursor: default;
    }
    .project-card:hover {
      background: var(--bg-alt);
      border-color: var(--border-light);
    }
    .card-header {
      display: flex; justify-content: space-between;
      align-items: center;
    }
    .card-index {
      font-family: var(--font-mono); font-size: 0.65rem;
      letter-spacing: 0.2em; color: var(--accent);
    }
    .card-year {
      font-family: var(--font-mono); font-size: 0.65rem;
      color: var(--text-muted);
    }
    .card-body { flex: 1; }
    .category-tag { margin-bottom: 0.75rem; display: inline-block; }
    h3 {
      font-family: var(--font-display);
      font-size: 1.6rem; font-weight: 700;
      line-height: 1.15; margin-bottom: 0.75rem;
      color: var(--text);
    }
    p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; }
    .card-footer { display: flex; flex-direction: column; gap: 1rem; }
    .tech-list { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .card-links { display: flex; gap: 1rem; }
    .card-link {
      font-family: var(--font-mono);
      font-size: 0.72rem; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--text-muted);
      transition: color 0.2s;
    }
    .card-link:hover { color: var(--accent); opacity: 1; }
    .card-link.live { color: var(--accent); }
    .loading-state { text-align: center; padding: 4rem 0; }
    @media (max-width: 680px) {
      .projects-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getProjects().subscribe({
      next: data => this.projects = data,
      error: () => console.warn('API unavailable, check the .NET backend is running.')
    });
  }
}
