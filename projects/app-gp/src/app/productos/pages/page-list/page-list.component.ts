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
  recordsProductos:any[]=[
    {codigo:'0102',nombre:'Monturas',descripcion:'Monturas para lentes'},
    {codigo:'0103',nombre:'Liquido Limpiador',descripcion:'Liquido en spray para limpieza de lentes'},
    {codigo:'0104',nombre:'Lentes de contacto',descripcion:'Lentes de contacto de colores'},
    {codigo:'0105',nombre:'Pañuelos Microfibra',descripcion:'Pañuelos de microfibra para limpieza de lentes'},
    {codigo:'0106',nombre:'Cordón Lentes',descripcion:'Cordón para sujecion de lentes'}
  ]
  //listFields:string[]=['codigo','nombre','descripcion']

  metaDataColumns: MetaDataColumn[] = [
    {field:"codigo", title:"Codigo"},
    {field:"nombre", title:"Nombre"},
    {field:"descripcion", title:"Descripcion"},
  ]
  dataProductos:any[]=[]
  totalRecords= this.recordsProductos.length

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
    this.dataProductos = this.recordsProductos.slice(skip,skip+pageSize)
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
      const position = this.recordsProductos.findIndex(el => el.id === id)
      this.recordsProductos.splice(position,1)
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
        this.showBottomSheet("Lista de Agencias","agencias",this.recordsProductos)
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
