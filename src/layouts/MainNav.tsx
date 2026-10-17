import { Link } from "react-router"

const NAV_ITEMS = [
    { id: "inicio",    etiqueta: "Inicio",    titulo: "Página principal",        ruta: "/" },
    { id: "canciones", etiqueta: "Canciones", titulo: "Top canciones",           ruta: "/canciones" },
    { id: "contacto",  etiqueta: "Contacto",  titulo: "Siempre en comunicación", ruta: "/contacto" },
]

const estiloLink = `
    block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300
    text-muted hover:text-foreground hover:bg-surface-subtle
    focus-visible:outline-2 focus-visible:outline-ring
`

export const MainNav = () => {
    return (
        <nav aria-label="Principal" className="sticky top-0 z-50 border-b-2 border-border bg-surface/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between gap-4">
                <ul className="hidden md:flex flex-wrap items-center gap-1 list-none">
                    {NAV_ITEMS.map(itemMenu => (
                        <li key={itemMenu.id}>
                            <Link
                                to={itemMenu.ruta}
                                title={itemMenu.titulo}
                                className={estiloLink}
                            >
                                {itemMenu.etiqueta}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}