import React from 'react';

export default function StrategicTravelSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        
        {/* Grid: Texto a la izquierda, Imagen a la derecha */}
        <div className="grid grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA - Texto */}
          <div className="space-y-12">
            
            {/* Títulos principales */}
            <div className="space-y-6">
              <p className="font-serif text-3xl text-gray-900">
                Road trips documentados.
              </p>
              <p className="font-serif text-3xl text-gray-900">
                Hiking en montaña.
              </p>
              <p className="font-serif text-3xl text-gray-900">
                Exploración internacional.
              </p>
              <p className="font-serif text-3xl text-gray-900">
                Viajes grupales liderados.
              </p>
            </div>

            {/* Pilares estratégicos */}
            <div className="space-y-8 pt-6">
              {[
                "Integración auténtica",
                "Repetición estratégica",
                "Posicionamiento acumulativo"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-12 h-px bg-gray-400" />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>

            {/* Insight final */}
            <div className="pt-6 border-t-2 border-gray-300">
              <p className="text-gray-900 font-medium text-lg">
                El espacio narrativo se ocupa antes que la competencia.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA - Imagen Vertical */}
          <div className="flex justify-center">
            <div className="w-80 h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <img
                src="/images/vertical-4.jpeg"
                alt="Mountain hiking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
