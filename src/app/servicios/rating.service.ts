import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private url = enviroment.urlApi + "ratings"

  constructor(private httpClient: HttpClient) { }

  votar(peliculaId: number, puntuacion: number): Observable<any> {
    return this.httpClient.post<any>(this.url, { peliculaId, puntuacion })
  }
}
