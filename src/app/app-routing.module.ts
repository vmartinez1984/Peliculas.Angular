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
import { DetalleDePeliculaComponent } from './peliculas/detalle-de-pelicula/detalle-de-pelicula.component';
import { EsAdminGuard } from './es-admin.guard';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { ListaDeUsuariosComponent } from './seguridad/lista-de-usuarios/lista-de-usuarios.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'actores', component: ListaDeActoresComponent, pathMatch: 'full' },
  { path: 'actores/editar/:id', component: EditarActorComponent, pathMatch: 'full' },
  { path: 'actores/agregar', component: CrearActorComponent, pathMatch: 'full' },
  { path: 'cines', component: ListaDeCinesComponent, pathMatch: 'full' },
  { path: 'cines/agregar', component: AgregarCineComponent, pathMatch: 'full' },
  { path: 'cines/editar/:id', component: EditarCineComponent, pathMatch: 'full' },
  { path: 'generos', component: IndiceDeGenerosComponent, canActivate: [EsAdminGuard] },
  { path: 'generos/agregar', component: AgregarGeneroComponent, pathMatch: 'full' },
  { path: 'generos/editar/:id', component: EditarGeneroComponent, pathMatch: 'full' },
  { path: 'peliculas/agregar', component: AgregarPeliculaComponent, pathMatch: 'full' },
  { path: 'peliculas/editar/:id', component: EditarPeliculaComponent, pathMatch: 'full' },
  { path: 'peliculas/buscar', component: FiltroDePeliculasComponent, pathMatch: 'full' },
  { path: 'peliculas/:id', component: DetalleDePeliculaComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent, pathMatch: 'full' },
  { path: 'usuarios', component: ListaDeUsuariosComponent, canActivate: [EsAdminGuard], pathMatch: 'full' },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
