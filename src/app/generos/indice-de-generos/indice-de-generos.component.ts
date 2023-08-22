import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GeneroDto } from 'src/app/interfaces/genero-dto-in';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-indice-de-generos',
  templateUrl: './indice-de-generos.component.html',
  styleUrls: ['./indice-de-generos.component.css']
})
export class IndiceDeGenerosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource<GeneroDto>()

  constructor(private servicio: ServicioService){
    this.obtenerTodos()
  }

  obtenerTodos() {
    this.servicio.genero.obtenerTodos().subscribe({
      next:(generos)=>{
        //console.log(generos)
        this.dataSource.data = generos
      }
    })
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];