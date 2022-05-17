import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(
      `http://localhost:3000/api/products/recommended`
    );
  }

  getProductById(id: number) {
    return this.http.get<Product>(`http://localhost:3000/api/products/${id}`);
  }

  getProductsByCategory(categoryId: string) {
    return this.http.get<Product[]>(
      `http://localhost:3000/api/products/category/${categoryId}`
    );
  }
}
