import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorDto, ActorDtoIn } from 'src/app/interfaces/actor-dto-in';
import { formatearFecha } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-formulario-actor',
  templateUrl: './formulario-actor.component.html',
  styleUrls: ['./formulario-actor.component.css']
})
export class FormularioActorComponent {
  formGroup: FormGroup

  @Output() eventEmiiter: EventEmitter<ActorDtoIn> = new EventEmitter()
  @Input() entrada?: ActorDto
  @Input() errores: string[] = []

  iamgenCambiada = false

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fechaDeNacimiento: [''],
      foto: '',
      biografia: ''
    })
  }

  textoMarkdown(evento: any) {
    // console.log(evento)
    // const texto = evento.target?.value
    // console.log(texto)
    this.formGroup.get('biografia')?.setValue(evento)
  }

  ngOnChanges() {
    if (this.entrada !== undefined) {
      this.formGroup.patchValue(this.entrada)
    }
  }

  guardar() {
    //console.log(this.formGroup.value)
    //var fecha = formatearFecha( this.formGroup.value.fechaDeNacimiento)
    //console.log(fecha)
    if (!this.iamgenCambiada) {
      this.formGroup.patchValue({ 'foto': null })
    }
    if (this.formGroup.valid) {
      var actor: ActorDtoIn = {
        biografia: this.formGroup.value.biografia,
        foto: this.formGroup.value.foto,
        nombre: this.formGroup.value.nombre,
        fechaDeNacimiento: this.formGroup.value.fechaDeNacimiento
      }
      this.eventEmiiter.emit(actor)
    }
  }

  agregarImagen(file: File) {
    this.iamgenCambiada = true
    this.formGroup.get('foto')?.setValue(file)
  }
}