import { notFound } from 'next/navigation'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ProductDetails } from '@/components/ProductDetails'
import { getProductBySlug, products } from '@/data/products'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  return (
    <main>
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </main>
  )
}
