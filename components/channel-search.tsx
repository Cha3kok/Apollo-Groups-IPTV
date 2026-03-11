"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"

const channels = [
  "Bein Sports",
  "Sky Sports",
  "HBO",
  "Netflix",
  "Disney+",
  "ESPN",
  "Fox Sports",
  "Canal+",
  "Showtime",
  "Amazon Prime",
  "Paramount+",
  "Apple TV+",
  "Starz",
  "Eurosport",
  "DAZN",
  "BBC",
]

export default function ChannelSearch() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-balance text-3xl font-bold text-foreground sm:text-4xl"
        >
          IPTV ישראל <span className="text-primary">רשימת ערוצים</span> - מעל 21,000 ערוצים חיים
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-pretty text-muted-foreground"
        >
          עיינו ברשימת הערוצים המלאה של IPTV ישראל הכוללת ספורט פרימיום, בידור, חדשות, תכני ילדים וערוצים בינלאומיים מכל מדינה. המנוי שלנו כולל את כל הרשתות הגדולות.
        </motion.p>

        {/* Search bar mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl px-5 py-4"
        >
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <span className="text-right text-sm text-muted-foreground">
            חיפוש בערוצי IPTV ישראל - ספורט, סרטים, סדרות, אירועי PPV...
          </span>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-8">
          {[...channels, ...channels].map((channel, index) => (
            <div
              key={`${channel}-${index}`}
              className="glass flex shrink-0 items-center gap-2 rounded-xl px-6 py-3"
            >
              <div className="h-3 w-3 rounded-full bg-primary/50" />
              <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                {channel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
