import Heading from "../components/Headings"
import heroImg from '../assets/banner/borntodie.jpg';
import heroImg2 from '../assets/banner/ultraviolence.webp';
import heroImg3 from '../assets/banner/honeymoon.jpg';
import heroImg4 from '../assets/banner/norman.jpg';

export interface AlbumItem {
  id: string;
  title: string;
  year: string;
  genre: string;
  image: string;
  offset?: boolean;
}

export const DATA_ALBUMS: AlbumItem[] = [
  { id: "a1", title: "Born to Die",             year: "2012", genre: "Pop, Dream pop",   image: heroImg,  offset: false },
  { id: "a2", title: "Ultraviolence",            year: "2014", genre: "Alternative rock", image: heroImg2, offset: true  },
  { id: "a3", title: "Honeymoon",                year: "2015", genre: "Baroque pop",      image: heroImg3, offset: false },
  { id: "a4", title: "Norman Fucking Rockwell!", year: "2019", genre: "Indie folk",       image: heroImg4, offset: true  },
]

export const Discography = () => {
  return (
    <section id="music" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-3">

        <div className="mb-8">
          <Heading level={2} className="text-primary">Discografía</Heading>
          <p className="text-muted">Recorrido por los álbumes de estudio</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DATA_ALBUMS.map(album => (
            <article key={album.id} className={album.offset ? "mt-10" : "mt-0"}>

              <figure className="group relative aspect-3/4 overflow-hidden bg-surface-subtle shadow-md transition-shadow duration-300 hover:shadow-xl">
                <img
                  src={album.image}
                  alt={album.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/25" />
              </figure>

              <div className="mt-4">
                <Heading level={4} className="mb-1">{album.title}</Heading>
                <p className="text-xs text-primary mb-0">{album.year}</p>
                <p className="text-xs text-muted mb-0">{album.genre}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}