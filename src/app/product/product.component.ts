import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/products.model';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { CartHttpService } from '../cart.http.service';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private productHttpService: ProductHttpService,
    private cartHttpService: CartHttpService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  routeSub: Subscription;

  product: Product;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.getProductById(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getProductById(id: number) {
    this.productHttpService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(id: number) {
    this.cartHttpService.addToCart(id, 1).subscribe();
  }

  openDialog() {
    this.dialog.open(CartDialogComponent);
  }
}
