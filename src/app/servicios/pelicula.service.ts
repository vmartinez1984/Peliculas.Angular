import { Injectable } from '@angular/core';
import { LandingPageDto, PeliculaDto, PeliculaDtoIn, PeliculaPutGetDto } from '../interfaces/pelicula-dto';
import { Observable } from 'rxjs';
import { formatearFecha } from '../utilidades/utilidades';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  putGet(peliculaId: number): Observable<PeliculaPutGetDto> {
    return this.httpClient.get<PeliculaPutGetDto>(this.url + "/putget/" + peliculaId)
  }

  obtenerPeliculaPorId(peliculaId: number): Observable<PeliculaDto> {
    return this.httpClient.get<PeliculaDto>(this.url + "/" + peliculaId)
  }

  private url = enviroment.urlApi + "peliculas"

  constructor(private httpClient: HttpClient) { }

  agregar(pelicula: PeliculaDtoIn): Observable<any> {
    const formData = this.obtenerFormData(pelicula)
    return this.httpClient.post(this.url, formData)
  }

  actualizar(peliculaId: number, pelicula: PeliculaDtoIn): Observable<any> {
    const formData = this.obtenerFormData(pelicula)
    return this.httpClient.put(this.url + "/" + peliculaId, formData)
  }

  obtenerFormData(pelicula: PeliculaDtoIn): FormData {
    const formData = new FormData()
    formData.append("titulo", pelicula.titulo)
    formData.append("resumen", pelicula.resumen!)
    formData.append("trailer", pelicula.trailer!)
    formData.append("enCines", pelicula.enCines.toString())
    formData.append("fechaDeLanzamiento", formatearFecha(pelicula.fechaDeLanzamiento!))
    if (pelicula.poster)
      formData.append("poster", pelicula.poster)
    formData.append("GenerosId", JSON.stringify(pelicula.generoIds))
    formData.append("CinesId", JSON.stringify(pelicula.cineIds))
    formData.append("Actores", JSON.stringify(pelicula.actores))

    return formData
  }

  obtenerLandingPage(): Observable<LandingPageDto> {
    return this.httpClient.get<LandingPageDto>(this.url);
  }

  obtenerTodo(): Observable<PeliculaDto[]> {
    const peliculas: PeliculaDto[] = [
      {
        enCines: false,
        generos: [{ id: 1, nombre: '' }],
        poster: "https://www.enjpg.com/img/2020/spider-man-20.jpg",
        proximosEstrenos: true,
        titulo: "Spider man",
        actores: [],
        cines: [],
        id: 1, promedioVoto: 0, votoUsuario: 0
      },
      {
        titulo: 'Moana',
        enCines: false,
        proximosEstrenos: false,
        generos: [{ id: 1, nombre: "Accion" }],
        poster: "https://image.tmdb.org/t/p/original/4yGzhOVqBliZOBZZ4rDKpQoexb.jpg",
        actores: [],
        cines: [], id: 2,
        promedioVoto: 0, votoUsuario: 0
      }
    ]
    return new Observable((observer) => {
      return observer.next(peliculas)
    })
  }
}
