import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConsultaComponent } from './consultas/pages/page-consulta/page-consulta.component';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { PageOptometraComponent } from './optometras/pages/page-optometra/page-optometra.component';
import { PagePacienteComponent } from './pacientes/pages/page-paciente/page-paciente.component';
import { PageProductoComponent } from './productos/pages/page-producto/page-producto.component';
import { PageVentaComponent } from './ventas/pages/page-venta/page-venta.component';

const routes: Routes = [
  {path:'',component:PageLoginComponent},
  {path:'consultas',component:PageConsultaComponent},
  {path:'optometras',component:PageOptometraComponent},
  {path:'pacientes',component:PagePacienteComponent},
  {path:'productos', component: PageProductoComponent},
  {path:'ventas', component:PageVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
