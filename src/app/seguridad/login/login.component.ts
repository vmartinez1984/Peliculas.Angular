import { Component } from '@angular/core';
import { CredencialesUsuarioDto } from 'src/app/interfaces/seguridad';
import { SeguridadService } from '../seguridad.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errores: string[] = []

  constructor(private servicio: SeguridadService, private router: Router) {

  }

  iniciarSesion(credenciales: CredencialesUsuarioDto) {
    this.servicio.inciarSesion(credenciales).subscribe({
      next: (data) => {
        this.servicio.guardarToken(data)
        this.router.navigate(['/'])
      }, error: (data) => {
        this.errores = parsearErroresApi(data)
      }
    })
  }
}
