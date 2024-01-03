import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  // Obtener TODOS los productos
  public getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  // Obtener un producto
  public getProduct(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  // Obtener por categorías
  public getAllCategory(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  // Agregar un nuevo producto
  public newProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  // Actualizar un producto
  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  // Eliminar un producto
  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
