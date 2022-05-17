import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryHttpService {
  constructor(private httpClient: HttpClient) {}

  getCategoryById(categoryId: string) {
    return this.httpClient.get<Category>(
      `http://localhost:3000/api/categories/${categoryId}`
    );
  }

  getCategories() {
    return this.httpClient.get<Category[]>(
      'http://localhost:3000/api/categories'
    );
  }
}
