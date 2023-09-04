import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorPeliculaDto } from 'src/app/interfaces/actor-dto-in';
import { MultipleSelector } from 'src/app/interfaces/multiple-selector';
import { PeliculaDto, PeliculaDtoIn } from 'src/app/interfaces/pelicula-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {
  estaCargando = false
  pelicula!: PeliculaDto
  generosNoSeleccionados: MultipleSelector[] = [];
  generosSeleccionados: MultipleSelector[] = [];
  cinesNoSeleccionados: MultipleSelector[] = [];
  cinesSeleccionados: MultipleSelector[] = [];
  actoresSeleccionados: ActorPeliculaDto[] = []

  constructor(
    private servicio: ServicioService,
    private activatedRouted: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRouted.params.subscribe(params => {
      this.servicio.peliculas.putGet(params['id']).subscribe({
        next: (data) => {
          console.log(data)
          this.pelicula = data.pelicula
          this.generosNoSeleccionados = data.generosNoSeleccionados.map(genero => {
            return <MultipleSelector>{ llave: genero.id, valor: genero.nombre }
          })
          this.generosSeleccionados = data.generosSeleccionados.map(genero => {
            return <MultipleSelector>{ llave: genero.id, valor: genero.nombre }
          })
          this.cinesSeleccionados = data.cinesSeleccionados.map(cine => {
            return <MultipleSelector>{ llave: cine.id, valor: cine.nombre }
          })
          this.cinesNoSeleccionados = data.cinesNoSeleccionados.map(cine => {
            return <MultipleSelector>{ llave: cine.id, valor: cine.nombre }
          })
          this.actoresSeleccionados = data.actores
        }
      })
    })
  }

  guardarPelicula(pelicula: PeliculaDtoIn) {
    console.log(pelicula)
    this.servicio.peliculas.actualizar(this.pelicula.id, pelicula).subscribe({
      next: (data) => {
        this.router.navigate(['/peliculas' + this.pelicula.id])
      }
    })
  }
}
