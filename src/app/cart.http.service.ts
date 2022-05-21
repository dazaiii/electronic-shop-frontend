import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartResponse } from 'src/models/carts.model';
import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {
  constructor(private http: HttpClient) {}

  addToCart(productId: number, amount: number) {
    return this.http.post<Product>(
      `http://localhost:3000/api/carts/`,
      {
        productId,
        amount,
      },
      { withCredentials: true }
    );
  }

  updateCart(productId: number, amount: number) {
    return this.http.put<Product>(
      `http://localhost:3000/api/carts/${productId}`,
      {
        productId,
        amount,
      },
      { withCredentials: true }
    );
  }

  getUserCart(): Observable<CartResponse> {
    return this.http.get<CartResponse>(`http://localhost:3000/api/carts/`, {
      withCredentials: true,
    });
  }

  removeFromCart(id: number) {
    return this.http.delete(`http://localhost:3000/api/carts/${id}`, {
      withCredentials: true,
    });
  }
}
