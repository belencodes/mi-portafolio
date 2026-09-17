import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight"
          >
            Belén Sepúlveda
          </Link>

          <p className="mt-2 max-w-sm text-sm text-foreground/60">
            Diseño y desarrollo de productos digitales con intención.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <div className="flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition-opacity hover:opacity-60"
            >
              LinkedIn
            </a>

            <a
              href="mailto:bybelencodes@gmail.com"
              className="transition-opacity hover:opacity-60"
            >
              Email
            </a>
          </div>

          <p className="text-xs text-foreground/40">
            © 2026 Belen Codes
          </p>
        </div>
      </div>
    </footer>
  );
}