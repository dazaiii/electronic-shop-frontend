import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      `http://localhost:3000/api/categories`
    );
  }

  addCategory(body: Category): Observable<Category> {
    return this.httpClient.post<Category>(
      `http://localhost:3000/api/categories`,
      body
    );
  }

  modifyCategory(id: number, body: Category): Observable<Category> {
    return this.httpClient.put<Category>(
      `http://localhost:3000/api/categories/${id}`,
      body
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/api/categories/${id}`);
  }
}
