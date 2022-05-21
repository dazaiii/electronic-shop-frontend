import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOrder } from 'src/models/productOrder.model';

@Injectable({
  providedIn: 'root',
})
export class ProductOrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<ProductOrder[]> {
    return this.http.get<ProductOrder[]>(
      `http://localhost:3000/api/product-order`,
      {
        withCredentials: true,
      }
    );
  }

  addOrder() {
    return this.http.post(
      `http://localhost:3000/api/product-order`,
      {},
      { withCredentials: true }
    );
  }
}
