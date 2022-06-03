export class Venta{
  id?:string
  cedula:string
  nombre:string
  apellido:string
  fechaventa:Date
  descripcion:string
  monto:string

  constructor(cedula:string,
    nombre:string,
    apellido:string,
    fechaventa:Date,
    descripcion:string,
    monto:string){
      this.cedula=cedula
      this.nombre=nombre
      this.apellido=apellido
      this.fechaventa=fechaventa
      this.descripcion=descripcion
      this.monto=monto
    }
}
