import { defaultLocale, isLocale, type Locale } from "@/data/translations";

export function getLocaleFromParam(param: string | undefined): Locale {
  if (param && isLocale(param)) return param;
  return defaultLocale;
}

export function localizedPath(locale: Locale, hash?: string): string {
  const base = `/${locale}`;
  return hash ? `${base}${hash.startsWith("#") ? hash : `#${hash}`}` : base;
}

export const navItems = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "music", href: "#music" },
  { id: "events", href: "#events" },
  { id: "gallery", href: "#gallery" },
  { id: "services", href: "#services" },
  { id: "contact", href: "#contact" },
] as const;
