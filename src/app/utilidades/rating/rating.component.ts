import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    this.raitingSeleccionado = index + 1
    this.estaVotado = true
    this.raitingAnterior = this.raitingSeleccionado
    this.rated.emit(this.raitingSeleccionado)
  }
}
