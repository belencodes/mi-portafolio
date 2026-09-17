export default function Hero() {
  return (
    <section 
    id="inicio"
    className="px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Content */}
        <div>
          <p className="mb-6 inline-flex rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium tracking-widest">
            DISPONIBLE PARA NUEVOS PROYECTOS
          </p>

          <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Diseño y desarrollo{" "}
            <span className="italic font-accent font-normal">
              productos digitales
            </span>{" "}
            con intención.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Creo experiencias digitales para emprendedoras y negocios con
            grandes ideas, combinando diseño, tecnología y estrategia.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="#trabajo"
              className="rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              Ver mi trabajo →
            </a>

            <a
              href="#contacto"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[560px]">
          <div className="absolute h-72 w-72 rounded-full bg-pink md:h-[420px] md:w-[420px]" />

          <div className="relative z-10 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-8 border-background bg-lavender md:h-96 md:w-96">
            <span className="font-accent text-3xl italic md:text-4xl">
              Tu foto aquí
            </span>
          </div>

          <span className="absolute right-[10%] top-[15%] text-4xl">
            ✦
          </span>

          <span className="absolute bottom-[15%] left-[10%] text-3xl">
            ✦
          </span>

          <div className="absolute bottom-[10%] right-[8%] h-16 w-16 rounded-full bg-olive md:h-20 md:w-20" />

          <div className="absolute left-[8%] top-[12%] h-12 w-12 rounded-full bg-sky md:h-16 md:w-16" />
        </div>
      </div>

      {/* Bottom details */}
      <div className="mx-auto mt-12 flex max-w-7xl items-end justify-between text-[10px] font-medium tracking-[0.25em]">
        <span>SCROLL ↓</span>
        <span>EST. 2026</span>
      </div>
    </section>
  );
}