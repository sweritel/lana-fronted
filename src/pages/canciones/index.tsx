import { PageHeader } from "../../components/PageHeader"
import { CancionesTabla } from "./CancionesTabla"

export const Canciones = () => {
    return (
        <>
            <PageHeader
                etiqueta="Discografía"
                titulo="Canciones"
                subtitulo="Las canciones más escuchadas de Lana Del Rey en Spotify."
            />
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-3">
                    <CancionesTabla />
                </div>
            </section>
        </>
    )
}