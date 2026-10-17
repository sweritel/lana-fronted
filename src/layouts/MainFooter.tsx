import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const redesSociales = [
    { nombre: "Facebook",  vinculo: "https://facebook.com",  icono: faFacebookF },
    { nombre: "YouTube",   vinculo: "https://youtube.com",   icono: faYoutube },
    { nombre: "Instagram", vinculo: "https://instagram.com", icono: faInstagram },
    { nombre: "Twitter",   vinculo: "https://x.com",         icono: faTwitter },
]

export const MainFooter = () => {
    return (
        <footer className="bg-surface py-8">
            <div className="mx-auto flex max-w-7xl flex-col px-3">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <nav className="flex flex-wrap items-center gap-4">
                        <Link to="/" className="text-sm tracking-wide text-muted hover:text-foreground transition-colors duration-200">Inicio</Link>
                        <Link to="/canciones" className="text-sm tracking-wide text-muted hover:text-foreground transition-colors duration-200">Canciones</Link>
                        <Link to="/contacto" className="text-sm tracking-wide text-muted hover:text-foreground transition-colors duration-200">Contacto</Link>
                    </nav>
                    <nav className="flex flex-wrap items-center gap-4">
                        <a href="#" className="text-sm tracking-wide text-muted hover:text-foreground transition-colors duration-200">Términos de uso</a>
                        <a href="#" className="text-sm tracking-wide text-muted hover:text-foreground transition-colors duration-200">Política de privacidad</a>
                    </nav>
                </div>

                <div className="flex items-center justify-center py-6">
                    <div className="flex items-center gap-2.5">
                        {redesSociales.map(iSocial => (
                            <a
                                key={iSocial.nombre}
                                href={iSocial.vinculo}
                                aria-label={iSocial.nombre}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 flex items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-foreground hover:-translate-y-0.5"
                            >
                                <FontAwesomeIcon icon={iSocial.icono} className="text-sm" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <p className="mb-0 text-xs tracking-wide text-muted">
                        ©2024 Lana Del Rey Fan Site. Todos los derechos reservados. Hecho con amor
                    </p>
                </div>

            </div>
        </footer>
    )
}