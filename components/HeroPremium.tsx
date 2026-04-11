import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/data/products'
import './hero-premium.css'

export function HeroPremium({ product }: { product: Product }) {
  return (
    <section className="hero-premium">
      <div className="hero-stage">
        <div className="hero-blade" aria-hidden="true">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M100 0H58C50 12 44 30 44 52C44 73 50 90 60 100H100V0Z" />
          </svg>
        </div>

        <div className="hero-left">
          <p className="hero-premium-eyebrow">MotoCity</p>
          <p className="hero-premium-kicker">Let’s ride the future</p>
          <h1 className="hero-premium-title">
            Future
            <br />
            Motion
          </h1>
          <p className="hero-premium-copy">
            MotoCity met en scène les scooters, accessoires et équipements avec une présentation plus premium, plus claire et plus statutaire.
          </p>
          <div className="hero-premium-actions">
            <Link href="/contact" className="hero-premium-primary">
              Free Order
            </Link>
            <Link href="/products" className="hero-premium-secondary">
              Voir les modèles
            </Link>
          </div>
        </div>

        <div className="hero-scooter" aria-hidden="true">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1.6 / 1' }}>
            <Image src={product.image} alt={product.name} fill priority sizes="42vw" className="object-contain" />
          </div>
        </div>

        <div className="hero-model">
          CAPPUCCINO
          <br />S 125
        </div>
      </div>
    </section>
  )
}
