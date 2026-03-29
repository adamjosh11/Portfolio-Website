import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-left">
            <span class="section-label">01 — About</span>
            <h2 class="section-title">Passionate Engineer.<br><em></em></h2>
            <div class="photo-wrapper">
              <div class="photo-placeholder">
                <img
                  src="assets/images/profile.jpg"
                  alt="Joshua Adams"
                  class="profile-photo"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                />
                <div class="photo-fallback">
                  <span class="photo-icon">📷</span>
                  <span class="photo-hint">Add your photo to<br><code>src/assets/images/profile.jpg</code></span>
                </div>
              </div>
            </div>
          </div>
          <div class="about-right">
            <p>
              I'm a Software Engineer with an M.S. in Computer Science from the University of Utah,
              currently at <strong>Lion Energy</strong> in American Fork where I build tools that
              sit at the intersection of hardware and software — from WPF desktop apps communicating
              over CAN bus to IoT simulators running on AWS.
            </p>
            <p>
              My background is a bit unconventional: I started with a B.S. in Psychology before
              pivoting into CS. That combination shapes how I approach engineering — I think about
              the people using the software, not just the code underneath it.
            </p>
            <p>
              I'm fluent across the stack: embedded C++/C#, Python automation, full-stack web with
              React and Node, and mobile development in Kotlin. I'm most energized working on problems
              that require understanding both the system and the user.
            </p>
            <div class="about-stats">
              <div class="stat">
                <span class="stat-num">2+</span>
                <span class="stat-label">Years experience</span>
              </div>
              <div class="stat">
                <span class="stat-num">M.S.</span>
                <span class="stat-label">Computer Science</span>
              </div>
              <div class="stat">
                <span class="stat-num">10+</span>
                <span class="stat-label">Technologies</span>
              </div>
            </div>
            <div class="about-links">
              <a href="/assets/Joshua_Adams_Resume_March_2026.pdf" target="_blank" class="link-item">
                <span>Resume</span>
                <span class="arrow">→</span>
              </a>
              <a href="https://github.com/adamjosh11" target="_blank" class="link-item">
                <span>GitHub</span>
                <span class="arrow">→</span>
              </a>
              <a href="https://www.linkedin.com/in/josh-adams-ba4775260/" target="_blank" class="link-item">
                <span>LinkedIn</span>
                <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--bg-alt); }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 4rem;
      align-items: start;
    }
    .about-left { position: sticky; top: 6rem; }
    .photo-wrapper { margin-top: 2rem; }
    .photo-placeholder {
      width: 100%;
      aspect-ratio: 4 / 5;
      border: 1px solid var(--border);
      border-radius: 2px;
      overflow: hidden;
      position: relative;
      background: var(--bg-card);
    }
    .profile-photo {
      width: 100%; height: 100%;
      object-fit: cover; object-position: top center;
      display: block;
    }
    .photo-fallback {
      display: none;
      flex-direction: column; align-items: center; justify-content: center;
      gap: 1rem; height: 100%;
      text-align: center; padding: 2rem;
    }
    .photo-icon { font-size: 2.5rem; }
    .photo-hint {
      font-family: var(--font-mono); font-size: 0.68rem;
      color: var(--text-muted); line-height: 1.8;
    }
    .photo-hint code {
      color: var(--accent); font-size: 0.65rem;
    }
    .about-right p {
      margin-bottom: 1.25rem;
      color: var(--text-muted);
      font-size: 1rem;
    }
    .about-right strong { color: var(--text); font-weight: 500; }
    .about-stats {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem; margin: 2.5rem 0;
      padding: 2rem 0;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    .stat { display: flex; flex-direction: column; gap: 0.25rem; }
    .stat-num {
      font-family: var(--font-display);
      font-size: 2rem; font-weight: 700;
      color: var(--accent);
    }
    .stat-label {
      font-family: var(--font-mono);
      font-size: 0.65rem; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--text-muted);
    }
    .about-links { display: flex; flex-direction: column; gap: 0; }
    .link-item {
      display: flex; justify-content: space-between; align-items: center;
      font-family: var(--font-mono); font-size: 0.8rem;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      padding: 0.9rem 0;
      border-bottom: 1px solid var(--border);
      transition: color 0.2s;
    }
    .link-item:hover { color: var(--accent); opacity: 1; }
    .arrow { font-size: 1rem; transition: transform 0.2s; }
    .link-item:hover .arrow { transform: translateX(4px); }
    @media (max-width: 768px) {
      .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .about-left { position: static; }
      .about-stats { grid-template-columns: repeat(2, 1fr); }
    }
  `]
})
export class AboutComponent {}
