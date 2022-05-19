import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/models/category.model';
import { CategoryHttpService } from '../category.http.service';

@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.scss'],
})
export class ModifyCategoryComponent implements OnInit {
  categoryId = new FormControl();

  updateCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  get name() {
    return this.updateCategoryForm.get('name');
  }

  get description() {
    return this.updateCategoryForm.get('description');
  }

  categories: Category[];

  constructor(private categoryService: CategoryHttpService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService
      .getCategories()
      .subscribe((x) => (this.categories = x));
  }

  onSave() {
    const category: Category = {
      name: this.name?.value,
      description: this.description?.value,
    };
    this.categoryService
      .modifyCategory(this.categoryId.value, category)
      .subscribe(() => {});
  }

  onSelect() {
    const found = this.categories.find((x) => x.id === this.categoryId.value);
    this.name?.patchValue(found?.name);
    this.description?.patchValue(found?.description);
  }
}
