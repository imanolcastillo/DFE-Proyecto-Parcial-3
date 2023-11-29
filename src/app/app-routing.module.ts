import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/dashboard/home/home.component';
import { ExploradorJuegosComponent } from './pages/reporteventas/explorador-juegos/explorador-juegos.component';
import { VistaComponent } from './pages/catalogo/vista/vista.component';
import { NotFoundPageComponent } from './pages/autenticacion/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ventas' , component: ExploradorJuegosComponent},
  { path: 'catalogo', component: VistaComponent},
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
