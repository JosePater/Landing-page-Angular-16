import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct;
  colorValue: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Ruta
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService // Servicio de los métodos de los productos (CREAD)
          .getProduct(Number(params['productId']))
          .subscribe({
            next: (data: IProduct) => {
              console.log('data: ', data);
              this.product = data;
              this.colorValue = (this.product?.price as number) > 200 ? 'red' : 'blue';
            },
            error: (error: any) => { // Cuando no hay acceso a Internet
              console.log('Error de acceso al producto: ', error);
            },
          });
      },
      error: (error: any) => { // Este error no sucederá
        console.log('Error de ruta: ', error);
      },
    });
  }
}
