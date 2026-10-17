import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
    fetchCanciones,
    crearCancion,
    actualizarCancion,
    eliminarCancion,
} from "../../services/canciones.service"
import type { CancionFormData } from "../../types/Cancion"

export const useCanciones = () => useQuery({
    queryKey: ["canciones"],
    queryFn: ({ signal }) => fetchCanciones(signal),
})

export const useCrearCancion = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (datos: CancionFormData) => crearCancion(datos),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["canciones"] }),
    })
}

export const useActualizarCancion = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, datos }: { id: string; datos: Partial<CancionFormData> }) =>
            actualizarCancion(id, datos),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["canciones"] }),
    })
}

export const useEliminarCancion = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: string) => eliminarCancion(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["canciones"] }),
    })
}