import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorPeliculaDto } from 'src/app/interfaces/actor-dto-in';
import { CineDto } from 'src/app/interfaces/cine-dto';
import { MultipleSelector } from 'src/app/interfaces/multiple-selector';
import { PeliculaDto, PeliculaDtoIn } from 'src/app/interfaces/pelicula-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-formulario-de-pelicula',
  templateUrl: './formulario-de-pelicula.component.html',
  styleUrls: ['./formulario-de-pelicula.component.css']
})
export class FormularioDePeliculaComponent implements OnInit {
  @Output() peliculaEmmiter: EventEmitter<PeliculaDtoIn> = new EventEmitter<PeliculaDtoIn>()
  @Input() peliculaInput!: PeliculaDto

  formGroup: FormGroup
  imagenCambiada = false
  @Input() generosNoSeleccionados: MultipleSelector[] = []
  @Input() generosSeleccionados: MultipleSelector[] = []
  @Input() cinesNoSeleccionados: MultipleSelector[] = []
  @Input() cinesSeleccionados: MultipleSelector[] = []
  @Input() actoresSeleccionados: ActorPeliculaDto[] = []
  @Input() errores: string[] = []

  constructor(private formBuilder: FormBuilder,
    private servicio: ServicioService
  ) {
    this.formGroup = this.formBuilder.group({
      titulo: ['', { validators: [Validators.required] }],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaDeLanzamiento: '',
      poster: '',
      generoIds: '',
      cineIds: '',
      actores: ''
    })
  }


  ngOnInit(): void {
    console.log(this.peliculaInput)
    if (this.peliculaInput) {
      this.formGroup.get('resumen')?.setValue(this.peliculaInput.resumen)
    } else {
      this.peliculaInput = {
        enCines: false,
        generos: [{ id: 0, nombre: '' }],
        poster: '',
        proximosEstrenos: false,
        titulo: '',
        actores: [],
        cines: [],
        id: 0
      }
    }
  }

  guardar() {
    console.log(this.generosSeleccionados)
    if (this.formGroup.valid) {
      const generoIds = this.generosSeleccionados.map(val => val.llave)
      this.formGroup.get('generoIds')?.setValue(generoIds)
      this.formGroup.get('cineIds')?.setValue(this.cinesSeleccionados.map(x => x.llave))
      const actores = this.actoresSeleccionados.map(valor => {
        return {
          id: valor.id,
          personaje: valor.personaje
        }
      })
      this.formGroup.get('actores')?.setValue(actores)
      if (!this.imagenCambiada)
        this.formGroup.patchValue({ 'poster': null })
      this.peliculaEmmiter.emit(this.formGroup.value)
    }
  }

  colocarTexto(data: any) {
    //console.log(data)
    this.formGroup.get('resumen')?.setValue(data)
    this.peliculaInput.resumen = data
  }

  colocarImagen(archivo: File) {
    this.formGroup.get('poster')?.setValue(archivo)
    this.imagenCambiada = true
  }
}
