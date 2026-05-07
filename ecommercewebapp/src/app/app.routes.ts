import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProductDetail } from './components/product-detail/product-detail';
import { CartComponent } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { About } from './components/about/about';
import { HomeComponent } from './components/home/home';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { SearchComponent } from './components/search/search';   
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';    


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: About },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/add-product', component: AddProductComponent },
  { path: 'admin/edit-product/:id', component: EditProductComponent },
  { path: 'admin/manage-products', component: ManageProductsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }
  
  { path: 'admin/delete-product/:id', component: EditProductComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetail },
  { path: '**', redirectTo: '' }
];
