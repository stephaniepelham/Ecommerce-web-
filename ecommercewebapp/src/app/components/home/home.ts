import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list';
import { SearchComponent } from '../search/search';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent, SearchComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
