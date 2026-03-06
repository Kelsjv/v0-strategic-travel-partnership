import Image from "next/image"
import { FadeInSection } from "./fade-in-section"
export function ImageSeparatorSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/vertical-4.jpeg"
              alt="International travel experience and exploration"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
