import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function ClosingSection() {
  return (
    <section className="relative">
      {/* Full-width cinematic background */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-secondary/40">
        <Image
          src="/images/closing-bg.jpg"
          alt="Dramatic mountain lake at sunrise"
          fill
          className="object-cover absolute"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 md:py-48 text-center">
          <FadeInSection>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-10">
              Cierre Estratégico
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-12 text-balance" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
              Posicionamiento antes que competencia
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              {
                "Las marcas que liderarán el mercado no serán las que hablen más fuerte de cobertura. Serán las que logren que viajar protegido se sienta inseparable del viaje."
              }
            </p>
            <p className="text-foreground font-medium text-xl md:text-2xl mb-20">
              {
                "Este partnership está diseñado para ocupar ese espacio."
              }
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="border-t border-border/40 pt-16">
              <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Kelly Vega
              </p>
              <p className="text-sm text-muted-foreground tracking-wide mb-12 uppercase">
                Travel Content Director
              </p>
              <div className="flex flex-col items-center gap-6 text-base text-muted-foreground space-y-4">
                <a
                  href="https://instagram.com/dondeesta_kelly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  Instagram: @dondeesta_kelly
                </a>
                <a
                  href="https://tiktok.com/@dondeesta_kelly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  TikTok: @dondeesta_kelly
                </a>
                <a
                  href="mailto:dondeestakelly@gmail.com"
                  className="hover:text-accent transition-colors duration-300 font-medium"
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
