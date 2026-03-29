import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { ContactForm } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-left">
            <span class="section-label">05 — Contact</span>
            <h2 class="section-title">Let's<br>talk.</h2>
            <p>
              Whether you have a role in mind, a project to build,
              or just want to connect — my inbox is open.
            </p>
            <div class="contact-meta">
              <a href="mailto:adamsjos02@gmail.com" class="meta-item">
                <span class="meta-label">Email</span>
                <span class="meta-value">adamsjos02&#64;gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/josh-adams-ba4775260/" target="_blank" class="meta-item">
                <span class="meta-label">LinkedIn</span>
                <span class="meta-value">/in/josh-adams</span>
              </a>
              <a href="https://github.com/adamjosh11" target="_blank" class="meta-item">
                <span class="meta-label">GitHub</span>
                <span class="meta-value">adamjosh11</span>
              </a>
            </div>
          </div>

          <div class="contact-right">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group" [class.has-error]="nameField.invalid && nameField.touched">
                <label for="name">Name</label>
                <input id="name" name="name" type="text"
                  [(ngModel)]="form.name" #nameField="ngModel"
                  required placeholder="Your name" />
              </div>
              <div class="form-group" [class.has-error]="emailField.invalid && emailField.touched">
                <label for="email">Email</label>
                <input id="email" name="email" type="email"
                  [(ngModel)]="form.email" #emailField="ngModel"
                  required email placeholder="your@email.com" />
              </div>
              <div class="form-group" [class.has-error]="msgField.invalid && msgField.touched">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5"
                  [(ngModel)]="form.message" #msgField="ngModel"
                  required placeholder="What's on your mind?"></textarea>
              </div>

              <div class="form-footer">
                <button type="submit" [disabled]="sending || contactForm.invalid">
                  <span *ngIf="!sending">Send message →</span>
                  <span *ngIf="sending">Sending...</span>
                </button>
                <div class="form-status success" *ngIf="successMsg">{{ successMsg }}</div>
                <div class="form-status error"   *ngIf="errorMsg">{{ errorMsg }}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--bg-alt); }
    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 5rem;
      align-items: start;
    }
    .contact-left p {
      color: var(--text-muted); font-size: 1rem;
      max-width: 340px; margin-bottom: 2.5rem;
    }
    .contact-meta { display: flex; flex-direction: column; gap: 0; }
    .meta-item {
      display: flex; justify-content: space-between;
      padding: 0.9rem 0;
      border-bottom: 1px solid var(--border);
      color: var(--text-muted);
      transition: color 0.2s;
    }
    .meta-item:hover { color: var(--accent); opacity: 1; }
    .meta-label {
      font-family: var(--font-mono); font-size: 0.68rem;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--text-muted);
    }
    .meta-value { font-family: var(--font-mono); font-size: 0.78rem; }

    form { display: flex; flex-direction: column; gap: 1.5rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    label {
      font-family: var(--font-mono); font-size: 0.68rem;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--text-muted);
    }
    input, textarea {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text);
      font-family: var(--font-body); font-size: 0.95rem;
      padding: 0.85rem 1rem;
      border-radius: 2px;
      outline: none;
      transition: border-color 0.2s;
      resize: vertical;
    }
    input:focus, textarea:focus { border-color: var(--accent-dim); }
    input::placeholder, textarea::placeholder { color: var(--text-muted); opacity: 0.5; }
    .has-error input, .has-error textarea { border-color: var(--red); }
    .form-footer { display: flex; flex-direction: column; gap: 1rem; }
    button {
      font-family: var(--font-mono); font-size: 0.78rem;
      letter-spacing: 0.1em; text-transform: uppercase;
      background: var(--accent); color: var(--bg);
      border: none; padding: 1em 2em;
      border-radius: 2px; cursor: pointer;
      transition: opacity 0.2s;
      align-self: flex-start;
    }
    button:hover { opacity: 0.85; }
    button:disabled { opacity: 0.4; cursor: not-allowed; }
    .form-status {
      font-family: var(--font-mono); font-size: 0.78rem; padding: 0.75rem 1rem;
      border-radius: 2px;
    }
    .success { background: rgba(74,140,106,0.12); color: #6bc99a; border: 1px solid rgba(74,140,106,0.3); }
    .error   { background: rgba(192,57,43,0.12); color: #e07b71; border: 1px solid rgba(192,57,43,0.3); }

    @media (max-width: 768px) {
      .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
    }
  `]
})
export class ContactComponent {
  form: ContactForm = { name: '', email: '', message: '' };
  sending = false;
  successMsg = '';
  errorMsg = '';

  constructor(private portfolioService: PortfolioService) {}

  onSubmit() {
    this.sending = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.portfolioService.sendContact(this.form).subscribe({
      next: res => {
        this.successMsg = res.message;
        this.form = { name: '', email: '', message: '' };
        this.sending = false;
      },
      error: () => {
        this.errorMsg = 'Something went wrong. Please try emailing me directly.';
        this.sending = false;
      }
    });
  }
}
