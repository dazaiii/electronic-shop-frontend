import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';
import { ProductComponent } from './product/product.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdministrationPageComponent },
  { path: 'admin/addCategory', component: AddCategoryComponent },
  { path: 'admin/modifyCategory', component: ModifyCategoryComponent },
  { path: 'admin/deleteCategory', component: DeleteCategoryComponent },
  { path: 'admin/addProduct', component: AddProductComponent },
  { path: 'category/:id', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
