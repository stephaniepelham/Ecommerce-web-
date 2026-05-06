import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly items$: Observable<CartItem[]> = this.itemsSubject.asObservable();

  addToCart(product: Product): void {
    const current = [...this.itemsSubject.value];
    const existing = current.find((item) => item.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      current.push({ product, quantity: 1 });
    }

    this.itemsSubject.next(current);
  }

  updateQuantity(productId: string, quantity: number): void {
    const current = this.itemsSubject.value.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: Math.max(1, quantity) };
      }
      return item;
    });

    this.itemsSubject.next(current);
  }

  removeItem(productId: string): void {
    const filtered = this.itemsSubject.value.filter((item) => item.product.id !== productId);
    this.itemsSubject.next(filtered);
  }

  clearCart(): void {
    this.itemsSubject.next([]);
  }

  getTotal(): number {
    return this.itemsSubject.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
}
