import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'projects/app-gp/src/environments/environment';
import {MatPaginatorIntl } from '@angular/material/paginator';//importar el mat paginator

@Component({
  selector: 'gp-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
@Output() onChangePage:EventEmitter<number> = new EventEmitter<number>()
@Input() length!:number
pageSize = environment.PAGE_SIZE
currentPage = 0

constructor(public _MatPaginatorIntl: MatPaginatorIntl) { }//ponerlo en el contructor para inicializar y enviarle una sentencia

  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Datos por pagina:';//Enviar el texto que queremos cambiar
    this._MatPaginatorIntl.firstPageLabel ='Primera Pagina';
    this._MatPaginatorIntl.lastPageLabel ='Ultima Pagina';
    this._MatPaginatorIntl.nextPageLabel ="Siguiente Pagina";
    this._MatPaginatorIntl.previousPageLabel ='Pagina Anterior';
    this._MatPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 de ${length }`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;

      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
  }

  changePage(event:any){
    this.currentPage = event.pageIndex ?? event.value
    this.onChangePage.emit(this.currentPage)
  }

}
