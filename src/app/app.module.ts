import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDePeliculasComponent } from './peliculas/listado-de-peliculas/listado-de-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceDeGenerosComponent } from './generos/indice-de-generos/indice-de-generos.component';
import { AgregarGeneroComponent } from './generos/agregar-genero/agregar-genero.component';
import { FormularioActorComponent } from './actores/formulario-actor/formulario-actor.component';
import { ListaDeActoresComponent } from './actores/lista-de-actores/lista-de-actores.component';
import { FormularioDeGeneroComponent } from './generos/formulario-de-genero/formulario-de-genero.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroDePeliculasComponent } from './peliculas/filtro-de-peliculas/filtro-de-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDePeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceDeGenerosComponent,
    AgregarGeneroComponent,
    FormularioActorComponent,
    ListaDeActoresComponent,
    FormularioDeGeneroComponent,
    EditarGeneroComponent,
    FiltroDePeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
