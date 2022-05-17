import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Category } from 'src/models/categories.model';
import { Product } from 'src/models/products.model';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { CartHttpService } from '../cart.http.service';
import { CategoryHttpService } from '../category.service';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categoryId: string;

  category: Category;

  products: Product[] = [];

  isFavorite: boolean = false;

  routeSub: Subscription;

  constructor(
    private productHttpService: ProductHttpService,
    private cartHttpService: CartHttpService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private categoryHttpService: CategoryHttpService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.getProducts();
      this.getCategoryById();
    });
  }

  getProducts() {
    this.productHttpService
      .getProductsByCategory(this.categoryId)
      .subscribe((product) => {
        this.products = product;
      });
  }

  getCategoryById() {
    this.categoryHttpService
      .getCategoryById(this.categoryId)
      .subscribe((category) => {
        this.category = category;
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

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
