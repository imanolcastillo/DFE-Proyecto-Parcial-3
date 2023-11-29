import { Component, Input } from '@angular/core';

import { Juego } from '../../../models/juegos';

@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.css']
})
export class ListadoJuegosComponent {
  @Input() listadoJuegos: Juego[] = [];

  @Input() cargandoJuegos = false;

  juegoSeleccionado: Juego | null = null;

  rutaImagen = '../../../../assets/img/games/';
}
