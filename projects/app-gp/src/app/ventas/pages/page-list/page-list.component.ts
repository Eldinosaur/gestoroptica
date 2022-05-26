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
  recordsVentas:any[]=[
    {id:1,cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fecha:'05-01-2020',descripcion:'Atencion en consultorio',monto:30},
    {id:2,cedula:'1802',nombre:'Angeles',apellido:'Lopez',fecha:'08-02-2020',descripcion:'Atencion en consultorio',monto:30},
    {id:3,cedula:'1803',nombre:'Liz',apellido:'Lop',fecha:'23-04-2021',descripcion:'Atencion en consultorio',monto:30},
    {id:4,cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fecha:'26-10-2021',descripcion:'Atencion en consultorio',monto:30},
    {id:5,cedula:'1805',nombre:'Nicole',apellido:'Vaca',fecha:'03-03-2022',descripcion:'Atencion en consultorio',monto:30}
  ]
  //listFields:string[]=['id','cedula','nombre','apellido','fecha','descripcion','monto']

  metaDataColumns: MetaDataColumn[] = [
    {field:"id", title:"ID"},
    {field:"cedula", title:"Cedula"},
    {field:"nombre", title:"Nombre"},
    {field:"apellido", title:"Apellido"},
    {field:"fecha", title:"Fecha Venta"},
    {field:"descripcion", title:"Descripcion"},
    {field:"monto", title:"Monto de la Venta"},

  ]
  dataVentas:any[]=[]
  totalRecords= this.recordsVentas.length

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
    this.dataVentas = this.recordsVentas.slice(skip,skip+pageSize)
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
      const position = this.recordsVentas.findIndex(el => el.id === id)
      this.recordsVentas.splice(position,1)
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
        this.showBottomSheet("Lista de Agencias","agencias",this.recordsVentas)
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
