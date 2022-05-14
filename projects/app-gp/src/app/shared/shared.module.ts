import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
    TitleComponent,
    TableComponent
  ]
})
export class SharedModule { }
