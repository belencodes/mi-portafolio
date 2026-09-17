const projects = [
  {
    title: "Cotizarm",
    category: "Producto digital · En desarrollo",
    description:
      "Una herramienta para que profesionales de la manicuría puedan calcular y presentar el valor de sus servicios de forma rápida y visual.",
    technologies: "React Native · Expo · TypeScript",
  },
];

export default function Projects() {
  return (
    <section
      id="trabajo"
      className="border-t border-foreground/10 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 grid gap-8 md:grid-cols-[0.4fr_1fr]">
          <p className="text-xs font-medium tracking-[0.25em]">
            TRABAJO
          </p>

          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Ideas que se convierten en{" "}
              <span className="font-accent italic">productos.</span>
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project) => (
            <article key={project.title}>
              {/* Visual */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-pink">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-serif text-4xl md:text-6xl">
                      {project.title}
                    </p>

                    <p className="mt-3 text-sm text-foreground/60">
                      Preview próximamente
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="mt-8 grid gap-6 md:grid-cols-[0.8fr_1fr_0.5fr]">
                <div>
                  <p className="text-xs font-medium tracking-widest text-foreground/50">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl">
                    {project.title}
                  </h3>
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-foreground/70 md:text-base">
                  {project.description}
                </p>

                <div>
                  <p className="text-xs leading-relaxed text-foreground/50">
                    {project.technologies}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}