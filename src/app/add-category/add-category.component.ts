import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/models/category.model';
import { CategoryHttpService } from '../category.http.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  @Input()
  isVisible: boolean;
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

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

  onCancel() {
    this.isVisibleChange.emit(false);
  }

  onSave() {
    const category: Category = {
      name: this.categoryForm.value,
      description: this.description.value,
    };
    this.categoryService.addCategory(category).subscribe(() => {
      this.isVisibleChange.emit(false);
    });
  }

  resetForm() {
    this.categoryForm.reset();
  }
}
