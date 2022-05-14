import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule,  NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './components/user/user.component';




@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    MenuComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,
    NgbNavModule

  ], exports:[
    PageLoginComponent,
    MenuComponent,
    UserComponent
  ]
})
export class CoreModule { }
