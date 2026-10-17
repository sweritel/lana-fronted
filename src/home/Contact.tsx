import Heading from "../components/Headings";

export const Contact = () => {
  return (
    <section id="contacts" className="bg-background px-3 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div className="w-full">
            <Heading level={2}>Contacto</Heading>
            <Heading level={3} className="leading-tight">
              Gira y reserva de conciertos
            </Heading>
            <div className="mb-7">
              <p className="text-sm font-bold text-foreground">Llámanos:</p>
              <p className="text-sm text-muted">+51 988 453 223</p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Correo:</p>
              <p className="text-sm text-muted">fanslanadelrey@gmail.com</p>
            </div>
          </div>
          <div className="w-full bg-surface border border-border">
            <div className="p-5 sm:p-8">
              <Heading level={3}>Envíanos un mensaje</Heading>
              <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="h-10 w-full border-b border-border bg-transparent px-2 text-sm text-foreground outline-none placeholder:text-muted focus:border-primary focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico*"
                    className="h-10 w-full border-b border-border bg-transparent px-2 text-sm text-foreground outline-none placeholder:text-muted focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tu mensaje*"
                    className="h-28 w-full resize-none border-b border-border bg-transparent px-2 py-2 text-sm text-foreground outline-none placeholder:text-muted focus:border-primary focus:ring-0"
                  ></textarea>
                </div>
                <div className="flex justify-center sm:col-span-2">
                  <button
                    type="submit"
                    className="h-10 border border-primary bg-primary px-10 text-xs font-bold uppercase tracking-wide text-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};