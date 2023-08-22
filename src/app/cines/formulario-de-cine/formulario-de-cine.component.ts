import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CineDtoIn } from 'src/app/interfaces/cine-dto';
import { CoordenadasDto } from 'src/app/interfaces/coordenadas-dto';

@Component({
  selector: 'app-formulario-de-cine',
  templateUrl: './formulario-de-cine.component.html',
  styleUrls: ['./formulario-de-cine.component.css']
})
export class FormularioDeCineComponent {
  formGroup: FormGroup

  @Output() respuesta: EventEmitter<CineDtoIn> = new EventEmitter<CineDtoIn>()
  @Input() cineIn?: CineDtoIn
  coordenadas: CoordenadasDto[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }]
      , latitudYLongitud: ['', Validators.required]
      , longitud: ''
      , latitud: ''
    })
  }

  ngOnChanges(): void {
    //console.log(this.cineIn)
    if (this.cineIn) {
      this.formGroup.patchValue(this.cineIn)
      this.formGroup.get('latitudYLongitud')?.setValue(this.cineIn.latitud + "," + this.cineIn.longitud)
      this.coordenadas.push({ latitud: this.cineIn.latitud, longitud: this.cineIn.longitud })
      console.log("Formulario de cine",this.coordenadas)
    }
  }

  guardar() {
    //console.log(this.formGroup.value)
    if (this.formGroup.valid)
      this.respuesta.emit(this.formGroup.value)
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

  colocarCoordenadas(coordenadas: CoordenadasDto) {
    console.log(coordenadas)
    this.formGroup.get('latitudYLongitud')?.setValue(coordenadas.latitud + "," + coordenadas.longitud)
    this.formGroup.get('longitud')?.setValue(coordenadas.longitud)
    this.formGroup.get('latitud')?.setValue(coordenadas.latitud)
  }
}
