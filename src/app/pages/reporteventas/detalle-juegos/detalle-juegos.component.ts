import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Juego } from '../../../models/juegos';

@Component({
  selector: 'app-detalle-juegos',
  templateUrl: './detalle-juegos.component.html',
  styleUrls: ['./detalle-juegos.component.css']
})
export class DetalleJuegosComponent {
  @Input() juego: Juego | null = null;

  @Output() close: EventEmitter<void> = new EventEmitter();


  onCloseModal() {
    this.close.emit();
  }
}
