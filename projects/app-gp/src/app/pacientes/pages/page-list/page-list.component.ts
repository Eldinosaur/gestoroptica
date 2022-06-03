import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/app-gp/src/environments/environment';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { KeypadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { FormComponent } from '../../components/form/form.component';
import { PacienteService } from '../../service/paciente.service';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  recordsPacientes:any[]=[]
  //listFields:string[]=['cedula','nombre','apellido','fechanacimiento','celular','correo']

  metaDataColumns: MetaDataColumn[] = [
    {field:"cedula", title:"Cedula"},
    {field:"nombre", title:"Nombre"},
    {field:"apellido", title:"Apellido"},
    {field:"fechanacimiento", title:"Fecha de Nacimiento"},
    {field:"celular", title:"Celular"},
    {field:"correo", title:"Correo Electrónico"}
  ]
  dataPacientes:any[]=[]
  totalRecords= 0

  keypadButtons:KeypadButton[]=[
   {icon:"add", tooltip:"Agregar", color:"primary",action:"NEW"}
  ]

  constructor(
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private pacienteService:PacienteService
  ) {
    this.loadPacientes()
   }

  ngOnInit(): void {
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.dataPacientes = this.recordsPacientes.slice(skip,skip+pageSize)
  }

  openForm(row:any=null){
    const options = {
      panelClass: 'panel-container',
      disableClose:true,
      data:row
    }
    const reference: MatDialogRef<FormComponent> = this.dialog.open(FormComponent, options)

    reference.afterClosed().subscribe((response) => {
      if(!response){return}

      if(response.id){
        const consulta = {...response}
        this.pacienteService.updatePaciente(response.id, consulta).subscribe (()=>{
          this.changePage(0)
          location.reload()
          this.showMessage('Registro Actualizado')
        })
      } else{
        const paciente = {...response}
        this.pacienteService.addPaciente(paciente).subscribe(() =>{
          this.changePage(0)
          location.reload()
          this.showMessage('Registro exitoso')

        })
      }
    })
  }

  delete(id:number){
    const reference:MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      {width:"320px",disableClose:true})

    reference.componentInstance.message="¿Está seguro de eliminar el paciente?"
    reference.afterClosed().subscribe((result) => {
      if(!result){return}
      const position = this.recordsPacientes.findIndex(el => el.id === id)
      this.recordsPacientes.splice(position,1)
      this.changePage(0)
      this.showMessage("Eliminado correctamente")

    })
  }

  showMessage(message:string, duration:number=5000){
    this.snackBar.open(message,'',{duration})
  }
  doAction(action:string){
    switch(action){
      case 'NEW':
        this.openForm()
        break
    }
  }
  loadPacientes(){
    this.pacienteService.loadPacientes().subscribe(data => {
      this.recordsPacientes = data
      console.log(data)
      this.totalRecords = this.recordsPacientes.length
      this.changePage(0)
    },error =>{
      console.log(error)
    })
  }


}
