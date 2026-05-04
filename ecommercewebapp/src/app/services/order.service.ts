import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order, OrderItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'api/orders';

  constructor(private http: HttpClient) { }

  createOrder(userId: string, items: OrderItem[], totalAmount: number): Observable<Order> {
    const payload = {
      userId,
      items,
      totalAmount,
      orderDate: new Date(),
      status: 'PENDING'
    };
    return this.http.post<Order>(`${this.apiUrl}/create`, payload);
  }

  checkout(userId: string, items: OrderItem[], totalAmount: number): Observable<Order> {
    return this.createOrder(userId, items, totalAmount);
  }

  getOrderHistory(userId: string): Observable<Order[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<Order[]>(`${this.apiUrl}/history`, { params });
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${orderId}`);
  }
}
