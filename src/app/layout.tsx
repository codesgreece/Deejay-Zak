import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Exo_2({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deejayzak.example"),
  title: {
    default: "Deejay Zak | Professional DJ in Crete & Greece",
    template: "%s | Deejay Zak",
  },
  description:
    "Deejay Zak — 20 years of professional experience. DJ for weddings, baptisms, clubs, hotels and VIP parties across Crete and Greece.",
  applicationName: "Deejay Zak",
  authors: [{ name: "Deejay Zak" }],
  creator: "Deejay Zak",
  keywords: [
    "Deejay Zak",
    "DJ Crete",
    "DJ Κρήτη",
    "DJ Ελλάδα",
    "Wedding DJ Crete",
    "DJ γάμου",
    "DJ βάπτιση",
    "DJ events",
    "DJ parties",
    "DJ hotels",
    "VIP parties",
  ],
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: ["en_US"],
    siteName: "Deejay Zak",
    title: "Deejay Zak | Professional DJ in Crete & Greece",
    description:
      "20 years of professional experience in music, based in Crete and performing across Greece.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deejay Zak | Professional DJ in Crete & Greece",
    description:
      "20 years of professional experience in music, based in Crete and performing across Greece.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="el"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ink text-snow font-sans">{children}</body>
    </html>
  );
}
