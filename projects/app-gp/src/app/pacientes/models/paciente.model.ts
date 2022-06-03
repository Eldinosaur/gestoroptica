export class Paciente{
  _id?:string
  cedula:string
  nombre:string
  apellido:string
  fechanacimiento:Date
  celular:string
  correo:string

  constructor(cedula:string,
    nombre:string,
    apellido:string,
    fechanacimiento:Date,
    celular:string,
    correo:string){
      this.cedula=cedula
      this.nombre=nombre
      this.apellido=apellido
      this.fechanacimiento=fechanacimiento
      this.celular=celular
      this.correo=correo
    }
}
