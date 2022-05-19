import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/models/products.model';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  product = new FormControl();

  products: Observable<Product[]>;

  constructor(private productService: ProductHttpService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  onSave() {
    this.productService.deleteProductById(this.product.value).subscribe(() => {
      this.getProducts();
    });
  }
}
