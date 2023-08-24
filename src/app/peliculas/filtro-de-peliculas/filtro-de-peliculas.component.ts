import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneroDto } from 'src/app/interfaces/genero-dto-in';
import { PeliculaDto } from 'src/app/interfaces/pelicula-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-filtro-de-peliculas',
  templateUrl: './filtro-de-peliculas.component.html',
  styleUrls: ['./filtro-de-peliculas.component.css']
})
export class FiltroDePeliculasComponent {
  formGroup: FormGroup
  generos: GeneroDto[] = []
  peliculas?: PeliculaDto[]
  peliculasOriginal?: PeliculaDto[]

  constructor(
    private formBuilder: FormBuilder,
    private servicio: ServicioService
  ) {
    this.formGroup = this.formBuilder.group({
      titulo: [''],
      generoId: [''],
      proximosEstrenos: false,
      enCines: false
    })
    this.formGroup.valueChanges.subscribe({
      next: (data) => {
        //console.log(data)
        this.peliculas = this.peliculasOriginal
        this.buscarPeliculas(data)
      }
    })
    this.obtenerGeneros()
    this.obtenerPeliculas()
  }

  buscarPeliculas(filtro: any) {
    if (filtro.titulo) {
      this.peliculas = this.peliculas?.filter(pelicula => pelicula.titulo.toLowerCase().indexOf(filtro.titulo.toLowerCase()) !== -1)
    }
    if (filtro.proximosEstrenos) {
      this.peliculas = this.peliculas?.filter(pelicula => pelicula.proximosEstrenos)
    }
    if (filtro.enCines) {
      this.peliculas = this.peliculas?.filter(pelicula => pelicula.enCines)
    }
  }

  obtenerPeliculas() {
    this.servicio.peliculas.obtenerTodo().subscribe({
      next: (peliculas) => {
        this.peliculas = peliculas
        this.peliculasOriginal = peliculas
      }
    })
  }

  obtenerGeneros() {
    this.servicio.genero.obtenerTodos(1, 50).subscribe({
      next: (generos) => {
        //console.log(generos)
        this.generos = generos
      }
    })
  }

  limpiar() {
    this.formGroup.patchValue({
      titulo: [''],
      generoId: [''],
      proximosEstrenos: false,
      enCines: false
    })
  }
}
