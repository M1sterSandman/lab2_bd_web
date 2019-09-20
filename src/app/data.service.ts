import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`);
  }

  removeProduct(id): void {
    this.http.delete(`${this.BASE_URL}/products/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/products/`, product);
  }

  editProduct(id, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/${id}`, product);
  }

}
