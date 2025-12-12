import { Routes } from '@angular/router';
// Notez l'ajout de "/models/" dans le chemin et le retrait du point final
// Exemple de correction dans app.routes.ts
import { ProductListComponent } from './models/components/product-list/product-list.component';
import { ProductFormComponent } from './models/components/product-form/product-form.component';
import { OrderListComponent } from './models/components/order-list/order-list.component';
import { OrderFormComponent } from './models/components/order-form/order-form.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/new', component: OrderFormComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products' }
];