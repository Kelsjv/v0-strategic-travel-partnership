import { FadeInSection } from "./fade-in-section"

const modelPoints = [
  "Distribución estratégica en medios propios",
  "Producción cinematográfica premium",
  "Activos reutilizables",
  "Licenciamiento comercial",
  "Integración en viajes grupales",
]

export function PartnershipModelSection() {
  return (
    <section className="relative py-32 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Modelo Estratégico
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-balance">
            Modelo de Partnership
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
            {
              "Este modelo combina distribución, producción y licenciamiento. No es visibilidad aislada. Es posicionamiento sostenido."
            }
          </p>
        </FadeInSection>

        <div className="flex flex-col gap-4">
          {modelPoints.map((point, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div className="flex items-center gap-6 py-5 border-b border-border/30 group">
                <span className="text-accent/60 font-serif text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground text-lg group-hover:text-accent transition-colors duration-300">
                  {point}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
