import { HomePage } from "@/components/HomePage";
import { artist } from "@/data/artist";
import {
  getDictionary,
  isLocale,
  type Locale,
} from "@/data/translations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "el" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const canonical = `https://deejayzak.example/${locale}`;

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical,
      languages: {
        el: "https://deejayzak.example/el",
        en: "https://deejayzak.example/en",
        "x-default": "https://deejayzak.example/el",
      },
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      locale: locale === "el" ? "el_GR" : "en_US",
      url: canonical,
    },
    twitter: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
  };
}

export default async function LocalePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    jobTitle: "DJ",
    email: artist.email,
    telephone: artist.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Crete",
      addressCountry: "GR",
    },
    description: dictionary.meta.description,
    knowsAbout: [
      "DJ",
      "Weddings",
      "Events",
      "Music Technology",
      "Sound Engineering",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main" className="skip-link">
        {dictionary.a11y.skipToContent}
      </a>
      <HomePage locale={locale} dictionary={dictionary} />
    </>
  );
}
