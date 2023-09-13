import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculaService } from './pelicula.service';
import { GeneroService } from './genero.service';
import { CineService } from './cine.service';
import { ActorService } from './actor.service';
import { RatingService } from './rating.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public genero: GeneroService
  public peliculas: PeliculaService
  public cine: CineService
  public actor: ActorService
  public rating: RatingService

  constructor(private httpClient: HttpClient) {
  //constructor() {
    this.genero = new GeneroService(this.httpClient)
    this.peliculas = new PeliculaService(this.httpClient)
    this.cine = new CineService(this.httpClient)
    this.actor = new ActorService(this.httpClient)
    this.rating = new RatingService(this.httpClient)
  }
}
