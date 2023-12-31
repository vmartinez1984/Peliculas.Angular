import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

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
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { AgregarImagenComponent } from './utilidades/agregar-imagen/agregar-imagen.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { FormularioDeCineComponent } from './cines/formulario-de-cine/formulario-de-cine.component';
import { AgregarCineComponent } from './cines/agregar-cine/agregar-cine.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { ListaDeCinesComponent } from './cines/lista-de-cines/lista-de-cines.component';
import { MapComponent } from './utilidades/map/map.component';
import { AgregarPeliculaComponent } from './peliculas/agregar-pelicula/agregar-pelicula.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioDePeliculaComponent } from './peliculas/formulario-de-pelicula/formulario-de-pelicula.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompletadoDeActoresComponent } from './actores/autocompletado-de-actores/autocompletado-de-actores.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { DetalleDePeliculaComponent } from './peliculas/detalle-de-pelicula/detalle-de-pelicula.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { ListaDeUsuariosComponent } from './seguridad/lista-de-usuarios/lista-de-usuarios.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
    FiltroDePeliculasComponent,
    CrearActorComponent,
    EditarActorComponent,
    AgregarImagenComponent,
    InputMarkdownComponent,
    FormularioDeCineComponent,
    AgregarCineComponent,
    EditarCineComponent,
    ListaDeCinesComponent,
    MapComponent,
    AgregarPeliculaComponent,
    EditarPeliculaComponent,
    FormularioDePeliculaComponent,
    SelectorMultipleComponent,
    AutocompletadoDeActoresComponent,
    MostrarErroresComponent,
    DetalleDePeliculaComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
    ListaDeUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    FormsModule,
    LeafletModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SeguridadInterceptorService, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
