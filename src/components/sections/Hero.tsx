"use client";

import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Dictionary } from "@/data/translations";
import { usePrefersReducedMotion } from "@/hooks/useMedia";
import { motion } from "framer-motion";

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

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#10051A]" />
        <div className="absolute inset-0 scale-110 bg-[radial-gradient(ellipse_at_60%_40%,rgba(236,72,153,0.22),transparent_50%),radial-gradient(ellipse_at_30%_70%,rgba(124,58,237,0.28),transparent_45%),linear-gradient(160deg,#030303_10%,#10051A_55%,#030303_100%)] [animation:hero-zoom_18s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-0 ambient-grid opacity-30" />
        <div className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-magenta/20 blur-[110px] animate-glow-pulse" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-violet/25 blur-[120px] animate-float-y" />

        {/* Replaceable cinematic visual placeholder — not a photo of the artist */}
        <div
          className="absolute inset-y-[18%] right-[-8%] hidden w-[52%] md:block"
          aria-hidden
        >
          <div className="relative h-full w-full overflow-hidden rounded-l-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-transparent to-magenta/10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(236,72,153,0.18),transparent_70%)]" />
            <div className="absolute inset-8 border border-white/10" />
            <div className="absolute bottom-10 left-10 right-10">
              <AudioVisualizer bars={36} className="h-16 w-full" active />
              <p className="mt-4 font-display text-[10px] tracking-[0.35em] text-white/45">
                VISUAL PLACEHOLDER — REPLACE WITH ARTIST MEDIA
              </p>
            </div>
          </div>
        </div>
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

          <h1 className="font-display font-bold leading-[0.88] tracking-[-0.04em] text-white">
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
