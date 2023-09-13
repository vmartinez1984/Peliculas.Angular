import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  estaVotado: boolean = false;
  raitingAnterior: number = 0;

  @Input() maximoRaiting = 5
  @Input() raitingSeleccionado = 0
  @Output() rated: EventEmitter<number> = new EventEmitter<number>()

  constructor(private seguridad: SeguridadService){}

  ngOnInit(): void {
    this.maximoRaitnigArray = Array(this.maximoRaiting).fill(0)
  }

  maximoRaitnigArray: any = []

  manejarMouseEnter(index: number): void {
    this.raitingSeleccionado = index + 1
  }

  manejarMouseLeave() {
    if (this.raitingAnterior !== 0)
      this.raitingSeleccionado = this.raitingAnterior
    else
      this.raitingSeleccionado = 0
  }

  rate(index: number): void {
    if(this.seguridad.estaLogueado()){
      this.raitingSeleccionado = index + 1
      this.estaVotado = true
      this.raitingAnterior = this.raitingSeleccionado
      this.rated.emit(this.raitingSeleccionado)
    }else{
      Swal.fire("Debe iniciar sesión", "No puede realizar esta acción", "error")
    }
  }
}
