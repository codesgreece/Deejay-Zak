"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Dictionary } from "@/data/translations";
import { useScrolled } from "@/hooks/useMedia";
import { AnimatePresence, motion } from "framer-motion";

type StickyBookingBarProps = {
  dictionary: Dictionary;
};

export function StickyBookingBar({ dictionary }: StickyBookingBarProps) {
  const scrolled = useScrolled(520);

  return (
    <AnimatePresence>
      {scrolled ? (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#030303]/92 p-3 backdrop-blur-xl md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
        >
          <MagneticButton
            href="#booking"
            className="w-full"
            cursorLabel={dictionary.cursor.book}
          >
            {dictionary.booking.stickyCta}
          </MagneticButton>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
