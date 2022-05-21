import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartBody } from 'src/models/carts.model';
import { CartHttpService } from '../cart.http.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input()
  item: CartBody;

  @Output()
  reloadItems = new EventEmitter<void>();

  amountForm = new FormControl('', Validators.pattern('[0-1]\\d*'));

  constructor(private cartHttpService: CartHttpService) {}

  ngOnInit(): void {
    this.amountForm.patchValue(this.item.cartAmount);
  }

  removeItem(id: number) {
    this.cartHttpService
      .removeFromCart(id)
      .subscribe(() => this.reloadItems.emit());
  }

  updateItem(id: number) {
    this.cartHttpService
      .updateCart(id, this.amountForm.value)
      .subscribe(() => this.reloadItems.emit());
  }
}
