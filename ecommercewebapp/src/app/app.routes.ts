import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { About } from './components/about/about';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: About },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/add-product', component: AddProductComponent },
  { path: 'admin/edit-product/:id', component: EditProductComponent },
  { path: 'admin/manage-products', component: ManageProductsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
