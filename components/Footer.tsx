export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-8 lg:pb-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 rounded-[2rem] border border-black/10 bg-white px-6 py-6 text-sm text-black/55 shadow-[0_18px_44px_rgba(0,0,0,0.06)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.22em] text-black">MotoCity</p>
          <p>Showroom scooters, accessoires et demande de commande en Tunisie.</p>
        </div>
        <div className="space-y-1 text-left md:text-right">
          <p>Sahline, route Jammel, Tunisie</p>
          <p>+216 24 969 063 · +216 54 914 615</p>
          <p>stemongicity@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
