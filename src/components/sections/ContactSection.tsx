"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { artist } from "@/data/artist";
import { socialLinks } from "@/data/social";
import type { Dictionary } from "@/data/translations";
import { Mail, Phone } from "lucide-react";

type ContactSectionProps = {
  dictionary: Dictionary;
};

export function ContactSection({ dictionary }: ContactSectionProps) {
  const t = dictionary.contact;

  return (
    <section id="contact" className="section-pad relative">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.heading} />
          <p className="mb-10 max-w-2xl text-soft">{t.availability}</p>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          <ScrollReveal>
            <a
              href={`mailto:${artist.email}`}
              className="group flex min-h-[9rem] flex-col justify-between border border-white/10 bg-white/[0.03] p-6 transition hover:border-magenta/45"
              data-cursor="OPEN"
            >
              <Mail className="h-5 w-5 text-magenta" />
              <div>
                <p className="font-display text-[10px] tracking-[0.28em] text-white/45 uppercase">
                  {t.emailLabel}
                </p>
                <p className="mt-2 break-all font-display text-xl text-white md:text-2xl">
                  {artist.email}
                </p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <a
              href={`tel:${artist.phoneTel}`}
              className="group flex min-h-[9rem] flex-col justify-between border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet/45"
              data-cursor="OPEN"
            >
              <Phone className="h-5 w-5 text-violet" />
              <div>
                <p className="font-display text-[10px] tracking-[0.28em] text-white/45 uppercase">
                  {t.phoneLabel}
                </p>
                <p className="mt-2 font-display text-xl text-white md:text-2xl">
                  {artist.phone}
                </p>
              </div>
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href={`tel:${artist.phoneTel}`} cursorLabel="OPEN">
              {t.callNow}
            </MagneticButton>
            <MagneticButton
              href={`mailto:${artist.email}`}
              variant="secondary"
              cursorLabel="OPEN"
            >
              {t.email}
            </MagneticButton>
            <MagneticButton
              href="#booking"
              variant="secondary"
              cursorLabel={dictionary.cursor.book}
            >
              {t.book}
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="font-display text-[11px] tracking-[0.3em] text-white/40 uppercase">
              {dictionary.social.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) =>
                link.url ? (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-xs tracking-[0.18em] text-white/80 uppercase"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.id}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.18em] text-white/35 uppercase"
                    title={dictionary.social.comingSoon}
                  >
                    {link.label}
                  </span>
                ),
              )}
            </div>
            <p className="mt-3 text-xs text-white/35">{dictionary.social.comingSoon}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
