import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div class="container">
        <a class="navbar-brand fw-bold" routerLink="/">🚀 Mi Chatbot</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Chatbot</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/registrar-pregunta" routerLinkActive="active"
                >Registrar Pregunta</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Espacio para que no tape el menú fijo -->
    <div style="padding-top: 70px;">
      <router-outlet></router-outlet>
    </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aaa';
}
