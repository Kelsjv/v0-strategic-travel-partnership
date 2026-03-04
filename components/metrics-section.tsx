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
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    if (currentIndex < 9 - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollToIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToIndex(currentIndex - 1)
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
      const gap = 24 // md:gap-6 = 24px
      const scrollLeft = index * (itemWidth + gap)
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      })
    }
  }

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
          <div className="mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8 text-center">
              Evidencia Visual
            </p>
            <p className="text-muted-foreground text-center text-sm">
              Imagen {currentIndex + 1} de 9
            </p>
          </div>
        </FadeInSection>

        {/* Carrusel */}
        <div className="relative">
          {/* Container de scroll */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {Array.from({ length: 9 }, (_, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <div className="flex-shrink-0 w-80 md:w-96">
                  <div className="group relative overflow-hidden rounded-xl bg-secondary border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={`/metrics/metric-${i + 1}.jpeg`}
                      alt={`Instagram metrics screenshot ${i + 1}`}
                      width={400}
                      height={600}
                      className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 p-2"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Botones de navegación */}
          <div className="flex items-center justify-between mt-8">
            {/* Botón Anterior */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 flex items-center justify-center bg-background border border-border/50 rounded-full hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:border-border transition-all duration-300"
              aria-label="Imagen anterior"
            >
              <span className="text-2xl text-foreground">‹</span>
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i)
                    scrollToIndex(i)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-accent w-8"
                      : "bg-border/50 w-2 hover:bg-border"
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={handleNext}
              disabled={currentIndex === 8}
              className="w-12 h-12 flex items-center justify-center bg-background border border-border/50 rounded-full hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:border-border transition-all duration-300"
              aria-label="Siguiente imagen"
            >
              <span className="text-2xl text-foreground">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
