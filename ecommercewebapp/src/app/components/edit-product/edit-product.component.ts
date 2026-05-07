import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminService, ProductService } from '../../services';
import { Product } from '../../models';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;
  productId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private productService: ProductService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProduct();
    }
  }

  loadProduct(): void {
    if (!this.productId) return;

    const product = this.productService.getProductById(this.productId);
    if (product) {
      this.productForm.patchValue({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        imageUrl: product.imageUrl
      });
    } else {
      this.error = 'Product not found';
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = null;

    if (this.productForm.invalid || !this.productId) {
      return;
    }

    this.loading = true;
    const updatedProduct: Partial<Product> = {
      name: this.f['name'].value,
      description: this.f['description'].value,
      price: parseFloat(this.f['price'].value),
      category: this.f['category'].value,
      imageUrl: this.f['imageUrl'].value
    };

    this.adminService.editProduct(this.productId, updatedProduct).subscribe({
      next: () => {
        this.router.navigate(['/admin/manage-products']);
      },
      error: (error) => {
        this.error = error.error?.message || 'Failed to update product';
        this.loading = false;
      }
    });
  }
}
