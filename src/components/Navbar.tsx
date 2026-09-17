import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-6 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight"
        >
          Belen Codes
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#trabajo"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            Trabajo
          </Link>

          <Link
            href="#sobre-mi"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            Sobre mí
          </Link>

          <Link
            href="#habilidades"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            Habilidades
          </Link>

          <Link
            href="#contacto"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            Contacto
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contacto"
          className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Hablemos <span aria-hidden="true">•</span>
        </Link>
      </nav>
    </header>
  );
}