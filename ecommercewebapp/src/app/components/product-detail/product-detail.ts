import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.resolveProductIdFromRoute();
    if (id) {
      this.product = this.productService.getProductById(id);
    }
  }

  private resolveProductIdFromRoute(): string | null {
    const routeParam = this.route.snapshot.paramMap.get('id') ?? this.route.snapshot.paramMap.get('productId');
    if (routeParam) {
      return routeParam;
    }

    const queryParam = this.route.snapshot.queryParamMap.get('id');
    if (queryParam) {
      return queryParam;
    }

    const urlSegments = this.route.snapshot.url.map((segment) => segment.path).filter(Boolean);
    if (urlSegments.length > 0) {
      const lastSegment = urlSegments[urlSegments.length - 1];
      if (/^[0-9]+$/.test(lastSegment) || /^[a-zA-Z0-9_-]+$/.test(lastSegment)) {
        return lastSegment;
      }
    }

    const pathname = window.location.pathname.split('/').filter(Boolean);
    if (pathname.length > 0) {
      const lastSegment = pathname[pathname.length - 1];
      if (/^[0-9]+$/.test(lastSegment) || /^[a-zA-Z0-9_-]+$/.test(lastSegment)) {
        return lastSegment;
      }
    }

    return null;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Product added to cart!');
    }
  }
}
