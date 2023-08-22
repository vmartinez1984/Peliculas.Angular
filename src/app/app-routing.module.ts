import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AgregarGeneroComponent } from './generos/agregar-genero/agregar-genero.component';
import { IndiceDeGenerosComponent } from './generos/indice-de-generos/indice-de-generos.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroDePeliculasComponent } from './peliculas/filtro-de-peliculas/filtro-de-peliculas.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { ListaDeActoresComponent } from './actores/lista-de-actores/lista-de-actores.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { ListaDeCinesComponent } from './cines/lista-de-cines/lista-de-cines.component';
import { AgregarCineComponent } from './cines/agregar-cine/agregar-cine.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { AgregarPeliculaComponent } from './peliculas/agregar-pelicula/agregar-pelicula.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'actores', component: ListaDeActoresComponent },
  { path: 'actores/editar/:id', component: EditarActorComponent },
  { path: 'actores/agregar', component: CrearActorComponent },
  { path: 'cines', component: ListaDeCinesComponent},
  { path: 'cines/agregar', component: AgregarCineComponent},
  { path: 'cines/editar/:id', component: EditarCineComponent},
  { path: 'generos', component: IndiceDeGenerosComponent },
  { path: 'generos/agregar', component: AgregarGeneroComponent },
  { path: 'generos/editar/:id', component: EditarGeneroComponent },
  { path: 'peliculas/agregar', component: AgregarPeliculaComponent },
  { path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  { path: 'peliculas/buscar', component: FiltroDePeliculasComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
