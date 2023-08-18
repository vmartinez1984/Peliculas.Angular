import { Injectable } from '@angular/core';
import { GeneroDto, GeneroDtoIn } from '../interfaces/genero-dto-in';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  //constructor(private httpClient: HttpClient) { }
  constructor(){}

  obtenerTodos(): Observable<GeneroDto[]> {
    var generos: GeneroDto[] = [
      { nombre: "Drama", id: 1 },
      { nombre: "Acción", id: 2 }
    ]
    return new Observable((observer) => {
      return observer.next(generos)
    })
  }
}
