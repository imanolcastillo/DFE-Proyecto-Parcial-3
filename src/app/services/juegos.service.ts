import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Juego } from '../models/juegos';

const API_PATH = 'https://65319c414d4c2e3f333d2bde.mockapi.io/api/';


@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  constructor(private http: HttpClient) { }


  getJuegosListas(): Observable<Juego[]> {
    const path = API_PATH + 'venta';

    return this.http.get<Juego[]>(path);
  }
}
