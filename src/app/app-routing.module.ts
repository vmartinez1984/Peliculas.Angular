import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoDePeliculasComponent } from './peliculas/listado-de-peliculas/listado-de-peliculas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormularioActorComponent } from './actores/formulario-actor/formulario-actor.component';
import { AgregarGeneroComponent } from './generos/agregar-genero/agregar-genero.component';
import { IndiceDeGenerosComponent } from './generos/indice-de-generos/indice-de-generos.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroDePeliculasComponent } from './peliculas/filtro-de-peliculas/filtro-de-peliculas.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'actores/editar/:id', component: FormularioActorComponent },
  { path: 'generos', component: IndiceDeGenerosComponent },
  { path: 'generos/agregar', component: AgregarGeneroComponent },
  { path: 'generos/editar/:id', component: EditarGeneroComponent },
  { path: 'peliculas/buscar', component: FiltroDePeliculasComponent},
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
