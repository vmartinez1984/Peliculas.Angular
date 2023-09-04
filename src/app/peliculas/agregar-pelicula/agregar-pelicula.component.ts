import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActorPeliculaDto } from 'src/app/interfaces/actor-dto-in';
import { CineDto } from 'src/app/interfaces/cine-dto';
import { GeneroDto } from 'src/app/interfaces/genero-dto-in';
import { MultipleSelector } from 'src/app/interfaces/multiple-selector';
import { PeliculaDtoIn } from 'src/app/interfaces/pelicula-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent {
  errores: string[] = [];
  generosNoSeleccionados: MultipleSelector[] = [];
  generosSeleccionados: MultipleSelector[] = [];
  cinesNoSeleccionados: MultipleSelector[] = [];
  cinesSeleccionados: MultipleSelector[] = [];
  actoresSeleccionados: ActorPeliculaDto[] = []


  constructor(private servicio: ServicioService) {
    this.obtenerCines()
    this.obtenerGeneros()
  }

  obtenerCines() {
    this.servicio.cine.obtenerTodos(1, 50).subscribe({
      next: (data: HttpResponse<CineDto[]>) => {
        this.cinesNoSeleccionados = data.body!.map(x => ({ llave: x.id, valor: x.nombre }))
      }
    })
  }

  obtenerGeneros() {
    this.servicio.genero.obtenerTodos(1, 50).subscribe({
      next: (response: HttpResponse<GeneroDto[]>) => {
        this.generosNoSeleccionados = response.body!.map(x => ({ llave: x.id, valor: x.nombre }))
      }
    })
  }

  agregarPelicula(pelicula: PeliculaDtoIn) {
    console.log(pelicula)
    this.servicio.peliculas.agregar(pelicula).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (data) => {
        this.errores = parsearErroresApi(data)
      }
    })
  }

}