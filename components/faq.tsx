"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "מה זה IPTV ישראל ולמה זה שירות ה-IPTV הטוב ביותר?",
    answer:
      "IPTV ישראל הוא שירות מנויי IPTV פרימיום המספק גישה ליותר מ-21,000 ערוצי טלוויזיה בשידור חי ו-65,000 סרטים וסדרות באיכות 4K UHD. השירות שלנו בולט בזכות טכנולוגיית מניעת תקיעות ייחודית, זמינות שרת של 99.9%, ותמיכה בכל המכשירים כולל טלוויזיות חכמות, סטרימרים, אנדרואיד, iOS, קופסאות MAG ומחשבים אישיים.",
  },
  {
    question: "כמה עולה מנוי של IPTV ישראל?",
    answer:
      "אנו מציעים חבילות משתלמות המתחילות מ-15.99$ לחודש. כל החבילות של IPTV ישראל כוללות מעל 21,000 ערוצים, VOD נרחב, איכות 4K ותמיכת לקוחות מסביב לשעון.",
  },
  {
    question: "האם IPTV ישראל מציע ניסיון IPTV בחינם?",
    answer:
      "כן! אנו מציעים ניסיון IPTV חינם למשך 3 שעות כדי שתוכלו לבדוק את איכות השירות שלנו, מגוון הערוצים ויציבות השידור לפני רכישת מנוי בתשלום. פנו אלינו בוואטסאפ לבקשת ניסיון.",
  },
  {
    question: "מהי מדיניות ההחזרים של IPTV ישראל?",
    answer:
      "אנו מציעים החזר כספי מובטח עד 7 ימים על כל תוכניות המנויים. אם אינכם מרוצים מכל סיבה שהיא ב-7 הימים הראשונים, פנו לתמיכה שלנו וקבלו החזר מלא.",
  },
  {
    question: "אילו אמצעי תשלום מתקבלים?",
    answer:
      "אנו מקבלים מגוון אמצעי תשלום, כולל כרטיסי אשראי (Visa, Mastercard), PayPal ומטבעות קריפטוגרפיים (Bitcoin, USDT). פנו אלינו בוואטסאפ להתאמת אפשרות התשלום הנוחה לכם.",
  },
  {
    question: "האם אני יכול לחבר מספר מכשירים במקביל?",
    answer:
      "כן! IPTV ישראל תומך בחיבור של מספר מכשירים בו-זמנית, בהתאם לחבילה שתבחרו. יש לנו תוכניות המתאימות למכשיר אחד, או תוכניות משפחתיות ליותר מכשירים בסטרימינג מקביל.",
  },
  {
    question: "מהי טכנולוגיית מניעת התקיעות (Anti-Freeze)?",
    answer:
      "מנוע ה-Anti-Freeze v10 הייחודי שלנו מבטיח סטרימינג חלק וללא הפרעות. הטכנולוגיה מנתבת אוטומטית לשרתים הפנויים ביותר בזמן אמת, גם בזמן אירועי ספורט גדולים ועומסים.",
  },
  {
    question: "איך אני מתקין את IPTV ישראל במכשיר שלי?",
    answer:
      "ההתקנה אורכת פחות מ-5 דקות. לאחר הרכישה, נשלח לכם פרטי התחברות (Xtream Codes) לוואטסאפ. הורידו נגן IPTV מומלץ (כמו IPTV Smarters Pro או TiviMate), הזינו את הפרטים והתחילו לצפות. אנו מספקים מדריכי התקנה מלאים.",
  },
  {
    question: "אילו ערוצים כלולים ב-IPTV ישראל?",
    answer:
      "הרשימה כוללת מעל 21,000 ערוצים מכל העולם, כולל ערוצי ספורט בשידור חי (beIN Sports, Sky Sports ועוד), בידור (HBO, קשת, רשת, ערוץ 14), ערוצי ילדים, חדשות וכן 65,000 סרטים וסדרות מכל פלטפורמות הסטרימינג הגדולות (Netflix, Disney+, Apple TV).",
  },
  {
    question: "איך אני מצטרף לתוכנית השותפים (Reseller)?",
    answer:
      "ההצטרפות לתכנית קלה ומשתלמת. תקבלו פאנל ניהול מקצועי לניהול הלקוחות שלכם, יצירת מנויים ומעקב אחר קרדיטים בתמחור סיטונאי. פנו אלינו ונתחיל לעבוד יחד.",
  },
]

export default function FAQ() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            שאלות ותשובות נפוצות על <span className="text-primary">IPTV ישראל</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            כל מה שצריך לדעת על מנויי IPTV ישראל, תהליך ההתקנה, החבילות והתכונות המובילות.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass overflow-hidden rounded-xl border-none px-6"
              >
                <AccordionTrigger className="py-5 text-right text-sm font-medium text-foreground hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground text-right">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
