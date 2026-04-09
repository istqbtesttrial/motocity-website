import type { Product } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
