import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.productService.getAll().subscribe({
      next: data => { this.products = data; this.loading = false; },
      error: () => { this.loading = false; alert('Erreur chargement produits'); }
    });
  }

  delete(id?: number) {
    if (!id) return;
    if (!confirm('Supprimer ce produit ?')) return;
    this.productService.delete(id).subscribe({
      next: () => this.load(),
      error: () => alert('Erreur suppression')
    });
  }
}
