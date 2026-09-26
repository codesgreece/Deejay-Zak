"use client";

import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/data/translations";

type AboutSectionProps = {
  dictionary: Dictionary;
};

export function AboutSection({ dictionary }: AboutSectionProps) {
  const t = dictionary.about;
  const points = [
    t.points.experience,
    t.points.location,
    t.points.coverage,
    t.points.education,
  ];

  return (
    <section id="about" className="section-pad relative">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.heading} />
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed text-soft md:text-xl">{t.body}</p>
          </ScrollReveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => (
              <ScrollReveal key={point} delay={0.12 + index * 0.06}>
                <li className="group relative overflow-hidden border border-white/10 bg-white/[0.02] px-5 py-5 transition-colors hover:border-magenta/40">
                  <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-magenta to-violet opacity-70" />
                  <p className="pl-2 text-sm leading-relaxed text-white/85">{point}</p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
