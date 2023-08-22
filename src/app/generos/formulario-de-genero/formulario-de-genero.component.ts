import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneroDtoIn } from 'src/app/interfaces/genero-dto-in';

@Component({
  selector: 'app-formulario-de-genero',
  templateUrl: './formulario-de-genero.component.html',
  styleUrls: ['./formulario-de-genero.component.css']
})
export class FormularioDeGeneroComponent {
  formGroup: FormGroup

  @Output() respuesta: EventEmitter<GeneroDtoIn> = new EventEmitter<GeneroDtoIn>();
  @Input()  generoIn?: GeneroDtoIn

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }]
    })
    console.log(this.generoIn)
    if (this.generoIn) {
      this.formGroup.patchValue({ nombre: this.generoIn.nombre })
    }
  }

  ngOnChanges(): void {
    console.log(this.generoIn)
    if (this.generoIn) {
      this.formGroup.patchValue({ nombre: this.generoIn.nombre })
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
    if (this.formGroup.valid) {
      //this.router.navigate(['/generos'])
      this.respuesta.emit(this.formGroup.value)
    }

  }

}