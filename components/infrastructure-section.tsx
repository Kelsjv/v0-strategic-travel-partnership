'use client';

import Image from 'next/image';

export function InfrastructureSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Grid Layout: Texto (45%), Imagen (55%) - Más equilibrado */}
        <div className="grid grid-cols-12 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA - Contenido (5 columnas) */}
          <div className="col-span-5 space-y-10">
            
            {/* Títulos principales - Más elegantes */}
            <div className="space-y-5">
              <h2 className="font-serif text-4xl leading-tight text-gray-900 font-light">
                Road trips documentados.
              </h2>
              <h2 className="font-serif text-4xl leading-tight text-gray-900 font-light">
                Hiking en montaña.
              </h2>
              <h2 className="font-serif text-4xl leading-tight text-gray-900 font-light">
                Exploración internacional.
              </h2>
              <h2 className="font-serif text-4xl leading-tight text-gray-900 font-light">
                Viajes grupales liderados.
              </h2>
            </div>

            {/* Pilares estratégicos - Diseño mejorado */}
            <div className="space-y-8 pt-8">
              {[
                { label: "Integración auténtica", description: "Conexión profunda con experiencias reales" },
                { label: "Repetición estratégica", description: "Presencia consistente en la mente del viajero" },
                { label: "Posicionamiento acumulativo", description: "Construcción gradual de autoridad" }
              ].map((pilar, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-px bg-amber-400 mt-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium text-base">{pilar.label}</p>
                    <p className="text-gray-600 text-sm mt-1">{pilar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Insight final - Más destacado */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-900 font-serif text-lg italic leading-relaxed">
                "El espacio narrativo se ocupa antes que la competencia."
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA - Imagen (7 columnas) */}
          <div className="col-span-7 flex justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-3xl blur-2xl -z-10" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200">
                <Image
                  src="/images/vertical-4.jpeg"
                  alt="Mountain hiking adventure"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-amber-400 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
