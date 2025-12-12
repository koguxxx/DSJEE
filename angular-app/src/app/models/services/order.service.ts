import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private BASE_URL = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.BASE_URL);
  }

  getById(id: number) {
    return this.http.get<Order>(`${this.BASE_URL}/${id}`);
  }

  create(order: Order) {
    return this.http.post<Order>(this.BASE_URL, order);
  }

  update(id: number, order: Order) {
    return this.http.put<Order>(`${this.BASE_URL}/${id}`, order);
  }

  delete(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
