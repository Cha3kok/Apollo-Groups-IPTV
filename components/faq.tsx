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
    question: "What is Apollo Groups and why is it the best IPTV service?",
    answer:
      "Apollo Groups is a premium IPTV subscription service providing access to 49,000+ live TV channels and 65,000+ movies and series in 4K UHD quality. We stand out with our unique anti-freeze technology, 99.9% server uptime, and support for all devices including Smart TVs, streamers, Android, iOS, MAG boxes, and PCs.",
  },
  {
    question: "How much does an Apollo Groups subscription cost?",
    answer:
      "We offer affordable plans starting from $15.99/month. All Apollo Groups plans include 49,000+ channels, extensive VOD library, 4K quality, and round-the-clock customer support.",
  },
  {
    question: "Does Apollo Groups offer a free trial?",
    answer:
      "Yes! We offer a free 3-hour IPTV trial so you can test our service quality, channel variety, and streaming stability before purchasing a paid subscription. Contact us on WhatsApp to request your trial.",
  },
  {
    question: "What is Apollo Groups's refund policy?",
    answer:
      "We offer a guaranteed 7-day money-back refund on all subscription plans. If you're not satisfied for any reason within the first 7 days, contact our support team and receive a full refund.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept a variety of payment methods including credit cards (Visa, Mastercard), PayPal, and cryptocurrencies (Bitcoin, USDT). Contact us on WhatsApp to arrange the payment option that works best for you.",
  },
  {
    question: "Can I connect multiple devices at the same time?",
    answer:
      "Yes! Apollo Groups supports simultaneous connections depending on the plan you choose. We have plans for single-device use as well as family plans for multiple simultaneous streams.",
  },
  {
    question: "What is the Anti-Freeze technology?",
    answer:
      "Our proprietary Anti-Freeze v10 engine ensures smooth, uninterrupted streaming. The technology automatically routes traffic to the most available servers in real time — even during major sports events and peak load periods.",
  },
  {
    question: "How do I install Apollo Groups on my device?",
    answer:
      "Setup takes under 5 minutes. After purchase, we'll send your login credentials (Xtream Codes) via WhatsApp. Download a recommended IPTV player (like IPTV Smarters Pro or TiviMate), enter your details, and start streaming. We provide full setup guides.",
  },
  {
    question: "What channels are included in Apollo Groups?",
    answer:
      "The lineup includes 49,000+ channels from around the world — live sports (beIN Sports, Sky Sports and more), entertainment (HBO, Showtime, BBC, etc.), kids channels, news, plus 65,000+ movies and series from all major streaming platforms (Netflix, Disney+, Apple TV).",
  },
  {
    question: "How do I join the Reseller / Affiliate Program?",
    answer:
      "Joining is easy and profitable. You'll receive a professional management panel to handle your clients, create subscriptions, and track credits at wholesale pricing. Contact us and let's start working together.",
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
            Frequently Asked Questions about <span className="text-primary">Apollo Groups</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to know about Apollo Groups — subscriptions, setup, channels, and features.
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
                <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground text-left">
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
