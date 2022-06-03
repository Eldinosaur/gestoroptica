import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  url='/api/ventas/'

  constructor(private http:HttpClient) { }

  loadVentas():Observable<any> {
    return this.http.get(this.url)
  }

  loadCVenta(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addVenta(venta:Venta):Observable<any>{
    return this.http.post(this.url,venta)
  }

  updateVenta(id:string, venta:Venta):Observable<any>{
    return this.http.put(this.url+id, venta)
  }

  deleteVenta(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
