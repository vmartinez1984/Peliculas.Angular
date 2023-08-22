import { GeneroDto } from "./genero-dto-in"

export interface PeliculaDtoIn {
    titulo: string
    enCines: boolean
    proximosEstrenos: boolean
    generos: number[]
    poster: File
    trailer?: string
    resumen?: string
}

export interface PeliculaDto {
    titulo: string
    enCines: boolean
    proximosEstrenos: boolean
    generos: GeneroDto
    poster: string
    trailer?: string
    resumen?: string
    fechaDeLanzamiento?: Date
}