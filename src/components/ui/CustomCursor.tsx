"use client";

import { useIsTouchDevice } from "@/hooks/useMedia";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.2 });

  useEffect(() => {
    if (isTouch) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = (event.target as HTMLElement | null)?.closest(
        "[data-cursor]",
      ) as HTMLElement | null;
      if (target) {
        setLabel(target.dataset.cursor || "");
        setActive(true);
      } else {
        setLabel("");
        setActive(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [isTouch, x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <div
        className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          active ? "h-16 w-16" : "h-3 w-3"
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full border transition-all duration-300 ${
            active
              ? "border-magenta/80 bg-magenta/15 shadow-[0_0_24px_rgba(236,72,153,0.45)]"
              : "border-magenta bg-magenta shadow-[0_0_14px_rgba(236,72,153,0.65)]"
          }`}
        />
        {label ? (
          <span className="absolute inset-0 flex items-center justify-center font-display text-[10px] font-bold tracking-[0.2em] text-white">
            {label}
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}
