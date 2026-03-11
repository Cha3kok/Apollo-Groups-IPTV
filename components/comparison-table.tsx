"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const rows = [
  { feature: "טכנולוגיית מניעת תקיעות (Anti-Freeze)", us: true, others: false },
  { feature: "איכות שידור 4K / UHD", us: true, others: false },
  { feature: "הפעלת מנוי מיידית", us: true, others: false },
  { feature: "מדריך שידורים אלקטרוני (EPG)", us: true, others: false },
  { feature: "מעל 21,000 ערוצים בשידור חי", us: true, others: false },
  { feature: "מעל 65,000 סרטים וסדרות VOD", us: true, others: false },
  { feature: "פיצ'ר שחזור (Catch-Up) ושידור חוזר", us: true, others: false },
  { feature: "תמיכת לקוחות פרימיום 24/7", us: true, others: false },
  { feature: "זמינות שרתים של 99.9%", us: true, others: false },
  { feature: "תמיכה במספר מכשירים", us: true, others: true },
  { feature: "החזר כספי מובטח עד 7 ימים", us: true, others: false },
]

export default function ComparisonTable() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            למה לבחור ב-<span className="text-primary">IPTV ישראל</span> על פני ספקי IPTV אחרים?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            בצעו השוואה מהירה בין השירות של IPTV ישראל למתחרים. גלו למה אלפי משתמשים בוחרים בנו כספק המועדף עליהם לשנת 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mt-10 overflow-hidden rounded-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                    תכונות
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    IPTV ישראל
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">
                    מתחרים אחרים
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/10 ${
                      index % 2 === 0 ? "bg-secondary/20" : ""
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.us ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20">
                          <X className="h-4 w-4 text-destructive" />
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.others ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20">
                          <X className="h-4 w-4 text-destructive" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
