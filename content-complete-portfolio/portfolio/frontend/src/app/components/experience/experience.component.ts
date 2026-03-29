import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience">
      <div class="container">
        <span class="section-label">02 — Experience</span>
        <h2 class="section-title">Where I've<br>worked.</h2>

        <div class="timeline" *ngIf="experiences.length; else loading">
          <div class="timeline-item" *ngFor="let exp of experiences">
            <div class="timeline-left">
              <span class="timeline-dates">
                {{ exp.startDate }} — <strong [class.current]="exp.isCurrent">{{ exp.isCurrent ? 'Present' : exp.endDate }}</strong>
              </span>
              <span class="timeline-location">{{ exp.location }}</span>
            </div>
            <div class="timeline-dot"></div>
            <div class="timeline-right">
              <div class="job-header">
                <span class="job-role">{{ exp.role }}</span>
                <span class="job-company">&#64; {{ exp.company }}</span>
              </div>
              <ul class="highlights">
                <li *ngFor="let h of exp.highlights">{{ h }}</li>
              </ul>
            </div>
          </div>
        </div>

        <ng-template #loading>
          <div class="loading-state">
            <span class="section-label">Loading experience...</span>
          </div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [`
    .timeline { position: relative; }
    .timeline::before {
      content: '';
      position: absolute; left: calc(50% - 0.5px);
      top: 0; bottom: 0; width: 1px;
      background: var(--border);
    }
    .timeline-item {
      display: grid;
      grid-template-columns: 1fr 32px 1fr;
      gap: 0 2rem;
      margin-bottom: 4rem;
      align-items: start;
    }
    .timeline-left {
      text-align: right;
      padding-top: 0.2rem;
    }
    .timeline-dates {
      display: block;
      font-family: var(--font-mono);
      font-size: 0.72rem; letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }
    .current { color: var(--accent); }
    .timeline-location {
      display: block;
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--text-muted);
      opacity: 0.6;
    }
    .timeline-dot {
      width: 12px; height: 12px;
      background: var(--bg);
      border: 2px solid var(--accent);
      border-radius: 50%;
      margin: 0.3rem auto 0;
      position: relative; z-index: 1;
      transition: background 0.2s;
    }
    .timeline-item:hover .timeline-dot { background: var(--accent); }
    .job-header { margin-bottom: 1rem; }
    .job-role {
      display: block;
      font-family: var(--font-display);
      font-size: 1.4rem; font-weight: 700;
      color: var(--text); line-height: 1.2;
    }
    .job-company {
      font-family: var(--font-mono);
      font-size: 0.8rem; color: var(--accent);
      letter-spacing: 0.05em;
    }
    .highlights {
      list-style: none;
      display: flex; flex-direction: column; gap: 0.6rem;
    }
    .highlights li {
      font-size: 0.9rem; color: var(--text-muted);
      padding-left: 1.25rem; position: relative;
      line-height: 1.6;
    }
    .highlights li::before {
      content: '—';
      position: absolute; left: 0;
      color: var(--accent-dim);
    }
    .loading-state { text-align: center; padding: 4rem 0; }
    @media (max-width: 680px) {
      .timeline::before { left: 16px; }
      .timeline-item { grid-template-columns: 32px 1fr; }
      .timeline-left { display: none; }
    }
  `]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getExperience().subscribe({
      next: data => this.experiences = data,
      error: () => console.warn('API unavailable, check the .NET backend is running.')
    });
  }
}
