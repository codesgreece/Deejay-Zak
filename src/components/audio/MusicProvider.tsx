"use client";

import { backgroundTrack } from "@/data/music";
import type { Dictionary } from "@/data/translations";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type MusicContextValue = {
  ready: boolean;
  playing: boolean;
  muted: boolean;
  needsGesture: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
  enableSound: () => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) {
    throw new Error("useMusic must be used within MusicProvider");
  }
  return ctx;
}

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();

  return new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.head.appendChild(tag);
    }

    // API may already be mid-load
    const poll = window.setInterval(() => {
      if (window.YT?.Player) {
        window.clearInterval(poll);
        resolve();
      }
    }, 50);
  });
}

type MusicProviderProps = {
  children: ReactNode;
  dictionary: Dictionary;
};

export function MusicProvider({ children, dictionary }: MusicProviderProps) {
  const playerRef = useRef<YT.Player | null>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const unlockedRef = useRef(false);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [needsGesture, setNeedsGesture] = useState(true);

  const enableSound = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    unlockedRef.current = true;
    player.unMute();
    player.setVolume(72);
    player.playVideo();
    setMuted(false);
    setNeedsGesture(false);
    setPlaying(true);
  }, []);

  const togglePlay = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    if (!unlockedRef.current) {
      enableSound();
      return;
    }

    const state = player.getPlayerState();
    // 1 = PLAYING, 3 = BUFFERING
    if (state === 1 || state === 3) {
      player.pauseVideo();
      setPlaying(false);
    } else {
      player.playVideo();
      setPlaying(true);
    }
  }, [enableSound]);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    if (!unlockedRef.current) {
      enableSound();
      return;
    }

    if (player.isMuted()) {
      player.unMute();
      setMuted(false);
      if (player.getPlayerState() !== 1) {
        player.playVideo();
        setPlaying(true);
      }
    } else {
      player.mute();
      setMuted(true);
    }
  }, [enableSound]);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT) return;

      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: backgroundTrack.youtubeId,
        width: 1,
        height: 1,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          loop: 1,
          playlist: backgroundTrack.youtubeId,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            if (cancelled) return;
            event.target.mute();
            event.target.playVideo();
            setReady(true);
            setMuted(true);
            setPlaying(true);
          },
          onStateChange: (event) => {
            if (cancelled) return;
            // 1 PLAYING, 2 PAUSED, 0 ENDED
            if (event.data === 1) setPlaying(true);
            if (event.data === 2) setPlaying(false);
            if (event.data === 0) {
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  // Unlock audio on first user gesture (browser autoplay policy)
  useEffect(() => {
    if (!needsGesture || !ready) return;

    const unlock = () => enableSound();
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [enableSound, needsGesture, ready]);

  const value = useMemo(
    () => ({
      ready,
      playing,
      muted,
      needsGesture,
      togglePlay,
      toggleMute,
      enableSound,
    }),
    [ready, playing, muted, needsGesture, togglePlay, toggleMute, enableSound],
  );

  const t = dictionary.music;

  return (
    <MusicContext.Provider value={value}>
      {children}

      {/* Off-screen YouTube host — must stay in DOM for playback */}
      <div className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0" aria-hidden>
        <div ref={hostRef} />
      </div>

      <div className="fixed bottom-24 left-4 z-50 flex max-w-[min(90vw,18rem)] flex-col gap-2 md:bottom-6">
        {needsGesture ? (
          <button
            type="button"
            onClick={enableSound}
            className="group flex items-center gap-3 rounded-full border border-magenta/40 bg-[#030303]/90 px-4 py-3 text-left shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:border-magenta/70"
            aria-label={t.bgEnable}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-violet text-white animate-pulse">
              <Play className="ml-0.5 h-4 w-4" />
            </span>
            <span>
              <span className="block font-display text-[10px] tracking-[0.28em] text-magenta uppercase">
                {t.bgNowPlaying}
              </span>
              <span className="mt-0.5 block text-sm text-white">{t.bgEnable}</span>
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#030303]/90 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-magenta/20 text-white transition hover:bg-magenta/35"
              aria-label={playing ? t.pause : t.play}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label={muted ? t.bgUnmute : t.bgMute}
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <div className="hidden min-w-0 pr-3 sm:block">
              <p className="font-display text-[9px] tracking-[0.24em] text-white/40 uppercase">
                {t.bgNowPlaying}
              </p>
              <p className="truncate text-xs text-white/85">{backgroundTrack.title}</p>
            </div>
          </div>
        )}
      </div>
    </MusicContext.Provider>
  );
}
