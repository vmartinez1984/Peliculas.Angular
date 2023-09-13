import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioDto } from 'src/app/interfaces/seguridad';
import { SeguridadService } from '../seguridad.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})
export class ListaDeUsuariosComponent {
  estaCargando = false
  usuarios: UsuarioDto[] = []
  cantidadtotalderegistros!: any
  paginaActual: number = 1
  cantidadDeRegistrosAMostrar = 10
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];

  constructor(private servicio: SeguridadService) {
    this.obtenerUsuarios(this.paginaActual, this.cantidadDeRegistrosAMostrar)
  }

  hacerAdministrador(usuario: UsuarioDto) {

  }
  removerAdministrador(usuario: UsuarioDto) {

  }

  actualizarPaginacion(pageEvent: PageEvent) {
    console.log(pageEvent)
    this.paginaActual = pageEvent.pageIndex + 1
    this.cantidadDeRegistrosAMostrar = pageEvent.pageSize
    this.obtenerUsuarios(this.paginaActual, this.cantidadDeRegistrosAMostrar)
  }

  obtenerUsuarios(paginaActual: number, cantidadDeRegistrosAMostrar: number) {
    this.estaCargando = true
    this.servicio.obtenerUsuarios(paginaActual, cantidadDeRegistrosAMostrar).subscribe({
      next: (respuesta: HttpResponse<UsuarioDto[]>) => {
        //console.log(generos)
        //this.dataSource.data = respuesta.body == null ? [] : respuesta.body
        this.usuarios = respuesta.body == null ? [] : respuesta.body
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
}
