import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Apollo Groups – #1 Premium Streaming Service 2026',
  description:
    'Apollo Groups is the leading IPTV subscription service. Access 49,000+ live channels, 65,000+ movies & series in 4K UHD. 24/7 WhatsApp support. Free trial available!',
  keywords: [
    'Apollo Groups',
    'Apollo Group',
    'Apollo IPTV',
    'best IPTV service',
    'premium IPTV subscription',
    'IPTV streaming service',
    'buy IPTV',
    'IPTV provider',
    '4K IPTV',
    'cheap IPTV subscription',
    'IPTV Smarters',
    'Firestick IPTV',
    'IPTV free trial',
    'IPTV channels list',
    'IPTV subscription 2026',
    'best IPTV provider',
    'IPTV reseller',
    'live TV streaming',
    'sports IPTV',
  ],
  openGraph: {
    title: 'Apollo Groups – #1 Premium Streaming Service 2026',
    description:
      'Apollo Groups delivers 49,000+ live channels and 65,000+ movies in 4K UHD. Join thousands of satisfied subscribers worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Apollo Groups',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apollo Groups – #1 Premium Streaming Service 2026',
    description:
      'Apollo Groups delivers 49,000+ live channels and 65,000+ movies in 4K UHD. Join thousands of satisfied subscribers worldwide.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://apollogroupsiptv.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
