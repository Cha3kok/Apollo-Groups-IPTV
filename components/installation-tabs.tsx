"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MonitorPlay, Flame, Smartphone, Apple, Download, Settings, Play } from "lucide-react"

const tabs = [
  {
    id: "smart-tv",
    label: "טלוויזיה חכמה",
    icon: MonitorPlay,
    steps: [
      {
        icon: Download,
        title: "הורדת יישומון נגן ה-IPTV",
        description: "פתחו את חנות האפליקציות בטלוויזיה שלכם והתקינו את IPTV Smarters Pro, TiviMate או כל נגן IPTV תואם עבור המנוי שלכם ב-IPTV ישראל.",
      },
      {
        icon: Settings,
        title: "הזנת פרטי התחברות ל-IPTV ישראל",
        description: "פתחו את נגן ה-IPTV והזינו את פרטי ההתחברות (Xtream Codes) שנשלח לכם בוואטסאפ לאחר קניית מנוי ה-IPTV ישראל שלכם.",
      },
      {
        icon: Play,
        title: "התחילו לצפות בסטרימינג",
        description: "דפדפו בין 21,000+ ערוצי IPTV, בחרו את ספורט, הסרטים או הסדרות האהובים עליכם, ותהנו מסטרימינג ב-4K ללא תקיעות.",
      },
    ],
  },
  {
    id: "firestick",
    label: "Firestick",
    icon: Flame,
    steps: [
      {
        icon: Download,
        title: "התקנת IPTV על Firestick",
        description: "היכנסו להגדרות Firestick, אפשרו 'אפליקציות ממקורות לא ידועים' ואז התקינו את אפליקציית Downloader להורדת נגן IPTV ישראל.",
      },
      {
        icon: Settings,
        title: "הגדרת IPTV ישראל",
        description: "השתמשו באפליקציית Downloader כדי להתקין את IPTV Smarters Pro. הזינו את הפרטים של IPTV ישראל שנספק לאחר הרכישה.",
      },
      {
        icon: Play,
        title: "צפו בסטרימינג ב-Firestick",
        description: "הפעילו את האפליקציה והתחילו לצפות בכל 21,000+ הערוצים וה-VOD של IPTV ישראל על ה-Firestick שלכם באופן מיידי.",
      },
    ],
  },
  {
    id: "android",
    label: "אנדרואיד / MAG",
    icon: Smartphone,
    steps: [
      {
        icon: Download,
        title: "הורדת יישומון אנדרואיד IPTV",
        description: "התקינו IPTV Smarters Pro או TiviMate מ-Google Play Store במכשיר האנדרואיד, הטאבלט או ה-MAG שלכם.",
      },
      {
        icon: Settings,
        title: "הוספת רשימת השמעה של IPTV ישראל",
        description: "פתחו את היישומון והוסיפו את כתובת ה-M3U URL או ה-Xtream Codes שתקבלו לאחר הרכישה.",
      },
      {
        icon: Play,
        title: "סטרימינג על אנדרואיד",
        description: "ערוצי IPTV ישראל ותכני ה-VOD ייטענו אוטומטית. תהנו מסטרימינג 4K חלק באנדרואיד.",
      },
    ],
  },
  {
    id: "apple",
    label: "iOS / מכשירי אפל",
    icon: Apple,
    steps: [
      {
        icon: Download,
        title: "הורדת תוכנת IPTV ל-iOS",
        description: "הורידו את IPTV Smarters או GSE Smart IPTV מ-App Store באייפון, אייפד או Apple TV.",
      },
      {
        icon: Settings,
        title: "התחברות ל-IPTV ישראל",
        description: "פתחו את האפליקציה והזינו את ה-Xtream Codes API שיסופקו לכם בעת רכישת המנוי.",
      },
      {
        icon: Play,
        title: "צפו במכשירי אפל",
        description: "צפו ב-IPTV ישראל מכל מקום. עשרות אלפי ערוצי IPTV ו-VOD בכף ידכם.",
      },
    ],
  },
]

export default function InstallationTabs() {
  const [activeTab, setActiveTab] = useState("smart-tv")
  const activeData = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            כיצד להגדיר את <span className="text-primary">IPTV ישראל</span> על כל מכשיר
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            התקנה ב-3 שלבים פשוטים לטלוויזיות חכמות, Firestick, אנדרואיד, iOS או MAG. אין צורך בכישורים טכניים.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "neon-glow bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {activeData.steps.map((step, index) => (
              <div key={step.title} className="glass relative rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
