import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category.model';
import { Product } from 'src/models/products.model';
import { CategoryHttpService } from '../category.http.service';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.scss'],
})
export class ModifyProductComponent implements OnInit {
  productId = new FormControl();

  products: Product[];

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

  constructor(private productService: ProductHttpService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((x) => (this.products = x));
  }

  onSave() {
    this.productService
      .updateProduct(this.productId.value, this.productForm.value)
      .subscribe();
  }

  selectProduct() {
    const product = this.products.find((x) => x.id === this.productId.value);
    this.name?.patchValue(product?.name);
    this.amount?.patchValue(product?.amount);
    this.price?.patchValue(product?.price);
    this.description?.patchValue(product?.description);
    this.imageUrl?.patchValue(product?.imageUrl);
    this.availability?.patchValue(product?.availability);
    this.bestseller?.patchValue(product?.bestseller);
  }
}
