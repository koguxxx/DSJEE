import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  loading = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.orderService.getAll().subscribe({
      next: data => { this.orders = data; this.loading = false; },
      error: () => { this.loading = false; alert('Erreur chargement commandes'); }
    });
  }

  delete(id?: number) {
    if (!id) return;
    if (!confirm('Supprimer cette commande ?')) return;
    this.orderService.delete(id).subscribe({
      next: () => this.load(),
      error: () => alert('Erreur suppression')
    });
  }
}
