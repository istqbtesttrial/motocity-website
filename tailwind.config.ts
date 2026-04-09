import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        foreground: '#f5f1e8',
        panel: '#111111',
        line: 'rgba(255,255,255,0.1)',
        accent: '#d6b36a',
        muted: '#9f9b93',
      },
      boxShadow: {
        luxe: '0 25px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 35%), linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0))',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
