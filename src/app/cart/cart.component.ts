import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartResponse } from 'src/models/carts.model';
import { CartHttpService } from '../cart.http.service';
import { ProductOrderService } from '../product-order.http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartHttpService: CartHttpService,
    private productOrderService: ProductOrderService
  ) {}

  cart: CartResponse;

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartHttpService.getUserCart().subscribe((response) => {
      this.cart = response;
    });
  }

  order() {
    this.productOrderService.addOrder().subscribe();
  }
}
