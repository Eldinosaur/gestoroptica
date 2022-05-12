import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { PageMenuComponent } from './pages/page-menu/page-menu.component';
import { NgbModule,  NgbNavModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    PageHeaderComponent,
    PageMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule

  ], exports:[
    PageLoginComponent,
    MenuComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
