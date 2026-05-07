import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { HomeComponent } from './components/home/home';
import { ProductListComponent } from './components/product-list/product-list';
import { SearchComponent } from './components/search/search';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { About } from './components/about/about'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  imports: [RouterOutlet, Navbar, Footer, HomeComponent, ProductListComponent, SearchComponent, LoginComponent, RegisterComponent, OrderHistoryComponent, AdminDashboardComponent, AddProductComponent, EditProductComponent, ManageProductsComponent, About],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ecommercewebapp');
  private router =inject(Router);
}
