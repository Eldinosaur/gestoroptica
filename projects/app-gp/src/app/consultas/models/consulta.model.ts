export class Consulta{
  _id?:string
  cedula:string
  nombre:string
  apellido:string
  fecha:string
  diagnostico:string

 constructor(cedula:string,
  nombre:string,
  apellido:string,
  fecha:string,
  diagnostico:string){
    this.cedula=cedula
    this.nombre=nombre
    this.apellido=apellido
    this.fecha= fecha
    this.diagnostico=diagnostico
  }
}
