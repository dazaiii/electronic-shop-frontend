import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/models/category.model';
import { CategoryHttpService } from '../category.http.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

  constructor(private categoryService: CategoryHttpService) {}

  ngOnInit(): void {}

  onSave() {
    const category: Category = {
      name: this.categoryForm.value,
      description: this.description.value,
    };
    this.categoryService.addCategory(category).subscribe(() => {});
  }

  resetForm() {
    this.categoryForm.reset();
  }
}
