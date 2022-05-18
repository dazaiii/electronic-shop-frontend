import { Component } from '@angular/core';
import { Category } from 'src/models/categories.model';
import { CategoryHttpService } from './category.http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electronic-shop-frontend';

  category: Category;

  categories: Category[];

  constructor(private categoryHttpService: CategoryHttpService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    return this.categoryHttpService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
