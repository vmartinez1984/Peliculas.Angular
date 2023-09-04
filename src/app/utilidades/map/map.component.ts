import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletMouseEvent, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { CoordenadasConMensajeDto, CoordenadasDto } from 'src/app/interfaces/coordenadas-dto';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() respuesta: EventEmitter<CoordenadasDto> = new EventEmitter<CoordenadasDto>()
  @Input() coordenadasInput: CoordenadasConMensajeDto[] = []
  @Input() soloLectura = false
  latitudInicial: number = 19.411180000338067
  longitudInicial: number = -99.15588140487672


  capas: Marker<any>[] = []

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 17,
    center: latLng(this.latitudInicial, this.longitudInicial)
  };

  ngOnInit() {
    this.capas = this.coordenadasInput.map((valor) => {
      let marcador = marker([valor.latitud, valor.longitud]);
      // if (valor.mensaje) {
      //   marcador.bindPopup(valor.mensaje, { autoClose: false, autoPan: false });
      // }
      return marcador;
    });
    console.log(this.coordenadasInput)
  }

  ngAfterViewChecked(): void {
    console.log(this.coordenadasInput)
    this.capas = this.coordenadasInput.map((valor) => {
      let marcador = marker([valor.latitud, valor.longitud])
      if (valor.mensaje) {
        marcador.bindPopup(valor.mensaje, { autoClose: false, autoPan: false });
      }
      return marcador;
    });
  }

  manejarClick(evento: LeafletMouseEvent) {
    if (!this.soloLectura) {
      const latitud = evento.latlng.lat
      const longitud = evento.latlng.lng

      this.colocarMarcador(latitud, longitud)
      this.respuesta.emit({ latitud: latitud, longitud: longitud })
    }
  }

  colocarMarcador(latitud: number, longitud: number) {
    this.capas = []
    this.capas.push(marker([latitud, longitud],
      {
        icon: icon(
          {
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'marker-icon.png',
            iconRetinaUrl: 'marker-icon-2x.png',
            shadowUrl: 'assets/marker-shadow.png'
          }
        )
      })
    )
  }
}
