import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from 'src/models/favorites.model';
import { FavoriteService } from '../favorite.http.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favorites$: Observable<Favorite[]>;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites() {
    this.favorites$ = this.favoriteService.getFavorites();
  }
}
