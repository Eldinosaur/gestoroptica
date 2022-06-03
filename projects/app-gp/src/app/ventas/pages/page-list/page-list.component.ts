import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/app-gp/src/environments/environment';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { DownloadComponent } from '../../../shared/components/download/download.component';
import { KeypadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { FormComponent } from '../../components/form/form.component';
import { VentaService } from '../../services/venta.service';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  recordsVentas:any[]=[]
  //listFields:string[]=['id','cedula','nombre','apellido','fecha','descripcion','monto']

  metaDataColumns: MetaDataColumn[] = [
    {field:"cedula", title:"Cedula"},
    {field:"nombre", title:"Nombre"},
    {field:"apellido", title:"Apellido"},
    {field:"fechaventa", title:"Fecha Venta"},
    {field:"descripcion", title:"Descripcion"},
    {field:"monto", title:"Monto de la Venta"},

  ]
  dataVentas:any[]=[]
  totalRecords= 0

  keypadButtons:KeypadButton[]=[
   {icon:"add", tooltip:"Agregar", color:"primary",action:"NEW"}
  ]

  constructor(
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private ventaService:VentaService
  ) {
    this.loadVentas()
   }

  ngOnInit(): void {
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.dataVentas = this.recordsVentas.slice(skip,skip+pageSize)
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
        const venta = {...response}
        this.ventaService.updateVenta(response.id, venta).subscribe (()=>{
          this.changePage(0)
          location.reload()
          this.showMessage('Registro Actualizado')
        })
      } else{
        const venta = {...response}
        this.ventaService.addVenta(venta).subscribe(() =>{
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

    reference.componentInstance.message="¿Está seguro de eliminar la venta?"
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
      case 'NEW':
        this.openForm()
        break
    }
  }
  loadVentas(){
    this.ventaService.loadVentas().subscribe(data => {
      this.recordsVentas = data
      console.log(data)
      this.totalRecords = this.recordsVentas.length
      this.changePage(0)
    },error =>{
      console.log(error)
    })
  }


}
