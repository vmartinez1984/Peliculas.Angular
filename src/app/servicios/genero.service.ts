import { Injectable } from '@angular/core';
import { GeneroDto, GeneroDtoIn } from '../interfaces/genero-dto-in';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private url = enviroment.urlApi + "Generos"

  constructor(private httpClient: HttpClient) { }
  //constructor(){}

  // obtenerTodos(): Observable<GeneroDto[]> {
  //   var generos: GeneroDto[] = [
  //     { nombre: "Drama", id: 1 },
  //     { nombre: "Acción", id: 2 }
  //   ]
  //   return new Observable((observer) => {
  //     return observer.next(generos)
  //   })
  // }

  obtenerTodos(pagina: number, cantidadDeRegistrosAMostrar: number): Observable<any> {  
    return this.httpClient.get<GeneroDto[]>(this.url, {
      observe: 'response',
      params: {
        Pagina: pagina.toString(),
        RegistrosPorPagina: cantidadDeRegistrosAMostrar.toString()
      }
    })
  }

  agregar(genero: GeneroDtoIn): Observable<any> {
    return this.httpClient.post<any>(this.url, genero)
  }

  actualizar(id: number, genero: GeneroDtoIn): Observable<any> {
    return this.httpClient.put<any>(this.url + "/" + id, genero)
  }

  obtenerPorId(id: number): Observable<GeneroDto> {
    return this.httpClient.get<GeneroDto>(this.url + "/" + id)
  }
}
