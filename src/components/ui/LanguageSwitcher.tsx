"use client";

import type { Dictionary, Locale } from "@/data/translations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  locale: Locale;
  dictionary: Dictionary;
  className?: string;
};

export function LanguageSwitcher({
  locale,
  dictionary,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  const swapLocale = (next: Locale) => {
    const parts = pathname.split("/");
    if (parts[1] === "el" || parts[1] === "en") {
      parts[1] = next;
      return parts.join("/") || `/${next}`;
    }
    return `/${next}`;
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.03] p-1",
        className,
      )}
      role="group"
      aria-label={dictionary.a11y.languageSwitch}
    >
      {(["el", "en"] as Locale[]).map((code) => {
        const active = locale === code;
        return (
          <Link
            key={code}
            href={swapLocale(code)}
            hrefLang={code}
            className={cn(
              "rounded-full px-3 py-1.5 font-display text-[11px] font-semibold tracking-[0.18em] transition-colors",
              active
                ? "bg-gradient-to-r from-magenta to-violet text-white"
                : "text-white/55 hover:text-white",
            )}
            aria-current={active ? "true" : undefined}
          >
            {code === "el" ? "GR" : "EN"}
          </Link>
        );
      })}
    </div>
  );
}
