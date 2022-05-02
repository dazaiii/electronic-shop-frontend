import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/products.model';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private productHttpService: ProductHttpService) {}

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
}
