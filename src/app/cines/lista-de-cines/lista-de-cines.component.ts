import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CineDto } from 'src/app/interfaces/cine-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-lista-de-cines',
  templateUrl: './lista-de-cines.component.html',
  styleUrls: ['./lista-de-cines.component.css']
})
export class ListaDeCinesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'acciones']
  dataSource: MatTableDataSource<CineDto> = new MatTableDataSource<CineDto>()
  
  //cines: CineDto[] = []
  constructor(
    private servicio: ServicioService
  ) { }

  ngOnInit(): void {
    this.servicio.cine.obtenerTodos().subscribe({
      next: (data) => {
        this.dataSource.data = data
        //console.log(data)
      }
    })
  }


}
