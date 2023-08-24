import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GeneroDto } from 'src/app/interfaces/genero-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-indice-de-generos',
  templateUrl: './indice-de-generos.component.html',
  styleUrls: ['./indice-de-generos.component.css']
})
export class IndiceDeGenerosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource<GeneroDto>()
  generos: GeneroDto[] = []
  estaCargando = false
  cantidadtotalderegistros!: any
  paginaActual: number = 1
  cantidadDeRegistrosAMostrar = 10

  constructor(private servicio: ServicioService) {
    this.obtenerTodos(this.paginaActual, this.cantidadDeRegistrosAMostrar)
  }

  obtenerTodos(pagina: number, cantidadDeRegistrosAMostrar: number) {
    this.estaCargando = true
    this.servicio.genero.obtenerTodos(pagina, cantidadDeRegistrosAMostrar).subscribe({
      next: (respuesta: HttpResponse<GeneroDto[]>) => {
        //console.log(generos)
        this.dataSource.data = respuesta.body == null ? [] : respuesta.body
        this.generos = respuesta.body == null ? [] : respuesta.body
        //console.log("cantidadtotalderegistros: ", respuesta.headers.get("cantidadtotalderegistros"))
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
}