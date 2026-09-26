"use client";

import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import { usePrefersReducedMotion } from "@/hooks/useMedia";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type PageLoaderProps = {
  label: string;
  loadingLabel: string;
};

export function PageLoader({ label, loadingLabel }: PageLoaderProps) {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);
  const percent = useTransform(progress, (v) => `${Math.round(v)}`);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setDone(true);
      setHidden(true);
      return;
    }

    const controls = animate(progress, 100, {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        setDone(true);
        window.setTimeout(() => setHidden(true), 450);
      },
    });

    return () => controls.stop();
  }, [progress, reduced]);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303]"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.45 }}
      aria-hidden={done}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-magenta/25 blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-violet/25 blur-[90px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 flex w-[min(90vw,22rem)] flex-col items-center gap-8 px-6">
        <div className="text-center">
          <p className="font-display text-5xl font-bold tracking-[0.2em] text-white">DZ</p>
          <p className="mt-3 font-display text-xs tracking-[0.42em] text-white/70">
            {label}
          </p>
        </div>

        <AudioVisualizer bars={24} className="h-10 w-full max-w-xs" active />

        <div className="w-full">
          <div className="mb-2 flex items-center justify-between font-display text-[10px] tracking-[0.28em] text-white/55">
            <span>{loadingLabel}</span>
            <motion.span>{percent}</motion.span>
          </div>
          <div className="h-[2px] w-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-magenta to-violet"
              style={{ width }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
