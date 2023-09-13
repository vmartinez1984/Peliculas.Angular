import { Component } from '@angular/core';
import { CredencialesUsuarioDto } from 'src/app/interfaces/seguridad';
import { SeguridadService } from '../seguridad.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(
    private servicio: SeguridadService,
    private router: Router
  ) { }
  errores: string[] = []

  guardar(credenciales: CredencialesUsuarioDto) {
    //console.log(credenciales)
    this.servicio.registrar(credenciales).subscribe({
      next: (data) => {
        //console.log(data)
        this.servicio.guardarToken(data)
        this.router.navigate(['/'])
      }, error: (data) => {
        this.errores = parsearErroresApi(data)
      }
    })
  }

}