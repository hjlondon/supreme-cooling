import { Chakra_Petch, Barlow, IBM_Plex_Mono } from 'next/font/google'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import './globals.css'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Supreme Cooling Services — Commercial Air Conditioning Specialists, London',
    template: '%s — Supreme Cooling Services',
  },
  description:
    'Commercial and residential air conditioning installation, maintenance, and repairs across London. NVQ qualified, F-Gas certified, Mitsubishi Heavy Industries Diamond Dealer. 020 3916 5880.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${chakraPetch.variable} ${barlow.variable} ${plexMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
