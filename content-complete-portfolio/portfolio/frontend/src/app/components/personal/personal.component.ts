import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PersonalInterest } from '../../models/portfolio.models';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="personal">
      <div class="container">
        <div class="personal-header">
          <div class="personal-intro">
            <span class="section-label">04 — Beyond the code</span>
            <h2 class="section-title">The human<br>behind the work.</h2>
            <p class="personal-body">
              I started college as a Psychology major and ended up with a Master's in Computer Science.
              That path wasn't an accident — I think the best engineers are curious about people,
              not just systems. Here's a bit of what makes me tick outside of work.
            </p>
          </div>
          <div class="personal-photo-wrap">
            <div class="personal-photo-frame">
              <img
                src="assets/images/personal.jpg"
                alt="Joshua Adams"
                class="personal-photo"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="personal-photo-fallback">
                <span class="photo-icon">📷</span>
                <span class="photo-hint">Add a casual photo to<br><code>src/assets/images/personal.jpg</code></span>
              </div>
            </div>
          </div>
        </div>

        <div class="interests-grid" *ngIf="interests.length; else loading">
          <div class="interest-card" *ngFor="let item of interests">
            <span class="interest-icon">{{ item.icon }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>

        <ng-template #loading>
          <div class="loading-state">
            <span class="section-label">Loading...</span>
          </div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--bg); }
    .personal-header {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 4rem;
      align-items: start;
      margin-bottom: 3.5rem;
    }
    .personal-intro { }
    .personal-body {
      font-size: 1.05rem; color: var(--text-muted);
      margin-top: -1rem;
    }
    .personal-photo-wrap { padding-top: 0.5rem; }
    .personal-photo-frame {
      width: 100%;
      aspect-ratio: 1 / 1;
      border: 1px solid var(--border);
      border-radius: 2px;
      overflow: hidden;
      background: var(--bg-card);
      position: relative;
    }
    .personal-photo {
      width: 100%; height: 100%;
      object-fit: cover; object-position: center;
      display: block;
    }
    .personal-photo-fallback {
      display: none;
      flex-direction: column; align-items: center; justify-content: center;
      gap: 1rem; height: 100%;
      text-align: center; padding: 2rem;
    }
    .photo-icon { font-size: 2rem; }
    .photo-hint {
      font-family: var(--font-mono); font-size: 0.65rem;
      color: var(--text-muted); line-height: 1.8;
    }
    .photo-hint code { color: var(--accent); }
    .interests-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    .interest-card {
      display: flex; gap: 1.5rem; align-items: flex-start;
      padding: 2rem;
      border: 1px solid var(--border);
      border-radius: 2px;
      transition: border-color 0.2s;
    }
    .interest-card:hover { border-color: var(--border-light); }
    .interest-icon {
      font-size: 2rem;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
    h3 {
      font-family: var(--font-display);
      font-size: 1.2rem; font-weight: 700;
      margin-bottom: 0.4rem; color: var(--text);
    }
    p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
    .loading-state { text-align: center; padding: 3rem 0; }
    @media (max-width: 768px) {
      .personal-header { grid-template-columns: 1fr; gap: 2rem; }
      .personal-photo-frame { max-width: 280px; }
      .interests-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class PersonalComponent implements OnInit {
  interests: PersonalInterest[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getInterests().subscribe({
      next: data => this.interests = data,
      error: () => console.warn('API unavailable.')
    });
  }
}
