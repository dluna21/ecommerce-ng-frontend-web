import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient){}

  getDataTest():Observable<ProductModel[]>{
    console.log('request api');
    var request$ = this.http.get<ProductModel[]>('https://fakestoreapi.com/products?limit=100');
    return  request$;
  }
  getDataTestxNumero(limit:number):Observable<ProductModel[]>{
    console.log('request api');
    var request$ = this.http.get<ProductModel[]>('https://fakestoreapi.com/products?limit='+limit);
    return  request$;
  }
}
