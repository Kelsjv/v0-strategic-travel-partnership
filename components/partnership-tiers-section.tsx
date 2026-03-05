import { FadeInSection } from "./fade-in-section"

const tiers = [
  {
    name: "Strategic Media Partnership",
    duration: "3 Meses",
    price: "USD $3.800",
    description:
      "Diseñado para marcas que buscan posicionamiento y visibilidad estratégica.",
    includes: [
      "1 fotopost cinematográfico premium",
      "2 reels dirigidos estratégicamente",
      "Integraciones en historias con secuencia de conversión",
      "1 integración en TikTok",
      "Código exclusivo para la comunidad",
      "Reporte de métricas",
    ],
    note: "Este nivel se enfoca en distribución y posicionamiento. No incluye derechos comerciales.",
    featured: false,
  },
  {
    name: "Creative Brand Partnership",
    duration: "6 Meses",
    price: "USD $8.500",
    description:
      "Diseñado para marcas que buscan posicionamiento + activos creativos propios.",
    includes: [
      "2 fotoposts cinematográficos premium",
      "3-4 reels dirigidos estratégicamente",
      "Integraciones recurrentes en historias",
      "2 réplicas en TikTok",
      "Integración dentro de viajes grupales",
      "Reporte de resultados",
    ],
    production: [
      "3 piezas UGC en formato vertical",
      "20 fotografías para banco de imágenes profesionales",
      "Licencia de uso orgánico por 6 meses",
    ],
    note: "Este nivel combina distribución y producción de activos para la marca.",
    featured: true,
  },
  {
    name: "Annual Brand Ambassador & Content Director",
    duration: "12 Meses",
    price: "USD $19.000",
    description:
      "Diseñado para marcas que buscan posicionamiento anual, producción continua y activos comerciales reutilizables.",
    includes: [
      "4 fotoposts cinematográficos premium",
      "6 reels dirigidos estratégicamente",
      "Integraciones continuas en historias",
      "Presencia constante en TikTok",
      "Presencia en todos los viajes internacionales",
      "Integración total en viajes grupales",
      "Sesiones estratégicas de planificación",
    ],
    production: [
      "6 piezas UGC premium",
      "40 fotografías para banco de imágenes comercial",
      "Licencia para uso en anuncios durante 6-12 meses",
      "Exclusividad sectorial opcional",
    ],
    note: "Este nivel representa una alianza estratégica completa.",
    featured: false,
  },
]

export function PartnershipTiersSection() {
  return (
    <section className="relative py-20 px-6 border-t border-border bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8">
              Niveles de Partnership
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Propuesta de Colaboración
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {
                "Trabajo bajo un modelo estratégico de tres niveles: distribución, producción creativa y licenciamiento comercial."
              }
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <FadeInSection key={i} delay={i * 150}>
              <div
                className={`relative flex flex-col p-10 md:p-12 rounded-xl border h-full transition-all hover:shadow-lg ${
                  tier.featured
                    ? "border-accent/50 bg-gradient-to-br from-secondary/40 to-secondary/20 ring-1 ring-accent/20"
                    : "border-border/50 bg-background/50 hover:bg-background"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-8 px-4 py-1 bg-accent text-accent-foreground text-xs font-medium tracking-wider uppercase rounded-full">
                    Recomendado
                  </div>
                )}
                <div className="mb-10">
                  <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    {tier.duration}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 text-balance">
                    {tier.name}
                  </h3>
                  <p className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                    {tier.price}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-6">
                    Incluye
                  </p>
                  <ul className="space-y-4">
                    {tier.includes.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-4 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mt-2.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {"production" in tier && tier.production && (
                  <div className="mb-8 pt-8 border-t border-border/30">
                    <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-6">
                      Producción Creativa
                    </p>
                    <ul className="space-y-4">
                      {tier.production.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-4 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mt-2.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-xs text-muted-foreground/70 mt-auto pt-8 border-t border-border/20 italic leading-relaxed">
                  {tier.note}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
