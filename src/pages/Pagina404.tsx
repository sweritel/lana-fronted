import { Link, useNavigate } from "react-router"

export const Pagina404 = () => {
    const navigate = useNavigate()

    return (
        <main className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-background px-6 py-20">
            <div aria-hidden="true" className="absolute -right-24 top-10 size-80 rounded-full border border-primary/20" />
            <div aria-hidden="true" className="absolute -left-32 bottom-0 size-96 rounded-full bg-primary/5" />

            <section className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
                <div className="max-w-2xl">
                    <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                        <span className="size-2 rounded-full bg-accent" />
                        Recurso no encontrado
                    </div>

                    <p className="mb-2 text-[clamp(6rem,18vw,12rem)] font-extrabold leading-[0.75] tracking-[-0.08em] text-primary">
                        404
                    </p>

                    <div className="mb-7 mt-10 h-px w-16 bg-accent" />

                    <h1 className="mb-5 max-w-xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                        Parece que esta página{" "}
                        <span className="text-accent">se perdió entre sueños.</span>
                    </h1>

                    <p className="max-w-xl text-base leading-7 text-muted md:text-lg">
                        No encontramos la página que buscas. Es posible que haya
                        cambiado de dirección, haya sido eliminada o que el enlace no sea correcto.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                        >
                            Volver al inicio
                            <span aria-hidden="true">↘</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-primary/25 bg-surface px-6 py-3.5 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                        >
                            <span aria-hidden="true">←</span>
                            Volver atrás
                        </button>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-lg">
                    <div className="absolute -inset-6 rounded-[3rem] border border-accent/10" />
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface p-8 shadow-lg md:p-12">
                        <div className="mb-12 flex items-center justify-between">
                            <div className="flex gap-2" aria-hidden="true">
                                <span className="size-2.5 rounded-full bg-danger/60" />
                                <span className="size-2.5 rounded-full bg-warning/70" />
                                <span className="size-2.5 rounded-full bg-success/70" />
                            </div>
                            <span className="rounded-full border border-primary/15 bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
                                sistema / error
                            </span>
                        </div>
                        <div className="mt-10 flex items-center justify-between gap-5 border-t border-border pt-6">
                            <div>
                                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-muted">Estado</p>
                                <p className="mb-0 font-semibold text-foreground">Ruta inexistente</p>
                            </div>
                            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-xl text-foreground">!</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

/*import { Link } from "react-router"
import Heading from "../components/Headings"


export const Pagina404 = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-3 text-center">
        <Heading level={1} className="text-primary">404</Heading>
        <Heading level={2} className="text-foreground">Página no encontrada</Heading>
        <p className="text-muted mb-8">La página que buscas no existe.</p>
        <Link to="/" className="bg-primary text-foreground px-8 py-3 text-sm font-bold hover:opacity-80 transition-opacity">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}*/