import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeProduct, productsList } from '../products/products.mock';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  
  loading: boolean = true;
  product?: TypeProduct;
  productList: TypeProduct[] = productsList;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);

    this._route.params.subscribe((params) => {
      this.product = this.productList.find(product => product.id == params['productId']);
      // console.log(this.product);
    });
  }
}
