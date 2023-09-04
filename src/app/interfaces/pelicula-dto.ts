import { ActorDto, ActorPeliculaDto } from "./actor-dto-in"
import { CineDto } from "./cine-dto"
import { GeneroDto } from "./genero-dto-in"

export interface PeliculaDtoIn {
    titulo: string
    enCines: boolean
    proximosEstrenos: boolean
    generos: number[]
    poster: File
    trailer?: string
    resumen?: string
    generoIds: number[]
    actores: ActorPeliculaDto[]
    cineIds: number[]
    fechaDeLanzamiento?: Date
}

export interface PeliculaDto {
    id:number
    titulo: string
    enCines: boolean
    proximosEstrenos: boolean
    generos: GeneroDto[]
    poster: string
    trailer?: string
    resumen?: string
    fechaDeLanzamiento?: Date
    actores: ActorDto[]
    cines: CineDto[]    
}

export interface LandingPageDto{
    peliculasEnCines:PeliculaDto[]
    peliculasProximosEstrenos: PeliculaDto[]
}

export interface PeliculaPutGetDto{
    pelicula: PeliculaDto
    generosSeleccionados : GeneroDto[]
    generosNoSeleccionados : GeneroDto[]
    cinesSeleccionados: CineDto[]
    cinesNoSeleccionados: CineDto[]
    actores: ActorPeliculaDto[]

}