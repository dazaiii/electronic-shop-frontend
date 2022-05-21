import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Favorite } from 'src/models/favorites.model';
import { Product } from 'src/models/products.model';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { CartHttpService } from '../cart.http.service';
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
    private favoriteService: FavoriteService
  ) {}

  products: Product[] = [];

  favorites: Favorite[] = [];

  ngOnInit(): void {
    this.getProducts();
    this.getFavorites();
  }

  getProducts() {
    this.productHttpService.getRecommendedProducts().subscribe((product) => {
      this.products = product;
    });
  }

  onFavoriteClicked(product: Product) {
    if (product.favorite === false) {
      this.addFavorite(product.id);
    } else {
      this.removeFavorite(product.id);
    }
  }

  addFavorite(productId: any) {
    this.favoriteService.addFavorite(productId).subscribe(() => {
      this.getProducts();
    });
  }

  removeFavorite(productId: any) {
    this.favoriteService.removeFavorite(productId).subscribe(() => {
      this.getProducts();
    });
  }

  getFavorites() {
    return this.favoriteService.getFavorites().subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  openDialog() {
    this.dialog.open(CartDialogComponent);
  }

  addToCart(productId: number) {
    this.cartHttpService.addToCart(productId, 1).subscribe();
  }
}
