"use client";

import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { artist } from "@/data/artist";
import type { Dictionary, Locale } from "@/data/translations";
import { navItems } from "@/lib/i18n";
import { Mail, Phone } from "lucide-react";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  const labels: Record<(typeof navItems)[number]["id"], string> = {
    home: dictionary.nav.home,
    about: dictionary.nav.about,
    music: dictionary.nav.music,
    events: dictionary.nav.events,
    gallery: dictionary.nav.gallery,
    services: dictionary.nav.services,
    contact: dictionary.nav.contact,
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 pb-28 pt-16 md:pb-12 md:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(124,58,237,0.16),transparent_45%),radial-gradient(ellipse_at_90%_100%,rgba(236,72,153,0.1),transparent_40%)]"
      />

      <div className="section-shell relative z-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_0.9fr_1fr] lg:gap-10">
          <div>
            <p className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              DEEJAY ZAK
            </p>
            <p className="mt-3 font-display text-[11px] tracking-[0.35em] text-magenta uppercase">
              {dictionary.footer.tagline}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-soft">
              {dictionary.contact.availability}
            </p>
            <AudioVisualizer bars={20} className="mt-7 h-8 w-44" />
          </div>

          <div>
            <p className="mb-5 font-display text-[11px] tracking-[0.28em] text-white/40 uppercase">
              {dictionary.footer.explore}
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3" aria-label="Footer">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="font-display text-[12px] tracking-[0.16em] text-white/65 uppercase transition hover:text-white"
                >
                  {labels[item.id]}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 font-display text-[11px] tracking-[0.28em] text-white/40 uppercase">
              {dictionary.footer.contact}
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${artist.email}`}
                className="group flex items-start gap-3 text-sm text-soft transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                <span className="break-all">{artist.email}</span>
              </a>
              <a
                href={`tel:${artist.phoneTel}`}
                className="group flex items-center gap-3 text-sm text-soft transition hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-violet" />
                <span>{artist.phone}</span>
              </a>
              <div className="pt-2">
                <LanguageSwitcher locale={locale} dictionary={dictionary} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs tracking-wide text-white/40">
            {dictionary.footer.rights}
          </p>

          <a
            href="https://nexusdevstudio.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase transition hover:border-magenta/50 hover:bg-gradient-to-r hover:from-magenta/20 hover:to-violet/20 hover:text-white"
            data-cursor="OPEN"
          >
            {dictionary.footer.madeBy}
          </a>
        </div>
      </div>
    </footer>
  );
}
