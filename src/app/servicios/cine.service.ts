import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CineDto, CineDtoIn } from '../interfaces/cine-dto';
import { enviroment } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CineService {
  private url = enviroment.urlApi + "Cines";

  constructor(private httpClient: HttpClient) { }

  obtenerPorId(id: number): Observable<CineDto> {
    // var cine: CineDto = {
    //   id: id,
    //   nombre: "Generico",
    //   latitud: 19.411291309142605,
    //   longitud: -99.15572047233583
    // }
    // return new Observable((observer) => {
    //   return observer.next(cine)
    // })
    return this.httpClient.get<CineDto>(this.url + "/" + id)
  }

  obtenerTodos(pagina: number, cantidadDeRegistrosAMostrar: number): Observable<any> {  
    return this.httpClient.get<CineDto[]>(this.url, {
      observe: 'response',
      params: {
        Pagina: pagina.toString(),
        RegistrosPorPagina: cantidadDeRegistrosAMostrar.toString()
      }
    })
  }

  agregar(cine: CineDtoIn): Observable<any> {
    return this.httpClient.post<any>(this.url, cine)
  }

  actualizar(id:number, cine: CineDtoIn):Observable<any>{
    return this.httpClient.put<any>(this.url + "/" + id, cine)
  }

  borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + "/" + id)
  }
}
