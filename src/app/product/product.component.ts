import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/products.model';
import { ProductHttpService } from '../product.http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private productHttpService: ProductHttpService,
    private route: ActivatedRoute
  ) {}

  routeSub: Subscription;

  product: Product;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.getProductById(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getProductById(id: number) {
    this.productHttpService.getProductById(id).subscribe((product) => {
      this.product = product;
      console.log(this.product);
    });
  }
}
