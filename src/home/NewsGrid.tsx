import Heading from "../components/Headings"
import heroImg from '../assets/banner/extra1.jpg';
import heroImg2 from '../assets/banner/extra2.jpg';
import heroImg3 from '../assets/banner/extra3.webp';
import heroImg4 from '../assets/banner/extra4.jpg';
import heroImg5 from '../assets/banner/extra5.jpg';

interface NewsItem {
  id: string;
  image: string;
  title: string;
  day: string;
  month: string;
  year: string;
}

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

export const DATA_NEWS: NewsItem[] = [
  { id: "n1", image: heroImg,  title: "Nuevo álbum disponible en todas las plataformas", day: "20", month: "sep", year: "2024" },
  { id: "n2", image: heroImg2, title: "Descubre la música y los últimos lanzamientos",   day: "09", month: "sep", year: "2024" },
  { id: "n3", image: heroImg3, title: "Presentación en vivo disponible en streaming",    day: "31", month: "jul", year: "2024" },
  { id: "n4", image: heroImg4, title: "Nueva colección de merchandising ya disponible",  day: "12", month: "jun", year: "2024" },
  { id: "n5", image: heroImg5, title: "Fechas confirmadas para la próxima gira",         day: "03", month: "jun", year: "2024" },
]

const NewsCard = ({ item, index }: NewsCardProps) => {
  return (
    <article className={`w-[80vw] max-w-60 shrink-0 ${index % 2 === 1 ? "mt-10" : "mt-0"}`}>

      <div className="group relative overflow-hidden">
        <figure className="group relative h-72 overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-50"
          />
          <div className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/25" />
        </figure>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <i className="fa-solid fa-ellipsis text-foreground text-xs" />
        </span>
      </div>

      <div className="bg-surface px-3 pt-3 pb-4">
        <Heading level={3} className="text-sm leading-tight text-foreground line-clamp-2 mb-3">
          {item.title}
        </Heading>
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-1">
            <span className="text-xl font-medium leading-none text-muted">
              {item.day}
            </span>
            <div className="flex flex-col pb-px">
              <span className="text-xs uppercase leading-none tracking-wide text-muted">
                {item.month}
              </span>
              <span className="text-xs leading-none tracking-wide text-muted">
                {item.year}
              </span>
            </div>
          </div>
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-foreground no-underline hover:text-primary transition-colors duration-200">
            Leer más
            <i className="fa-solid fa-ellipsis text-xs" />
          </a>
        </div>
      </div>

    </article>
  )
}

export const NewsGrid = () => {
  return (
    <section id="news" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-3">

        <div className="mb-8">
          <Heading level={2} className="text-primary">Noticias</Heading>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4  [&::-webkit-scrollbar]:hidden">
          {DATA_NEWS.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}