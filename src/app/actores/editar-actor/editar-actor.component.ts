import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorDto, ActorDtoIn } from 'src/app/interfaces/actor-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  actor?: ActorDto

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: ServicioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.obtenerActorPorId(params['id'])
    })
  }

  obtenerActorPorId(actorId: number) {
    // this.actor = {
    //   id: 1,
    //   nombre: "Víctor",
    //   fechaDeNacimiento: new Date(),
    //   foto: "https://1.bp.blogspot.com/-2xwZ2pBc3wA/V8QcCKwLHjI/AAAAAAAABew/a3XTYtDexdkKhgsqh0OyS-nMdaNLdrCFACLcB/s1600/Vladimir%2BIlyich%2BLenin%2BPortrait.jpg",
    //   biografia: ''
    // }
    //console.log(this.actor)
    this.servicio.actor.obtenerPorId(actorId).subscribe({
      next: (actor) => {
        this.actor = actor
      }
    })
  }

  guardar(actor: ActorDtoIn) {
    console.log("Actualizar", actor)
    this.servicio.actor.actualizar(this.actor!.id, actor).subscribe({
      next:(data)=>{
        this.router.navigate(['/actores'])
      },
      error:(data)=>{
        console.log(data)
      }
    }
    )
  }
}
