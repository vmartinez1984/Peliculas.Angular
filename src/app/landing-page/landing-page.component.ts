import { Component } from '@angular/core';
import { PeliculaDto } from '../interfaces/pelicula-dto';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  peliculasEnCines: PeliculaDto[] = []
  peliculasProximosEstrenos: PeliculaDto[] = []

  constructor(
    private servicio: ServicioService
  ){}

  ngOnInit(){
    this.servicio.peliculas.obtenerLandingPage().subscribe({
      next:(data)=>{
        this.peliculasEnCines = data.peliculasEnCines
        this.peliculasProximosEstrenos = data.peliculasProximosEstrenos
      }
    })
  }
}
