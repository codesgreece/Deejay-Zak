"use client";

import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { events } from "@/data/events";
import type { Dictionary } from "@/data/translations";

type EventsSectionProps = {
  dictionary: Dictionary;
};

export function EventsSection({ dictionary }: EventsSectionProps) {
  const t = dictionary.events;
  const hasEvents = events.length > 0;

  return (
    <section id="events" className="section-pad relative">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.heading} />
        </ScrollReveal>

        {hasEvents ? (
          <div className="grid gap-4 md:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.id}
                className="border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="font-display text-xs tracking-[0.25em] text-magenta">
                  {event.date}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {event.location} · {event.city}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <ScrollReveal delay={0.1}>
            <div className="relative overflow-hidden border border-dashed border-white/15 bg-gradient-to-br from-magenta/10 via-transparent to-violet/10 px-6 py-16 text-center md:py-24">
              <div className="absolute inset-0 ambient-grid opacity-25" />
              <div className="relative mx-auto flex max-w-xl flex-col items-center">
                <AudioVisualizer bars={26} className="mb-8 h-12 w-56" />
                <h3 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {t.emptyTitle}
                </h3>
                <p className="mt-4 text-soft">{t.emptyBody}</p>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
