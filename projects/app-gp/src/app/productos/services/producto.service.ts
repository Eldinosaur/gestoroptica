import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='/api/productos/'

  constructor(private http:HttpClient) { }

  loadProductos():Observable<any> {
    return this.http.get(this.url)
  }

  loadProducto(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addProducto(producto:Producto):Observable<any>{
    return this.http.post(this.url,producto)
  }

  updateProducto(id:string, producto:Producto):Observable<any>{
    return this.http.put(this.url+id, producto)
  }

  deleteProducto(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
