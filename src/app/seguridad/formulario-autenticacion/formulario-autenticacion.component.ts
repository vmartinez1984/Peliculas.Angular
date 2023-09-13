import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredencialesUsuarioDto } from 'src/app/interfaces/seguridad';

@Component({
  selector: 'app-formulario-autenticacion',
  templateUrl: './formulario-autenticacion.component.html',
  styleUrls: ['./formulario-autenticacion.component.css']
})
export class FormularioAutenticacionComponent {
  guardar() {
    if (this.formGroup.valid)
      this.credencialesUsuarioEmitter.emit(this.formGroup.value)
  }
  formGroup: FormGroup

  @Input() errores: string[] = []
  @Output() credencialesUsuarioEmitter: EventEmitter<CredencialesUsuarioDto> = new EventEmitter<CredencialesUsuarioDto>()
  @Input() accion: string = 'Guardar'

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email]
        }
      ],
      password: [
        '',
        {
          validators: [Validators.required]
        }
      ]
    })
  }

  obtenerMensajeDeErrorDeEmail() {
    var campo = this.formGroup.get('email')
    if (campo?.hasError('required'))
      return "El campo Email es requerido"
    if (campo?.hasError('email'))
      return "El Email no es valido"

    return ''
  }
}
