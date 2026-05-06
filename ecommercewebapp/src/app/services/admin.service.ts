import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'api/admin';

  constructor(private http: HttpClient) { }

  addProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  editProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${id}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
