import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CineDto } from 'src/app/interfaces/cine-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-lista-de-cines',
  templateUrl: './lista-de-cines.component.html',
  styleUrls: ['./lista-de-cines.component.css']
})
export class ListaDeCinesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'acciones']
  cines: CineDto[] = []
  estaCargando = false
  cantidadtotalderegistros!: any
  paginaActual: number = 1
  cantidadDeRegistrosAMostrar = 10
  
  //cines: CineDto[] = []
  constructor(
    private servicio: ServicioService
  ) { }

  ngOnInit(): void {
    this.obtenerTodos(this.paginaActual, this.cantidadDeRegistrosAMostrar)
  }

  obtenerTodos(paginaActual: number, cantidadDeRegistrosAMostrar: number) {
    this.estaCargando = true
    this.servicio.cine.obtenerTodos(paginaActual, cantidadDeRegistrosAMostrar).subscribe({
      next: (respuesta: HttpResponse<CineDto[]>) => {        
        this.cines = respuesta.body == null ? [] : respuesta.body        
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

  borrar(cine: CineDto) {
    this.servicio.genero.borrar(cine.id).subscribe({
      next: (data) => {
        this.obtenerTodos(this.paginaActual, this.cantidadDeRegistrosAMostrar)
      }, error: (error) => console.log(error)
    })
  }

}
