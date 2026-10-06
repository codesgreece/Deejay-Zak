"use client";

import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { supportArtists } from "@/data/artists";
import type { Dictionary } from "@/data/translations";
import { motion } from "framer-motion";
import Image from "next/image";

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
                className="group relative h-64 w-[78vw] max-w-xs shrink-0 snap-start overflow-hidden border border-white/10 bg-[#10051A] sm:h-72 sm:w-72"
                data-cursor="VIEW"
              >
                <Image
                  src={artist.image}
                  alt={artist.imageAlt}
                  fill
                  sizes="(max-width: 640px) 78vw, 288px"
                  className="object-cover object-center grayscale contrast-110 brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.12),transparent_45%)] opacity-80" />

                <div className="relative flex h-full flex-col justify-between p-6">
                  <p className="font-display text-[10px] tracking-[0.35em] text-white/55">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
                      {artist.name}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.2em] text-white/55 uppercase">
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
