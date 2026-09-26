import { DocumentLang } from "@/components/layout/DocumentLang";
import { isLocale, type Locale } from "@/data/translations";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div lang={locale} className="min-h-full">
      <DocumentLang locale={locale as Locale} />
      {children}
    </div>
  );
}
