import type { Metadata, Viewport } from 'next'
import { Heebo, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const heebo = Heebo({ subsets: ['hebrew'], variable: '--font-heebo' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'IPTV ישראל - שידורי טלוויזיה באיכות 4K',
  description:
    'הצטרפו ל-IPTV ישראל, שירות ה-IPTV המוביל בארץ. מעל 20,000 ערוצים, סרטים וספורט בשידור חי ב-4K. תמיכה ב-WhatsApp 24/7. הירשם עכשיו!',
  keywords: [
    'IPTV ישראל',
    'מנוי IPTV',
    'IPTV ישראל',
    'best IPTV service',
    'premium IPTV subscription',
    'ערוצי ספורט בשידור חי',
    'buy IPTV',
    'IPTV provider',
    'IPTV 4K',
    'cheap IPTV subscription',
    'IPTV Smarters',
    'Firestick IPTV',
    'IPTV free trial',
    'IPTV channels list',
    'IPTV streaming service',
    'IPTV subscription',
    'best IPTV provider',
    'IPTV reseller',
  ],
  openGraph: {
    title: 'IPTV ישראל - שידורי טלוויזיה באיכות 4K',
    description:
      'הצטרפו ל-IPTV ישראל, שירות ה-IPTV המוביל בארץ. מעל 20,000 ערוצים, סרטים וספורט בשידור חי ב-4K. תמיכה ב-WhatsApp 24/7. הירשם עכשיו!',
    type: 'website',
    locale: 'he_IL',
    siteName: 'IPTV ישראל',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV ישראל - שידורי טלוויזיה באיכות 4K',
    description:
      'הצטרפו ל-IPTV ישראל, שירות ה-IPTV המוביל בארץ. מעל 20,000 ערוצים, סרטים וספורט בשידור חי ב-4K. תמיכה ב-WhatsApp 24/7. הירשם עכשיו!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://iptv.co.il',
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
    <html lang="he" dir="rtl" className={`${heebo.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased text-right">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
