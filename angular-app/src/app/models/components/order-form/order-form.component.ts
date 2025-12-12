import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent implements OnInit {
  products: Product[] = [];
  form = this.fb.group({
    customerName: [''],
    items: this.fb.array([])
  });

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  addItem() {
    this.items.push(this.fb.group({
      productId: [this.products.length ? this.products[0].id : null],
      quantity: [1]
    }));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  submit() {
    const order = this.form.value;
    // Calcul total simple côté client (optionnel)
    order.totalAmount = order.items.reduce((sum: number, it: any) => {
      const prod = this.products.find(p => p.id === it.productId);
      return sum + (prod ? prod.price * it.quantity : 0);
    }, 0);

    this.orderService.create(order).subscribe({
      next: () => { alert('Commande créée'); this.router.navigate(['/orders']); },
      error: () => alert('Erreur création commande')
    });
  }
}
