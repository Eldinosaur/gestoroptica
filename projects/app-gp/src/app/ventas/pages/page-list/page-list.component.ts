import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  data:any[]=[
    {id:1,cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fecha:'05-01-2020',descripcion:'Atencion en consultorio',monto:30},
    {id:2,cedula:'1802',nombre:'Angeles',apellido:'Lopez',fecha:'08-02-2020',descripcion:'Atencion en consultorio',monto:30},
    {id:3,cedula:'1803',nombre:'Liz',apellido:'Lop',fecha:'23-04-2021',descripcion:'Atencion en consultorio',monto:30},
    {id:4,cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fecha:'26-10-2021',descripcion:'Atencion en consultorio',monto:30},
    {id:5,cedula:'1805',nombre:'Nicole',apellido:'Vaca',fecha:'03-03-2022',descripcion:'Atencion en consultorio',monto:30}
  ]
  listFields:string[]=['id','cedula','nombre','apellido','fecha','descripcion','monto']

  constructor() { }

  ngOnInit(): void {
  }

}
