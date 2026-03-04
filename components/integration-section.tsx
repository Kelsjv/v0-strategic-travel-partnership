import { FadeInSection } from "./fade-in-section"

export function IntegrationSection() {
  return (
    <section className="relative py-32 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Integración vs Publicidad
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-balance">
            De publicidad a integración estratégica
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FadeInSection delay={0}>
            <div className="border-t border-accent/50 pt-6">
              <p className="font-serif text-xl mb-3 text-foreground">
                La publicidad interrumpe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {
                  'No se trata de decir "compra un seguro". Se trata de mostrar que viajar protegido es parte natural del viaje moderno.'
                }
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className="border-t border-accent/50 pt-6">
              <p className="font-serif text-xl mb-3 text-foreground">
                La narrativa integra.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "Cuando la marca se integra orgánicamente en experiencias reales, aumenta recordación y reduce fricción."
                }
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="border-t border-accent/50 pt-6">
              <p className="font-serif text-xl mb-3 text-foreground">
                Se diferencia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "Se diferencia más allá del precio. La marca se convierte en parte inseparable de la experiencia de viaje."
                }
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
