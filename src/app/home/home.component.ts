import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/models/products.model';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { CartHttpService } from '../cart.http.service';
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
    public dialog: MatDialog
  ) {}

  products: Product[] = [];

  isFavorite: boolean = false;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productHttpService.getProducts().subscribe((product) => {
      this.products = product;
    });
  }

  onFavoriteClicked(product: Product) {
    this.isFavorite === true
      ? (this.isFavorite = false)
      : (this.isFavorite = true);
    console.log(this.isFavorite);
  }

  openDialog() {
    this.dialog.open(CartDialogComponent);
  }

  addToCart(productId: number) {
    //TO DO get userId from cookie
    this.cartHttpService.addToCart(1, productId, 1).subscribe();
  }
}
