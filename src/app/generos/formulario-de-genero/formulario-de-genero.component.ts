import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneroDtoIn } from 'src/app/interfaces/genero-dto-in';

@Component({
  selector: 'app-formulario-de-genero',
  templateUrl: './formulario-de-genero.component.html',
  styleUrls: ['./formulario-de-genero.component.css']
})
export class FormularioDeGeneroComponent {
  formGroup: FormGroup
  @Output() respuesta :EventEmitter<GeneroDtoIn> = new EventEmitter<GeneroDtoIn>();
  @Input() entrada?: GeneroDtoIn
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }]
    })
  }

  ngOnInit(): void {
    if(this.entrada !== undefined){
      this.formGroup.patchValue(this.entrada)
    }
  }

  obtnerErrorDeCampoNombre() {
    var campo = this.formGroup.get('nombre')
    var error = ""
    //console.log(campo)
    if (campo?.hasError('required')) {
      error += 'El nombre es requerido.'
    }
    if (campo?.hasError('minlength')) {
      error += ' La longitud mínima es de 3 carácteres.'
    }
    return error
  }

  guardar() {
    //console.log(this.formGroup.valid)
    if (this.formGroup.valid){
      //this.router.navigate(['/generos'])
      this.respuesta.emit(this.formGroup.value)
    }

  }
}
