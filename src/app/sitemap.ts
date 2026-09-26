import type { MetadataRoute } from "next";
import { locales } from "@/data/translations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://deejayzak.example";
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    alternates: {
      languages: {
        el: `${base}/el`,
        en: `${base}/en`,
      },
    },
  }));
}
