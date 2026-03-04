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
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      })
      
      // Update scroll position
      setTimeout(() => {
        if (scrollContainerRef.current) {
          setScrollPosition(scrollContainerRef.current.scrollLeft)
        }
      }, 100)
    }
  }

  const onScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft)
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

        {/* Evidence Carousel Horizontal Compacto */}
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8 text-center">
            Evidencia Visual
          </p>
        </FadeInSection>

        {/* Carrusel Container */}
        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
            }}
          >
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="flex-shrink-0 w-48 md:w-56">
                <FadeInSection delay={i * 30}>
                  <div className="group/item relative overflow-hidden rounded-lg bg-secondary border border-border/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                    <Image
                      src={`/metrics/metric-${i + 1}.jpeg`}
                      alt={`Instagram metrics screenshot ${i + 1}`}
                      width={300}
                      height={450}
                      className="w-full h-auto object-contain opacity-85 group-hover/item:opacity-100 transition-opacity duration-300 p-1"
                    />
                    {/* Overlay en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    
                    {/* Número de imagen */}
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground opacity-0 group-hover/item:opacity-100 transition-opacity">
                      {i + 1}/9
                    </div>
                  </div>
                </FadeInSection>
              </div>
            ))}
          </div>

          {/* Botón Anterior - Visible en hover */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background border border-border/50 rounded-full hover:bg-secondary hover:border-border transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Scroll izquierda"
          >
            <span className="text-xl md:text-2xl text-foreground">‹</span>
          </button>

          {/* Botón Siguiente - Visible en hover */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background border border-border/50 rounded-full hover:bg-secondary hover:border-border transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Scroll derecha"
          >
            <span className="text-xl md:text-2xl text-foreground">›</span>
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="text-center mt-6 text-xs text-muted-foreground">
          Desliza horizontalmente o usa las flechas
        </div>
      </div>
    </section>
  )
}
