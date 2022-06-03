import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url='/api/pacientes/'

  constructor(private http:HttpClient) { }

  loadPacientes():Observable<any> {
    return this.http.get(this.url)
  }

  loadPaciente(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  addPaciente(paciente:Paciente):Observable<any>{
    return this.http.post(this.url,paciente)
  }

  updatePaciente(id:string, paciente:Paciente):Observable<any>{
    return this.http.put(this.url+id, paciente)
  }

  deletePaciente(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
