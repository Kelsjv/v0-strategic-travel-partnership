import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

const passages = [
  "El viaje comienza mucho antes de despegar.",
  "Un aeropuerto al amanecer. Una carretera que cruza montañas. Un hiking que desafía el clima. Una frontera que cambia la perspectiva.",
  "El viaje moderno es identidad.",
  "Pero cada experiencia extraordinaria comparte algo implícito: Riesgo.",
  "Cuando la protección aparece dentro de la experiencia, deja de ser un gasto adicional. Se convierte en parte natural del viaje.",
]

export function AspirationalSection() {
  return (
    <section className="relative py-0">
      {/* Full-width cinematic image */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/hiking-mountain.jpg"
          alt="Dramatic hiking trail along a mountain ridge at dawn"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative -mt-40 md:-mt-48 z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            {passages.map((text, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <p
                  className={`mb-12 leading-relaxed ${
                    i === 0 || i === 2
                      ? "font-serif text-2xl md:text-4xl text-foreground"
                      : i === passages.length - 1
                      ? "text-lg md:text-xl text-foreground font-medium border-l-4 border-accent pl-8 bg-background/80 backdrop-blur p-6 rounded-lg"
                      : "text-lg md:text-xl text-muted-foreground"
                  }`}
                  style={i === 0 || i === 2 ? { textShadow: '0 4px 12px rgba(0,0,0,0.4)' } : (i === passages.length - 1 ? { textShadow: '0 2px 8px rgba(0,0,0,0.3)' } : { textShadow: '0 2px 8px rgba(0,0,0,0.3)' })}
                >
                  {text}
                </p>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={400}>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden sticky top-20">
              <Image
                src="/images/vertical-1.jpg"
                alt="Inspirational travel destination and exploration"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
