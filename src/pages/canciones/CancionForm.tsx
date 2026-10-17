import { useState, type FormEvent } from "react"
import type { Cancion, CancionFormData } from "../../types/Cancion"

interface CancionFormProps {
    inicial?: Cancion
    cargando: boolean
    error?: string | null
    onSubmit: (datos: CancionFormData) => void
    onCancelar: () => void
}

const valoresIniciales = (c?: Cancion): CancionFormData => ({
    titulo: c?.titulo ?? "",
    album: c?.album ?? "",
    duracion: c?.duracion ?? "",
    reproducciones_spotify: c?.reproducciones_spotify ?? 0,
    url_spotify: c?.url_spotify ?? "",
})

const validar = (v: CancionFormData): Record<string, string> => {
    const errores: Record<string, string> = {}
    if (!v.titulo.trim()) errores.titulo = "El título es obligatorio"
    if (!v.album.trim()) errores.album = "El álbum es obligatorio"
    if (!/^\d{1,2}:[0-5]\d$/.test(v.duracion)) errores.duracion = "Formato m:ss, ej. 4:41"
    if (v.reproducciones_spotify < 0) errores.reproducciones_spotify = "No puede ser negativo"
    if (!/^https?:\/\//.test(v.url_spotify)) errores.url_spotify = "Debe ser una URL válida"
    return errores
}

export const CancionForm = ({ inicial, cargando, error, onSubmit, onCancelar }: CancionFormProps) => {
    const [valores, setValores] = useState<CancionFormData>(valoresIniciales(inicial))
    const [errores, setErrores] = useState<Record<string, string>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValores(prev => ({
            ...prev,
            [name]: name === "reproducciones_spotify" ? Number(value) : value,
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const nuevosErrores = validar(valores)
        setErrores(nuevosErrores)
        if (Object.keys(nuevosErrores).length === 0) onSubmit(valores)
    }

    const campo = "w-full bg-transparent border-b border-border px-2 py-2 text-sm text-foreground outline-none focus:border-primary"

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
                <input name="titulo" value={valores.titulo} onChange={handleChange} placeholder="Título" className={campo} />
                {errores.titulo && <p className="mt-1 text-xs text-danger">{errores.titulo}</p>}
            </div>
            <div>
                <input name="album" value={valores.album} onChange={handleChange} placeholder="Álbum" className={campo} />
                {errores.album && <p className="mt-1 text-xs text-danger">{errores.album}</p>}
            </div>
            <div>
                <input name="duracion" value={valores.duracion} onChange={handleChange} placeholder="Duración (4:41)" className={campo} />
                {errores.duracion && <p className="mt-1 text-xs text-danger">{errores.duracion}</p>}
            </div>
            <div>
                <input type="number" name="reproducciones_spotify" value={valores.reproducciones_spotify} onChange={handleChange} placeholder="Reproducciones" className={campo} />
                {errores.reproducciones_spotify && <p className="mt-1 text-xs text-danger">{errores.reproducciones_spotify}</p>}
            </div>
            <div className="sm:col-span-2">
                <input name="url_spotify" value={valores.url_spotify} onChange={handleChange} placeholder="URL de Spotify" className={campo} />
                {errores.url_spotify && <p className="mt-1 text-xs text-danger">{errores.url_spotify}</p>}
            </div>

            {error && <p className="sm:col-span-2 text-sm text-danger">{error}</p>}

            <div className="flex justify-end gap-3 sm:col-span-2">
                <button type="button" onClick={onCancelar} className="px-4 py-2 text-xs font-bold text-muted hover:text-foreground">
                    Cancelar
                </button>
                <button type="submit" disabled={cargando} className="bg-primary px-6 py-2 text-xs font-bold text-foreground hover:opacity-80 disabled:opacity-50">
                    {cargando ? "Guardando..." : inicial ? "Actualizar" : "Crear"}
                </button>
            </div>
        </form>
    )
}