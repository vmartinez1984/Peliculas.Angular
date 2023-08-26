import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorDto, ActorDtoIn } from 'src/app/interfaces/actor-dto-in';

@Component({
  selector: 'app-formulario-actor',
  templateUrl: './formulario-actor.component.html',
  styleUrls: ['./formulario-actor.component.css']
})
export class FormularioActorComponent implements OnInit {
  formGroup: FormGroup

  @Output() eventEmiiter: EventEmitter<ActorDtoIn> = new EventEmitter()
  @Input() entrada?: ActorDto
  @Input() errores: string[] = []

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

  ngOnInit(): void {
    console.log(this.entrada)
    if (this.entrada !== undefined) {
      this.formGroup.patchValue(this.entrada)
    }
  }

  guardar() {
    this.eventEmiiter.emit(this.formGroup.value)
  }

  agregarImagen(file: File) {
    this.formGroup.get('foto')?.setValue(file)
  }
}