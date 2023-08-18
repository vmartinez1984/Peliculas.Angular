import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneroDtoIn } from 'src/app/interfaces/genero-dto-in';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {
  genero?: GeneroDtoIn

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.obtenerGenero()
    })
  }

  obtenerGenero() {
    this.genero = { nombre: 'Drama' }
  }

  guardar(genero: GeneroDtoIn) {
    console.log(genero)
    this.router.navigate(['/generos'])
  }
}
