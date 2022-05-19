import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  data:any[]=[
    {codigo:'0102',nombre:'Monturas',descripcion:'Monturas para lentes'},
    {codigo:'0103',nombre:'Liquido Limpiador',descripcion:'Liquido en spray para limpieza de lentes'},
    {codigo:'0104',nombre:'Lentes de contacto',descripcion:'Lentes de contacto de colores'},
    {codigo:'0105',nombre:'Pañuelos Microfibra',descripcion:'Pañuelos de microfibra para limpieza de lentes'},
    {codigo:'0106',nombre:'Cordón Lentes',descripcion:'Cordón para sujecion de lentes'}
  ]
  listFields:string[]=['codigo','nombre','descripcion']

  constructor() { }

  ngOnInit(): void {
  }

}
