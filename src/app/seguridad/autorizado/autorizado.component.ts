import { Component, Input } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.css']
})
export class AutorizadoComponent {
  @Input() rol!: string

  constructor(
    private seguridad: SeguridadService
  ){  }

  estaAutorizado(): boolean{
    if(this.rol){      
      return this.seguridad.obtenerRol() === this.rol
    }else{
      return this.seguridad.estaLogueado()
    }
  }
}
