import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { SearchService } from '../../services/search.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private readonly subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    const allProducts = this.productService.getProducts();
    this.products = allProducts;

    this.subscription.add(
      this.searchService.searchTerm$.subscribe((term) => {
        this.products = term
          ? allProducts.filter((product) =>
              product.name.toLowerCase().includes(term) ||
              product.category.toLowerCase().includes(term) ||
              product.description.toLowerCase().includes(term)
            )
          : allProducts;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
