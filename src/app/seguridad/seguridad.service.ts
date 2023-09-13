import { Injectable } from '@angular/core';
import { CredencialesUsuarioDto, RespuestaAutenticacionDto, UsuarioDto } from '../interfaces/seguridad';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  private url = enviroment.urlApi + 'cuentas'
  private readonly llaveToken = 'token'
  private readonly llaveExpiracion = 'expiracion'
  private readonly campoRol = 'role'

  constructor(private httpClient: HttpClient) { }

  estaLogueado() {
    const token = localStorage.getItem(this.llaveToken)
    if (!token)
      return false

    const expiracion = localStorage.getItem(this.llaveExpiracion)
    const fechaDeExpiracion = new Date(expiracion!)
    if (fechaDeExpiracion <= new Date()) {
      this.cerrarSesion()
      return false
    }

    return true
  }

  obtenerJwt(campo: string): string {
    const token = localStorage.getItem(this.llaveToken)
    //console.log(JSON.parse(atob(token!.split('.')[1])))
    if (!token)
      return ''

    var dataToken = JSON.parse(atob(token.split('.')[1]))

    return dataToken[campo]
  }

  obtenerToken() {
    const token = localStorage.getItem(this.llaveToken)

    return token
  }

  cerrarSesion() {
    localStorage.removeItem(this.llaveExpiracion)
    localStorage.removeItem(this.llaveToken)
  }

  obtenerRol(): string {
    return this.obtenerJwt(this.campoRol)
  }

  registrar(credenciales: CredencialesUsuarioDto): Observable<RespuestaAutenticacionDto> {
    return this.httpClient.post<RespuestaAutenticacionDto>(this.url, credenciales)
  }

  inciarSesion(credenciales: CredencialesUsuarioDto): Observable<RespuestaAutenticacionDto> {
    return this.httpClient.post<RespuestaAutenticacionDto>(this.url + '/login', credenciales)
  }

  guardarToken(respuesta: RespuestaAutenticacionDto) {
    localStorage.setItem(this.llaveExpiracion, respuesta.expiracion.toString())
    localStorage.setItem(this.llaveToken, respuesta.token)
  }

  obtenerUsuarios(pagina: number, registrosPorPagina: number): Observable<any> {
    let params = new HttpParams()
    params = params.append('pagina', pagina)
    params = params.append('RegistrosPorPagina', registrosPorPagina)

    return this.httpClient.get<UsuarioDto>(this.url, { observe: 'response', params: params })
  }

  hacerAdmin(usuarioId: string){
    const headers = new HttpHeaders("Content-Type: application/json")
    return this.httpClient.post(this.url+ "/hacerAdministrador",JSON.stringify(usuarioId), {headers})
  }

  removerAdmin(usuarioId: string){
    const headers = new HttpHeaders("Content-Type: application/json")
    return this.httpClient.post(this.url+ "/removerAdministrador",JSON.stringify(usuarioId), {headers})
  }
}
