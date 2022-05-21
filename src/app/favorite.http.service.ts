import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from 'src/models/favorites.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favoritesHearts: number[] = [];

  constructor(private httpClient: HttpClient) {}

  getFavorites(): Observable<Favorite[]> {
    return this.httpClient.get<Favorite[]>(
      'http://localhost:3000/api/user-favorites',
      { withCredentials: true }
    );
  }

  addFavorite(productId: number): Observable<Favorite> {
    return this.httpClient.post<Favorite>(
      'http://localhost:3000/api/user-favorites',
      { productId: productId },
      { withCredentials: true }
    );
  }

  removeFavorite(userFavoriteId: number): Observable<Favorite> {
    return this.httpClient.delete<Favorite>(
      `http://localhost:3000/api/user-favorites/${userFavoriteId}`,
      { withCredentials: true }
    );
  }
}
