import { FadeInSection } from "./fade-in-section"

export function PartnershipCtaSection() {
  return (
    <section className="relative py-20 px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-balance">
            Exploremos un Partnership
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Si tu marca busca integrarse de forma auténtica dentro de experiencias internacionales reales, estaré encantada de conversar.
          </p>
          <div className="border-t border-border/30 pt-12 mt-12">
            <p className="text-sm text-muted-foreground tracking-wide uppercase mb-6">
              Ponte en contacto
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:dondeestakelly@gmail.com"
                className="text-lg text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                dondeestakelly@gmail.com
              </a>
              <a
                href="https://instagram.com/dondeesta_kelly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                @dondeesta_kelly
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
