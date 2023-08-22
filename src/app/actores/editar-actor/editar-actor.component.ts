import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDto, ActorDtoIn } from 'src/app/interfaces/actor-dto-in';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  actor?: ActorDto

  constructor(private activatedRoute: ActivatedRoute) {
    this.obtenerActor()
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
    })
  }

  obtenerActor() {
    this.actor = {
      id: 1,
      nombre: "Víctor",
      fechaDeNacimiento: new Date(),
      foto: "https://1.bp.blogspot.com/-2xwZ2pBc3wA/V8QcCKwLHjI/AAAAAAAABew/a3XTYtDexdkKhgsqh0OyS-nMdaNLdrCFACLcB/s1600/Vladimir%2BIlyich%2BLenin%2BPortrait.jpg",
      biografia: ''
    }
    //console.log(this.actor)
  }

  guardar(actor: any) {
    console.log(actor)
  }
}
