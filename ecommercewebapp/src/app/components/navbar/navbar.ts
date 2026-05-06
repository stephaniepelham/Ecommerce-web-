import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  private authService = inject(AuthService);
  private cartService = inject(CartService);
  private router = inject(Router);

  logoPath = '/images/weblogo.png';
  user$ = this.authService.currentUser$;
  itemCount$ = this.cartService.cartItems$.pipe(map(items => items.length));

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
