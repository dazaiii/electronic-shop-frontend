import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/categories.model';
import { Product } from 'src/models/products.model';
import { CategoryHttpService } from '../category.http.service';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    amount: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    availability: new FormControl(true),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
    bestseller: new FormControl(false, [
      Validators.required,
      Validators.minLength(3),
    ]),
    category: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.productForm.get('name');
  }
  get amount() {
    return this.productForm.get('amount');
  }
  get price() {
    return this.productForm.get('price');
  }
  get description() {
    return this.productForm.get('description');
  }
  get availability() {
    return this.productForm.get('availability');
  }
  get imageUrl() {
    return this.productForm.get('imageUrl');
  }
  get bestseller() {
    return this.productForm.get('bestseller');
  }
  get category() {
    return this.productForm.get('category');
  }

  categories: Observable<Category[]>;

  constructor(
    private categoryService: CategoryHttpService,
    private productService: ProductHttpService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.categoryService.getCategories();
  }

  onSave() {
    const product: Product = this.productForm.value;
    this.productService.addProduct(product).subscribe(() => {});
  }

  resetForm() {
    this.productForm.reset();
  }
}
