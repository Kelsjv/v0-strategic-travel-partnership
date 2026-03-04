import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function StrategicContextSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Contexto Estratégico
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-balance">
              {"¿Qué marca está presente antes del momento de compra?"}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
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
              <p className="text-foreground font-medium text-lg">
                {
                  "Porque la decisión no comienza en el checkout. Comienza en la inspiración."
                }
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/airport-sunrise.jpg"
                alt="Airport terminal at sunrise with traveler silhouette"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-background/10" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
