import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { CartComponent } from './cart/cart.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { MatSelectModule } from '@angular/material/select';
import { ModifyCategoryComponent } from './modify-category/modify-category.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { FavoriteDialogComponent } from './favorite-dialog/favorite-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ProductComponent,
    CartDialogComponent,
    CartComponent,
    AdministrationPageComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    ModifyCategoryComponent,
    CategoryComponent,
    AddProductComponent,
    DeleteProductComponent,
    ModifyProductComponent,
    AccountSettingsComponent,
    FavoriteComponent,
    CartItemComponent,
    ProductOrdersComponent,
    FavoriteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
