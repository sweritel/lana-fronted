import type { Cancion, CancionFormData, RespuestaCancion, RespuestaCancionUnica } from "../types/Cancion"

const API_URL = `${import.meta.env.VITE_API_URL ?? "http://localhost:3001"}/canciones`

const procesarRespuesta = async <T>(response: Response): Promise<T> => {
    const json = await response.json()
    if (!response.ok) {
        const mensaje = json?.error ?? json?.mensaje ?? `Error ${response.status}`
        throw new Error(mensaje)
    }
    return json as T
}

export const fetchCanciones = async (signal?: AbortSignal): Promise<Cancion[]> => {
    const response = await fetch(API_URL, { signal })
    const json = await procesarRespuesta<RespuestaCancion>(response)
    return json.data
}

export const crearCancion = async (datos: CancionFormData): Promise<Cancion> => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
    })
    const json = await procesarRespuesta<RespuestaCancionUnica>(response)
    return json.data
}

export const actualizarCancion = async (id: string, datos: Partial<CancionFormData>): Promise<Cancion> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
    })
    const json = await procesarRespuesta<RespuestaCancionUnica>(response)
    return json.data
}

export const eliminarCancion = async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" })
    await procesarRespuesta<{ success: boolean }>(response)
}