import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  data:any[]=[
    {cedula:'1701',nombre:'Karina',apellido:'Lopez',correo:'klopez@example.com'},
    {cedula:'1702',nombre:'Johan',apellido:'Curicho',correo:'jcuricho@example.com'},
    {cedula:'1703',nombre:'Marco',apellido:'Araujo',correo:'maraujo@example.com'},
    {cedula:'1704',nombre:'Paola',apellido:'Egüez',correo:'peguez@example.com'},
    {cedula:'1705',nombre:'Aylin',apellido:'Gomez',correo:'agomez@example.com'}
  ]
  listFields:string[]=['cedula','nombre','apellido','correo']

  constructor() { }

  ngOnInit(): void {
  }

}
