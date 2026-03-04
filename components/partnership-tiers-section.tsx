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
    <section className="relative py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Niveles de Partnership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-balance">
              Propuesta de Colaboración
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {
                "Trabajo bajo un modelo estratégico de tres niveles: distribución, producción creativa y licenciamiento comercial."
              }
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <FadeInSection key={i} delay={i * 150}>
              <div
                className={`relative flex flex-col p-8 md:p-10 rounded-sm border h-full ${
                  tier.featured
                    ? "border-accent/40 bg-secondary/50"
                    : "border-border/40"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-accent" />
                )}
                <div className="mb-8">
                  <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    {tier.duration}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 text-balance">
                    {tier.name}
                  </h3>
                  <p className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    {tier.price}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
                    Incluye
                  </p>
                  <ul className="space-y-3">
                    {tier.includes.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/60 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {"production" in tier && tier.production && (
                  <div className="mb-6 pt-6 border-t border-border/30">
                    <p className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
                      Producción Creativa
                    </p>
                    <ul className="space-y-3">
                      {tier.production.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent/60 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-xs text-muted-foreground/70 mt-auto pt-6 border-t border-border/20 italic">
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
