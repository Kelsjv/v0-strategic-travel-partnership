import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function InfrastructureSection() {
  return (
    <section className="relative py-0">

      {/* HERO CINEMÁTICO */}
      <div className="relative h-[45vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/road-trip.jpg"
          alt="Road trip through dramatic desert highway at dusk"
          fill
          className="object-cover"
          quality={85}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <FadeInSection>
            <div className="text-center px-6">
              <p className="text-sm tracking-[0.3em] uppercase text-accent/90 mb-6">
                2026
              </p>

              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground text-balance">
                Infraestructura Narrativa Internacional
              </h2>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* CONTENIDO + IMAGEN */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <FadeInSection>
            <div className="space-y-6">

              <p className="font-serif text-2xl md:text-3xl text-foreground">
                Road trips documentados.
              </p>

              <p className="font-serif text-2xl md:text-3xl text-foreground">
                Hiking en montaña.
              </p>

              <p className="font-serif text-2xl md:text-3xl text-foreground">
                Exploración internacional.
              </p>

              <p className="font-serif text-2xl md:text-3xl text-foreground">
                Viajes grupales liderados.
              </p>

              <div className="space-y-6 pt-8">

                {[
                  "Integración auténtica",
                  "Repetición estratégica",
                  "Posicionamiento acumulativo",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 text-muted-foreground text-lg"
                  >
                    <div className="w-12 h-px bg-accent/60 shrink-0" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}

                <p className="text-foreground font-medium text-lg pt-6 border-t-2 border-accent/30 mt-8">
                  El espacio narrativo se ocupa antes que la competencia.
                </p>

              </div>

            </div>
          </FadeInSection>

          {/* IMAGEN VERTICAL */}
          <FadeInSection delay={150}>
            <div className="relative mx-auto w-[340px] md:w-[420px] h-[520px] md:h-[620px] rounded-lg overflow-hidden shadow-lg">

              <Image
                src="/images/vertical-4.jpeg"
                alt="Travel exploration in extreme landscapes"
                fill
                className="object-cover"
                quality={90}
              />

            </div>
          </FadeInSection>

        </div>

      </div>
    </section>
  )
}
