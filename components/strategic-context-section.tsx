import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function StrategicContextSection() {
  return (
    <section className="relative py-24 md:py-40 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeInSection>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8">
              Contexto Estratégico
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-12 text-balance">
              {"¿Qué marca está presente antes del momento de compra?"}
            </h2>
            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
              <p>
                {
                  "El mercado de asistencias de viaje enfrenta alta competencia con productos similares, diferenciación limitada basada en cobertura, y competencia creciente en precio."
                }
              </p>
              <p>
                {
                  "Las decisiones están influenciadas por percepción y recordación. La pregunta estratégica no es quién ofrece más beneficios."
                }
              </p>
              <p className="text-foreground font-medium text-xl border-l-4 border-accent pl-6">
                {
                  "Porque la decisión no comienza en el checkout. Comienza en la inspiración."
                }
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/airport-sunrise.jpg"
                alt="Airport terminal at sunrise with traveler silhouette"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
