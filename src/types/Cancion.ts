export interface Cancion {
    _id: string
    titulo: string
    album: string
    duracion: string
    reproducciones_spotify: number
    url_spotify: string
    createdAt: string
    updatedAt: string
}

export type CancionFormData = Omit<Cancion, "_id" | "createdAt" | "updatedAt">

export interface RespuestaCancion {
    success: boolean
    data: Cancion[]
}

export interface RespuestaCancionUnica {
    success: boolean
    mensaje?: string
    data: Cancion
}