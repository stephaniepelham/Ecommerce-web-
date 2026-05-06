import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminService, AuthService } from '../../services';
import { Product } from '../../models';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = null;

    if (this.productForm.invalid) {
      return;
    }

    this.loading = true;
    const user = this.authService.getCurrentUser();
    
    if (!user) {
      this.error = 'You must be logged in to add a product';
      this.loading = false;
      return;
    }

    const product: Omit<Product, 'id'> = {
      name: this.f['name'].value,
      description: this.f['description'].value,
      price: parseFloat(this.f['price'].value),
      category: this.f['category'].value,
      imageUrl: this.f['imageUrl'].value,
      createdBy: user.id
    };

    this.adminService.addProduct(product).subscribe({
      next: () => {
        this.router.navigate(['/admin/manage-products']);
      },
      error: (error) => {
        this.error = error.error?.message || 'Failed to add product';
        this.loading = false;
      }
    });
  }
}
