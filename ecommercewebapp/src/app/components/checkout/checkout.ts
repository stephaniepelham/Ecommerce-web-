import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {
  customerName = '';
  email = '';
  address = '';
  city = '';
  submitted = false;

  constructor(private cartService: CartService) {}

  get total(): number {
    return this.cartService.getTotal();
  }

  placeOrder(): void {
    if (!this.customerName || !this.email || !this.address || !this.city) {
      alert('Please complete all checkout fields.');
      return;
    }

    this.cartService.clearCart();
    this.submitted = true;
  }
}
