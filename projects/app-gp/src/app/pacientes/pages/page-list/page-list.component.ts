import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/app-gp/src/environments/environment';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { DownloadComponent } from '../../../shared/components/download/download.component';
import { KeypadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  recordsPacientes:any[]=[
    {cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fechanacimiento:'02-08-2000',celular:'0987',correo:'anaranjo@example.com'},
    {cedula:'1802',nombre:'Angeles',apellido:'Lopez',fechanacimiento:'08-02-2000',celular:'0998',correo:'alopez@example.com'},
    {cedula:'1803',nombre:'Liz',apellido:'Lop',fechanacimiento:'23-04-2001',celular:'0988',correo:'llop@example.com'},
    {cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fechanacimiento:'26-10-2009',celular:'0999',correo:'adnar@example.com'},
    {cedula:'1805',nombre:'Nicole',apellido:'Vaca',fechanacimiento:'03-12-2003',celular:'0977',correo:'nvaca@example.com'}
  ]
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
  totalRecords= this.recordsPacientes.length

  keypadButtons:KeypadButton[]=[
    {icon:"cloud_download", tooltip:"Exportar", color:"accent",action:"DOWNLOAD"},
    {icon:"add", tooltip:"Agregar", color:"primary",action:"NEW"}
  ]

  constructor(
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private bottomSheet:MatBottomSheet
  ) {
    this.changePage(0)
   }

  ngOnInit(): void {
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.dataPacientes = this.recordsPacientes.slice(skip,skip+pageSize)
  }

  openForm(row:any=null){

  }

  delete(id:number){
    const reference:MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      {width:"320px",disableClose:true})

    reference.componentInstance.message="¿Está seguro de eliminar la Consulta?"
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
      case 'DOWNLOAD':
        this.showBottomSheet("Lista de Agencias","agencias",this.recordsPacientes)
        break
      case 'NEW':
        this.openForm()
        break
    }
  }

  showBottomSheet(title:string, fileName:string, data:any){
    this.bottomSheet.open(DownloadComponent)
  }

}
