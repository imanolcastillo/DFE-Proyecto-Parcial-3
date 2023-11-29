import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ReporteventasModule } from './pages/reporteventas/reporteventas.module';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacionModule } from './pages/autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    AutenticacionModule,
    DashboardModule,
    ReporteventasModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
