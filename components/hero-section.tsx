import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Cinematic mountain road at sunrise"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <div className="relative z-10 flex flex-col items-center px-6 py-32 text-center max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.35em] uppercase text-muted-foreground mb-8 animate-fade-in-up">
          Kelly Vega
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-balance animate-fade-in-up animation-delay-200">
          Strategic Travel Media Partnership 2026
        </h1>
        <div className="w-16 h-px bg-accent mt-10 mb-8 animate-fade-in-up animation-delay-400" />
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
          {
            "Integración Aspiracional para Marcas de Protección Internacional — Un modelo estratégico diseñado para posicionar marcas de asistencia de viaje dentro de experiencias internacionales reales."
          }
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-muted-foreground/50 animate-pulse" />
      </div>
    </section>
  )
}
