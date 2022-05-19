import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/api/products`);
  }

  getRecommendedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `http://localhost:3000/api/products/recommended`
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/api/products/${id}`);
  }

  getProductsByCategory(categoryId: string) {
    return this.http.get<Product[]>(
      `http://localhost:3000/api/products/category/${categoryId}`
    );
  }

  addProduct(body: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:3000/api/products`, body, {
      withCredentials: true,
    });
  }

  deleteProductById(id: number) {
    return this.http.delete(`http://localhost:3000/api/products/${id}`);
  }

  updateProduct(id: number, body: Product) {
    return this.http.put(`http://localhost:3000/api/products/${id}`, body);
  }
}
