import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroments';
import { ActorDto, ActorDtoIn } from '../interfaces/actor-dto-in';
import { Observable } from 'rxjs';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  obtenerTodos(pagina: number, cantidadDeRegistrosAMostrar: number) {
    return this.httpClient.get<ActorDto[]>(this.url, {
      observe: 'response',
      params: {
        Pagina: pagina.toString(),
        RegistrosPorPagina: cantidadDeRegistrosAMostrar.toString()
      }
    })    
  }
  
  borrar(id: number): Observable<any> {
    return this.httpClient.delete(this.url + "/" + id)
  }

  agregar(actor: ActorDtoIn): Observable<any> {
    const formData = this.obtenerFormData(actor)
    return this.httpClient.post<any>(this.url, formData)
  }

  private obtenerFormData(actor: ActorDtoIn): FormData {
    const formData = new FormData()
    formData.append('nombre', actor.nombre)
    formData.append('biografia', actor.biografia)
    if (actor.fechaDeNacimiento) {
      formData.append('fechaDeNacimiento', formatearFecha(actor.fechaDeNacimiento))
    }
    formData.append('foto', actor.foto)
    return formData
  }

  // obtenerTodos(): Observable<ActorDto[]> {
  //   let actores: ActorDto[] = [
  //     { id: 1, biografia: '', foto: 'https://networthsize.com/wp-content/uploads/2020/04/Tom-Holland-Net-Worth-1920x1440.jpg', nombre: 'Tom Holland' },
  //     { id: 2, biografia: '', foto: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/vm2oh4qs6rdgrwngmv0q/samjackson', nombre: 'Samuel L Jackson' },
  //     { id: 3, biografia: '', foto: 'https://th.bing.com/th/id/R.78ae25cd29532c468bc77545930aace4?rik=KBJqmctaZNfeew&pid=ImgRaw&r=0', nombre: 'Brie Larson' }
  //   ]
  //   return new Observable((observer) => {
  //     return observer.next(actores)
  //   })

  // }

  constructor(private httpClient: HttpClient) { }

  private url = enviroment.urlApi + "actores"
}
