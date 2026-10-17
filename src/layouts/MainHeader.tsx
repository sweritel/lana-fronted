import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"

const navLinks = [
    { to: "/", label: "Inicio", end: true },
    { to: "/canciones", label: "Canciones", end: false },
    { to: "/contacto", label: "Contacto", end: false },
]

export const MainHeader = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        const handleScroll = () => setShowNavbar(window.scrollY > 80)
        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed left-0 top-0 z-50 h-16 w-full border-t-4 border-primary bg-surface-subtle/95 shadow-lg backdrop-blur transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-3">
                <Link to="/" className="text-lg font-bold tracking-widest text-primary">
                    LANA DEL REY
                </Link>

                <nav className="flex items-center gap-6">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) =>
                                `text-xs font-bold tracking-wide transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}