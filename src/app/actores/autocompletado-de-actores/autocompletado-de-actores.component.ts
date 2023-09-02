import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { ActorDto, ActorPeliculaDto } from 'src/app/interfaces/actor-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-autocompletado-de-actores',
  templateUrl: './autocompletado-de-actores.component.html',
  styleUrls: ['./autocompletado-de-actores.component.css']
})
export class AutocompletadoDeActoresComponent {
  control = new FormControl('');
  @Input() actoresSeleccionados: ActorPeliculaDto[] = []
  actoresAMostrar: ActorPeliculaDto[] = []
  columnasAMostrar: string[] = ['imagen', 'nombre', 'personaje', 'acciones']

  @ViewChild(MatTable) table!: MatTable<any>

  constructor(private servicio: ServicioService) { }

  ngOnInit() {
    this.control.valueChanges.subscribe(nombre => {
      this.servicio.actor.obtenerPorNombre(nombre + "").subscribe({
        next: (actores) => {
          this.actoresAMostrar = actores
        }
      })
    })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value)
    this.actoresSeleccionados.push(event.option.value)
    this.control.patchValue('')
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
