import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/models/category.model';
import { Favorite } from 'src/models/favorites.model';
import { Product } from 'src/models/products.model';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { CartHttpService } from '../cart.http.service';
import { CategoryHttpService } from '../category.http.service';
import { FavoriteDialogComponent } from '../favorite-dialog/favorite-dialog.component';
import { FavoriteService } from '../favorite.http.service';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private productHttpService: ProductHttpService,
    private cartHttpService: CartHttpService,
    public dialog: MatDialog,
    private favoriteService: FavoriteService,
    private categoryService: CategoryHttpService
  ) {}

  products: Product[] = [];

  filteredProducts: Product[] = [];

  categories: Category[] = [];

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productHttpService.getRecommendedProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  onFavoriteClicked(product: Product) {
    this.addFavorite(product.id);
  }

  addFavorite(productId: any) {
    this.dialog.open(FavoriteDialogComponent);
    this.favoriteService.addFavorite(productId).subscribe();
  }

  openDialog() {
    this.dialog.open(CartDialogComponent);
  }

  addToCart(productId: number) {
    this.cartHttpService.addToCart(productId, 1).subscribe(() => {
      this.openDialog();
    });
  }

  identify(index: number, product: Product) {
    return product.id;
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  filterByCategories(id?: any) {
    if (!id) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.categoryId === id
      );
    }
  }
}
