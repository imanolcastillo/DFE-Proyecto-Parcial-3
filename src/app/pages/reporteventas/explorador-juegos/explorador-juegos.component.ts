import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juegos';
import { JuegosService } from '../../../services/juegos.service';

@Component({
  selector: 'app-explorador-juegos',
  templateUrl: './explorador-juegos.component.html',
  styleUrls: ['./explorador-juegos.component.css']
})
export class ExploradorJuegosComponent {
  cargandoJuegos = false;

  listadoJuegos: Juego[] = [];


  constructor(private data: JuegosService) {

  }


  ngOnInit() {
    this.getJuegosListas();
  }


  get mensaje(): string {
    if (this.cargandoJuegos) {
      return 'Cargando...';
    } else {

      return this.listadoJuegos.length > 0 ?
        `${this.listadoJuegos.length} registros encontrados.` :
        'No se han encontrado registros...';

    }

  }


  private getJuegosListas() {
    this.cargandoJuegos = true;

    this.data.getJuegosListas()
      .subscribe(x => {
        this.cargandoJuegos = false;
        this.listadoJuegos = x;
      });
  }

}
