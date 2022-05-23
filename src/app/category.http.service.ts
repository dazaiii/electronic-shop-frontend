import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category.model';

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

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      `http://localhost:3000/api/categories`
    );
  }

  addCategory(body: Category): Observable<Category> {
    return this.httpClient.post<Category>(
      `http://localhost:3000/api/categories`,
      body,
      { withCredentials: true }
    );
  }

  modifyCategory(id: number, body: Category): Observable<Category> {
    return this.httpClient.put<Category>(
      `http://localhost:3000/api/categories/${id}`,
      body,
      { withCredentials: true }
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(
      `http://localhost:3000/api/categories/${id}`,
      { withCredentials: true }
    );
  }
}
