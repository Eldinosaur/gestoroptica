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
  recordsConsultas:any[]=[
    {id:1,cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fecha:'05-01-2020',diagnostico:'Miopia'},
    {id:2,cedula:'1802',nombre:'Angeles',apellido:'Lopez',fecha:'08-02-2020',diagnostico:'Astigmatismo'},
    {id:3,cedula:'1803',nombre:'Liz',apellido:'Lop',fecha:'23-04-2021',diagnostico:'Miopia'},
    {id:4,cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fecha:'26-10-2021',diagnostico:'Hipermetropia'},
    {id:5,cedula:'1805',nombre:'Nicole',apellido:'Vaca',fecha:'03-03-2022',diagnostico:'Ojo vago'},
    {id:6,cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fecha:'05-01-2020',diagnostico:'Miopia'},
    {id:7,cedula:'1802',nombre:'Angeles',apellido:'Lopez',fecha:'08-02-2020',diagnostico:'Astigmatismo'},
    {id:8,cedula:'1803',nombre:'Liz',apellido:'Lop',fecha:'23-04-2021',diagnostico:'Miopia'},
    {id:9,cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fecha:'26-10-2021',diagnostico:'Hipermetropia'},
    {id:10,cedula:'1805',nombre:'Nicole',apellido:'Vaca',fecha:'03-03-2022',diagnostico:'Ojo vago'},
    {id:11,cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fecha:'05-01-2020',diagnostico:'Miopia'},
    {id:12,cedula:'1802',nombre:'Angeles',apellido:'Lopez',fecha:'08-02-2020',diagnostico:'Astigmatismo'},
    {id:13,cedula:'1803',nombre:'Liz',apellido:'Lop',fecha:'23-04-2021',diagnostico:'Miopia'},
    {id:14,cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fecha:'26-10-2021',diagnostico:'Hipermetropia'},
    {id:15,cedula:'1805',nombre:'Nicole',apellido:'Vaca',fecha:'03-03-2022',diagnostico:'Ojo vago'},
    {id:16,cedula:'1801',nombre:'Anahi',apellido:'Naranjo',fecha:'05-01-2020',diagnostico:'Miopia'},
    {id:17,cedula:'1802',nombre:'Angeles',apellido:'Lopez',fecha:'08-02-2020',diagnostico:'Astigmatismo'},
    {id:18,cedula:'1803',nombre:'Liz',apellido:'Lop',fecha:'23-04-2021',diagnostico:'Miopia'},
    {id:19,cedula:'1804',nombre:'Adriana',apellido:'Naranjo',fecha:'26-10-2021',diagnostico:'Hipermetropia'},
    {id:20,cedula:'1805',nombre:'Nicole',apellido:'Vaca',fecha:'03-03-2022',diagnostico:'Ojo vago'}
  ]

  //listFields:string[]=['id','cedula','nombre','apellido','fecha','diagnostico']
  metaDataColumns: MetaDataColumn[] = [
    {field:"id", title:"ID"},
    {field:"cedula", title:"CEDULA"},
    {field:"nombre", title:"NOMBRE"},
    {field:"apellido", title:"APELLIDO"},
    {field:"fecha", title:"FECHA"},
    {field:"diagnostico", title:"DIAGNOSTICO"},
  ]
  dataConsultas:any[]=[]
  totalRecords= this.recordsConsultas.length

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
    this.dataConsultas = this.recordsConsultas.slice(skip,skip+pageSize)
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
      const position = this.recordsConsultas.findIndex(el => el.id === id)
      this.recordsConsultas.splice(position,1)
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
        this.showBottomSheet("Lista de Agencias","agencias",this.recordsConsultas)
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
