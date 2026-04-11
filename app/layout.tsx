import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MotoCity | Showroom scooters premium',
  description: 'MotoCity, showroom scooters à Sahline Monastir. Découvrez les modèles, consultez les détails et envoyez une demande de commande.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
