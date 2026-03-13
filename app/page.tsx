import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustMetrics from "@/components/trust-metrics"
import ChannelSearch from "@/components/channel-search"
import Pricing from "@/components/pricing"
import InstallationTabs from "@/components/installation-tabs"
import ComparisonTable from "@/components/comparison-table"
import ResellerCTA from "@/components/reseller-cta"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Apollo Groups",
  url: "https://apollogroupsiptv.com",
  description:
    "Apollo Groups is the leading IPTV provider in 2026. Watch 49,000+ live channels and 65,000+ movies & series in 4K UHD on any device.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212-707-711-512",
    contactType: "customer service",
    availableLanguage: ["English", "French", "Arabic", "Spanish"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Apollo Groups and why is it the best IPTV service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apollo Groups is a premium IPTV subscription service providing access to 49,000+ live TV channels and 65,000+ movies and series in 4K UHD quality.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an Apollo Groups subscription cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apollo Groups offers five flexible plans: $15.99/month, $35.99 for 3 months, $59.99 for 6 months, $89.99 for 12 months, and $139.99 for 24 months.",
      },
    },
    {
      "@type": "Question",
      name: "Does Apollo Groups offer a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Apollo Groups offers a 3-hour free trial so you can test the quality before purchasing a subscription.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Apollo Groups on my device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Setup takes under 5 minutes. Download a compatible IPTV player on your Smart TV, Firestick, Android, iOS or MAG device, enter your credentials, and start watching.",
      },
    },
    {
      "@type": "Question",
      name: "What channels are included in Apollo Groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apollo Groups includes 49,000+ channels from around the world, including live sports, entertainment, news, kids channels, plus 65,000+ movies and series.",
      },
    },
  ],
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Apollo Groups Premium Subscription",
  description:
    "The best and most reliable IPTV subscription service with 49,000+ live channels, 65,000+ VOD titles, 4K UHD streaming quality and anti-freeze technology.",
  brand: { "@type": "Brand", name: "Apollo Groups" },
  offers: [
    {
      "@type": "Offer",
      name: "1 Month Plan",
      price: "15.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "3 Month Plan",
      price: "35.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "6 Month Plan",
      price: "59.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "12 Month Plan",
      price: "89.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "24 Month Plan",
      price: "139.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12847",
    bestRating: "5",
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* JSON-LD Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Navbar />
      <Hero />
      <TrustMetrics />
      <ChannelSearch />
      <Pricing />
      <InstallationTabs />
      <ComparisonTable />
      <ResellerCTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
