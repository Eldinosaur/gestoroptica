import { Injectable } from '@angular/core';
export interface IMenu{
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu:IMenu[]=[
    {title:'Consultas', url:'/consultas', icon:'/assets/icons/consultas.svg'},
    {title:'Optometras', url:'/optometras', icon:'/assets/icons/optometras.svg'},
    {title:'Pacientes', url:'/pacientes', icon:'/assets/icons/pacientes.svg'},
    {title:'Productos', url:'/productos', icon:'/assets/icons/productos.svg'},
    {title:'Ventas', url:'/ventas', icon:'/assets/icons/ventas.svg'}

  ]

  constructor() { }
  getMenu():IMenu[]{
    return[...this.listMenu] //clon del listado por seguridad

  }
  getMenuByUrl(url:string):IMenu{
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }
}
