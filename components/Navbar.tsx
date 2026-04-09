import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="relative z-30 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-black/10 bg-white/75 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur md:px-6">
        <Link href="/" className="flex items-center gap-3 text-black">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-black text-xs font-semibold tracking-[0.2em] text-white">
            MC
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.28em] sm:block">MotoCity</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-black/70 transition hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
          >
            Log In
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 sm:inline-flex"
          >
            Demander un modèle
          </Link>
        </div>
      </div>
    </header>
  )
}
