import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category.model';
import { CategoryHttpService } from '../category.http.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements OnInit {
  category = new FormControl();

  categories: Observable<Category[]>;

  constructor(private categoryService: CategoryHttpService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.categoryService.getCategories();
  }

  onSave() {
    this.categoryService.deleteCategory(this.category.value).subscribe(() => {
      this.getCategories();
    });
  }
}
