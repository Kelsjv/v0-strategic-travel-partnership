import { FadeInSection } from "./fade-in-section"

const ecosystemPoints = [
  "Planifican viajes internacionales reales",
  "Buscan recomendaciones antes de viajar",
  "Consumen contenido con intención concreta",
]

export function EcosystemSection() {
  return (
    <section className="relative py-32 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Ecosistema
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-balance">
            Un ecosistema donde las decisiones ocurren
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            {
              "La audiencia está compuesta por viajeros que toman decisiones antes del checkout. Ese es el territorio estratégico."
            }
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystemPoints.map((point, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <div className="p-8 border border-border/40 rounded-sm">
                <span className="text-accent font-serif text-4xl block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
