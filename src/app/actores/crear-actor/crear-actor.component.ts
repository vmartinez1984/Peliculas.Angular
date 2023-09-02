import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActorDtoIn } from 'src/app/interfaces/actor-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})

export class CrearActorComponent {

  constructor(
    private servicio: ServicioService,
    private router: Router    
  ) { }

  errores: string[] = []

  guardar(actor: ActorDtoIn) {
    console.log(actor)
    this.servicio.actor.agregar(actor).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/actores'])
      },
      error: (errores) => {
        this.errores = parsearErroresApi(errores)
      }
    });
  }


}
