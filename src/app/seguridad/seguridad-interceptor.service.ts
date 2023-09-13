import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadInterceptorService implements HttpInterceptor {

  constructor(private servicio: SeguridadService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.servicio.obtenerToken()
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    }

    return next.handle(req)
  }
}
