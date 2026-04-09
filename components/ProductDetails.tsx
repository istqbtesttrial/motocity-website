import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/data/products'

export function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[1.8rem] bg-[#efefec] shadow-[0_28px_70px_rgba(0,0,0,0.16)] sm:rounded-[2.5rem]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] bg-[#111111] p-5 sm:p-8 lg:min-h-[760px] lg:p-12">
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/45">{product.brand} · {product.collection}</p>
            <p className="absolute left-5 top-5 text-[44px] font-semibold uppercase tracking-[-0.06em] text-white/12 sm:left-auto sm:right-10 sm:top-10 sm:text-[100px] lg:text-[140px]">
              {product.name.split(' ')[0]}
            </p>
            <div className="relative mt-10 h-[220px] w-full sm:h-[360px] lg:mt-24 lg:h-[460px]">
              <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-[1.3rem] bg-white/10 p-3 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
              <div className="grid grid-cols-1 gap-3 text-white sm:grid-cols-3 sm:gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">Speed</p>
                  <p className="mt-2 font-medium">{product.speed}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">Category</p>
                  <p className="mt-2 font-medium">{product.category}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">Price</p>
                  <p className="mt-2 font-medium">{product.price}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-5 sm:space-y-8 sm:p-8 lg:p-12">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.45em] text-black/35">Produit MotoCity</p>
              <h1 className="text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              <p className="max-w-xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">{product.tagline}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-black/35">{product.company}</p>
              <p className="max-w-xl text-sm leading-7 text-black/55 sm:text-base">{product.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/35">{spec.label}</p>
                  <p className="mt-3 text-xl font-medium text-black sm:text-2xl">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
              <p className="text-[11px] uppercase tracking-[0.38em] text-black/35">Points clés</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-black/60">
                {product.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?model=${product.slug}`}
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Commander ce modèle
              </Link>
              <p className="text-lg font-medium text-black">{product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
