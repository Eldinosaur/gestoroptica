import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasModule } from './consultas/consultas.module';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { OptometrasModule } from './optometras/optometras.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';

const routes: Routes = [
  {path:'',component:PageLoginComponent},
  {path:'consultas',loadChildren:()=>import('./consultas/consultas.module').then((m)=>ConsultasModule)},
  {path:'optometras',loadChildren:()=>import('./optometras/optometras.module').then((m)=>OptometrasModule)},
  {path:'pacientes',loadChildren:()=>import('./pacientes/pacientes.module').then((m)=>PacientesModule)},
  {path:'productos',loadChildren:()=>import('./productos/productos.module').then((m)=>ProductosModule)},
  {path:'ventas',loadChildren:()=>import('./ventas/ventas.module').then((m)=>VentasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
