import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneroDtoIn } from 'src/app/interfaces/genero-dto-in';

@Component({
  selector: 'app-agregar-genero',
  templateUrl: './agregar-genero.component.html',
  styleUrls: ['./agregar-genero.component.css']
})
export class AgregarGeneroComponent implements OnInit {
  
  constructor(private router: Router   ) { }

  ngOnInit(): void {
  }
 
  guardar(genero: GeneroDtoIn) {
    console.log(genero)
    this.router.navigate(['/generos'])
  }
}
