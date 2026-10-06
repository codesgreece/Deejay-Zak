"use client";

import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { supportArtists } from "@/data/artists";
import type { Dictionary } from "@/data/translations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SupportArtistsProps = {
  dictionary: Dictionary;
};

export function SupportArtists({ dictionary }: SupportArtistsProps) {
  const t = dictionary.support;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const onScroll = () => {
      const cards = Array.from(node.querySelectorAll<HTMLElement>("[data-artist-card]"));
      if (!cards.length) return;

      const center = node.scrollLeft + node.clientWidth / 2;
      let closest = 0;
      let best = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const mid = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(mid - center);
        if (distance < best) {
          best = distance;
          closest = index;
        }
      });

      setActive(closest);
    };

    onScroll();
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelectorAll<HTMLElement>("[data-artist-card]")[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="support" className="section-pad relative overflow-x-clip">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.intro} />
        </ScrollReveal>
      </div>

      <div className="relative mt-2">
        <div
          ref={scrollerRef}
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[max(1rem,calc((100vw-20rem)/2))] pb-5 pt-1 no-scrollbar sm:gap-5 sm:px-8 md:px-10 touch-pan-x"
          style={{ WebkitOverflowScrolling: "touch" }}
          aria-label={t.title}
        >
          {supportArtists.map((artist, index) => (
            <article
              key={artist.id}
              data-artist-card
              className="group relative h-72 w-[min(78vw,18rem)] shrink-0 snap-center overflow-hidden border border-white/10 bg-[#10051A] sm:h-80 sm:w-72 sm:snap-start"
              data-cursor="VIEW"
            >
              <Image
                src={artist.image}
                alt={artist.imageAlt}
                fill
                sizes="(max-width: 640px) 78vw, 288px"
                className="object-cover object-center grayscale contrast-110 brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                priority={index < 2}
                draggable={false}
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

        <div className="mt-4 flex items-center justify-center gap-2 px-4" aria-hidden>
          {supportArtists.map((artist, index) => (
            <button
              key={artist.id}
              type="button"
              aria-label={artist.name}
              onClick={() => scrollToIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-7 bg-gradient-to-r from-magenta to-violet"
                  : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
