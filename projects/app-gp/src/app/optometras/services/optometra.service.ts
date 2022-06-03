import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Optometra } from '../models/optometra.model';

@Injectable({
  providedIn: 'root'
})
export class OptometraService {
  url='/api/optometras/'

  constructor(private http:HttpClient) { }

  loadOptometras():Observable<any> {
    return this.http.get(this.url)
  }

  loadOptometra(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addOptometra(optometra:Optometra):Observable<any>{
    return this.http.post(this.url,optometra)
  }

  updateOptometra(id:string, optometra:Optometra):Observable<any>{
    return this.http.put(this.url+id, optometra)
  }

  deleteOptometra(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
