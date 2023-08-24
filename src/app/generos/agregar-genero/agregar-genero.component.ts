import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroDtoIn } from 'src/app/interfaces/genero-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-agregar-genero',
  templateUrl: './agregar-genero.component.html',
  styleUrls: ['./agregar-genero.component.css']
})
export class AgregarGeneroComponent implements OnInit {
  errores: string[] = []

  constructor(
    private router: Router,
    private servicio: ServicioService
  ) { }

  ngOnInit(): void {
  }

  guardar(genero: GeneroDtoIn) {
    //console.log(genero)
    this.servicio.genero.agregar(genero).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/generos'])
      }, error: (data) => {
        console.log(data.error)
        this.errores = parsearErroresApi(data)
      }
    })
  }
}
