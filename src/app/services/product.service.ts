import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44331/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {  //ürünleri getirme kodu
    let newPath=this.apiUrl + "products/getall" //let değişken tanımlar
    return  this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {  //ürünleri getirme kodu
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return  this.httpClient.get<ListResponseModel<Product>>(newPath);
    }
}
