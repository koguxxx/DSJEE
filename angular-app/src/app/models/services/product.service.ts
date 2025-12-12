import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getById(id: number) {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`);
  }

  create(product: Product) {
    return this.http.post<Product>(this.BASE_URL, product);
  }

  update(id: number, product: Product) {
    return this.http.put<Product>(`${this.BASE_URL}/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
