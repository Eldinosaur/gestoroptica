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
import {PerfectScrollbarConfigInterface ,PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG:PerfectScrollbarConfigInterface = {
  suppressScrollX:true
}

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
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatListModule,
    NgbPaginationModule
  ],
  exports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    KeypadButtonComponent,
    DownloadComponent,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers:[
    {provide:PERFECT_SCROLLBAR_CONFIG,
    useValue:DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ]
})
export class SharedModule { }
