import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { ActorDto } from 'src/app/interfaces/actor-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-autocompletado-de-actores',
  templateUrl: './autocompletado-de-actores.component.html',
  styleUrls: ['./autocompletado-de-actores.component.css']
})
export class AutocompletadoDeActoresComponent {
  myControl = new FormControl('');
  actores: ActorDto[] = []
  actoresSeleccionados: ActorDto[] = []
  columnasAMostrar: string[] = ['imagen', 'nombre', 'personaje', 'acciones']

  @ViewChild(MatTable) table!: MatTable<any>
  constructor(private servicio: ServicioService) {
    this.obtenerActores()
  }

  obtenerActores() {
    this.servicio.actor.obtenerTodos(1,50).subscribe({
      next: (respuesta: HttpResponse<ActorDto[]>) => {
        this.actores = respuesta.body == null ? [] : respuesta.body        
      },
    })
  }

  ngOnInit() {
    this.myControl.valueChanges.subscribe(valor => {
      this.obtenerActores()
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor!) !== -1)
    })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value)
    this.actoresSeleccionados.push(event.option.value)
    this.myControl.patchValue('')
    if (this.table) {
      this.table.renderRows()
    }
  }

  eliminar(actor: ActorDto) {
    const indice = this.actoresSeleccionados.findIndex(actor => actor.nombre === actor.nombre)
    this.actoresSeleccionados.splice(indice, 1)
    this.table.renderRows()
  }

  finalizarArrastre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor == event.item.data)
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex)
    this.table.renderRows()
  }
}
