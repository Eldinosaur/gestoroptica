import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DownloadComponent } from './components/download/download.component';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';



@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    ConfirmComponent,
    DownloadComponent,
    KeypadButtonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    ContainerComponent,
    TitleComponent,
    TableComponent
  ]
})
export class SharedModule { }
