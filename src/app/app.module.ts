import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PanelUserComponent } from './components/panel-user/panel-user.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LoginComponent,
    PanelAdminComponent,
    PanelUserComponent,
    RegistroComponent,
    VisitasComponent,
    InstalacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
