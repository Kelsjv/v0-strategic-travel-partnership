<div className="max-w-6xl mx-auto px-6 py-20">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

    {/* COLUMNA IZQUIERDA */}
    <div className="space-y-12">

      <FadeInSection>
        <div className="space-y-6">

          <p className="font-serif text-2xl md:text-3xl text-foreground">
            Road trips documentados.
          </p>

          <p className="font-serif text-2xl md:text-3xl text-foreground">
            Hiking en montaña.
          </p>

          <p className="font-serif text-2xl md:text-3xl text-foreground">
            Exploración internacional.
          </p>

          <p className="font-serif text-2xl md:text-3xl text-foreground">
            Viajes grupales liderados.
          </p>

        </div>
      </FadeInSection>

      <FadeInSection delay={150}>
        <div className="space-y-8 pt-6">

          {[
            "Integración auténtica",
            "Repetición estratégica",
            "Posicionamiento acumulativo",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 text-muted-foreground text-lg"
            >
              <div className="w-12 h-px bg-accent/60 shrink-0" />
              <p className="leading-relaxed">{item}</p>
            </div>
          ))}

          <p className="text-foreground font-medium text-lg pt-6 border-t-2 border-accent/30 mt-8">
            El espacio narrativo se ocupa antes que la competencia.
          </p>

        </div>
      </FadeInSection>

    </div>

    {/* COLUMNA DERECHA (IMAGEN) */}
    <FadeInSection delay={200}>
      <div className="relative mx-auto w-[360px] md:w-[420px] h-[520px] md:h-[620px] rounded-lg overflow-hidden shadow-lg">

        <Image
          src="/images/vertical-4.jpeg"
          alt="Travel exploration in extreme landscapes"
          fill
          className="object-cover"
          quality={90}
        />

      </div>
    </FadeInSection>

  </div>

</div>
