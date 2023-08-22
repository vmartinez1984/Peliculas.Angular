import { Component, Input } from '@angular/core';
import { MultipleSelector } from 'src/app/interfaces/multiple-selector';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent {

  @Input() seleccionados: MultipleSelector[] = []
  @Input() noSeleccionados: MultipleSelector[] = []

  deseleccionarTodo() {
    this.noSeleccionados.push(...this.seleccionados)
    this.seleccionados= []
  }

  seleccionarTodo() {
    this.seleccionados.push(...this.noSeleccionados)
    this.noSeleccionados= []
  }

  seleccionar(item: MultipleSelector, index: number){
    this.seleccionados.push(item)
    this.noSeleccionados.splice(index,1)
  }

  deseleccionar(item: MultipleSelector, index: number){
    this.noSeleccionados.push(item)
    this.seleccionados.splice(index,1)
  }
}
