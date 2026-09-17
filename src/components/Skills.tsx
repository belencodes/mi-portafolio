const skills = [
  {
    number: "01",
    title: "Desarrollo web",
    description:
      "Construyo interfaces modernas, responsive y orientadas a una buena experiencia de usuario.",
    technologies: "Next.js · React · TypeScript · Tailwind CSS",
  },
  {
    number: "02",
    title: "Productos digitales",
    description:
      "Transformo una idea en una experiencia digital clara, desde la estructura hasta la implementación.",
    technologies: "React Native · Expo · APIs · Git",
  },
  {
    number: "03",
    title: "Diseño & experiencia",
    description:
      "Me interesa que la tecnología sea funcional, intuitiva y visualmente coherente.",
    technologies: "UI · UX · Responsive Design · Design Systems",
  },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="border-t border-foreground/10 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.4fr_1fr]">
          <p className="text-xs font-medium tracking-[0.25em]">
            HABILIDADES
          </p>

          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Código con propósito,{" "}
              <span className="font-accent italic">no solo código.</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-foreground/10">
          {skills.map((skill) => (
            <article
              key={skill.number}
              className="grid gap-6 border-b border-foreground/10 py-10 md:grid-cols-[80px_0.8fr_1fr]"
            >
              <span className="text-xs font-medium tracking-widest text-foreground/50">
                {skill.number}
              </span>

              <h3 className="font-serif text-2xl md:text-3xl">
                {skill.title}
              </h3>

              <div>
                <p className="max-w-lg text-sm leading-relaxed text-foreground/70 md:text-base">
                  {skill.description}
                </p>

                <p className="mt-5 text-xs font-medium tracking-wide text-foreground/50">
                  {skill.technologies}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}