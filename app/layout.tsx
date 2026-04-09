import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MotoCity | Showroom premium scooters',
  description: 'Showroom premium MotoCity pour découvrir des scooters haut de gamme et envoyer une demande de commande.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
