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
    <section className="relative py-32 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Resultados
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-balance">
              Resultados Reales. Impacto Medible.
            </h2>
            <p className="text-muted-foreground text-lg">
              En los últimos 30 días
            </p>
          </div>
        </FadeInSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24">
          {stats.map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="text-center p-6">
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
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

        {/* Evidence Grid - 3x3 */}
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-8 text-center">
            Evidencia Visual
          </p>
        </FadeInSection>
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {Array.from({ length: 9 }, (_, i) => (
            <FadeInSection key={i} delay={i * 60}>
              <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary">
                <Image
                  src={`/metrics/metric-${i + 1}.jpg`}
                  alt={`Instagram metrics screenshot ${i + 1}`}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 border border-border/20 rounded-sm" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
