import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/app-gp/src/environments/environment';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { KeypadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { FormComponent } from '../../components/form/form.component';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'gp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  recordsProductos:any[]=[]
  //listFields:string[]=['codigo','nombre','descripcion']

  metaDataColumns: MetaDataColumn[] = [
    {field:"codigo", title:"Codigo"},
    {field:"nombre", title:"Nombre"},
    {field:"descripcion", title:"Descripcion"},
  ]
  dataProductos:any[]=[]
  totalRecords= 0

  keypadButtons:KeypadButton[]=[
    {icon:"add", tooltip:"Agregar", color:"primary",action:"NEW"}
  ]

  constructor(
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private productoService:ProductoService
  ) {
    this.loadProductos()
   }

  ngOnInit(): void {
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.dataProductos = this.recordsProductos.slice(skip,skip+pageSize)
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
        const producto = {...response}
        this.productoService.updateProducto(response.id, producto).subscribe (()=>{
          this.changePage(0)
          location.reload()
          this.showMessage('Registro Actualizado')
        })
      } else{
        const producto = {...response}
        this.productoService.addProducto(producto).subscribe(() =>{
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
      case 'NEW':
        this.openForm()
        break
    }
  }
  loadProductos(){
    this.productoService.loadProductos().subscribe(data => {
      this.recordsProductos = data
      console.log(data)
      this.totalRecords = this.recordsProductos.length
      this.changePage(0)
    },error =>{
      console.log(error)
    })
  }



}
