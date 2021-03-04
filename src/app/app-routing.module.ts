import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PanelUserComponent } from './components/panel-user/panel-user.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'panelAdmin', component: PanelAdminComponent},
  {path: 'panelUser', component: PanelUserComponent},
  {path: 'visitas', component: VisitasComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'instalaciones', component: InstalacionesComponent},
  
  {path: '**', redirectTo: 'login' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
