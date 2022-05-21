import { Component, OnInit } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { Favorite } from 'src/models/favorites.model';
import { FavoriteService } from '../favorite.http.service';

import { map } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favoriteSubject = new Subject<Favorite[]>();

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.getFavorites();
    this.favoriteSubject.subscribe();
  }

  getFavorites() {
    this.favoriteService
      .getFavorites()
      .subscribe((value) => this.favoriteSubject.next(value));
  }

  removeFavorite(favoriteId: any) {
    this.favoriteService
      .removeFavorite(favoriteId)
      .subscribe(() => this.getFavorites());
  }

  identify(index: any, item: Favorite) {
    return item.id;
  }

  ngOnDestroy() {
    this.favoriteSubject.unsubscribe();
  }
}
