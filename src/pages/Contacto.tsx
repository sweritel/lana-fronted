import { PageHeader } from "../components/PageHeader"
import { Contact } from "../home/Contact"

export const Contacto = () => {
    return (
        <>
            <PageHeader
                etiqueta="Comunícate"
                titulo="Contacto"
                subtitulo="¿Tienes preguntas sobre conciertos, prensa o colaboraciones? Escríbenos."
            />
            <Contact />
        </>
    )
}