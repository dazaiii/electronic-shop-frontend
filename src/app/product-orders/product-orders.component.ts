import { Component, OnInit } from '@angular/core';
import { ProductOrder } from 'src/models/productOrder.model';
import { ProductOrderService } from '../product-order.http.service';

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.scss'],
})
export class ProductOrdersComponent implements OnInit {
  orders: ProductOrder[];

  constructor(private productOrderService: ProductOrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.productOrderService
      .getOrders()
      .subscribe((order) => (this.orders = order));
  }

  identify(index: number, order: ProductOrder) {
    return order.id;
  }
}
