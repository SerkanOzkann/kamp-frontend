import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44331/api/products/getall';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {  //ürünleri getirme kodu
    return  this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
  }
    }
