"use client";

import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { artist } from "@/data/artist";
import type { Dictionary, Locale } from "@/data/translations";
import { navItems } from "@/lib/i18n";

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
    <footer className="relative border-t border-white/10 pb-28 pt-16 md:pb-16">
      <div className="section-shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              DEEJAY ZAK
            </p>
            <p className="mt-3 font-display text-xs tracking-[0.35em] text-magenta">
              {dictionary.footer.tagline}
            </p>
            <AudioVisualizer bars={18} className="mt-6 h-8 w-40" />
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Footer"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-display text-[11px] tracking-[0.22em] text-white/55 uppercase transition hover:text-white"
              >
                {labels[item.id]}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-sm text-muted">
            <a href={`mailto:${artist.email}`} className="block hover:text-white">
              {artist.email}
            </a>
            <a href={`tel:${artist.phoneTel}`} className="block hover:text-white">
              {artist.phone}
            </a>
          </div>
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
          <p className="text-xs text-white/40">{dictionary.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
