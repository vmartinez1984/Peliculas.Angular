import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CineDtoIn } from 'src/app/interfaces/cine-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-agregar-cine',
  templateUrl: './agregar-cine.component.html',
  styleUrls: ['./agregar-cine.component.css']
})
export class AgregarCineComponent {  

  constructor(
    private router: Router,
    private servicio: ServicioService
  ){}

  guardar(cine: CineDtoIn){
    console.log(cine)
    this.servicio.cine.agregar(cine).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigate(['/cines'])
      }
    })
  }
}
