import { Component } from '@angular/core';
import { ActorDtoIn } from 'src/app/interfaces/actor-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})

export class CrearActorComponent {

  constructor(
    private servicio: ServicioService
  ) { }

  guardar(actor: ActorDtoIn) {
    //console.log(actor)
    this.servicio.actor.agregar(actor).subscribe({
      next: (data) => {
        console.log(data)
      }
    });
  }

 
}
