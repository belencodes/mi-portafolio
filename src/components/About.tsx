export default function About() {
  return (
    <section
      id="sobre-mi"
      className="border-t border-foreground/10 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.4fr_1fr]">
        <div>
          <p className="text-xs font-medium tracking-[0.25em]">
            SOBRE MÍ
          </p>
        </div>

        <div>
          <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Tecnología que se siente{" "}
            <span className="font-accent italic">humana.</span>
          </h2>

          <div className="mt-8 grid gap-6 text-base leading-relaxed text-foreground/70 md:grid-cols-2 md:text-lg">
            <p>
              Soy analista programadora y desarrolladora de productos
              digitales. Me interesa crear soluciones que no solo funcionen,
              sino que también tengan una experiencia clara y agradable.
            </p>

            <p>
              Actualmente estoy construyendo productos enfocados en
              emprendedoras y pequeños negocios, combinando desarrollo,
              diseño y una mirada centrada en las personas que los utilizan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}