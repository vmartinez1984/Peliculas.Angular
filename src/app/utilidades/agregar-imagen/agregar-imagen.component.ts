import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-agregar-imagen',
  templateUrl: './agregar-imagen.component.html',
  styleUrls: ['./agregar-imagen.component.css']
})
export class AgregarImagenComponent {
  imagenEnBase64?: string
  @Output() archivo: EventEmitter<File> = new EventEmitter<File>
  @Input() urlDeImagen?: string

  change(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0]
      toBase64(file).then((value) => {
        this.imagenEnBase64 = value + ""
      })
      this.archivo.emit(file)
      this.imagenEnBase64 = ''
    }
  }
}
