import { Suspense } from 'react'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { OrderForm } from '@/components/OrderForm'
import { products } from '@/data/products'

export default function ContactPage() {
  return (
    <main className="pb-4">
      <Navbar />
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#efefec] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:p-8 lg:p-12">
          <Suspense fallback={null}>
            <OrderForm products={products} />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  )
}
