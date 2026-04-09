import { NextResponse } from 'next/server'
import { sendOrderEmails } from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const customerName = String(body.customerName || '').trim()
    const customerEmail = String(body.customerEmail || '').trim()
    const customerPhone = String(body.customerPhone || '').trim()
    const model = String(body.model || '').trim()
    const message = String(body.message || '').trim()

    if (!customerName || !customerEmail || !customerPhone || !model) {
      return NextResponse.json({ error: 'Veuillez remplir tous les champs requis.' }, { status: 400 })
    }

    const result = await sendOrderEmails({
      customerName,
      customerEmail,
      customerPhone,
      model,
      message,
    })

    if (!result.ok) {
      return NextResponse.json({ error: result.reason }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Impossible d’envoyer la demande pour le moment.' }, { status: 500 })
  }
}
