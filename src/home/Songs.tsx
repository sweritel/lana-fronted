import Heading from '../components/Headings'
import { useCanciones } from '../pages/canciones/useCanciones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

export const Canciones = () => {
  const { data: canciones = [], isPending, isError, error, refetch } = useCanciones()

  return (
    <section id="canciones" className="py-20 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-3">

        <Heading level={2} className="text-center text-primary">
          Top Canciones Más Escuchadas
        </Heading>
        <p className="text-center text-muted mb-8">
          Lista interactiva consumida desde la API REST en AlwaysData
        </p>

        {isPending && (
          <p className="text-center text-muted py-8 font-medium">
            Cargando canciones...
          </p>
        )}

        {isError && (
          <div className="rounded-2xl bg-danger/10 p-5 text-danger">
            <p className="font-semibold">Ocurrió un error</p>
            <p className="text-sm">{error.message}</p>
            <button
              onClick={() => refetch()}
              className="mt-3 bg-danger px-4 py-2 text-sm text-foreground"
            >
              Reintentar
            </button>
          </div>
        )}

        {!isPending && !isError && (
          <div className="overflow-x-auto border border-border shadow-lg">
            <table className="w-full bg-background text-left text-sm border-collapse">
              <thead className="bg-primary text-foreground">
                <tr>
                  {['#', 'Título', 'Álbum', 'Duración', 'Reproducciones', 'Escuchar'].map(h => (
                    <th key={h} className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {canciones.map(({ id, titulo, album, duracion, reproducciones_spotify, url_spotify }) => (
                  <tr key={id} className="hover:bg-surface-subtle transition-colors duration-200">
                    <td className="px-5 py-4 font-bold text-primary">{id}</td>
                    <td className="px-5 py-4 font-semibold text-foreground">{titulo}</td>
                    <td className="px-5 py-4 text-muted">{album}</td>
                    <td className="px-5 py-4 text-muted">{duracion}</td>
                    <td className="px-5 py-4 text-muted">{reproducciones_spotify}</td>
                    <td className="px-5 py-4 text-center">
                      <a
                        href={url_spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary hover:opacity-80 text-foreground px-4 py-1.5 text-xs font-bold transition-opacity"
                      >
                        <FontAwesomeIcon icon={faSpotify} />
                        Spotify
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  )
}