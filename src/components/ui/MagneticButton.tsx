"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  cursorLabel?: string;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-gradient-to-r from-magenta to-violet text-white shadow-[0_0_28px_rgba(236,72,153,0.28)] border border-transparent",
  secondary:
    "border border-white/20 bg-white/[0.03] text-white hover:border-magenta/50 hover:bg-white/[0.06]",
  ghost: "border border-transparent bg-transparent text-white/80 hover:text-white",
};

export function MagneticButton({
  children,
  variant = "primary",
  cursorLabel = "OPEN",
  className,
  href,
  type = "button",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const { ref, x, y } = useMagnetic(0.22);
  const classes = cn(
    "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold tracking-[0.14em] uppercase transition-[box-shadow,transform,background] duration-300",
    "active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(253,244,255,0.22),transparent_45%)]" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        style={{ x, y }}
        className={classes}
        data-cursor={cursorLabel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      style={{ x, y }}
      className={classes}
      data-cursor={cursorLabel}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
