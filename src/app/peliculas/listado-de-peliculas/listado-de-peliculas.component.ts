import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-de-peliculas',
  templateUrl: './listado-de-peliculas.component.html',
  styleUrls: ['./listado-de-peliculas.component.css']
})
export class ListadoDePeliculasComponent implements OnInit {
editar(_t10: number) {
throw new Error('Method not implemented.');
}

remover(index: number) {
  this.peliculas.splice(index, 1)
}
  @Input() peliculas:any;

  ngOnInit(): void {    
  }

}
