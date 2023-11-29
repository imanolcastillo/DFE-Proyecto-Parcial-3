import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploradorJuegosComponent } from './explorador-juegos/explorador-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { FiltroJuegosComponent } from './filtro-juegos/filtro-juegos.component';
import { ListadoJuegosComponent } from './listado-juegos/listado-juegos.component';



@NgModule({
  declarations: [
    ExploradorJuegosComponent,
    DetalleJuegosComponent,
    FiltroJuegosComponent,
    ListadoJuegosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExploradorJuegosComponent
  ]
})
export class ReporteventasModule { }
