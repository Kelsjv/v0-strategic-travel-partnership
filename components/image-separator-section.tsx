import Image from "next/image"
import { FadeInSection } from "./fade-in-section"

export function ImageSeparatorSection() {
  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <FadeInSection>
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Contenedor vertical */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/vertical-4.jpeg"
                  alt="International travel experience and exploration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  quality={85}
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
