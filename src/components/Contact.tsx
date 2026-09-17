export default function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-foreground/10 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.4fr_1fr]">
          <p className="text-xs font-medium tracking-[0.25em]">
            CONTACTO
          </p>

          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              ¿Tienes una idea?
              <br />
              <span className="font-accent italic">
                Hagámosla realidad.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
              Si tienes un proyecto, una idea o simplemente quieres conversar
              sobre tecnología y productos digitales, escríbeme.
            </p>

            <a
              href="mailto:bybelencodes@gmail.com"
              className="mt-10 inline-flex rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              bybelencodes@gmail.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}