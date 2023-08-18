import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  votoEmitido(voto: number):void {
    alert(voto)
  }
  peliculasEnCine: any;
  peliculasProximosEstrenos: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [{
        titulo: 'SpiderMan',
        fechaDeLanzamiento: new Date(),
        precio: 140.99,
        poster: "https://www.enjpg.com/img/2020/spider-man-20.jpg"
      },
      {
        titulo: 'Moana',
        fechaDeLanzamiento: new Date(),
        precio: 100,
        poster: "https://image.tmdb.org/t/p/original/4yGzhOVqBliZOBZZ4rDKpQoexb.jpg"
      }
      ]
      this.peliculasProximosEstrenos = [
        //{ titulo: 'Endgame', fechaDeLanzamiento: new Date(), precio: 99.99 }
      ]
    }, 3000);
  }
  title = 'Peliculas.Angular';
}
