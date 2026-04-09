"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import type { Product } from '@/data/products'

export function HeroSection({ product }: { product: Product }) {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade-up',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' },
      )

      gsap.fromTo(
        '.hero-bike',
        { opacity: 0, x: 28, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1.15, ease: 'power3.out', delay: 0.14 },
      )

      gsap.fromTo(
        '.hero-panel',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.95, ease: 'power3.out', delay: 0.28 },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(0,0,0,0.16)] lg:rounded-[2.5rem]">
        <div className="relative h-screen min-h-[760px] overflow-hidden">
          <div className="absolute left-0 top-0 z-[1] h-full w-[70%] bg-[#f5f5f5]" />

          <div
            className="absolute right-0 top-0 z-[2] h-full w-[45%] bg-[linear-gradient(180deg,#0a0a0a_0%,#000000_100%)]"
            style={{ clipPath: 'path("M100% 0 L60% 0 C55% 15%, 65% 35%, 60% 55% C55% 70%, 70% 85%, 100% 100% Z")' }}
          />

          <div className="absolute left-[8%] top-[30%] z-[3] w-[40%] max-w-[520px] -translate-y-1/2">
            <div className="hero-fade-up mb-5 text-sm uppercase tracking-[0.38em] text-black/45">MotoCity</div>
            <div className="hero-fade-up mb-3 text-[11px] uppercase tracking-[0.42em] text-black/35">Let’s ride the future</div>
            <h1 className="hero-fade-up text-[64px] font-semibold uppercase leading-[1.05] tracking-[-1px] text-black">
              Future
              <br />
              Motion
            </h1>
            <p className="hero-fade-up mt-6 max-w-[340px] text-base leading-8 text-black/60">
              MotoCity met en scène les scooters, accessoires et équipements avec une présentation plus premium, plus claire et plus statutaire.
            </p>

            <div className="hero-fade-up mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(0,0,0,0.2)]"
              >
                Free Order
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-black backdrop-blur-md transition duration-300 hover:scale-[1.02]"
              >
                Voir les modèles
              </Link>
            </div>
          </div>

          <p
            className="pointer-events-none absolute left-[58%] top-[52%] z-[3] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_right,#222_0%,#222_50%,#ffffff_50%,#ffffff_100%)] bg-clip-text text-[80px] font-bold uppercase tracking-[2px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          >
            {product.name.replace(' 125', ' S125')}
          </p>

          <div className="hero-bike absolute bottom-[18%] right-[18%] z-[4] w-[42%] translate-x-[10%]" style={{ filter: 'drop-shadow(0px 30px 40px rgba(0,0,0,0.35))' }}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="relative aspect-[1.6/1] w-full">
              <Image src={product.image} alt={product.name} fill priority sizes="42vw" className="object-contain" />
            </div>
          </div>

          <div className="hero-panel absolute bottom-[12%] left-1/2 z-[5] h-[90px] w-[420px] -translate-x-1/2 rounded-[20px] border border-white/15 bg-white/10 backdrop-blur-[20px]">
            <div className="grid h-full grid-cols-3 gap-4 px-6 text-white">
              <div className="flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Vitesse</p>
                <p className="mt-2 text-sm font-medium">{product.speed}</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Autonomie</p>
                <p className="mt-2 text-sm font-medium">{product.range}</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Specs</p>
                <p className="mt-2 text-sm font-medium">{product.brand}</p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="absolute bottom-[11.5%] right-[6%] z-[5] grid h-14 w-14 place-items-center rounded-full bg-white text-2xl text-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition duration-300 hover:scale-105"
          >
            +
          </Link>
        </div>
      </div>
    </section>
  )
}
