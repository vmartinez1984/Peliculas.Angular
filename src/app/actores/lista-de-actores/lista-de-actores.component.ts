import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActorDto } from 'src/app/interfaces/actor-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-lista-de-actores',
  templateUrl: './lista-de-actores.component.html',
  styleUrls: ['./lista-de-actores.component.css']
})
export class ListaDeActoresComponent {
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  actores: ActorDto[] = []
  estaCargando = false
  cantidadtotalderegistros!: any
  paginaActual: number = 1
  cantidadDeRegistrosAMostrar = 10

  constructor(private servicio: ServicioService) {
    this.obtenerTodos(this.paginaActual, this.cantidadDeRegistrosAMostrar)
  }

  obtenerTodos(pagina: number, cantidadDeRegistrosAMostrar: number) {
    this.estaCargando = true
    this.servicio.actor.obtenerTodos(pagina, cantidadDeRegistrosAMostrar).subscribe({
      next: (respuesta: HttpResponse<ActorDto[]>) => {
        this.actores = respuesta.body == null ? [] : respuesta.body
        this.cantidadtotalderegistros = respuesta.headers.get("cantidadtotalderegistros")
        this.estaCargando = false
      },
      error: (data) => {
        console.log(data)
        this.estaCargando = false
        alert("Valio pepino :(")
      }
    })
  }

  actualizarPaginacion(pageEvent: PageEvent) {
    console.log(pageEvent)
    this.paginaActual = pageEvent.pageIndex + 1
    this.cantidadDeRegistrosAMostrar = pageEvent.pageSize
    this.obtenerTodos(this.paginaActual, this.cantidadDeRegistrosAMostrar)
  }

  borrar(actor: ActorDto) {
    this.servicio.actor.borrar(actor.id).subscribe({
      next: (data) => {
        this.obtenerTodos(this.paginaActual, this.cantidadDeRegistrosAMostrar)
      }, error: (error) => console.log(error)
    })
  }

}
