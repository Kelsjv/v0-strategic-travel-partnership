import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function InfrastructureSection() {
  return (
    <section className="relative py-0">
      {/* Full-width cinematic image */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/road-trip.jpg"
          alt="Road trip through dramatic desert highway at dusk"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <FadeInSection>
            <div className="text-center px-6">
              <p className="text-sm tracking-[0.3em] uppercase text-accent/90 mb-4">
                2026
              </p>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground text-balance">
                Infraestructura Narrativa Internacional
              </h2>
            </div>
          </FadeInSection>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeInSection>
            <div className="space-y-4">
              <p className="font-serif text-xl text-foreground">
                {"Road trips documentados."}
              </p>
              <p className="font-serif text-xl text-foreground">
                {"Hiking en montaña."}
              </p>
              <p className="font-serif text-xl text-foreground">
                {"Exploración internacional."}
              </p>
              <p className="font-serif text-xl text-foreground">
                {"Viajes grupales liderados."}
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className="space-y-6">
              {[
                "Integración auténtica",
                "Repetición estratégica",
                "Posicionamiento acumulativo",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-muted-foreground"
                >
                  <div className="w-8 h-px bg-accent/50" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
              <p className="text-foreground font-medium pt-4 border-t border-border/30">
                {
                  "El espacio narrativo se ocupa antes que la competencia."
                }
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
