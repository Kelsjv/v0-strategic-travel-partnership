"use client"

import Image from "next/image"
import { FadeInSection } from "./fade-in-section"
import { useEffect, useRef, useState } from "react"

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const stepDuration = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current++
            const progress = current / steps
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(target * eased))

            if (current >= steps) {
              clearInterval(timer)
              setCount(target)
            }
          }, stepDuration)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 750000, suffix: "+", label: "Visualizaciones orgánicas" },
  { value: 528000, suffix: "+", label: "Cuentas alcanzadas" },
  { value: 79, suffix: "%", label: "Audiencia nueva" },
  { value: 0, suffix: "% Ads", label: "Inversión en anuncios" },
  { value: 525, suffix: "%", prefix: "+", label: "Crecimiento en alcance" },
]

export function MetricsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const handleNext = () => {
    if (currentIndex < 9 - itemsPerView) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const visibleItems = Array.from({ length: 9 }, (_, i) => i).slice(
    currentIndex,
    currentIndex + itemsPerView
  )

  return (
    <section className="relative py-24 md:py-40 px-6 border-t border-border bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-24">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8">
              Resultados
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Resultados Reales. Impacto Medible.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              En los últimos 30 días
            </p>
          </div>
        </FadeInSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-28">
          {stats.map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="text-center p-8 bg-background rounded-lg border border-border/50">
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                  <AnimatedNumber
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="text-sm text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Evidence Carousel */}
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-16 text-center">
            Evidencia Visual
          </p>
        </FadeInSection>

        {/* Carrusel con 3 imágenes visibles */}
        <div className="relative flex items-center justify-center gap-6">
          {/* Botón Anterior */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background border border-border/50 rounded-full hover:bg-secondary hover:border-border transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Imagen anterior"
          >
            <span className="text-2xl text-foreground">‹</span>
          </button>

          {/* Grid de 3 imágenes */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {visibleItems.map((i) => (
                <FadeInSection key={i} delay={0}>
                  <div className="group relative overflow-hidden rounded-lg bg-secondary border border-border/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <Image
                      src={`/metrics/metric-${i + 1}.jpg`}
                      alt={`Instagram metrics screenshot ${i + 1}`}
                      width={300}
                      height={450}
                      className="w-full h-auto object-contain opacity-80 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    {/* Overlay en hover - MÁS SUTIL */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Número de imagen */}
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {i + 1}/9
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= 9 - itemsPerView}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background border border-border/50 rounded-full hover:bg-secondary hover:border-border transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Siguiente imagen"
          >
            <span className="text-2xl text-foreground">›</span>
          </button>
        </div>

        {/* Indicador de progreso */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          Imágenes {currentIndex + 1} - {currentIndex + itemsPerView} de 9
        </div>
      </div>
    </section>
  )
}
