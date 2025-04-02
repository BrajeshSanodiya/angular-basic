import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<Products> {
    const url = 'https://dummyjson.com/product';
    return this.http.get<Products>(url);
  }
}
