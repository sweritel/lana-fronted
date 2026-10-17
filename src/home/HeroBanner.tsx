import Heading from "../components/Headings";
import heroImg6 from '../assets/banner/extra5.avif';

export const HeroBanner = () => {
  return (
    <section id="about" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

          <figure className="w-full h-80 sm:h-96 overflow-hidden rounded-lg bg-surface">
            <img
              src={heroImg6}
              alt="Lana Del Rey"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </figure>

          <div>
            <Heading level={2} className="text-foreground">
              Sobre Lana
            </Heading>
            <p className="text-muted leading-7">
              Lana Del Rey es una cantautora estadounidense reconocida por
              su estilo melancólico y cinematográfico, que mezcla dream
              pop, indie y sonidos retro con temas como el amor, la
              nostalgia y la cultura americana.
            </p>
            <p className="text-muted leading-7">
              Desde su debut con Born to Die en 2012, ha construido una de
              las discografías más influyentes de la música contemporánea,
              consolidando un universo estético propio y reconocible.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}