export interface CredencialesUsuarioDto {
    email:string,
    password:string
}

export interface RespuestaAutenticacionDto{
    token: string
    expiracion: Date
}

export interface UsuarioDto {
    id: string
    email:string
}