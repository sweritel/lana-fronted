import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { useCanciones, useCrearCancion, useActualizarCancion, useEliminarCancion } from "./useCanciones"
import { CancionForm } from "./CancionForm"
import type { Cancion, CancionFormData } from "../../types/Cancion"

export const CancionesTabla = () => {
    const query = useCanciones()
    const crear = useCrearCancion()
    const actualizar = useActualizarCancion()
    const eliminar = useEliminarCancion()

    const [mostrarForm, setMostrarForm] = useState(false)
    const [editando, setEditando] = useState<Cancion | undefined>(undefined)
    const [mensaje, setMensaje] = useState<string | null>(null)

    const abrirCrear = () => {
        setEditando(undefined)
        setMostrarForm(true)
        setMensaje(null)
    }

    const abrirEditar = (c: Cancion) => {
        setEditando(c)
        setMostrarForm(true)
        setMensaje(null)
    }

    const cerrarForm = () => {
        setMostrarForm(false)
        setEditando(undefined)
        crear.reset()
        actualizar.reset()
    }

    const handleSubmit = (datos: CancionFormData) => {
        if (editando) {
            actualizar.mutate(
                { id: editando._id, datos },
                {
                    onSuccess: () => {
                        setMensaje("Canción actualizada correctamente")
                        cerrarForm()
                    },
                }
            )
        } else {
            crear.mutate(datos, {
                onSuccess: () => {
                    setMensaje("Canción creada correctamente")
                    cerrarForm()
                },
            })
        }
    }

    const handleEliminar = (c: Cancion) => {
        if (!window.confirm(`¿Eliminar "${c.titulo}"? Esta acción no se puede deshacer.`)) return
        eliminar.mutate(c._id, {
            onSuccess: () => setMensaje("Canción eliminada"),
            onError: (err) => setMensaje(`No se pudo eliminar: ${err.message}`),
        })
    }

    if (query.isPending) {
        return <p className="text-muted">Cargando canciones...</p>
    }

    if (query.isError) {
        return (
            <div className="border border-danger bg-danger/10 p-5 text-danger">
                <p className="font-semibold">No se pudo conectar con el servidor</p>
                <p className="text-sm">{query.error.message}</p>
                <button onClick={() => query.refetch()} className="mt-3 bg-danger px-4 py-2 text-sm text-foreground">
                    Reintentar
                </button>
            </div>
        )
    }

    const canciones = query.data ?? []
    const enProceso = crear.isPending || actualizar.isPending || eliminar.isPending

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                    onClick={abrirCrear}
                    className="bg-primary px-5 py-2 text-xs font-bold text-foreground hover:opacity-80"
                >
                    Nueva canción
                </button>
                {mensaje && <p className="text-sm text-success">{mensaje}</p>}
                {enProceso && <p className="text-sm text-muted">Procesando...</p>}
            </div>

            {mostrarForm && (
                <div className="border border-border bg-surface p-6">
                    <CancionForm
                        inicial={editando}
                        cargando={crear.isPending || actualizar.isPending}
                        error={(crear.error ?? actualizar.error)?.message ?? null}
                        onSubmit={handleSubmit}
                        onCancelar={cerrarForm}
                    />
                </div>
            )}

            {canciones.length === 0 ? (
                <p className="text-muted">No hay canciones registradas</p>
            ) : (
                <table className="w-full overflow-hidden bg-background text-left text-sm shadow-lg border border-border">
                    <thead className="bg-primary text-foreground">
                        <tr>
                            {["Título", "Álbum", "Duración", "Reproducciones", "Escuchar", "Acciones"].map(h => (
                                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider" key={h}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {canciones.map(c => (
                            <tr key={c._id} className="hover:bg-surface-subtle transition-colors duration-200">
                                <td className="px-5 py-4 font-semibold text-foreground">{c.titulo}</td>
                                <td className="px-5 py-4 text-muted">{c.album}</td>
                                <td className="px-5 py-4 text-muted">{c.duracion}</td>
                                <td className="px-5 py-4 text-muted">{c.reproducciones_spotify.toLocaleString("es-PE")}</td>
                                <td className="px-5 py-4 text-center">
                                    <a href={c.url_spotify} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary px-4 py-1.5 text-xs font-bold text-foreground hover:opacity-80">
                                        <FontAwesomeIcon icon={faSpotify} />
                                        Spotify
                                    </a>
                                </td>
                                <td className="px-5 py-4">
                                    <div className="flex gap-3">
                                        <button onClick={() => abrirEditar(c)} className="text-xs font-bold text-primary hover:opacity-70">
                                            Editar
                                        </button>
                                        <button onClick={() => handleEliminar(c)} className="text-xs font-bold text-danger hover:opacity-70">
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}