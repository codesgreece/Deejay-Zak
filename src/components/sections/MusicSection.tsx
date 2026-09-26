"use client";

import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { tracks } from "@/data/music";
import type { Dictionary } from "@/data/translations";
import { Pause, Play } from "lucide-react";
import { useState } from "react";

type MusicSectionProps = {
  dictionary: Dictionary;
};

export function MusicSection({ dictionary }: MusicSectionProps) {
  const t = dictionary.music;
  const [playing, setPlaying] = useState(false);
  const hasTracks = tracks.length > 0;
  const title = hasTracks ? tracks[0].title : t.placeholderTitle;
  const genre = hasTracks ? tracks[0].genre : t.placeholderGenre;

  return (
    <section id="music" className="section-pad relative">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.heading} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] via-[#10051A]/60 to-transparent p-6 md:p-10">
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-violet/25 blur-[90px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-display text-[11px] tracking-[0.3em] text-magenta uppercase">
                  {genre}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {title}
                </h3>
                {!hasTracks ? (
                  <p className="mt-4 max-w-lg text-sm text-muted">{t.comingSoon}</p>
                ) : null}

                <div className="mt-8 flex items-center gap-4">
                  <button
                    type="button"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-magenta/50 bg-magenta/15 text-white transition hover:bg-magenta/25"
                    aria-label={playing ? t.pause : t.play}
                    data-cursor="PLAY"
                    onClick={() => setPlaying((v) => !v)}
                    disabled={!hasTracks}
                  >
                    {playing && hasTracks ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="ml-0.5 h-5 w-5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="h-[2px] w-full overflow-hidden bg-white/10">
                      <div
                        className={`h-full bg-gradient-to-r from-magenta to-violet transition-all duration-500 ${
                          playing && hasTracks ? "w-1/3" : "w-0"
                        }`}
                      />
                    </div>
                    <AudioVisualizer
                      bars={40}
                      className="mt-4 h-12 w-full max-w-xl"
                      active={playing && hasTracks}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:flex-col">
                <p className="w-full font-display text-[10px] tracking-[0.28em] text-white/40 uppercase lg:mb-2">
                  {t.platforms}
                </p>
                {["SoundCloud", "Spotify", "Mixcloud", "YouTube"].map((platform) => (
                  <span
                    key={platform}
                    className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 text-xs tracking-[0.18em] text-white/40 uppercase"
                    title={dictionary.social.comingSoon}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {!hasTracks ? (
              <p className="mt-8 text-xs text-white/35">
                Player UI ready — connect MP3 / SoundCloud / Spotify / Mixcloud later.
              </p>
            ) : null}
          </div>
        </ScrollReveal>

        <div className="mt-8">
          <MagneticButton href="#booking" variant="secondary" cursorLabel={dictionary.cursor.book}>
            {dictionary.hero.ctaPrimary}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
