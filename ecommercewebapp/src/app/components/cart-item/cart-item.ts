import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.html',
  styleUrls: ['./cart-item.css']
})
export class CartItemComponent {
  @Input() item!: CartItem;
  @Output() remove = new EventEmitter<string>();
  @Output() quantityChange = new EventEmitter<{ productId: string; quantity: number }>();

  decrease(): void {
    if (this.item.quantity > 1) {
      this.quantityChange.emit({ productId: this.item.product.id, quantity: this.item.quantity - 1 });
    }
  }

  increase(): void {
    this.quantityChange.emit({ productId: this.item.product.id, quantity: this.item.quantity + 1 });
  }

  removeItem(): void {
    this.remove.emit(this.item.product.id);
  }
}
