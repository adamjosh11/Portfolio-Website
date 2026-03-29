import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="scrolled">
      <div class="nav-inner">
        <a href="#hero" class="nav-logo">Joshua Adams</a>
        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#personal">Personal</a>
          <a href="#contact" class="nav-cta">Contact</a>
        </div>
        <button class="nav-toggle" (click)="menuOpen = !menuOpen" [class.open]="menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" [class.open]="menuOpen">
        <a href="#about"      (click)="menuOpen=false">About</a>
        <a href="#experience" (click)="menuOpen=false">Experience</a>
        <a href="#projects"   (click)="menuOpen=false">Projects</a>
        <a href="#personal"   (click)="menuOpen=false">Personal</a>
        <a href="#contact"    (click)="menuOpen=false">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: transparent;
      transition: background 0.3s, border-bottom 0.3s;
    }
    nav.scrolled {
      background: rgba(12,11,9,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 1.25rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-logo {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--text);
      letter-spacing: -0.02em;
    }
    .nav-links {
      display: flex; gap: 2rem; align-items: center;
    }
    .nav-links a {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--text); opacity: 1; }
    .nav-links .nav-cta {
      color: var(--accent);
      border: 1px solid var(--accent-dim);
      padding: 0.45em 1.1em;
      border-radius: 2px;
      transition: background 0.2s, color 0.2s;
    }
    .nav-links .nav-cta:hover { background: var(--accent); color: var(--bg); opacity: 1; }
    .nav-toggle {
      display: none;
      flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 4px;
    }
    .nav-toggle span {
      display: block; width: 22px; height: 2px;
      background: var(--text); transition: all 0.3s;
    }
    .mobile-menu {
      display: none; flex-direction: column;
      padding: 1rem 2rem 1.5rem;
      border-top: 1px solid var(--border);
      background: rgba(12,11,9,0.98);
    }
    .mobile-menu.open { display: flex; }
    .mobile-menu a {
      font-family: var(--font-mono); font-size: 0.85rem;
      color: var(--text-muted); padding: 0.7rem 0;
      border-bottom: 1px solid var(--border);
      letter-spacing: 0.1em; text-transform: uppercase;
    }
    @media (max-width: 680px) {
      .nav-links { display: none; }
      .nav-toggle { display: flex; }
    }
  `]
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 40; }
}
