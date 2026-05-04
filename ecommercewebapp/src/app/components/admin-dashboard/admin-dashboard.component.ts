import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models';
import { AdminService, AuthService } from '../../services';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private adminService: AdminService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.checkAdmin();
    this.loadProducts();
  }

  checkAdmin(): void {
    const user = this.authService.getCurrentUser();
    if (!user || user.role !== 'ADMIN') {
      this.error = 'You do not have permission to access this page.';
    }
  }

  loadProducts(): void {
    this.adminService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Failed to load products';
        this.loading = false;
      }
    });
  }

  deleteProduct(productId: string): void {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.adminService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== productId);
      },
      error: (error) => {
        alert(error.error?.message || 'Failed to delete product');
      }
    });
  }
}
