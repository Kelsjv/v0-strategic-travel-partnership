import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function ClosingSection() {
  return (
    <section className="relative">
      {/* Full-width cinematic background */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/closing-bg.jpg"
          alt="Dramatic mountain lake at sunrise"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-background/75" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
          <FadeInSection>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8">
              Cierre Estratégico
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-balance">
              Posicionamiento antes que competencia
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {
                "Las marcas que liderarán el mercado no serán las que hablen más fuerte de cobertura. Serán las que logren que viajar protegido se sienta inseparable del viaje."
              }
            </p>
            <p className="text-foreground font-medium text-xl mb-16">
              {
                "Este partnership está diseñado para ocupar ese espacio."
              }
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="border-t border-border/30 pt-12">
              <p className="font-serif text-2xl text-foreground mb-2">
                Kelly Vega
              </p>
              <p className="text-sm text-muted-foreground tracking-wide mb-8">
                Travel Content Director
              </p>
              <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
                <a
                  href="https://instagram.com/dondeesta_kelly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Instagram: @dondeesta_kelly
                </a>
                <a
                  href="https://tiktok.com/@dondeesta_kelly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  TikTok: @dondeesta_kelly
                </a>
                <a
                  href="mailto:dondeestakelly@gmail.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  dondeestakelly@gmail.com
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
