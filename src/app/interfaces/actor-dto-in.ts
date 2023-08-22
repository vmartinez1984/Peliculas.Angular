export interface ActorDtoIn {
    nombre: string
    fechaDeNacimiento?: Date
    foto: File
    biografia: string
}

export interface ActorDto {
    id: number
    nombre: string
    fechaDeNacimiento?: Date
    foto: string
    biografia: string
    personaje?: string
}