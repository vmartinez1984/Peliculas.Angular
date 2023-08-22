import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CineDtoIn } from 'src/app/interfaces/cine-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {
  cine?:CineDtoIn

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicio: ServicioService
  ){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      this.servicio.cine.obtenerPorId(id).subscribe({
        next:(data)=>{
          //console.log(data)
          this.cine = data
        }
      })   
    })
  }
    
  guardar(cine: CineDtoIn){
    //console.log(cine)    
    this.router.navigate(['/cines'])
  }

}
