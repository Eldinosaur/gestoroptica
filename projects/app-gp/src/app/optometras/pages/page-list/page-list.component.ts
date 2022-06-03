import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/app-gp/src/environments/environment';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { KeypadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { FormComponent } from '../../components/form/form.component';
import { OptometraService } from '../../services/optometra.service';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  recordsOptometras:any[]=[]
  //listFields:string[]=['cedula','nombre','apellido','correo']

  metaDataColumns: MetaDataColumn[] = [
    {field:"cedula", title:"Cedula"},
    {field:"nombre", title:"Nombre"},
    {field:"apellido", title:"Apellido"},
    {field:"correo", title:"Correo Electrónico"}
  ]
  dataOptometras:any[]=[]
  //totalRecords= this.recordsOptometras.length
  totalRecords = 0

  keypadButtons:KeypadButton[]=[
    {icon:"add", tooltip:"Agregar", color:"primary",action:"NEW"}
  ]

  constructor(
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private optometraService:OptometraService
  ) {
    this.loadOptometras()
   }

  ngOnInit(): void {
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.dataOptometras = this.recordsOptometras.slice(skip,skip+pageSize)
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
        const  optometra= {...response}
        this.optometraService.updateOptometra(response.id, optometra).subscribe (()=>{
          this.changePage(0)
          location.reload()
          this.showMessage('Registro Actualizado')
        })
      } else{
        const optometra = {...response}
        this.optometraService.addOptometra(optometra).subscribe(() =>{
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

    reference.componentInstance.message="¿Está seguro de eliminar la optometra?"
    reference.afterClosed().subscribe((result) => {
      if(!result){return}
      const position = this.recordsOptometras.findIndex(el => el.id === id)
      this.recordsOptometras.splice(position,1)
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
  loadOptometras(){
    this.optometraService.loadOptometras().subscribe(data => {
      this.recordsOptometras = data
      console.log(data)
      this.totalRecords = this.recordsOptometras.length
      this.changePage(0)
    },error =>{
      console.log(error)
    })


  }}
