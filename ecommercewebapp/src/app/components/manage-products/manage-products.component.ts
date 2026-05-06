import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../models';
import { AdminService } from '../../services';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error: string | null = null;
  searchQuery = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadProducts();
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

  getFilteredProducts(): Product[] {
    if (!this.searchQuery.trim()) {
      return this.products;
    }
    const query = this.searchQuery.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }
}
