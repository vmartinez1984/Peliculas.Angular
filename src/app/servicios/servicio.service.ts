import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneroService } from './genero-servicio.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public genero: GeneroService

  //constructor(private httpClient: HttpClient) {
  constructor() {
    this.genero = new GeneroService()
  }
}
