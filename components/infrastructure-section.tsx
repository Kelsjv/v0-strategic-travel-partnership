'use client';

import Image from 'next/image';

export function InfrastructureSection() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Layout: Texto izquierda (2 cols), Imagen derecha (3 cols) */}
        <div className="grid grid-cols-5 gap-12 items-stretch min-h-[600px]">
          
          {/* COLUMNA IZQUIERDA - Contenido (2 columnas) */}
          <div className="col-span-2 space-y-12">
            
            {/* Títulos principales */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-gray-900">
                Road trips documentados.
              </h2>
              <h2 className="font-serif text-3xl text-gray-900">
                Hiking en montaña.
              </h2>
              <h2 className="font-serif text-3xl text-gray-900">
                Exploración internacional.
              </h2>
              <h2 className="font-serif text-3xl text-gray-900">
                Viajes grupales liderados.
              </h2>
            </div>

            {/* Pilares estratégicos */}
            <div className="space-y-6">
              {[
                "Integración auténtica",
                "Repetición estratégica",
                "Posicionamiento acumulativo"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-px bg-amber-400" />
                  <p className="text-gray-700 text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Insight final */}
            <div className="pt-4 border-t border-gray-300">
              <p className="text-gray-900 font-medium text-base max-w-sm">
                El espacio narrativo se ocupa antes que la competencia.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA - Imagen (3 columnas) */}
          <div className="col-span-3 flex items-stretch">
            <div className="w-full rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <Image
                src="/images/vertical-4.jpeg"
                alt="Mountain hiking adventure"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
