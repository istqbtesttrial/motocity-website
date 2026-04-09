import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { Navbar } from '@/components/Navbar'
import { ProductGrid } from '@/components/ProductGrid'
import { SectionHeading } from '@/components/SectionHeading'
import { featuredProduct, products } from '@/data/products'

export default function HomePage() {
  return (
    <main className="pb-4">
      <Navbar />
      <HeroSection product={featuredProduct} />

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#efefec] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Collection"
              title="Des scooters mis en scène comme des pièces de showroom."
              description="On reprend les informations utiles du site MotoCity existant, mais avec une nouvelle mise en forme premium, plus nette, plus statutaire et beaucoup plus proche de ton inspiration visuelle."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.7rem] bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Design</p>
                <p className="mt-3 text-lg font-medium text-black">Split screen premium</p>
              </div>
              <div className="rounded-[1.7rem] bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Experience</p>
                <p className="mt-3 text-lg font-medium text-black">GSAP lent et élégant</p>
              </div>
              <div className="rounded-[1.7rem] bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">Conversion</p>
                <p className="mt-3 text-lg font-medium text-black">Demande sans paiement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1440px] space-y-8 rounded-[2.5rem] bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-12">
          <SectionHeading
            eyebrow="Products"
            title="La sélection MotoCity"
            description="Une grille sobre et premium, conçue pour présenter rapidement les modèles, leurs caractéristiques et l’action de demande."
          />
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 rounded-[2.5rem] bg-[#111111] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/45">Contact Flow</p>
            <h2 className="text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Un showroom qui convertit sans devenir une boutique lourde.
            </h2>
            <p className="max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
              Chaque produit renvoie vers une demande de commande simple, avec envoi d’email côté administration et confirmation client via Resend.
            </p>
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
