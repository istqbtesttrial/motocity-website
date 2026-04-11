import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { HeroPremium } from '@/components/HeroPremium'
import { Navbar } from '@/components/Navbar'
import { ProductGrid } from '@/components/ProductGrid'
import { SectionHeading } from '@/components/SectionHeading'
import { products, featuredProduct } from '@/data/products'

const brands = [
  {
    name: 'SLC',
    description: 'Scooters urbains, néo-rétro et modèles accessibles pour la ville.',
  },
  {
    name: 'Dayun',
    description: 'Ligne urbaine et sportive, avec des modèles city et plus dynamiques.',
  },
  {
    name: 'BBM',
    description: 'Modèles 50cc et 125cc distribués en Tunisie, entre scooter urbain et look rétro.',
  },
  {
    name: 'SYM',
    description: 'Marque reconnue avec des scooters urbains, GT et premium.',
  },
]

export default function HomePage() {
  return (
    <main className="pb-4">
      <Navbar />
      <HeroPremium product={featuredProduct} />

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1440px] rounded-[1.8rem] bg-[#efefec] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:rounded-[2.5rem] sm:p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Showroom"
              title="MotoCity, scooters, accessoires et mobilité urbaine en Tunisie."
              description="Le nouveau showroom reprend les vraies informations MotoCity, les modèles réellement visibles dans l’ancien univers, leurs images locales, puis les remet en scène dans une composition premium plus nette et plus éditoriale."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_36px_rgba(0,0,0,0.05)] sm:rounded-[1.7rem] sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Showroom</p>
                <p className="mt-3 text-lg font-medium text-black">Sahline, route Jammel</p>
              </div>
              <div className="rounded-[1.7rem] bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Marques</p>
                <p className="mt-3 text-lg font-medium text-black">SLC, Dayun, BBM, SYM</p>
              </div>
              <div className="rounded-[1.7rem] bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Contact</p>
                <p className="mt-3 text-lg font-medium text-black">+216 24 969 063</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1440px] space-y-6 rounded-[1.8rem] bg-white p-5 shadow-[0_22px_60px_rgba(0,0,0,0.08)] sm:space-y-8 sm:rounded-[2.5rem] sm:p-8 lg:p-12">
          <SectionHeading
            eyebrow="Catalogue"
            title="Les modèles MotoCity actuellement remis en valeur."
            description="Scooters urbains, néo-rétro, sport, GT ou 50cc, le site réutilise les vrais modèles MotoCity pour construire une vitrine plus sérieuse et plus premium."
          />
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto rounded-[1.8rem] bg-[#efefec] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:rounded-[2.5rem] sm:p-8 lg:max-w-[1440px] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Marques"
              title="Explorer le showroom par univers de marque."
              description="MotoCity présente plusieurs familles de scooters, entre modèles urbains, sport, GT, néo-rétro et mobilités plus accessibles."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {brands.map((brand) => (
                <article key={brand.name} className="rounded-[1.4rem] bg-white p-4 shadow-[0_14px_36px_rgba(0,0,0,0.05)] sm:rounded-[1.7rem] sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">{brand.name}</p>
                  <p className="mt-3 text-sm leading-7 text-black/60">{brand.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto rounded-[1.8rem] bg-white p-5 shadow-[0_22px_60px_rgba(0,0,0,0.08)] sm:rounded-[2.5rem] sm:p-8 lg:max-w-[1440px] lg:p-12">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[1.4rem] bg-[#f3f3ef] p-5 sm:rounded-[1.7rem] sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Facilités</p>
              <h3 className="mt-3 text-xl font-medium text-black">Paiement par facilité</h3>
              <p className="mt-3 text-sm leading-7 text-black/60">Des offres régulièrement communiquées sur les réseaux du showroom selon les modèles et les disponibilités.</p>
            </article>
            <article className="rounded-[1.7rem] bg-[#f3f3ef] p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Accompagnement</p>
              <h3 className="mt-3 text-xl font-medium text-black">Échange direct en showroom</h3>
              <p className="mt-3 text-sm leading-7 text-black/60">Discussion sur les modèles, les prix, les disponibilités et les conditions de vente, directement avec l’équipe MotoCity.</p>
            </article>
            <article className="rounded-[1.7rem] bg-[#f3f3ef] p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Réseaux</p>
              <h3 className="mt-3 text-xl font-medium text-black">Communication active</h3>
              <p className="mt-3 text-sm leading-7 text-black/60">Facebook, Instagram et TikTok servent aussi à annoncer les offres, les modèles et l’actualité du showroom.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 rounded-[1.8rem] bg-white p-5 text-black shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:gap-8 sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.45em] text-black/45">Coordonnées</p>
            <h2 className="text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Prix, disponibilité, visite showroom et demande de modèle.
            </h2>
            <div className="space-y-2 text-sm leading-8 text-black/65 sm:text-base">
              <p>Sahline, route Jammel, Tunisie</p>
              <p>+216 24 969 063 · +216 54 914 615</p>
              <p>stemongicity@gmail.com</p>
              <p>Instagram: @motocitys · TikTok: @motocity25</p>
            </div>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
            >
              Lancer une demande
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
