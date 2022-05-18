import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input()
  isVisible: boolean = false;

  @Output()
  isVisibleChange = new EventEmitter<boolean>();

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
      this.isVisibleChange.emit(false);
    });
  }

  onCancel() {
    this.isVisibleChange.emit(false);
  }
}
