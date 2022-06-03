import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../models/consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  url='/api/consultas/'

  constructor(private http:HttpClient) { }

  loadConsultas():Observable<any> {
    return this.http.get(this.url)
  }

  loadConsulta(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addConsulta(consulta:Consulta):Observable<any>{
    return this.http.post(this.url,consulta)
  }

  updateConsulta(id:string, consulta:Consulta):Observable<any>{
    return this.http.put(this.url+id, consulta)
  }

  deleteConsulta(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
