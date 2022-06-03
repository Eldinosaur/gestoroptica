export class Producto{
  id?:string
  codigo:string
  nombre:string
  descripcion:string

  constructor(codigo:string,
    nombre:string,
    descripcion:string){
      this.codigo=codigo
      this.nombre=nombre
      this.descripcion=descripcion
    }
}
