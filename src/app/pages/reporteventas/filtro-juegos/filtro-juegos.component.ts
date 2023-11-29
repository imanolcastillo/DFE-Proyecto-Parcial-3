import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtro-juegos',
  templateUrl: './filtro-juegos.component.html',
  styleUrls: ['./filtro-juegos.component.css']
})
export class FiltroJuegosComponent {
  @Input() mensaje: string = ''
}
