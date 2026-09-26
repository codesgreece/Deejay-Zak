"use client";

import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { artist } from "@/data/artist";
import type { Dictionary } from "@/data/translations";
import { usePrefersReducedMotion } from "@/hooks/useMedia";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ExperienceSectionProps = {
  dictionary: Dictionary;
};

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) {
      setCount(value);
      return;
    }
    let frame = 0;
    const total = 48;
    const tick = () => {
      frame += 1;
      setCount(Math.round((frame / total) * value));
      if (frame < total) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, reduced, value]);

  return <span ref={ref}>{count}</span>;
}

export function ExperienceSection({ dictionary }: ExperienceSectionProps) {
  const t = dictionary.experience;

  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="mb-12 overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-track gap-10 font-display text-sm tracking-[0.35em] text-white/35 uppercase">
          <span>{t.marquee}</span>
          <span>{t.marquee}</span>
        </div>
      </div>

      <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2.6rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-white">
              <span className="block">{t.line1}</span>
              <span className="block gradient-text">{t.line2}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-soft md:text-lg">
              {t.body}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-magenta/20 blur-3xl" />
            <AudioVisualizer bars={22} className="mb-8 h-10 w-full" />
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-[10px] tracking-[0.28em] text-white/45 uppercase">
                  {t.yearsLabel}
                </p>
                <p className="mt-2 font-display text-5xl font-bold text-white">
                  <AnimatedCounter value={artist.experienceYears} />
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] tracking-[0.28em] text-white/45 uppercase">
                  {t.baseLabel}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  {t.baseValue}
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] tracking-[0.28em] text-white/45 uppercase">
                  {t.coverageLabel}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  {t.coverageValue}
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] tracking-[0.28em] text-white/45 uppercase">
                  {t.educationLabel}
                </p>
                <p className="mt-2 text-sm leading-snug text-soft">{t.education}</p>
              </div>
            </div>

            {/* Replaceable media frame */}
            <div
              className="mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet/20 via-transparent to-magenta/20"
              aria-label="Media placeholder"
            >
              <div className="flex h-full items-end p-4">
                <p className="font-display text-[10px] tracking-[0.3em] text-white/40">
                  MEDIA PLACEHOLDER
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
