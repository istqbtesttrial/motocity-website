import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] sm:rounded-[2rem]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,#f6f6f2_0%,#ecece8_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(0,0,0,0.08),transparent_32%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition duration-700 group-hover:scale-105 sm:p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-4 sm:space-y-5 sm:p-6">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 sm:text-[11px] sm:tracking-[0.38em]">{product.brand} · {product.collection}</p>
          <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em] text-black sm:text-3xl">{product.name}</h3>
          <p className="text-sm leading-6 text-black/60 sm:leading-7">{product.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 rounded-[1.2rem] bg-[#f3f3ef] p-4 text-sm text-black/80 sm:grid-cols-3 sm:rounded-[1.4rem]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">Speed</p>
            <p className="mt-2 font-medium">{product.speed}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">Brand</p>
            <p className="mt-2 font-medium">{product.brand}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">Price</p>
            <p className="mt-2 font-medium">{product.price}</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/products/${product.slug}`} className="text-sm font-medium text-black transition hover:text-black/55">
            Voir détails
          </Link>
          <Link
            href={`/contact?model=${product.slug}`}
            className="w-full rounded-full bg-black px-5 py-2.5 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 sm:w-auto"
          >
            Demander ce modèle
          </Link>
        </div>
      </div>
    </article>
  )
}
