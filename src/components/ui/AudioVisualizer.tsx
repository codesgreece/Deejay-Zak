"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type AudioVisualizerProps = {
  bars?: number;
  className?: string;
  interactive?: boolean;
  active?: boolean;
  label?: string;
};

export function AudioVisualizer({
  bars = 28,
  className,
  interactive = true,
  active = false,
  label = "Decorative audio visualizer",
}: AudioVisualizerProps) {
  const [hovered, setHovered] = useState(false);
  const [boost, setBoost] = useState(0);
  const heights = useMemo(
    () =>
      Array.from({ length: bars }, (_, i) => {
        const wave = Math.sin(i * 0.45) * 0.35 + 0.55;
        const mid = 1 - Math.abs(i - bars / 2) / (bars / 2);
        return Math.max(0.18, wave * 0.55 + mid * 0.45);
      }),
    [bars],
  );

  useEffect(() => {
    if (!interactive) return;
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      setBoost(Math.sin(frame / 18) * 0.15 + (hovered || active ? 0.35 : 0.08));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, hovered, interactive]);

  return (
    <div
      role="img"
      aria-label={label}
      className={cn("flex h-12 items-end gap-[3px]", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="PLAY"
    >
      {heights.map((height, index) => (
        <motion.span
          key={index}
          className="w-[3px] origin-bottom rounded-full bg-gradient-to-t from-violet via-magenta to-white/90"
          style={{ height: `${(height + boost * (0.4 + (index % 5) * 0.08)) * 100}%` }}
          animate={{
            scaleY: hovered || active ? [0.55, 1, 0.7, 1] : [0.35, 0.75, 0.45, 0.7],
          }}
          transition={{
            duration: hovered || active ? 0.55 : 1.4,
            repeat: Infinity,
            delay: index * 0.03,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
