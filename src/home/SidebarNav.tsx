import Heading from "../components/Headings"
import heroImg6 from '../assets/banner/extra6.jpg';
import { Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faYoutube,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

export const SidebarNav = () => {
    return (
        <section className="bg-background">

            <div className="max-w-7xl mx-auto px-3">

                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] w-full m-0 p-0">

                    <div className="mr-0 px-4 py-8 md:mr-10 md:px-8 md:py-10">

                        <Heading level={1} className="text-lg! mb-0! tracking-wide text-primary">
                            SYMPHONIOUS
                        </Heading>

                        <nav className="mt-10">
                            <div className="flex flex-col gap-3">
                                <Link to="/" className="text-xs font-bold text-foreground underline transition-colors duration-200 hover:text-primary">Sobre Lana</Link>
                                <Link to="/" className="text-xs font-bold text-foreground underline transition-colors duration-200 hover:text-primary">Música</Link>
                                <Link to="/" className="text-xs font-bold text-foreground underline transition-colors duration-200 hover:text-primary">Videos</Link>
                                <Link to="/" className="text-xs font-bold text-foreground underline transition-colors duration-200 hover:text-primary">Gira</Link>
                                <Link to="/" className="text-xs font-bold text-foreground underline transition-colors duration-200 hover:text-primary">Noticias</Link>
                                <Link to="/contacto" className="text-xs font-bold text-foreground underline transition-colors duration-200 hover:text-primary">Contacto</Link>
                            </div>
                        </nav>

                        <div className="mt-12 flex items-start gap-4 md:mt-20">
                            <p className="mb-0 pt-1 text-xs text-muted [writing-mode:vertical-rl]">
                                Redes sociales
                            </p>
                            <div className="flex flex-col gap-4">
                                <span className="text-lg text-foreground transition-colors duration-200 hover:text-primary">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </span>
                                <span className="text-base text-foreground transition-colors duration-200 hover:text-primary">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </span>
                                <span className="text-lg text-foreground transition-colors duration-200 hover:text-primary">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </span>
                                <span className="text-lg text-foreground transition-colors duration-200 hover:text-primary">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="min-w-0">

                        <div className="relative h-80 overflow-hidden sm:h-105">
                            <img
                                src={heroImg6}
                                alt="Lana del Rey"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-background/70"></div>
                            <div className="relative z-10 px-4 pt-8 sm:px-8 sm:pt-10">
                                <Heading level={2} className="max-w-3xl text-2xl! sm:text-3xl! md:text-4xl! mb-0! leading-snug text-foreground">
                                    <span className="bg-primary/90 px-2 py-1 box-decoration-clone">
                                        Nuevo álbum disponible en todas
                                    </span>
                                    <br />
                                    <span className="bg-primary/90 px-2 py-1 box-decoration-clone">
                                        las plataformas digitales
                                    </span>
                                </Heading>
                                <button className="mt-8 h-12 px-10 bg-primary text-sm font-bold tracking-wide text-foreground">
                                    LEER MÁS&nbsp;&nbsp;...
                                </button>
                            </div>
                            <button className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-primary text-2xl text-foreground">
                                ›
                            </button>
                        </div>

                        <div className="flex min-h-24 flex-wrap items-start gap-4 py-6 px-4 sm:gap-8 sm:px-8">
                            <Heading level={4} className="w-full shrink-0 text-primary mb-0! sm:w-40">
                                Próximos eventos
                            </Heading>
                            <div className="ml-0 flex w-full flex-1 flex-wrap justify-start gap-4 sm:ml-auto sm:justify-end">

                                <div className="group relative flex h-20 w-full items-center overflow-hidden bg-surface-subtle px-4 shadow-md transition-shadow duration-200 hover:shadow-xl sm:w-64">
                                    <div className="absolute inset-0 bg-background/70 transition-colors duration-200 group-hover:bg-background/50"></div>
                                    <div className="relative z-10 flex items-center shrink-0">
                                        <span className="text-3xl font-bold leading-none text-foreground">31</span>
                                        <div className="ml-3 text-xs font-bold uppercase leading-4 text-muted">
                                            <p className="mb-0">dic</p>
                                            <p className="mb-0">26</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 ml-5 min-w-0">
                                        <p className="mb-0 text-sm font-bold text-foreground">Ciudad de México</p>
                                        <p className="mb-0 text-xs text-muted underline">Palacio de los Deportes</p>
                                    </div>
                                </div>

                                <div className="group relative flex h-20 w-full items-center overflow-hidden bg-surface-subtle px-4 shadow-md transition-shadow duration-200 hover:shadow-xl sm:w-64">
                                    <div className="absolute inset-0 bg-background/70 transition-colors duration-200 group-hover:bg-background/50"></div>
                                    <div className="relative z-10 flex items-center shrink-0">
                                        <span className="text-3xl font-bold leading-none text-foreground">05</span>
                                        <div className="ml-3 text-xs font-bold uppercase leading-4 text-muted">
                                            <p className="mb-0">feb</p>
                                            <p className="mb-0">27</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 ml-5 min-w-0">
                                        <p className="mb-0 text-sm font-bold text-foreground">Buenos Aires</p>
                                        <p className="mb-0 text-xs text-muted underline">Movistar Arena</p>
                                    </div>
                                </div>

                                <div className="group relative flex h-20 w-full items-center overflow-hidden bg-surface-subtle px-4 shadow-md transition-shadow duration-200 hover:shadow-xl sm:w-64">
                                    <div className="absolute inset-0 bg-background/70 transition-colors duration-200 group-hover:bg-background/50"></div>
                                    <div className="relative z-10 flex items-center shrink-0">
                                        <span className="text-3xl font-bold leading-none text-foreground">12</span>
                                        <div className="ml-3 text-xs font-bold uppercase leading-4 text-muted">
                                            <p className="mb-0">mar</p>
                                            <p className="mb-0">27</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 ml-5 min-w-0">
                                        <p className="mb-0 text-sm font-bold text-foreground">Santiago</p>
                                        <p className="mb-0 text-xs text-muted underline">Movistar Arena</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}