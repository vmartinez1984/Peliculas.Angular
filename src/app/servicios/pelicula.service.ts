import { Injectable } from '@angular/core';
import { PeliculaDto } from '../interfaces/pelicula-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  constructor() { }

  obtenerTodo(): Observable<PeliculaDto[]>{
    const peliculas : PeliculaDto[] = [
      {
        enCines: false,
        generos: { id: 1, nombre: "accion"},
        poster: "https://www.enjpg.com/img/2020/spider-man-20.jpg",
        proximosEstrenos: true,
        titulo: "Spider man"
      },
      {
        titulo: 'Moana',        
        enCines: false,
        proximosEstrenos: false,
        generos: {id:1, nombre: "Accion"},
        poster: "https://image.tmdb.org/t/p/original/4yGzhOVqBliZOBZZ4rDKpQoexb.jpg"
      }
    ]
    return new Observable((observer)=>{
      return observer.next(peliculas)
    })
  }
}
