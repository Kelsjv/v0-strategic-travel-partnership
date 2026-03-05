import { FadeInSection } from "./fade-in-section"

const behaviors = [
  "Consume experiencias antes de reservar",
  "Busca referentes reales",
  "Toma decisiones basadas en familiaridad",
  "Asocia marcas con estilo de viaje",
]

export function TravelerBehaviorSection() {
  return (
    <section className="relative py-20 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Cambio del Viajero
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-balance">
            Cambio en el Comportamiento del Viajero
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            {
              "El viajero internacional actual toma decisiones emocionales primero. Racionales después."
            }
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {behaviors.map((item, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="flex items-start gap-4 p-6 border border-border/50 rounded-sm text-left">
                <span className="text-accent font-serif text-2xl leading-none mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
