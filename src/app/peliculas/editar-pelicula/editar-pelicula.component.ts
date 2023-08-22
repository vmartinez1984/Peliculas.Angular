import { Component } from '@angular/core';
import { PeliculaDto, PeliculaDtoIn } from 'src/app/interfaces/pelicula-dto';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {

  pelicula: PeliculaDto = {
    titulo: "Spider man",
    trailer: 'https://www.youtube.com/watch?v=fuLPJg2gwjQ&list=RDjO3rZsnBp8o&index=12&ab_channel=OomphVEVO',
    enCines: false,
    proximosEstrenos: false,
    poster: 'https://www.enjpg.com/img/2020/spider-man-20.jpg',
    resumen: 'Cualquier cosa',
    generos: { id: 1, nombre: 'Accion' },
    fechaDeLanzamiento: new Date()
  }

  guardarPelicula(pelicula: PeliculaDtoIn) {
    console.log(pelicula)
  }
}
