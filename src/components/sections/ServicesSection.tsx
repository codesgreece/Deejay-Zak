"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { services, type Service } from "@/data/services";
import type { Dictionary, Locale } from "@/data/translations";
import Image from "next/image";
import { usePathname } from "next/navigation";

type ServicesSectionProps = {
  dictionary: Dictionary;
};

function ServiceCard({
  service,
  dictionary,
  index,
  locale,
}: {
  service: Service;
  dictionary: Dictionary;
  index: number;
  locale: Locale;
}) {
  const item = dictionary.services.items[service.id as keyof typeof dictionary.services.items];
  if (!item) return null;

  return (
    <ScrollReveal delay={index * 0.05}>
      <article
        className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-white/10 bg-[#10051A]"
        data-cursor={dictionary.cursor.book}
      >
        <Image
          src={service.image}
          alt={service.imageAlt[locale]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.18),transparent_40%)] opacity-80 mix-blend-soft-light" />

        <div className="relative z-10 p-6">
          <p className="font-display text-[10px] tracking-[0.3em] text-white/55">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            {item.name}
          </h3>
          <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-soft opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100 md:group-hover:max-h-28">
            {item.description}
          </p>
          {/* Always show short description on mobile for touch (no hover) */}
          <p className="mt-3 text-sm leading-relaxed text-soft md:hidden">
            {item.description}
          </p>
          <div className="mt-5 md:translate-y-2 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
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
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith("/en") ? "en" : "el";

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
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
