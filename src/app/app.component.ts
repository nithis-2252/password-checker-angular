import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  showPassword = false;

  readonly checks = [
    { label: '8+ characters',        test: (p: string) => p.length >= 8 },
    { label: 'Uppercase letter',      test: (p: string) => /[A-Z]/.test(p) },
    { label: 'Lowercase letter',      test: (p: string) => /[a-z]/.test(p) },
    { label: 'Number',                test: (p: string) => /[0-9]/.test(p) },
    { label: 'Special character',     test: (p: string) => /[^A-Za-z0-9]/.test(p) },
  ];

  private readonly labels = ['', 'Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  private readonly colors = ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#30d158'];

  get score(): number {
    return this.checks.filter(c => c.test(this.password)).length;
  }
  get strengthLabel(): string { return this.labels[this.score] || ''; }
  get strengthColor(): string { return this.colors[this.score - 1] || this.colors[0]; }
  get strengthPercent(): string {
    return this.password ? `${Math.round((this.score / 5) * 100)}%` : '0%';
  }
  passes(test: (p: string) => boolean): boolean {
    return this.password.length > 0 && test(this.password);
  }
}