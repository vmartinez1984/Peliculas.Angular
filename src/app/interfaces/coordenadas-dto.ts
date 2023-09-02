export interface CoordenadasDto {
    latitud: number
    longitud: number
}

export interface CoordenadasConMensajeDto extends CoordenadasDto {
    mensaje: string
}