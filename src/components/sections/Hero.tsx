"use client";

import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { artist } from "@/data/artist";
import type { Dictionary } from "@/data/translations";
import { usePrefersReducedMotion } from "@/hooks/useMedia";
import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  dictionary: Dictionary;
};

function SplitChars({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={{ y: "120%", opacity: 0, rotateX: 40 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + index * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero({ dictionary }: HeroProps) {
  const t = dictionary.hero;
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={artist.image}
          alt={artist.imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[72%_28%] sm:object-[68%_center] md:object-[62%_center] ${
            reduced ? "" : "[animation:hero-zoom_18s_ease-in-out_infinite_alternate]"
          }`}
        />
        {/* Mobile: keep face readable; desktop: darken left for copy */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/75 md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/65 to-black/15 md:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-transparent to-black/45 md:block" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(236,72,153,0.1),transparent_55%)] mix-blend-soft-light" />
      </div>

      <div className="section-shell relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.p
            className="mb-5 font-display text-[11px] uppercase tracking-[0.4em] text-magenta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {t.eyebrow}
          </motion.p>

          <h1 className="font-display font-bold leading-[0.88] tracking-[-0.04em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)]">
            <span className="block overflow-hidden text-[clamp(3.4rem,14vw,8.5rem)]">
              <SplitChars text={t.titleLine1} delay={0.2} />
            </span>
            <span className="block overflow-hidden text-[clamp(3.8rem,16vw,9.5rem)] gradient-text">
              <SplitChars text={t.titleLine2} delay={0.45} />
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-soft sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.85 }}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
          >
            <MagneticButton href="#booking" cursorLabel={dictionary.cursor.book}>
              {t.ctaPrimary}
            </MagneticButton>
            <MagneticButton
              href="#music"
              variant="secondary"
              cursorLabel={dictionary.cursor.play}
            >
              {t.ctaSecondary}
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <AudioVisualizer bars={18} className="h-8 w-36" />
            <span className="font-display text-[10px] tracking-[0.35em] text-white/40">
              {t.scroll}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
