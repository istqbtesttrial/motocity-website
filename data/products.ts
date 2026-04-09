export type Product = {
  slug: string
  name: string
  collection: string
  tagline: string
  speed: string
  range: string
  price: string
  chargeTime: string
  image: string
  description: string
  highlights: string[]
  specs: { label: string; value: string }[]
}

export const products: Product[] = [
  {
    slug: 'motocity-eclipse-x',
    name: 'Eclipse X',
    collection: 'Urban Signature',
    tagline: 'Lignes tendues, présence forte, élégance urbaine.',
    speed: '95 km/h',
    range: '110 km',
    price: 'À partir de 12 900 DT',
    chargeTime: '3.5 h',
    image: 'https://images.unsplash.com/photo-1558980664-10ea292d6b08?auto=format&fit=crop&w=1600&q=80',
    description:
      'Pensé pour un usage quotidien premium, Eclipse X mêle silhouette sculptée, accélération souple et finition showroom.',
    highlights: ['Démarrage sans clé', 'Éclairage LED signature', 'Cockpit digital panoramique'],
    specs: [
      { label: 'Vitesse max', value: '95 km/h' },
      { label: 'Autonomie', value: '110 km' },
      { label: 'Charge', value: '3.5 h' },
      { label: 'Poids', value: '92 kg' },
    ],
  },
  {
    slug: 'motocity-velar-s',
    name: 'Velar S',
    collection: 'Comfort Line',
    tagline: 'Le minimalisme premium, conçu pour la ville.',
    speed: '85 km/h',
    range: '95 km',
    price: 'À partir de 10 800 DT',
    chargeTime: '4 h',
    image: 'https://images.unsplash.com/photo-1619771914272-5dbbc9f1b4e9?auto=format&fit=crop&w=1600&q=80',
    description:
      'Velar S équilibre confort, design sobre et praticité haut de gamme pour les trajets urbains raffinés.',
    highlights: ['Selle confort double densité', 'Freinage CBS', 'Connectivité mobile'],
    specs: [
      { label: 'Vitesse max', value: '85 km/h' },
      { label: 'Autonomie', value: '95 km' },
      { label: 'Charge', value: '4 h' },
      { label: 'Poids', value: '88 kg' },
    ],
  },
  {
    slug: 'motocity-noir-gt',
    name: 'Noir GT',
    collection: 'Grand Touring',
    tagline: 'Une allure statutaire, pensée pour durer.',
    speed: '105 km/h',
    range: '140 km',
    price: 'À partir de 14 700 DT',
    chargeTime: '5 h',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1600&q=80',
    description:
      'Noir GT s’adresse aux clients qui veulent davantage de caractère, d’autonomie et de présence visuelle.',
    highlights: ['Double suspension premium', 'Mode sport intelligent', 'Finition noir satiné'],
    specs: [
      { label: 'Vitesse max', value: '105 km/h' },
      { label: 'Autonomie', value: '140 km' },
      { label: 'Charge', value: '5 h' },
      { label: 'Poids', value: '99 kg' },
    ],
  },
]

export const featuredProduct = products[0]

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
