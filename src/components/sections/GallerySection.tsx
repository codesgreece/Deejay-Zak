"use client";

import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { galleryItems } from "@/data/gallery";
import type { Dictionary } from "@/data/translations";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type GallerySectionProps = {
  dictionary: Dictionary;
};

const accentBg = {
  magenta: "from-magenta/40 via-[#10051A] to-violet/20",
  violet: "from-violet/40 via-[#10051A] to-magenta/20",
  mixed: "from-magenta/30 via-violet/25 to-[#030303]",
};

export function GallerySection({ dictionary }: GallerySectionProps) {
  const t = dictionary.gallery;
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () =>
      setActive((current) =>
        current === null
          ? null
          : (current - 1 + galleryItems.length) % galleryItems.length,
      ),
    [],
  );
  const next = useCallback(
    () =>
      setActive((current) =>
        current === null ? null : (current + 1) % galleryItems.length,
      ),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="section-pad relative">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.heading} />
          <p className="mb-10 max-w-2xl text-sm text-muted">{t.note}</p>
        </ScrollReveal>

        {/* Mobile swipeable */}
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory md:hidden">
          {galleryItems.map((item, index) => {
            const caption =
              t.captions[item.captionKey as keyof typeof t.captions] ?? item.captionKey;
            return (
              <button
                key={item.id}
                type="button"
                className="relative aspect-[3/4] w-[78vw] shrink-0 snap-center overflow-hidden border border-white/10 text-left"
                onClick={() => setActive(index)}
                data-cursor={t.view}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accentBg[item.accent]}`}
                />
                <div className="absolute inset-0 ambient-grid opacity-30" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="font-display text-sm text-white">{caption}</p>
                  <p className="mt-1 text-[10px] tracking-[0.25em] text-white/40 uppercase">
                    {t.placeholderLabel}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop editorial grid */}
        <div className="hidden grid-cols-12 gap-4 md:grid">
          {galleryItems.map((item, index) => {
            const caption =
              t.captions[item.captionKey as keyof typeof t.captions] ?? item.captionKey;
            const span =
              index % 5 === 0
                ? "col-span-7 row-span-2 min-h-[28rem]"
                : index % 5 === 1
                  ? "col-span-5 min-h-[13rem]"
                  : index % 5 === 2
                    ? "col-span-5 min-h-[13rem]"
                    : "col-span-4 min-h-[16rem]";
            return (
              <ScrollReveal key={item.id} delay={index * 0.04} className={span}>
                <button
                  type="button"
                  className="group relative h-full w-full overflow-hidden border border-white/10 text-left"
                  onClick={() => setActive(index)}
                  data-cursor={t.view}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accentBg[item.accent]} transition-transform duration-700 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 ambient-grid opacity-25" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-lg text-white">{caption}</p>
                    <p className="mt-1 text-[10px] tracking-[0.25em] text-white/40 uppercase">
                      {t.placeholderLabel}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={t.title}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
              onClick={close}
              aria-label={t.close}
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white md:left-8"
              onClick={prev}
              aria-label={t.prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white md:right-8"
              onClick={next}
              aria-label={t.next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={active}
              className="relative aspect-[4/5] w-full max-w-lg overflow-hidden border border-white/15 md:aspect-[16/10] md:max-w-4xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accentBg[galleryItems[active].accent]}`}
              />
              <div className="absolute inset-0 ambient-grid opacity-30" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6">
                <p className="font-display text-2xl text-white">
                  {
                    t.captions[
                      galleryItems[active].captionKey as keyof typeof t.captions
                    ]
                  }
                </p>
                <p className="mt-2 text-xs tracking-[0.25em] text-white/45 uppercase">
                  {t.placeholderLabel}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
