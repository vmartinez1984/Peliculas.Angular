import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneroDto } from 'src/app/interfaces/genero-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-filtro-de-peliculas',
  templateUrl: './filtro-de-peliculas.component.html',
  styleUrls: ['./filtro-de-peliculas.component.css']
})
export class FiltroDePeliculasComponent {
  formGroup: FormGroup
  generos: GeneroDto[] = []

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
    this.obtenerGeneros()
  }

  obtenerGeneros() {
    this.servicio.genero.obtenerTodos().subscribe({
      next: (generos) => {
        //console.log(generos)
        this.generos = generos
      }
    })
  }

  limpiar() {
    throw new Error('Method not implemented.');
  }
}
