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
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' },
      )

      gsap.fromTo(
        '.hero-bike',
        { opacity: 0, x: 34, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.14 },
      )

      gsap.fromTo(
        '.hero-panel',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.95, ease: 'power3.out', delay: 0.34 },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-[#f5f5f5] shadow-[0_28px_70px_rgba(0,0,0,0.16)] lg:rounded-[2.5rem]">
        <div className="relative min-h-[680px] overflow-hidden lg:min-h-[780px]">
          <div className="absolute inset-0 bg-[#f5f5f5]" />
          <div className="absolute inset-y-0 right-0 w-[62%] bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_55%_55%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,#111111_0%,#090909_45%,#141414_100%)]" />

          <svg
            className="absolute inset-y-0 right-0 h-full w-[72%] sm:w-[68%] lg:w-[66%]"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroDarkGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0d0d0d" />
                <stop offset="55%" stopColor="#090909" />
                <stop offset="100%" stopColor="#131313" />
              </linearGradient>
            </defs>
            <path
              d="M1000 0 L470 0 C445 80 433 170 437 255 C442 350 408 435 330 505 C254 573 232 678 260 790 C281 874 322 944 374 1000 L1000 1000 Z"
              fill="url(#heroDarkGradient)"
            />
          </svg>

          <div className="relative z-10 grid min-h-[680px] lg:min-h-[780px] lg:grid-cols-[0.88fr_1.12fr]">
            <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-12">
              <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.24em] text-black/35 sm:text-[11px] sm:tracking-[0.35em]">
                <span className="hero-fade-up">Showroom premium scooters</span>
                <span className="hero-fade-up hidden sm:block">Collection 2026</span>
              </div>

              <div className="max-w-[290px] space-y-5 sm:max-w-[380px] sm:space-y-7 lg:max-w-[460px] lg:space-y-8">
                <p className="hero-fade-up text-sm uppercase tracking-[0.38em] text-black/45">MotoCity</p>

                <div className="space-y-4">
                  <p className="hero-fade-up text-[10px] uppercase tracking-[0.42em] text-black/35 sm:text-[11px]">Let’s ride the future</p>
                  <h1 className="hero-fade-up text-[3.15rem] font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-[4.7rem] lg:text-[6.8rem]">
                    Future
                    <br />
                    Motion
                  </h1>
                  <p className="hero-fade-up max-w-[260px] text-sm leading-7 text-black/60 sm:max-w-[320px] sm:text-base">
                    MotoCity met en scène les scooters, accessoires et équipements avec une présentation plus premium, plus claire et plus statutaire.
                  </p>
                </div>

                <div className="hero-fade-up flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(0,0,0,0.2)]"
                  >
                    Free Order
                  </Link>
                  <Link
                    href="/products"
                    className="rounded-full border border-black/10 bg-white/65 px-6 py-3 text-sm font-medium text-black backdrop-blur-md transition duration-300 hover:scale-[1.02]"
                  >
                    Voir les modèles
                  </Link>
                </div>
              </div>

              <div className="hero-fade-up flex items-center justify-between gap-4 pt-8 text-[10px] uppercase tracking-[0.24em] text-black/40 sm:text-xs sm:tracking-[0.32em]">
                <button className="transition hover:text-black">Prev</button>
                <div className="flex items-center gap-2 text-black/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                </div>
                <button className="transition hover:text-black">Next</button>
              </div>
            </div>

            <div className="relative min-h-[420px]">
              <p className="pointer-events-none absolute right-5 top-1/2 z-0 max-w-[190px] -translate-y-1/2 text-[56px] font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-white/14 sm:right-8 sm:max-w-[280px] sm:text-[84px] lg:right-[74px] lg:max-w-[420px] lg:text-[128px]">
                {product.name.replace(' 125', ' S125')}
              </p>

              <div className="hero-bike absolute left-[-28%] top-[44%] z-20 h-[380px] w-[172%] -translate-y-1/2 sm:left-[-24%] sm:h-[480px] lg:left-[-24%] lg:h-[700px]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_46%_54%,rgba(255,255,255,0.12),transparent_22%)]" />
                <div className="absolute left-[20%] right-[26%] top-[58%] h-[18%] rounded-full bg-black/22 blur-3xl" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain drop-shadow-[0_42px_72px_rgba(0,0,0,0.34)]"
                />
              </div>

              <div className="hero-panel absolute bottom-5 left-4 right-[3.8rem] z-30 rounded-[22px] border border-white/12 bg-white/10 p-3 text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-[18px] sm:bottom-8 sm:left-8 sm:max-w-[360px] sm:p-4 lg:left-10 lg:max-w-[390px] lg:p-5">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Vitesse</p>
                    <p className="mt-2 text-xs font-medium sm:text-sm">{product.speed}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Autonomie</p>
                    <p className="mt-2 text-xs font-medium sm:text-sm">{product.range}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Specs</p>
                    <p className="mt-2 text-xs font-medium sm:text-sm">{product.brand}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="absolute bottom-4 right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-white text-xl text-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition duration-300 hover:scale-105 sm:bottom-6 sm:right-5 sm:h-14 sm:w-14 sm:text-2xl"
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
