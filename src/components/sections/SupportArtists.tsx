"use client";

import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { supportArtists } from "@/data/artists";
import type { Dictionary } from "@/data/translations";
import { motion } from "framer-motion";

type SupportArtistsProps = {
  dictionary: Dictionary;
};

export function SupportArtists({ dictionary }: SupportArtistsProps) {
  const t = dictionary.support;

  return (
    <section id="support" className="section-pad relative overflow-hidden">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.intro} />
        </ScrollReveal>
      </div>

      <div className="mt-2 overflow-hidden">
        <motion.div
          className="flex gap-4 px-4 md:gap-6 md:px-8"
          drag="x"
          dragConstraints={{ left: -720, right: 0 }}
        >
          <div className="flex w-max gap-4 overflow-x-auto px-2 pb-4 no-scrollbar md:gap-6 snap-x snap-mandatory">
            {supportArtists.map((artist, index) => (
              <article
                key={artist.id}
                className="group relative h-52 w-[72vw] max-w-xs shrink-0 snap-start overflow-hidden border border-white/10 bg-[#10051A] sm:w-72"
                data-cursor="VIEW"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.22),transparent_45%)] transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-40 ambient-grid" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <p className="font-display text-[10px] tracking-[0.35em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                      {artist.name}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.2em] text-white/45 uppercase">
                      Support Act
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-magenta/50" />
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
