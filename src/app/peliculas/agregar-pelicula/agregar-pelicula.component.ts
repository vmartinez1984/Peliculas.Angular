import { Component } from '@angular/core';
import { PeliculaDtoIn } from 'src/app/interfaces/pelicula-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent {
  errores: string[] =[];

  constructor(private servicio: ServicioService) { }

  agregarPelicula(pelicula: PeliculaDtoIn) {
    console.log(pelicula)
    this.servicio.peliculas.agregar(pelicula).subscribe({
      next: (data) => {
        console.log(data)        
      },
      error:(data)=>{
        this.errores = parsearErroresApi(data)
      }
    })
  }
}
