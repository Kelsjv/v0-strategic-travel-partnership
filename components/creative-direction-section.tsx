import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function CreativeDirectionSection() {
  return (
    <section className="relative py-20 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Quién soy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-16 text-balance">
            Dirección Creativa — Kelly Vega
          </h2>
        </FadeInSection>

        {/* 50/50 Layout: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <FadeInSection>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/vertical-3.jpg"
                alt="Kelly Vega - Travel Content Director"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
                  Profesión
                </p>
                <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Travel Content Director
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fotógrafa profesional especializada en viajes internacionales y exploración.
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                Soy la persona detrás de esta propuesta.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Durante los últimos años he desarrollado un ecosistema de contenido enfocado en documentar experiencias reales de viaje: road trips, exploración de montaña y destinos internacionales.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi trabajo combina dirección creativa, producción visual cinematográfica y storytelling para integrar marcas dentro de narrativas auténticas de viaje.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* Subsection: Viajes Internacionales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 border-t border-border/30 pt-16">
          <FadeInSection delay={300}>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-6">
                Experiencias
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Viajes Internacionales & Comunidad
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Además de la creación de contenido, lidero experiencias de viaje con mi comunidad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Durante 2026 estaré desarrollando mis próximos viajes internacionales que incluyen exploración de destinos, expediciones de hiking, road trips y viajes grupales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estos viajes funcionan como una plataforma narrativa donde las marcas pueden integrarse de forma auténtica dentro de la experiencia real de viajar.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={450}>
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-8 py-4">
                <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-4">
                  Propósito
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Crear experiencias de viaje auténticas donde las marcas estratégicas se integren naturalmente.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Subsection: Partnership Search */}
        <div className="border-t border-border/30 pt-16">
          <FadeInSection delay={600}>
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-6">
              Próximos Pasos
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              En búsqueda de mis compañeros de viaje estratégicos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Actualmente estoy explorando partnerships con marcas que quieran formar parte de esta nueva etapa de mis viajes internacionales.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mi interés es construir colaboraciones a largo plazo donde la marca pueda integrarse de manera natural dentro del ecosistema de viaje.
                </p>
              </div>

              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Para mantener coherencia dentro de mis viajes y del contenido, solo se integrará un número limitado de partners por categoría durante el año.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
