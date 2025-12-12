import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" routerLink="/">MonShop</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"><a class="nav-link" routerLink="/products">Produits</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/products/new">Ajouter Produit</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/orders">Commandes</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/orders/new">Créer Commande</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
