import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ProductGrid } from '@/components/ProductGrid'
import { SectionHeading } from '@/components/SectionHeading'
import { products } from '@/data/products'

export default function ProductsPage() {
  return (
    <main className="pb-4">
      <Navbar />
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1440px] space-y-8 rounded-[2.5rem] bg-[#efefec] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:p-8 lg:p-12">
          <SectionHeading
            eyebrow="Products"
            title="Le catalogue MotoCity"
            description="Des modèles premium présentés avec une composition plus éditoriale, plus showroom, et directement orientée vers la demande client."
          />
          <ProductGrid products={products} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
