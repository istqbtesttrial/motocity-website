"use client"

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Product } from '@/data/products'

type OrderFormProps = {
  products: Product[]
}

export function OrderForm({ products }: OrderFormProps) {
  const searchParams = useSearchParams()
  const requestedModel = searchParams.get('model') ?? ''
  const initialModel = products.some((product) => product.slug === requestedModel)
    ? products.find((product) => product.slug === requestedModel)?.name ?? products[0]?.name ?? ''
    : products[0]?.name ?? ''

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const productMap = useMemo(() => new Map(products.map((item) => [item.slug, item.name])), [products])

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    setError('')

    const payload = {
      customerName: String(formData.get('customerName') || ''),
      customerEmail: String(formData.get('customerEmail') || ''),
      customerPhone: String(formData.get('customerPhone') || ''),
      model: String(formData.get('model') || ''),
      message: String(formData.get('message') || ''),
    }

    const response = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok) {
      setStatus('error')
      setError(result.error || 'Une erreur est survenue.')
      return
    }

    setStatus('success')
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
      <div className="space-y-6 rounded-[2rem] bg-[#111111] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:p-8 lg:p-10">
        <p className="text-[11px] uppercase tracking-[0.45em] text-white/45">Order Request</p>
        <h1 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
          Une demande simple,
          <br />
          une expérience premium.
        </h1>
        <p className="max-w-xl text-sm leading-8 text-white/65 sm:text-base">
          Sélectionnez un modèle MotoCity, laissez vos coordonnées, et l’équipe revient vers vous pour finaliser la demande sans tunnel e-commerce lourd.
        </p>
        <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/60 backdrop-blur-sm">
          <p className="text-white">Ce flux remplace le paiement en ligne.</p>
          <p>Une confirmation est envoyée au client, pendant que l’administration reçoit la demande complète.</p>
        </div>
      </div>

      <form action={handleSubmit} className="space-y-5 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="text-black">Nom complet</span>
            <input name="customerName" required className="w-full rounded-2xl border border-black/10 bg-[#f5f5f1] px-4 py-3 text-black outline-none transition focus:border-black/40" />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-black">Email</span>
            <input type="email" name="customerEmail" required className="w-full rounded-2xl border border-black/10 bg-[#f5f5f1] px-4 py-3 text-black outline-none transition focus:border-black/40" />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="text-black">Téléphone</span>
            <input name="customerPhone" required className="w-full rounded-2xl border border-black/10 bg-[#f5f5f1] px-4 py-3 text-black outline-none transition focus:border-black/40" />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-black">Modèle</span>
            <select name="model" defaultValue={initialModel} className="w-full rounded-2xl border border-black/10 bg-[#f5f5f1] px-4 py-3 text-black outline-none transition focus:border-black/40">
              {products.map((product) => (
                <option key={product.slug} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="space-y-2 text-sm">
          <span className="text-black">Votre message</span>
          <textarea
            name="message"
            rows={6}
            placeholder={`Je suis intéressé par ${productMap.get(requestedModel) ?? initialModel ?? 'ce modèle'}...`}
            className="w-full rounded-[1.5rem] border border-black/10 bg-[#f5f5f1] px-4 py-3 text-black outline-none transition focus:border-black/40"
          />
        </label>

        <button type="submit" disabled={status === 'loading'} className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 disabled:opacity-60">
          {status === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
        </button>

        {status === 'success' ? <p className="text-sm text-emerald-600">Demande envoyée avec succès. MotoCity vous contactera rapidement.</p> : null}
        {status === 'error' ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
    </div>
  )
}
