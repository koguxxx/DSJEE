// product form placeholderimport { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component ({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    price: [0, [Validators.required, Validators.min(0)]],
    quantity: [0, [Validators.required, Validators.min(0)]]
  });

  submitting = false;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {}

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.productService.create(this.form.value).subscribe({
      next: () => {
        this.submitting = false;
        alert('Produit ajouté');
        this.router.navigate(['/products']);
      },
      error: () => {
        this.submitting = false;
        alert('Erreur ajout produit');
      }
    });
  }
}
