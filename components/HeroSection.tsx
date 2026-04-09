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
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 1.15, stagger: 0.12, ease: 'power3.out' },
      )

      gsap.fromTo(
        '.hero-bike',
        { opacity: 0, scale: 0.9, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.45, ease: 'power3.out', delay: 0.15 },
      )

      gsap.fromTo(
        '.hero-panel',
        { opacity: 0, x: 28 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.35 },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-[#efefec] shadow-[0_28px_70px_rgba(0,0,0,0.16)] lg:rounded-[2.5rem]">
        <div className="grid min-h-[760px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#f5f5f1] p-6 sm:p-8 lg:p-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/8" />

            <div className="flex items-start justify-between gap-4 text-[11px] uppercase tracking-[0.35em] text-black/35">
              <span className="hero-fade-up">Showroom premium scooters</span>
              <span className="hero-fade-up hidden sm:block">Collection 2026</span>
            </div>

            <div className="relative z-10 max-w-md space-y-6 lg:space-y-8">
              <p className="hero-fade-up text-sm uppercase tracking-[0.38em] text-black/45">MotoCity</p>
              <div className="space-y-4">
                <p className="hero-fade-up text-[11px] uppercase tracking-[0.5em] text-black/35">Let’s ride the future</p>
                <h1 className="hero-fade-up text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl">
                  Future
                  <br />
                  Motion
                </h1>
                <p className="hero-fade-up max-w-sm text-sm leading-7 text-black/60 sm:text-base">
                  MotoCity met en scène les scooters, accessoires et équipements avec une présentation plus premium, plus claire et plus statutaire.
                </p>
              </div>

              <div className="hero-fade-up flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  Free Order
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
                >
                  Voir les modèles
                </Link>
              </div>
            </div>

            <div className="hero-fade-up flex items-center justify-between gap-4 pt-10 text-xs uppercase tracking-[0.32em] text-black/40">
              <button className="transition hover:text-black">Prev</button>
              <div className="flex items-center gap-2 text-black/30">
                <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
              </div>
              <button className="transition hover:text-black">Next</button>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#111111]">
            <div className="absolute left-[-10%] top-[-8%] h-[120%] w-[55%] rounded-r-[45%] bg-[#f5f5f1]" />
            <div className="absolute right-0 top-0 flex h-full w-[72px] flex-col">
              <div className="flex-1 border-l border-white/10 bg-white/88 text-[10px] uppercase tracking-[0.4em] text-black/45 [writing-mode:vertical-rl] flex items-center justify-center py-6">
                The Comfort
              </div>
              <div className="flex-1 border-l border-white/10 bg-white/10 text-[10px] uppercase tracking-[0.4em] text-white/50 [writing-mode:vertical-rl] flex items-center justify-center py-6">
                The Luxury
              </div>
            </div>

            <div className="relative flex h-full min-h-[440px] items-center justify-center px-6 py-16 sm:px-10 lg:px-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_20%)]" />
              <p className="absolute right-[86px] top-1/2 -translate-y-1/2 text-[72px] font-semibold uppercase tracking-[-0.06em] text-white/85 sm:text-[96px] lg:text-[120px]">
                EV-B
              </p>

              <div className="hero-bike relative z-10 h-[260px] w-full max-w-[640px] sm:h-[340px] lg:h-[420px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="hero-panel absolute bottom-6 left-6 right-[96px] rounded-[1.35rem] bg-white/10 p-4 backdrop-blur-md sm:bottom-8 sm:left-8 sm:max-w-[430px] sm:p-5">
                <div className="grid grid-cols-3 gap-4 text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">Speed</p>
                    <p className="mt-2 text-sm font-medium sm:text-base">{product.speed}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">Range</p>
                    <p className="mt-2 text-sm font-medium sm:text-base">{product.brand}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">Price</p>
                    <p className="mt-2 text-sm font-medium sm:text-base">{product.price}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="absolute bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-white text-2xl text-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition hover:scale-105"
              >
                +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
