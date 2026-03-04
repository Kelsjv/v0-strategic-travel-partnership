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

        {/* Evidence Grid - 2 Columnas */}
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-16 text-center">
            Evidencia Visual
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {Array.from({ length: 9 }, (_, i) => (
            <FadeInSection key={i} delay={i * 60}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <Image
                  src={`/metrics/metric-${i + 1}.jpeg`}
                  alt={`Instagram metrics screenshot ${i + 1}`}
                  fill
                  className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 p-2"
                />
                {/* Overlay oscuro sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
