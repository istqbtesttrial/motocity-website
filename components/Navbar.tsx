import Link from 'next/link'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/products', label: 'Modèles' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="relative z-30 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 overflow-hidden rounded-[1.6rem] border border-black/10 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur sm:rounded-full md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-black">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-xs font-semibold tracking-[0.2em] text-black">
            MC
          </span>
          <span className="truncate text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em]">MotoCity</span>
        </Link>

        <nav className="order-3 flex w-full items-center justify-center gap-5 border-t border-black/8 pt-3 text-center lg:order-2 lg:w-auto lg:border-t-0 lg:pt-0">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs font-medium uppercase tracking-[0.18em] text-black/70 transition hover:text-black sm:text-sm">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-2 sm:gap-3 lg:order-3">
          <a
            href="https://www.instagram.com/motocitys/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-black transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:px-4 sm:text-sm"
          >
            Instagram
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:-translate-y-0.5 hover:bg-neutral-100 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Demander
          </Link>
        </div>
      </div>
    </header>
  )
}
