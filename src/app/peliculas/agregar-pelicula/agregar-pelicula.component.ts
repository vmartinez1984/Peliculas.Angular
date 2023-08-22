import { Component } from '@angular/core';
import { PeliculaDtoIn } from 'src/app/interfaces/pelicula-dto';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent {
    
  agregarPelicula(pelicula: PeliculaDtoIn) {
    console.log(pelicula)
  }
}
