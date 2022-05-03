import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
  constructor(private http: HttpClient) {}

  addToCart(userId: number, productId: number, amount: number) {
    return this.http.post<Product>(`http://localhost:3000/api/carts/`, {
      userId,
      productId,
      amount,
    });
  }
}
