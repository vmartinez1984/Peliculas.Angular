import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneroDto, GeneroDtoIn } from 'src/app/interfaces/genero-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {
  genero!: GeneroDtoIn
  id!: number

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicio: ServicioService
  ) { }

  ngOnInit(): void {
    //console.log("generoId: ", this.activatedRoute.snapshot.params['id'])
    this.id = this.activatedRoute.snapshot.params['id']
    this.obtenerGenero(this.id)
  }

  obtenerGenero(id: number) {
    this.servicio.genero.obtenerPorId(id).subscribe({
      next: (data: GeneroDto) => {
        console.log(data)
        this.genero = data
      }
    })
  }

  guardar(genero: GeneroDtoIn) {
    console.log(genero)
    this.servicio.genero.actualizar(this.id, genero).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/generos'])
      }
    })
  }
}
