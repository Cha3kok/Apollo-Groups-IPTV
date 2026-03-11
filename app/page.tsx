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
  name: "IPTV ישראל",
  url: "https://iptv.co.il",
  description:
    "IPTV ישראל הוא ספק ה-IPTV המוביל בישראל לשנת 2026. צפו במעל 20,000 ערוצים חיים ו-65,000 סרטים וסדרות באיכות 4K UHD מכל מכשיר.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212-707-711-512",
    contactType: "customer service",
    availableLanguage: ["English", "Hebrew", "French", "Arabic", "Spanish"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מה זה IPTV ישראל ולמה זה שירות ה-IPTV הטוב ביותר?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV ישראל הוא שירות מנויי IPTV פרימיום המספק גישה ליותר מ-21,000 ערוצי טלוויזיה בשידור חי ו-65,000 סרטים וסדרות באיכות 4K UHD.",
      },
    },
    {
      "@type": "Question",
      name: "כמה עולה מנוי של IPTV ישראל?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV ישראל מציע חמש תוכניות גמישות: 15.99$ לחודש, 35.99$ ל-3 חודשים, 59.99$ ל-6 חודשים, 89.99$ לשנה ו-139.99$ לשנתיים. כל החבילות כוללות ערוצים, VOD ואיכות 4K.",
      },
    },
    {
      "@type": "Question",
      name: "האם IPTV ישראל מציע ניסיון IPTV בחינם?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן! אנו מציעים ניסיון IPTV חינם למשך 3 שעות כדי שתוכלו לבדוק את איכות השירות שלנו לפני קניית מנוי.",
      },
    },
    {
      "@type": "Question",
      name: "איך אני מתקין את IPTV ישראל במכשיר שלי?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "הגדרת IPTV ישראל אורכת פחות מ-5 דקות. הורידו נגן IPTV תואם לטלוויזיה חכמה, סטרימר, אנדרואיד, iOS או MAG, הזינו את פרטי ההתחברות והתחילו לצפות.",
      },
    },
    {
      "@type": "Question",
      name: "אילו ערוצים כלולים ב-IPTV ישראל?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "הרשימה כוללת מעל 21,000 ערוצים מכל העולם, כולל ערוצי ספורט בשידור חי, בידור, חדשות וערוצי ילדים, בנוסף ל-65,000 סרטים וסדרות.",
      },
    },
  ],
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "מנוי פרימיום ל-IPTV ישראל",
  description:
    "שירות מנויי ה-IPTV הטוב והאמין ביותר עם למעלה מ-21,000 ערוצים בשידור חי, 65,000 סרטים וסדרות ב-VOD, איכות סטרימינג 4K UHD וטכנולוגיית מניעת תקיעות.",
  brand: { "@type": "Brand", name: "IPTV ישראל" },
  offers: [
    {
      "@type": "Offer",
      name: "תוכנית לחודש אחד",
      price: "15.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "תוכנית ל-3 חודשים",
      price: "35.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "תוכנית ל-6 חודשים",
      price: "59.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "תוכנית ל-12 חודשים",
      price: "89.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "תוכנית ל-24 חודשים",
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
