"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MonitorPlay, Flame, Smartphone, Apple, Download, Settings, Play } from "lucide-react"

const tabs = [
  {
    id: "smart-tv",
    label: "Smart TV",
    icon: MonitorPlay,
    steps: [
      {
        icon: Download,
        title: "Download an IPTV Player App",
        description: "Open your Smart TV's app store and install IPTV Smarters Pro, TiviMate, or any compatible IPTV player to use your Apollo Groups subscription.",
      },
      {
        icon: Settings,
        title: "Enter Your Apollo Groups Login Details",
        description: "Open the IPTV player and enter the Xtream Codes credentials sent to you via WhatsApp after purchasing your Apollo Groups subscription.",
      },
      {
        icon: Play,
        title: "Start Streaming",
        description: "Browse 49,000+ IPTV channels, pick your favorite sports, movies or series, and enjoy 4K buffer-free streaming on your Smart TV.",
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
        title: "Enable Sideloading on Firestick",
        description: "Go to Firestick Settings, enable 'Apps from Unknown Sources', then install the Downloader app to get your Apollo Groups player.",
      },
      {
        icon: Settings,
        title: "Configure Apollo Groups",
        description: "Use the Downloader app to install IPTV Smarters Pro. Enter the Apollo Groups credentials we'll provide after your purchase.",
      },
      {
        icon: Play,
        title: "Stream on Firestick",
        description: "Launch the app and instantly access all 49,000+ channels and VOD content from Apollo Groups on your Firestick.",
      },
    ],
  },
  {
    id: "android",
    label: "Android / MAG",
    icon: Smartphone,
    steps: [
      {
        icon: Download,
        title: "Download Android IPTV App",
        description: "Install IPTV Smarters Pro or TiviMate from the Google Play Store on your Android phone, tablet, or MAG device.",
      },
      {
        icon: Settings,
        title: "Add Apollo Groups Playlist",
        description: "Open the app and add the M3U URL or Xtream Codes you'll receive after purchase to access your Apollo Groups channels.",
      },
      {
        icon: Play,
        title: "Stream on Android",
        description: "Apollo Groups channels and VOD content will load automatically. Enjoy smooth 4K streaming on Android.",
      },
    ],
  },
  {
    id: "apple",
    label: "iOS / Apple",
    icon: Apple,
    steps: [
      {
        icon: Download,
        title: "Download IPTV App for iOS",
        description: "Install IPTV Smarters or GSE Smart IPTV from the App Store on your iPhone, iPad, or Apple TV.",
      },
      {
        icon: Settings,
        title: "Connect to Apollo Groups",
        description: "Open the app and enter the Xtream Codes API credentials provided to you when you purchase your subscription.",
      },
      {
        icon: Play,
        title: "Stream on Apple Devices",
        description: "Watch Apollo Groups from anywhere. Thousands of live channels and VOD titles at your fingertips.",
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
            How to Setup <span className="text-primary">Apollo Groups</span> on Any Device
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            3 simple steps for Smart TV, Firestick, Android, iOS or MAG. No technical skills required — up and running in under 5 minutes.
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
