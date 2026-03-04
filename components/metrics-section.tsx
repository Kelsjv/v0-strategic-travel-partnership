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

function ImageModal({
  isOpen,
  imageIndex,
  onClose,
  onNext,
  onPrev,
}: {
  isOpen: boolean
  imageIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background rounded-full border border-border/50 hover:border-border transition-all duration-300"
          aria-label="Cerrar"
        >
          <span className="text-2xl text-foreground">×</span>
        </button>

        {/* Image Container */}
        <div className="relative w-full max-w-4xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
            <Image
              src={`/metrics/metric-${imageIndex + 1}.jpg`}
              alt={`Instagram metrics screenshot ${imageIndex + 1}`}
              fill
              className="object-contain"
              quality={95}
            />
          </div>

          {/* Navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6">
            {/* Previous Button */}
            <button
              onClick={onPrev}
              className="w-12 h-12 flex items-center justify-center bg-background/70 hover:bg-background/90 rounded-full border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm"
              aria-label="Anterior"
            >
              <span className="text-2xl text-foreground">‹</span>
            </button>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="w-12 h-12 flex items-center justify-center bg-background/70 hover:bg-background/90 rounded-full border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm"
              aria-label="Siguiente"
            >
              <span className="text-2xl text-foreground">›</span>
            </button>
          </div>

          {/* Counter and Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 pt-12">
            <div className="text-center">
              <p className="text-muted-foreground text-sm md:text-base mb-2">
                Evidencia Visual
              </p>
              <p className="text-foreground font-medium">
                {imageIndex + 1} de 9
              </p>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                // Este evento se maneja en el componente padre
                // aquí solo mostramos visualmente cuál está activo
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === imageIndex
                  ? "bg-accent w-6"
                  : "bg-border/50 hover:bg-border"
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export function MetricsSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  )

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev !== null ? (prev + 1) % 9 : 0
      )
    }
  }

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev !== null ? (prev - 1 + 9) % 9 : 8
      )
    }
  }

  const handleClose = () => {
    setSelectedImageIndex(null)
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

        {/* Evidence Grid - 3x3 */}
        <FadeInSection>
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-16 text-center">
            Evidencia Visual - Haz click para ver a pantalla completa
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 9 }, (_, i) => (
            <FadeInSection key={i} delay={i * 60}>
              <button
                onClick={() => setSelectedImageIndex(i)}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <Image
                  src={`/metrics/metric-${i + 1}.jpg`}
                  alt={`Instagram metrics screenshot ${i + 1}`}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Overlay oscuro sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon de expand en hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 flex items-center justify-center bg-background/80 rounded-full backdrop-blur-sm">
                    <span className="text-2xl text-foreground">⛶</span>
                  </div>
                </div>
              </button>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={selectedImageIndex !== null}
        imageIndex={selectedImageIndex ?? 0}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  )
}
