import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  data:any[]=[
    {cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fechanacimiento:'02-08-2000',celular:'0987',correo:'anaranjo@example.com'},
    {cedula:'1802',nombre:'Angeles',apellido:'Lopez',fechanacimiento:'08-02-2000',celular:'0998',correo:'alopez@example.com'},
    {cedula:'1803',nombre:'Liz',apellido:'Lop',fechanacimiento:'23-04-2001',celular:'0988',correo:'llop@example.com'},
    {cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fechanacimiento:'26-10-2009',celular:'0999',correo:'adnar@example.com'},
    {cedula:'1805',nombre:'Nicole',apellido:'Vaca',fechanacimiento:'03-12-2003',celular:'0977',correo:'nvaca@example.com'}
  ]
  listFields:string[]=['cedula','nombre','apellido','fechanacimiento','celular','correo']

  constructor() { }

  ngOnInit(): void {
  }

}
