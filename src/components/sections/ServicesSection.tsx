"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { services, type Service } from "@/data/services";
import type { Dictionary } from "@/data/translations";

type ServicesSectionProps = {
  dictionary: Dictionary;
};

const accentMap = {
  magenta: "from-magenta/35 via-transparent to-violet/20",
  violet: "from-violet/35 via-transparent to-magenta/15",
  mixed: "from-magenta/25 via-[#10051A] to-violet/30",
};

function ServiceCard({
  service,
  dictionary,
  index,
}: {
  service: Service;
  dictionary: Dictionary;
  index: number;
}) {
  const item = dictionary.services.items[service.id as keyof typeof dictionary.services.items];
  if (!item) return null;

  return (
    <ScrollReveal delay={index * 0.05}>
      <article
        className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-white/10 bg-[#10051A]"
        data-cursor={dictionary.cursor.book}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentMap[service.imageAccent]} transition-transform duration-700 group-hover:scale-110`}
        />
        <div className="absolute inset-0 ambient-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 p-6">
          <p className="font-display text-[10px] tracking-[0.3em] text-white/45">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
            {item.name}
          </h3>
          <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-soft opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
            {item.description}
          </p>
          <div className="mt-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <MagneticButton
              href="#booking"
              className="min-h-10 px-5 text-[11px]"
              cursorLabel={dictionary.cursor.book}
            >
              {dictionary.services.cta}
            </MagneticButton>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-magenta/45 group-hover:shadow-[inset_0_0_40px_rgba(236,72,153,0.12)]" />
      </article>
    </ScrollReveal>
  );
}

export function ServicesSection({ dictionary }: ServicesSectionProps) {
  const t = dictionary.services;

  return (
    <section id="services" className="section-pad relative">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.heading} />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              dictionary={dictionary}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
