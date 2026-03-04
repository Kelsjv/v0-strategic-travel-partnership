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
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/hiking-mountain.jpg"
          alt="Dramatic hiking trail along a mountain ridge at dawn"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative -mt-32 z-10 max-w-3xl mx-auto px-6 py-32">
        {passages.map((text, i) => (
          <FadeInSection key={i} delay={i * 80}>
            <p
              className={`mb-8 leading-relaxed ${
                i === 0 || i === 2
                  ? "font-serif text-2xl md:text-3xl text-foreground"
                  : i === passages.length - 1
                  ? "text-lg text-foreground font-medium border-l-2 border-accent pl-6"
                  : "text-lg text-muted-foreground"
              }`}
            >
              {text}
            </p>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
