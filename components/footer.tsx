import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/30 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Apollo Groups</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Apollo Groups is the leading IPTV subscription service in 2026.
              Watch 49,000+ live channels and 65,000+ movies & series in 4K UHD
              on any device. Anti-freeze technology and 99.9% uptime guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "IPTV Pricing Plans", href: "#pricing" },
                { label: "Reseller Program", href: "#reseller" },
                { label: "Contact Us", href: "https://wa.me/212707711512?text=Contact%20Us%20-%20https%3A%2F%2Fapollogroupsiptv.com" },
                { label: "Free IPTV Trial", href: "https://wa.me/212707711512?text=Free%20IPTV%20Trial%20-%20https%3A%2F%2Fapollogroupsiptv.com" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devices */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Supported Devices
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Smart TV (Samsung, LG)",
                "Amazon Firestick",
                "Android TV / MAG Box",
                "Apple TV / iOS Devices",
                "PC / Mac",
              ].map((device) => (
                <li key={device} className="text-sm text-muted-foreground">
                  {device}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Contact Apollo Groups
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="https://wa.me/212707711512?text=WhatsApp%20Support%20-%20https%3A%2F%2Fapollogroupsiptv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp: +212 707 711 512
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                24/7 Customer Support
              </li>
              <li className="text-sm text-muted-foreground">
                7-Day Money-Back Guarantee
              </li>
              <li className="text-sm text-muted-foreground">
                Instant Account Activation
              </li>
            </ul>
          </div>
        </div>

        {/* SEO-rich footer text */}
        <div className="mt-10 border-t border-border/30 pt-6">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            {"©"} {new Date().getFullYear()} Apollo Groups — The Best Premium IPTV Subscription Service. All rights reserved.
            Apollo Groups delivers the highest quality TV streaming experience with 49,000+ live channels, 65,000+ movies and series,
            4K UHD quality, and anti-freeze technology. Compatible with Smart TVs, Android, iOS, and MAG Box devices.
            Apollo Groups is not affiliated with any third-party streaming platforms.
          </p>
        </div>
      </div>
    </footer>
  )
}
