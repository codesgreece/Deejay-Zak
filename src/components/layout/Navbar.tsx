"use client";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";
import type { Dictionary, Locale } from "@/data/translations";
import { useScrolled } from "@/hooks/useMedia";
import { navItems } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Navbar({ locale, dictionary }: NavbarProps) {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const labels: Record<(typeof navItems)[number]["id"], string> = {
    home: dictionary.nav.home,
    about: dictionary.nav.about,
    music: dictionary.nav.music,
    events: dictionary.nav.events,
    gallery: dictionary.nav.gallery,
    services: dictionary.nav.services,
    contact: dictionary.nav.contact,
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-[#030303]/85 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="section-shell flex h-[var(--header-h)] items-center justify-between gap-4">
          <a
            href="#home"
            className="group flex items-center gap-3"
            data-cursor="OPEN"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-magenta/40 bg-magenta/10 font-display text-xs font-bold tracking-widest text-white">
              DZ
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-[0.22em] text-white sm:block">
              DEEJAY ZAK
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group relative py-2 font-display text-[11px] uppercase tracking-[0.22em] text-white/65 transition-colors hover:text-white"
                data-cursor="OPEN"
              >
                {labels[item.id]}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-magenta to-violet transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher
              locale={locale}
              dictionary={dictionary}
              className="hidden sm:inline-flex"
            />
            <MagneticButton
              href="#booking"
              className="hidden min-h-10 px-5 text-[11px] md:inline-flex"
              cursorLabel={dictionary.cursor.book}
            >
              {dictionary.nav.bookNow}
            </MagneticButton>

            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">
                {open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
              </span>
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={cn(
                    "h-px w-full bg-white transition-transform duration-300",
                    open && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-white transition-opacity duration-300",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-white transition-transform duration-300",
                    open && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-[#030303]/96 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-24">
              <AudioVisualizer bars={20} className="mb-10 h-8 w-40" />
              <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.45 }}
                    className="border-b border-white/10 py-4 font-display text-3xl font-semibold tracking-tight text-white"
                  >
                    {labels[item.id]}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <LanguageSwitcher locale={locale} dictionary={dictionary} />
                <MagneticButton
                  href="#booking"
                  className="w-full"
                  cursorLabel={dictionary.cursor.book}
                  onClick={() => setOpen(false)}
                >
                  {dictionary.nav.bookNow}
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
