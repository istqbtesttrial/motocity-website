import { Resend } from 'resend'

const resendKey = process.env.RESEND_API_KEY
const resend = resendKey ? new Resend(resendKey) : null

export type OrderEmailPayload = {
  customerName: string
  customerEmail: string
  customerPhone: string
  model: string
  message: string
}

export async function sendOrderEmails(payload: OrderEmailPayload) {
  if (!resend) {
    return {
      ok: false,
      reason: 'RESEND_API_KEY missing',
    }
  }

  const adminEmail = process.env.MOTOCITY_ADMIN_EMAIL
  const fromEmail = process.env.MOTOCITY_FROM_EMAIL

  if (!adminEmail || !fromEmail) {
    return {
      ok: false,
      reason: 'Missing MOTOCITY_ADMIN_EMAIL or MOTOCITY_FROM_EMAIL',
    }
  }

  await resend.emails.send({
    from: fromEmail,
    to: adminEmail,
    subject: `Nouvelle demande MotoCity – ${payload.model}`,
    replyTo: payload.customerEmail,
    html: `<h2>Nouvelle demande showroom</h2><p><strong>Nom:</strong> ${payload.customerName}</p><p><strong>Email:</strong> ${payload.customerEmail}</p><p><strong>Téléphone:</strong> ${payload.customerPhone}</p><p><strong>Modèle:</strong> ${payload.model}</p><p><strong>Message:</strong><br/>${payload.message}</p>`,
  })

  await resend.emails.send({
    from: fromEmail,
    to: payload.customerEmail,
    subject: 'Votre demande MotoCity a bien été reçue',
    html: `<h2>Merci ${payload.customerName}</h2><p>Nous avons bien reçu votre demande concernant <strong>${payload.model}</strong>.</p><p>Notre équipe vous contactera rapidement.</p>`,
  })

  return { ok: true }
}
