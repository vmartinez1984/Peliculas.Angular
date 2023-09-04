import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CoordenadasConMensajeDto } from 'src/app/interfaces/coordenadas-dto';
import { PeliculaDto } from 'src/app/interfaces/pelicula-dto';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-detalle-de-pelicula',
  templateUrl: './detalle-de-pelicula.component.html',
  styleUrls: ['./detalle-de-pelicula.component.css']
})
export class DetalleDePeliculaComponent {
  pelicula!: PeliculaDto
  fechaDeLanzamiento!: Date
  trailerUrl!: SafeResourceUrl
  coordenadas: CoordenadasConMensajeDto[] = []
  estaCargando= false

  constructor(
    private servicio: ServicioService,
    private activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.obtenerPeliculaPorId(params['id'])
    })
  }

  obtenerPeliculaPorId(peliculaId: number) {
    this.estaCargando = true
    this.servicio.peliculas.obtenerPeliculaPorId(peliculaId).subscribe({
      next: (data) => {
        console.log(data)
        this.pelicula = data
        this.fechaDeLanzamiento = new Date(this.pelicula.fechaDeLanzamiento!)
        this.trailerUrl = this.obtenerUrlYoutubeEmbebed(this.pelicula.trailer)
        this.coordenadas = this.pelicula.cines.map(cine => {
          return { longitud: cine.longitud, latitud: cine.latitud, mensaje: cine.nombre }
        })
        this.estaCargando= false
      },error:(error)=>{
        this.estaCargando= false
      }
    })
  }

  obtenerUrlYoutubeEmbebed(url: any): SafeResourceUrl {
    if (!url) {
      return ''
    }

    var video_id = url.split('v=')[1]
    var posisionAmpersan = video_id.indexOf('&')
    if (posisionAmpersan !== -1) {
      video_id = video_id.substring(0, posisionAmpersan)
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video_id}`)
  }
}
