import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero">
      <div class="noise"></div>
      <div class="hero-inner">
        <div class="hero-meta">
          <span class="section-label">Open to new opportunities</span>
          <span class="dot"></span>
          <span class="location">&#x25C6; Draper, UT</span>
        </div>
        <h1>
          <span class="line">Joshua</span>
          <span class="line accent">Adams.</span>
        </h1>
        <p class="hero-sub">
          Software Engineer specializing in embedded systems, full-stack web,
          and IoT — with an M.S. in Computer Science from the University of Utah.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn-primary">View my work</a>
          <a href="#contact" class="btn-ghost">Get in touch</a>
        </div>
        <div class="hero-stack">
          <span class="section-label">Core stack</span>
          <div class="stack-tags">
            <span class="tag">C#</span>
            <span class="tag">.NET</span>
            <span class="tag">Python</span>
            <span class="tag">React</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">Docker</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span class="scroll-line"></span>
        <span class="scroll-text">scroll</span>
      </div>
    </section>
  `,
  styles: [`
    section {
      min-height: 100vh;
      display: flex; flex-direction: column; justify-content: center;
      padding: 7rem 2rem 4rem;
      position: relative; overflow: hidden;
    }
    .noise {
      position: absolute; inset: 0; z-index: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      opacity: 0.35; pointer-events: none;
    }
    .hero-inner {
      max-width: var(--max-width);
      margin: 0 auto; width: 100%;
      position: relative; z-index: 1;
    }
    .hero-meta {
      display: flex; align-items: center; gap: 1rem;
      margin-bottom: 2rem;
    }
    .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 0 3px rgba(74,140,106,0.25);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 3px rgba(74,140,106,0.25); }
      50% { box-shadow: 0 0 0 6px rgba(74,140,106,0.1); }
    }
    .location {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--text-muted);
      letter-spacing: 0.1em;
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(4rem, 12vw, 9rem);
      font-weight: 900;
      line-height: 0.95;
      margin-bottom: 2.5rem;
      letter-spacing: -0.03em;
    }
    .line { display: block; }
    .accent {
      color: transparent;
      -webkit-text-stroke: 2px var(--accent);
    }
    .hero-sub {
      max-width: 520px;
      font-size: 1.05rem;
      color: var(--text-muted);
      margin-bottom: 3rem;
      line-height: 1.8;
    }
    .hero-actions {
      display: flex; gap: 1rem; flex-wrap: wrap;
      margin-bottom: 4rem;
    }
    .btn-primary {
      font-family: var(--font-mono); font-size: 0.78rem;
      letter-spacing: 0.1em; text-transform: uppercase;
      background: var(--accent); color: var(--bg);
      padding: 0.85em 2em; border-radius: 2px;
      transition: opacity 0.2s, transform 0.2s;
    }
    .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
    .btn-ghost {
      font-family: var(--font-mono); font-size: 0.78rem;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--text-muted); border: 1px solid var(--border-light);
      padding: 0.85em 2em; border-radius: 2px;
      transition: color 0.2s, border-color 0.2s;
    }
    .btn-ghost:hover { color: var(--text); border-color: var(--text-muted); opacity: 1; }
    .hero-stack .section-label { display: block; margin-bottom: 0.75rem; }
    .stack-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .hero-scroll {
      position: absolute; bottom: 3rem; right: 2rem;
      display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
    }
    .scroll-line {
      display: block; width: 1px; height: 60px;
      background: linear-gradient(to bottom, transparent, var(--accent));
      animation: drop 1.5s ease-in-out infinite;
    }
    @keyframes drop {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      51% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }
    .scroll-text {
      font-family: var(--font-mono); font-size: 0.6rem;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--text-muted);
      writing-mode: vertical-rl;
    }
  `]
})
export class HeroComponent {}
