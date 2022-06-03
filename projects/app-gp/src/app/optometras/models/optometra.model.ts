export class Optometra{
  _id?: string
  cedula: string
  nombre: string
  apellido: string
  correo: string

  constructor(cedula: string,
    nombre: string,
    apellido: string,
    correo: string){
      this.cedula=cedula
      this.nombre=nombre
      this.apellido=apellido
      this.correo=correo
    }
}
